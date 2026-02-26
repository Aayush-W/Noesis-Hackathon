import apiClient from "./axios";

export const uploadApi = {
  async uploadNotes(file: File, subjectId: string): Promise<{ message: string, documentId: string, chunkCount: number }> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("subjectId", subjectId);

    const response = await apiClient.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }
};
