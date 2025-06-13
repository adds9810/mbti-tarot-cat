import { create } from "zustand";
import { persist } from "zustand/middleware";

export type MBTIAnswer = {
  questionId: number;
  answer: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
};

export type TestState = {
  // MBTI 검사 관련
  mbtiAnswers: MBTIAnswer[];
  mbtiResult: string | null;

  // 타로 관련
  question: string;
  selectedCard: number | null;
  output: string;

  // UI 상태
  currentStep: number;
  isQuestionCustom: boolean;

  // 액션
  setMbtiAnswer: (answer: MBTIAnswer) => void;
  setMbtiResult: (result: string) => void;
  setQuestion: (question: string) => void;
  setSelectedCard: (cardId: number) => void;
  setCurrentStep: (step: number) => void;
  setIsQuestionCustom: (isCustom: boolean) => void;
  resetTest: () => void;
};

const initialState = {
  mbtiAnswers: [],
  mbtiResult: null,
  question: "",
  selectedCard: null,
  currentStep: 1,
  isQuestionCustom: false,
  output: "",
};

export const useTestStore = create<TestState>()(
  persist(
    (set) => ({
      ...initialState,

      setMbtiAnswer: (answer) =>
        set((state) => ({
          mbtiAnswers: [
            ...state.mbtiAnswers.filter(
              (a) => a.questionId !== answer.questionId
            ),
            answer,
          ],
        })),

      setMbtiResult: (result) => set({ mbtiResult: result }),

      setQuestion: (question) => set({ question }),

      setSelectedCard: (cardId) => set({ selectedCard: cardId }),

      setCurrentStep: (step) => set({ currentStep: step }),

      setIsQuestionCustom: (isCustom) => set({ isQuestionCustom: isCustom }),

      resetTest: () => set(initialState),
    }),
    {
      name: "tarot-test-storage",
    }
  )
);
