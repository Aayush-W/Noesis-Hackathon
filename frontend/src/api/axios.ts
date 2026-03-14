import axios from "axios";
import { auth } from "../firebase";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/v1",
  timeout: 120000,
});

// Always attach a fresh Firebase token before every request
apiClient.interceptors.request.use(async (config) => {
  try {
    const user = auth.currentUser;
    if (user) {
      // forceRefresh=false returns a cached (valid) token or refreshes if expired
      const token = await user.getIdToken(false);
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["x-user-id"] = user.uid;
    }
  } catch (err) {
    console.warn("Failed to attach Firebase token:", err);
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default apiClient;
