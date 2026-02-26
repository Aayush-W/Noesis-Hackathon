import type { AnswerPayload } from "../types/document";
import type { Subject } from "../types/subject";
import apiClient from "./axios";

export interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

interface BackendSubject {
  id: string;
  name: string;
}

const ensureBackendSubject = async (subject: Subject) => {
  try {
    const response = await apiClient.get<BackendSubject[]>("/subjects");
    const subjects = response.data;
    const match =
      subjects.find((item) => item.id === subject.id) ??
      subjects.find((item) => item.name.trim().toLowerCase() === subject.name.trim().toLowerCase());

    if (match) {
      return match.id;
    }

    const created = await apiClient.post<BackendSubject>("/subjects", { name: subject.name });
    return created.data.id;
  } catch (error) {
    console.warn("Could not ensure subject exists in backend. Proceeding with raw ID.", error);
    return subject.id;
  }
};

const strictNotFound = (subjectName: string): AnswerPayload => ({
  answer: `Not found in your notes for ${subjectName}`,
  confidenceTier: "NOT_FOUND",
  confidenceScore: 0,
  citations: [],
  evidenceSnippets: []
});

const normalizeResponse = (payload: Partial<AnswerPayload>, subjectName: string): AnswerPayload => {
  const answer = payload.answer?.trim() ?? "";
  const confidenceTier = payload.confidenceTier ?? "NOT_FOUND";
  const confidenceScore = Number(payload.confidenceScore ?? 0);
  const citations = payload.citations ?? [];
  const evidenceSnippets = payload.evidenceSnippets ?? [];

  if (
    confidenceTier === "NOT_FOUND" ||
    answer.toLowerCase().startsWith("not found in your notes") ||
    citations.length === 0
  ) {
    return {
      ...strictNotFound(subjectName),
      evidenceSnippets
    };
  }

  return {
    answer,
    confidenceTier,
    confidenceScore,
    citations,
    evidenceSnippets,
    topChunkIds: payload.topChunkIds ?? []
  };
};

export const qaApi = {
  async askQuestion(question: string, subject: Subject, history: ChatTurn[] = []): Promise<AnswerPayload> {
    try {
      const subjectId = await ensureBackendSubject(subject);
      const response = await apiClient.post<AnswerPayload>("/qa", {
        query: question,
        subjectId,
        history
      });
      return normalizeResponse(response.data, subject.name);
    } catch (error) {
      console.error("QA API Error", error);
      throw error;
    }
  }
};
