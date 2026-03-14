import { collection, getDocs, setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import type { Subject } from "../types/subject";
import { db, auth } from "../firebase";

export const subjectApi = {
  async getSubjects(): Promise<Subject[]> {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");

    // As per the Firebase structure: users/{userId}/subjects
    const subjectsRef = collection(db, "users", user.uid, "subjects");
    const snapshot = await getDocs(subjectsRef);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name
    })) as Subject[];
  },

  async createSubject(name: string): Promise<Subject> {
    const user = auth.currentUser;
    if (!user) throw new Error("Not authenticated");

    // Instead of auto-generating ID, we format name cleanly or rely on backend ensure. 
    // Wait, the UI wants to create a new subject interactively.
    const id = name.trim().toLowerCase().replace(/[^a-z0-9]/g, "-");
    const subjRef = doc(db, "users", user.uid, "subjects", id);

    const snap = await getDoc(subjRef);
    if (!snap.exists()) {
      await setDoc(subjRef, {
        id,
        name,
        userId: user.uid,
        createdAt: serverTimestamp()
      });
    }

    return { id, name };
  },
};
