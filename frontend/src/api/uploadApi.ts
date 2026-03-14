import apiClient from "./axios";
import { auth } from "../firebase";

export const uploadApi = {
  async uploadNotes(file: File, subjectId: string): Promise<{ message: string, documentId: string, chunkCount: number }> {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");
    const token = await user.getIdToken();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("subjectId", subjectId);

    const res = await apiClient.post("/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
    });
    return res.data as { message: string, documentId: string, chunkCount: number };
  },

  async uploadFromUrl(url: string, subjectId: string): Promise<{ message: string; documentId: string; chunkCount: number; sourceUrl: string; title: string }> {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");
    const token = await user.getIdToken();

    const formData = new FormData();
    formData.append("url", url);
    formData.append("subjectId", subjectId);

    const res = await apiClient.post("/upload/url", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${token}`
      }
    });
    return res.data as any;
  },
};
