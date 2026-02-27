import apiClient from "./axios";

export const uploadApi = {
  async uploadNotes(file: File, subjectId: string): Promise<{ message: string, documentId: string, chunkCount: number }> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("subjectId", subjectId);

    // Trailing slash is critical: without it FastAPI 307-redirects and axios drops the body
    const response = await apiClient.post("/upload/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });

    return response.data;
  },

  async uploadFromUrl(url: string, subjectId: string): Promise<{ message: string; documentId: string; chunkCount: number; sourceUrl: string; title: string }> {
    const formData = new FormData();
    formData.append("subjectId", subjectId);
    formData.append("url", url);

    const response = await apiClient.post("/upload/url", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  },
};
