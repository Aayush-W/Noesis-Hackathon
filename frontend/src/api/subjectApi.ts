import type { Subject } from "../types/subject";
import apiClient from "./axios";

export const subjectApi = {
  async getSubjects(): Promise<Subject[]> {
    const response = await apiClient.get<Subject[]>("/subjects");
    return response.data;
  },

  async createSubject(name: string): Promise<Subject> {
    const response = await apiClient.post<Subject>("/subjects", { name });
    return response.data;
  },
};
