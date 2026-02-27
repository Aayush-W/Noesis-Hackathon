import axios from "axios";

const TOKEN_KEY = "amn_token";
const USER_KEY = "amn_user";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/v1",
  timeout: 60000
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  const userRaw = localStorage.getItem(USER_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (userRaw) {
    try {
      const parsed = JSON.parse(userRaw) as { id?: string };
      if (parsed?.id) {
        config.headers["x-user-id"] = parsed.id;
      }
    } catch {
      // Ignore malformed local storage user payload.
    }
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default apiClient;
