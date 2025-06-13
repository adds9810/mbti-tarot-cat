"use client";

import { useEffect, useState } from "react";
import { useTestStore } from "@/store/useTestStore";

const ShuffleStep = () => {
  const { setCurrentStep } = useTestStore();
  const [shuffleCount, setShuffleCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // 셔플 애니메이션 시작
    const shuffleInterval = setInterval(() => {
      setShuffleCount((prev) => {
        if (prev >= 3) {
          clearInterval(shuffleInterval);
          setShowMessage(true);
          // 메시지 표시 후 다음 단계로
          // setTimeout(() => {
          //   setCurrentStep(4);
          // }, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(shuffleInterval);
  }, [setCurrentStep]);

  return (
    <div className="space-y-6 animate-fade-in mt-2">
      <div className="text-center space-y-4">
        <div className="w-48 mx-auto mt-8 mb-10 flex flex-col items-center justify-center">
          {/* h-64 고양이 캐릭터 absolute -top-8 -translate-y-full left-1/2 -translate-x-1/2  */}
          <div className="w-32 h-32 bg-pink-100 rounded-full animate-bounce">
            {/* 여기에 고양이 일러스트가 들어갈 예정입니다 */}
            <div className="w-full h-full flex items-center justify-center text-4xl">
              😺
            </div>
          </div>

          {/* 타로 카드들 */}
          <div className="relative w-full h-64 mt-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="absolute w-full h-full bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg shadow-lg transform transition-all duration-500"
                style={{
                  transform: `rotate(${Math.random() * 20 - 10}deg) translate(${
                    Math.random() * 20 - 10
                  }px, ${Math.random() * 20 - 10}px)`,
                  zIndex: index,
                  animation: `shuffle-${shuffleCount} 0.5s ease-in-out`,
                }}
              />
            ))}
          </div>
        </div>

        {showMessage && (
          <div className="animate-fade-in">
            <p className="text-lg font-medium text-gray-800">
              카드를 섞었어요! 이제 선택해주세요 😺
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes shuffle-0 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          50% {
            transform: translate(-10px, 10px) rotate(-5deg);
          }
          75% {
            transform: translate(-10px, -10px) rotate(5deg);
          }
        }
        @keyframes shuffle-1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-10px, 10px) rotate(-5deg);
          }
          50% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          75% {
            transform: translate(10px, 10px) rotate(-5deg);
          }
        }
        @keyframes shuffle-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, 10px) rotate(5deg);
          }
          50% {
            transform: translate(-10px, -10px) rotate(-5deg);
          }
          75% {
            transform: translate(-10px, 10px) rotate(5deg);
          }
        }
        @keyframes shuffle-3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-10px, -10px) rotate(-5deg);
          }
          50% {
            transform: translate(10px, 10px) rotate(5deg);
          }
          75% {
            transform: translate(10px, -10px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ShuffleStep;
