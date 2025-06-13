"use client";

import { useState, useEffect } from "react";
import { useTestStore } from "@/store/useTestStore";

const majorArcana = [
  { name: "The Fool", emoji: "🃏" },
  { name: "The Magician", emoji: "🪄" },
  { name: "The High Priestess", emoji: "👸" },
  { name: "The Empress", emoji: "👑" },
  { name: "The Emperor", emoji: "🦁" },
  { name: "The Hierophant", emoji: "🙏" },
  { name: "The Lovers", emoji: "💑" },
  { name: "The Chariot", emoji: "🏎️" },
  { name: "Strength", emoji: "💪" },
  { name: "The Hermit", emoji: "🧙" },
  { name: "Wheel of Fortune", emoji: "🎡" },
  { name: "Justice", emoji: "⚖️" },
  { name: "The Hanged Man", emoji: "🙃" },
  { name: "Death", emoji: "💀" },
  { name: "Temperance", emoji: "🏺" },
  { name: "The Devil", emoji: "😈" },
  { name: "The Tower", emoji: "🌩️" },
  { name: "The Star", emoji: "⭐" },
  { name: "The Moon", emoji: "🌙" },
  { name: "The Sun", emoji: "🌞" },
  { name: "Judgement", emoji: "🎺" },
  { name: "The World", emoji: "🌏" },
];

const CardSelectStep = () => {
  const { setSelectedCard, setCurrentStep } = useTestStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [cards, setCards] = useState(majorArcana);

  useEffect(() => {
    setCards([...majorArcana].sort(() => Math.random() - 0.5));
  }, []);

  const handleCardSelect = (index: number) => {
    if (isFlipping) return;
    setSelectedIndex(index);
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedCard(index);
      setCurrentStep(5);
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2 relative">
        <h2 className="text-xl font-bold text-gray-800">
          마음에 드는 카드를 선택해주세요 😺
        </h2>
        <p className="text-sm text-gray-500">
          직감적으로 끌리는 카드가 당신의 운명을 알려줄 거예요!
        </p>
        {/* 고양이 이모지 원 - 텍스트 위에 겹치지 않게
        <div className="absolute left-1/2 -translate-x-1/2 -top-12 -translate-y-full w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-3xl shadow z-10 ">
          😺
        </div> */}
      </div>

      {/* 카드 그리드 */}
      <div className="flex flex-wrap gap-y-3 justify-center items-center">
        {cards.map((card, index) => (
          <button
            key={index}
            className={`-ml-7 md:-ml-10 translate-x-3 aspect-[3/4] w-14 md:w-20 rounded-lg shadow-lg transition-transform duration-300
              ${selectedIndex === index ? "scale-110 z-20" : "hover:scale-105"}
              ${isFlipping && selectedIndex === index ? "rotate-y-180" : ""}
            `}
            onClick={() => handleCardSelect(index)}
            disabled={isFlipping}
            aria-label={`${index + 1}번째 타로 카드 선택`}
            style={{ perspective: "600px" }}
          >
            {/* 카드 앞면 */}
            <div
              className={` w-full h-full bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg flex items-center justify-center text-2xl transition-all duration-500 
              ${
                isFlipping && selectedIndex === index
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
            >
              🎴
            </div>
            {/* 카드 뒷면 (선택 시 보여짐) */}
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex flex-col items-center justify-center text-xs transition-all duration-500
              ${
                isFlipping && selectedIndex === index
                  ? "opacity-100 rotate-y-180"
                  : "opacity-0"
              }
            `}
            >
              <span className="text-lg mb-1">{card.emoji}</span>
              <span className="font-bold">
                {index + 1}. {card.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardSelectStep;
