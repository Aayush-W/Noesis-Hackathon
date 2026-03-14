import apiClient from "./axios";
import { auth } from "../firebase";
import type { Subject } from "../types/subject";

export interface MissionQuestion {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  sourceRef: string;
}

interface BuildMissionInput {
  files: File[];
  notesText: string;
  subject: Subject;
  questionCount?: number;
}

interface BuildMissionResult {
  questions: MissionQuestion[];
  warning?: string;
}

interface BackendQuizResponse {
  mcqs?: Array<{
    question: string;
    options: string[];
    correctOptionIndex: number;
    explanation?: string;
    sourceChunkId?: string;
  }>;
  saqs?: Array<{
    question: string;
    modelAnswer: string;
    sourceChunkId?: string;
  }>;
}

const STOP_WORDS = new Set([
  "about", "after", "again", "against", "almost", "among", "because", "before", "being", "between",
  "could", "every", "first", "found", "from", "have", "into", "light", "might", "notes", "other",
  "should", "their", "there", "these", "those", "through", "under", "using", "where", "which",
  "while", "would"
]);

const shuffle = <T,>(items: T[]): T[] => {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
};

const normalizeText = (text: string) => text.replace(/[^\x09\x0A\x0D\x20-\x7E]/g, " ").replace(/\s+/g, " ").trim();
const buildCandidateWords = (text: string) => Array.from(new Set(text.toLowerCase().match(/[a-z][a-z0-9-]{3,}/g)?.filter((word) => !STOP_WORDS.has(word)) ?? []));

const pickAnswerToken = (sentence: string) => {
  const tokens = sentence.toLowerCase().match(/[a-z][a-z0-9-]{3,}/g)?.filter((token) => !STOP_WORDS.has(token));
  if (!tokens?.length) return "";
  return [...tokens].sort((a, b) => b.length - a.length)[0];
};

const buildLocalQuestions = (notesText: string, requestedCount: number): MissionQuestion[] => {
  const clean = normalizeText(notesText);
  if (clean.length < 120) return [];
  const sentences = clean.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.length >= 45);
  const keywords = buildCandidateWords(clean);
  const usable = sentences.slice(0, 40);
  const questions: MissionQuestion[] = [];
  usable.forEach((sentence, index) => {
    if (questions.length >= requestedCount) return;
    const answerToken = pickAnswerToken(sentence);
    if (!answerToken) return;
    const blanked = sentence.replace(new RegExp(`\\b${answerToken}\\b`, "i"), "____");
    if (blanked === sentence) return;
    const distractors = shuffle(keywords.filter((word) => word !== answerToken && !sentence.toLowerCase().includes(word))).slice(0, 3);
    if (distractors.length < 3) return;
    const options = shuffle([answerToken, ...distractors]).map((o) => o.charAt(0).toUpperCase() + o.slice(1));
    const answerIndex = options.findIndex((o) => o.toLowerCase() === answerToken);
    if (answerIndex === -1) return;
    questions.push({
      id: `local-${index}-${answerToken}`,
      prompt: `Fill the missing term from your notes: ${blanked}`,
      options,
      answerIndex,
      explanation: sentence,
      sourceRef: `Uploaded notes segment ${index + 1}`
    });
  });
  return questions;
};

const toMissionQuestionsFromBackend = (payload: BackendQuizResponse, requestedCount: number): MissionQuestion[] => {
  const mcqs = payload.mcqs ?? [];
  const fromMcq: MissionQuestion[] = mcqs.filter((item) => Array.isArray(item.options) && item.options.length >= 2).map((item, index) => {
    const options = item.options.slice(0, 4);
    const answerIndex = Math.min(Math.max(item.correctOptionIndex ?? 0, 0), options.length - 1);
    return {
      id: `mcq-${index}`,
      prompt: item.question,
      options,
      answerIndex,
      explanation: item.explanation ?? "Answer grounded in uploaded note chunks.",
      sourceRef: item.sourceChunkId ?? `Chunk ${index + 1}`
    };
  });
  if (fromMcq.length >= requestedCount) return fromMcq.slice(0, requestedCount);

  const answerPool = shuffle((payload.saqs ?? []).map((item) => item.modelAnswer?.trim()).filter((item): item is string => Boolean(item && item.length > 2)));
  const saqFallback = (payload.saqs ?? []).map((item, index): MissionQuestion | null => {
    const answer = item.modelAnswer?.trim();
    if (!answer) return null;
    const distractors = answerPool.filter((choice) => choice !== answer).slice(0, 3);
    if (distractors.length < 3) return null;
    const options = shuffle([answer, ...distractors]);
    return {
      id: `saq-${index}`,
      prompt: item.question,
      options,
      answerIndex: options.indexOf(answer),
      explanation: `Expected answer from source chunk ${item.sourceChunkId ?? index + 1}.`,
      sourceRef: item.sourceChunkId ?? `Chunk ${index + 1}`
    };
  }).filter((item): item is MissionQuestion => item !== null);
  return [...fromMcq, ...saqFallback].slice(0, requestedCount);
};

const collectReadableText = async (files: File[]) => {
  const chunks: string[] = [];
  await Promise.all(files.map(async (file) => {
    try {
      const raw = await file.text();
      const normalized = normalizeText(raw);
      const alphaCount = (normalized.match(/[A-Za-z]/g) ?? []).length;
      if (normalized.length > 100 && alphaCount > normalized.length * 0.2) { chunks.push(`${file.name}: ${normalized}`); }
    } catch { }
  }));
  return chunks.join(" ");
};

export const missionApi = {
  async buildMission({ files, notesText, subject, questionCount = 8 }: BuildMissionInput): Promise<BuildMissionResult> {
    const readableUploadText = await collectReadableText(files);
    const mergedText = normalizeText(`${notesText}\n${readableUploadText}`.trim());
    const localQuestions = buildLocalQuestions(mergedText, questionCount);

    if (import.meta.env.VITE_USE_REAL_API === "true") {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("Not authenticated");
        const token = await user.getIdToken();

        const payloadFiles = [...files];
        if (notesText.trim().length > 20) { payloadFiles.push(new File([notesText], "pasted-notes.txt", { type: "text/plain" })); }
        if (!payloadFiles.length) { throw new Error("Add notes via upload or paste before launching the mission."); }

        // Send direct to FastAPI
        await Promise.all(payloadFiles.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("subjectId", subject.id);
          await apiClient.post("/upload/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`
            }
          });
        }));

        const res = await apiClient.post<BackendQuizResponse>(`/study/generate/${subject.id}`, {}, {
          headers: { "Authorization": `Bearer ${token}` }
        });

        const backendQuestions = toMissionQuestionsFromBackend(res.data, questionCount);
        if (backendQuestions.length) return { questions: backendQuestions };
      } catch (error) {
        if (localQuestions.length) {
          const warning = error instanceof Error ? error.message : "Backend mission generation failed.";
          return { questions: localQuestions, warning: `Backend fallback used local note parser: ${warning}` };
        }
        throw error;
      }
    }
    if (!localQuestions.length) throw new Error("Could not derive quiz questions from the current upload. Add more readable notes or enable backend mode.");
    return { questions: localQuestions };
  }
};
