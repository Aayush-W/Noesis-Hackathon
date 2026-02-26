import apiClient from "./axios";

export interface MCQ {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  sourceChunkId: string;
}

export interface SAQ {
  question: string;
  modelAnswer: string;
  sourceChunkId: string;
}

export interface StudyTestResponse {
  mcqs: MCQ[];
  saqs: SAQ[];
}

export const studyApi = {
  async generatePracticeTest(subjectId?: string): Promise<StudyTestResponse> {
    if (!subjectId) {
      throw new Error("A selected subject is required for subject-scoped study mode.");
    }
    const response = await apiClient.post<StudyTestResponse>(`/study/generate/${subjectId}`);
    return response.data;
  }
};
