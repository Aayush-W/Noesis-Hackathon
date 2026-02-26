import { qaStore, useQAStore } from "../store/qaStore";

export const useQA = () => {
  const state = useQAStore();

  return {
    latestBySubject: state.latestBySubject,
    setLatestInsight: qaStore.setLatestInsight
  };
};
