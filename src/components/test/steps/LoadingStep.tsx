"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTestStore } from "@/store/useTestStore";

const LoadingStep = () => {
  const router = useRouter();
  const { mbtiResult, question, selectedCard } = useTestStore();

  useEffect(() => {
    // 결과 페이지로 이동하기 전에 모든 데이터가 있는지 확인
    if (mbtiResult && question && selectedCard !== null) {
      const timer = setTimeout(() => {
        router.push("/result");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [mbtiResult, question, selectedCard, router]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        {/* 고양이 캐릭터 */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 bg-pink-100 rounded-full animate-pulse">
            <div className="w-full h-full flex items-center justify-center text-4xl">
              😺
            </div>
          </div>
          {/* 말풍선 */}
          <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-lg animate-bounce">
            <span className="text-sm font-medium text-gray-700">
              카드를 분석중이에요... ✨
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-800">
            고양이가 타로카드를 읽고 있어요
          </h2>
          <p className="text-sm text-gray-500">
            잠시만 기다려주세요! 곧 특별한 메시지를 전해드릴게요 😺
          </p>
        </div>
      </div>

      {/* 로딩 애니메이션 */}
      <div className="flex justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* 카드 분석 애니메이션 */}
      <div className="relative w-48 h-64 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg shadow-lg transform animate-[analyze_2s_ease-in-out_infinite]">
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🎴
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes analyze {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(2deg);
          }
          75% {
            transform: translateY(5px) rotate(-2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingStep;
