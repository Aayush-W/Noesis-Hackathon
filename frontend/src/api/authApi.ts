import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: { id: string; name: string; email: string };
}

export const authApi = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
    const token = await userCredential.user.getIdToken();
    return {
      token,
      user: {
        id: userCredential.user.uid,
        name: userCredential.user.displayName || "User",
        email: userCredential.user.email || payload.email,
      }
    };
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
    await updateProfile(userCredential.user, { displayName: payload.name });
    const token = await userCredential.user.getIdToken();
    return {
      token,
      user: {
        id: userCredential.user.uid,
        name: payload.name,
        email: payload.email,
      }
    };
  },
};
