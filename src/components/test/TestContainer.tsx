"use client";

import { useEffect } from "react";
import { useTestStore } from "@/store/useTestStore";
import MBTIStep from "./steps/MBTIStep";
import QuestionStep from "./steps/QuestionStep";
import ShuffleStep from "./steps/ShuffleStep";
import CardSelectStep from "./steps/CardSelectStep";
import LoadingStep from "./steps/LoadingStep";

const TestContainer = () => {
  const { currentStep, resetTest } = useTestStore();
  const stepTitles = [
    "냥냥🐾 성향 테스트",
    "뭐가 궁금하냥? 😺",
    "냥발 셔플 들어간다~! 🐾",
    "한 장 골라보라옹! 🎴",
    "집중 분석 중... 쉿! 🔮",
  ];

  // 컴포넌트 마운트 시 테스트 상태 초기화
  useEffect(() => {
    resetTest();
  }, [resetTest]);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[400px] bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 relative font-omyu">
        {/* 진행 상태 표시 */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-100 px-4 py-1 rounded-full text-sm font-medium text-pink-600">
          {currentStep}/5 단계! {stepTitles[currentStep - 1]}
        </div>

        {/* 단계별 컴포넌트 */}
        {currentStep === 1 && <MBTIStep />}
        {currentStep === 2 && <QuestionStep />}
        {currentStep === 3 && <ShuffleStep />}
        {currentStep === 4 && <CardSelectStep />}
        {currentStep === 5 && <LoadingStep />}
      </div>
    </section>
  );
};

export default TestContainer;
