"use client";

import { useState } from "react";
import { useTestStore } from "@/store/useTestStore";

const CardSelectStep = () => {
  const { setSelectedCard, setCurrentStep } = useTestStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleCardSelect = (index: number) => {
    if (isFlipping) return;

    setSelectedIndex(index);
    setIsFlipping(true);

    // 카드 뒤집기 애니메이션 후 다음 단계로
    setTimeout(() => {
      setSelectedCard(index);
      setCurrentStep(5);
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-800">
          마음에 드는 카드를 선택해주세요 😺
        </h2>
        <p className="text-sm text-gray-500">
          직감적으로 끌리는 카드가 당신의 운명을 알려줄 거예요!
        </p>
      </div>

      <div className="relative w-full aspect-[3/4] max-w-[280px] mx-auto">
        {/* 고양이 캐릭터 */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-pink-100 rounded-full animate-bounce">
          <div className="w-full h-full flex items-center justify-center text-3xl">
            😺
          </div>
        </div>

        {/* 타로 카드들 */}
        <div className="relative w-full h-full">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`absolute w-full h-full transition-all duration-500 transform cursor-pointer
                ${
                  selectedIndex === index ? "scale-110 z-50" : "hover:scale-105"
                }
                ${isFlipping && selectedIndex === index ? "rotate-y-180" : ""}
              `}
              style={{
                transform: `
                  rotate(${Math.random() * 20 - 10}deg)
                  translate(${Math.random() * 20 - 10}px, ${
                  Math.random() * 20 - 10
                }px)
                  ${selectedIndex === index ? "scale(1.1)" : ""}
                `,
                zIndex: selectedIndex === index ? 50 : index,
              }}
              onClick={() => handleCardSelect(index)}
              disabled={isFlipping}
              aria-label={`${index + 1}번째 타로 카드 선택`}
            >
              {/* 카드 앞면 */}
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg shadow-lg transform transition-all duration-500">
                <div className="w-full h-full flex items-center justify-center text-2xl">
                  🎴
                </div>
              </div>

              {/* 카드 뒷면 (선택 시 보여짐) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg shadow-lg transform transition-all duration-500 rotate-y-180 backface-hidden">
                <div className="w-full h-full flex items-center justify-center text-2xl">
                  ✨
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default CardSelectStep;
