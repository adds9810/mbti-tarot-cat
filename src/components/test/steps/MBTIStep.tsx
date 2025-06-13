"use client";

import { useState } from "react";
import { useTestStore } from "@/store/useTestStore";
import { Button } from "@/components/ui/button";

// MBTI 질문 데이터
const questions = [
  {
    id: 1,
    question: "새로운 사람들과 만나는 자리가 있다면?",
    options: [
      { value: "E", text: "즐겁게 대화하며 친해지기 😊" },
      { value: "I", text: "조용히 관찰하며 상황 파악하기 🤔" },
    ],
  },
  {
    id: 2,
    question: "문제가 생겼을 때 나는?",
    options: [
      { value: "S", text: "현실적인 해결책을 찾아보기 💡" },
      { value: "N", text: "새로운 아이디어로 접근하기 ✨" },
    ],
  },
  {
    id: 3,
    question: "의견이 다른 사람과 대화할 때?",
    options: [
      { value: "T", text: "논리적으로 설명하며 설득하기 📊" },
      { value: "F", text: "상대방의 감정을 고려하며 대화하기 💝" },
    ],
  },
  {
    id: 4,
    question: "일정을 잡을 때 나는?",
    options: [
      { value: "J", text: "미리 계획을 세우고 준비하기 📅" },
      { value: "P", text: "상황에 따라 유연하게 대응하기 🎯" },
    ],
  },
  {
    id: 5,
    question: "휴가를 보낼 때 나는?",
    options: [
      { value: "E", text: "친구들과 함께 즐기기 🎉" },
      { value: "I", text: "혼자만의 시간을 즐기기 🏖️" },
    ],
  },
  {
    id: 6,
    question: "새로운 정보를 받았을 때?",
    options: [
      { value: "S", text: "구체적인 사실과 경험을 중시하기 📝" },
      { value: "N", text: "큰 그림과 가능성을 생각하기 🌈" },
    ],
  },
  {
    id: 7,
    question: "결정을 내릴 때 나는?",
    options: [
      { value: "T", text: "이성적으로 분석하고 판단하기 ⚖️" },
      { value: "F", text: "감정과 가치를 중요시하기 💫" },
    ],
  },
  {
    id: 8,
    question: "일상생활에서 나는?",
    options: [
      { value: "J", text: "정돈된 환경을 선호하기 🧹" },
      { value: "P", text: "자유로운 분위기를 좋아하기 🎨" },
    ],
  },
];

const MBTIStep = () => {
  const { mbtiAnswers, setMbtiAnswer, setMbtiResult, setCurrentStep } =
    useTestStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (
    answer: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P"
  ) => {
    setMbtiAnswer({ questionId: questions[currentQuestion].id, answer });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // MBTI 결과 계산
      const result = calculateMBTI();
      setMbtiResult(result);
      setCurrentStep(2);
    }
  };

  const calculateMBTI = () => {
    const counts = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    mbtiAnswers.forEach((answer) => {
      counts[answer.answer]++;
    });

    return [
      counts.E > counts.I ? "E" : "I",
      counts.S > counts.N ? "S" : "N",
      counts.T > counts.F ? "T" : "F",
      counts.J > counts.P ? "J" : "P",
    ].join("");
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="space-y-6 animate-fade-in mt-2">
      <div className="text-center">
        <p className="text-md text-gray-500">
          {currentQuestion + 1}번째 질문이다옹!
        </p>
        <h2 className="text-2xl font-bold text-gray-800">
          {currentQ.question}
        </h2>
      </div>

      <div className="space-y-3">
        {currentQ.options.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            className="w-full h-auto py-4 px-4 text-left bg-white hover:bg-pink-50 border-pink-200 hover:border-pink-300 transition-all duration-200"
            onClick={() => handleAnswer(option.value as any)}
          >
            <span className="text-lg">{option.text}</span>
          </Button>
        ))}
      </div>

      {/* 진행 상태 표시 */}
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-pink-400 h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default MBTIStep;
