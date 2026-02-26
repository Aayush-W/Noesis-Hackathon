import { useSyncExternalStore } from "react";
import type { AnswerPayload } from "../types/document";

export interface QAInsight {
  subjectId: string;
  question: string;
  payload: AnswerPayload;
  createdAt: number;
}

interface QAState {
  latestBySubject: Record<string, QAInsight>;
}

let state: QAState = {
  latestBySubject: {}
};

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

export const qaStore = {
  getState: () => state,
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  setLatestInsight(subjectId: string, question: string, payload: AnswerPayload) {
    state = {
      latestBySubject: {
        ...state.latestBySubject,
        [subjectId]: {
          subjectId,
          question,
          payload,
          createdAt: Date.now()
        }
      }
    };
    notify();
  }
};

export const useQAStore = () => useSyncExternalStore(qaStore.subscribe, qaStore.getState, qaStore.getState);
