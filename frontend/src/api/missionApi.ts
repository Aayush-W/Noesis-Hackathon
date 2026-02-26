import apiClient from "./axios";
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

interface BackendSubject {
  id: string;
  name: string;
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
  "about",
  "after",
  "again",
  "against",
  "almost",
  "among",
  "because",
  "before",
  "being",
  "between",
  "could",
  "every",
  "first",
  "found",
  "from",
  "have",
  "into",
  "light",
  "might",
  "notes",
  "other",
  "should",
  "their",
  "there",
  "these",
  "those",
  "through",
  "under",
  "using",
  "where",
  "which",
  "while",
  "would"
]);

const shuffle = <T,>(items: T[]): T[] => {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
};

const normalizeText = (text: string) =>
  text
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const buildCandidateWords = (text: string) =>
  Array.from(
    new Set(
      text
        .toLowerCase()
        .match(/[a-z][a-z0-9-]{3,}/g)
        ?.filter((word) => !STOP_WORDS.has(word)) ?? []
    )
  );

const pickAnswerToken = (sentence: string) => {
  const tokens = sentence
    .toLowerCase()
    .match(/[a-z][a-z0-9-]{3,}/g)
    ?.filter((token) => !STOP_WORDS.has(token));

  if (!tokens?.length) {
    return "";
  }

  return [...tokens].sort((a, b) => b.length - a.length)[0];
};

const buildLocalQuestions = (notesText: string, requestedCount: number): MissionQuestion[] => {
  const clean = normalizeText(notesText);
  if (clean.length < 120) {
    return [];
  }

  const sentences = clean
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 45);

  const keywords = buildCandidateWords(clean);
  const usable = sentences.slice(0, 40);
  const questions: MissionQuestion[] = [];

  usable.forEach((sentence, index) => {
    if (questions.length >= requestedCount) {
      return;
    }

    const answerToken = pickAnswerToken(sentence);
    if (!answerToken) {
      return;
    }

    const blanked = sentence.replace(new RegExp(`\\b${answerToken}\\b`, "i"), "____");
    if (blanked === sentence) {
      return;
    }

    const distractors = shuffle(
      keywords.filter((word) => word !== answerToken && !sentence.toLowerCase().includes(word))
    ).slice(0, 3);

    if (distractors.length < 3) {
      return;
    }

    const options = shuffle([answerToken, ...distractors]).map((option) =>
      option.charAt(0).toUpperCase() + option.slice(1)
    );

    const answerIndex = options.findIndex((option) => option.toLowerCase() === answerToken);
    if (answerIndex === -1) {
      return;
    }

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

const requestCandidates = (path: string) =>
  path.startsWith("/api/v1") ? [path] : [path, `/api/v1${path}`];

const tryGet = async <T,>(path: string): Promise<T> => {
  let lastError: unknown;
  for (const candidate of requestCandidates(path)) {
    try {
      const response = await apiClient.get<T>(candidate);
      return response.data;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
};

const tryPost = async <T,>(path: string, data?: unknown, headers?: Record<string, string>): Promise<T> => {
  let lastError: unknown;
  for (const candidate of requestCandidates(path)) {
    try {
      const response = await apiClient.post<T>(candidate, data, headers ? { headers } : undefined);
      return response.data;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
};

const ensureBackendSubject = async (subject: Subject) => {
  const subjects = await tryGet<BackendSubject[]>("/subjects");
  const existing =
    subjects.find((item) => item.id === subject.id) ??
    subjects.find((item) => item.name.trim().toLowerCase() === subject.name.trim().toLowerCase());

  if (existing) {
    return existing.id;
  }

  const created = await tryPost<BackendSubject>("/subjects", { name: subject.name });
  return created.id;
};

const toMissionQuestionsFromBackend = (payload: BackendQuizResponse, requestedCount: number): MissionQuestion[] => {
  const mcqs = payload.mcqs ?? [];
  const fromMcq: MissionQuestion[] = mcqs
    .filter((item) => Array.isArray(item.options) && item.options.length >= 2)
    .map((item, index) => {
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

  if (fromMcq.length >= requestedCount) {
    return fromMcq.slice(0, requestedCount);
  }

  const answerPool = shuffle(
    (payload.saqs ?? [])
      .map((item) => item.modelAnswer?.trim())
      .filter((item): item is string => Boolean(item && item.length > 2))
  );

  const saqFallback = (payload.saqs ?? [])
    .map((item, index): MissionQuestion | null => {
      const answer = item.modelAnswer?.trim();
      if (!answer) {
        return null;
      }

      const distractors = answerPool.filter((choice) => choice !== answer).slice(0, 3);
      if (distractors.length < 3) {
        return null;
      }

      const options = shuffle([answer, ...distractors]);
      return {
        id: `saq-${index}`,
        prompt: item.question,
        options,
        answerIndex: options.indexOf(answer),
        explanation: `Expected answer from source chunk ${item.sourceChunkId ?? index + 1}.`,
        sourceRef: item.sourceChunkId ?? `Chunk ${index + 1}`
      };
    })
    .filter((item): item is MissionQuestion => item !== null);

  return [...fromMcq, ...saqFallback].slice(0, requestedCount);
};

const collectReadableText = async (files: File[]) => {
  const chunks: string[] = [];

  await Promise.all(
    files.map(async (file) => {
      try {
        const raw = await file.text();
        const normalized = normalizeText(raw);
        const alphaCount = (normalized.match(/[A-Za-z]/g) ?? []).length;
        if (normalized.length > 100 && alphaCount > normalized.length * 0.2) {
          chunks.push(`${file.name}: ${normalized}`);
        }
      } catch {
        // Ignore unreadable binary files in local fallback mode.
      }
    })
  );

  return chunks.join(" ");
};

export const missionApi = {
  async buildMission({ files, notesText, subject, questionCount = 8 }: BuildMissionInput): Promise<BuildMissionResult> {
    const readableUploadText = await collectReadableText(files);
    const mergedText = normalizeText(`${notesText}\n${readableUploadText}`.trim());
    const localQuestions = buildLocalQuestions(mergedText, questionCount);

    if (import.meta.env.VITE_USE_REAL_API === "true") {
      try {
        const backendSubjectId = await ensureBackendSubject(subject);
        const payloadFiles = [...files];
        if (notesText.trim().length > 20) {
          payloadFiles.push(new File([notesText], "pasted-notes.txt", { type: "text/plain" }));
        }

        if (!payloadFiles.length) {
          throw new Error("Add notes via upload or paste before launching the mission.");
        }

        await Promise.all(
          payloadFiles.map(async (file) => {
            const form = new FormData();
            form.append("subjectId", backendSubjectId);
            form.append("file", file);
            await tryPost("/upload", form, { "Content-Type": "multipart/form-data" });
          })
        );

        const generated = await tryPost<BackendQuizResponse>(`/study/generate/${backendSubjectId}`);
        const backendQuestions = toMissionQuestionsFromBackend(generated, questionCount);

        if (backendQuestions.length) {
          return { questions: backendQuestions };
        }
      } catch (error) {
        if (localQuestions.length) {
          const warning = error instanceof Error ? error.message : "Backend mission generation failed.";
          return {
            questions: localQuestions,
            warning: `Backend fallback used local note parser: ${warning}`
          };
        }
        throw error;
      }
    }

    if (!localQuestions.length) {
      throw new Error(
        "Could not derive quiz questions from the current upload. Add more readable notes or enable backend mode."
      );
    }

    return { questions: localQuestions };
  }
};
