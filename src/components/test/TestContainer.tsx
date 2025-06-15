"use client";

import { useEffect } from "react";
import { useTestStore } from "@/store/useTestStore";
import MBTIStep from "./steps/MBTIStep";
import QuestionStep from "./steps/QuestionStep";
import ShuffleStep from "./steps/ShuffleStep";
import CardSelectStep from "./steps/CardSelectStep";
import LoadingStep from "./steps/LoadingStep";

export default function TestContainer() {
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
      {/*  고양이 캐릭터 */}
      {/* <div className=" w-32 h-32 bg-pink-100 rounded-full animate-bounce mb-6"> */}
      {/* 여기에 고양이 일러스트가 들어갈 예정입니다 
        <div className="w-full h-full flex items-center justify-center text-4xl">
          😺
        </div>
      </div>*/}
      {/* 고양이 캐릭터 */}
      <div className="relative w-32 h-32 mx-auto mb-10">
        <div className="inset-0 bg-pink-100 rounded-full animate-pulse w-full h-full flex items-center justify-center">
          <div className="text-4xl">😺</div>
        </div>
        {/* 말풍선 */}
        <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-lg animate-bounce">
          <span className="text-sm font-medium text-gray-700">
            너의 말을 듣고 있다냥 ✨
          </span>
        </div>
      </div>

      <div className="w-full max-w-[400px] bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 font-omyu">
        {/* 진행 상태 표시 */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-max bg-pink-100 px-4 py-1 rounded-full text-sm font-medium text-pink-600">
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
}
