"use client";

import { useState } from "react";
import { useTestStore } from "@/store/useTestStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const defaultQuestions = [
  "오늘의 운세가 궁금해요 ✨",
  "앞으로의 미래가 궁금해요 🌟",
  "지금 고민하는 일의 해결책이 궁금해요 💫",
  "나의 숨겨진 재능이 궁금해요 🎨",
  "인간관계에 대한 조언이 필요해요 💝",
];

const QuestionStep = () => {
  const { setQuestion, setIsQuestionCustom, setCurrentStep } = useTestStore();
  const [customQuestion, setCustomQuestion] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const handleQuestionSelect = (question: string) => {
    setQuestion(question);
    setIsQuestionCustom(false);
    setCurrentStep(3);
  };

  const handleCustomQuestion = () => {
    if (customQuestion.trim()) {
      setQuestion(customQuestion.trim());
      setIsQuestionCustom(true);
      setCurrentStep(3);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-800">
          어떤 것이 궁금하신가요? 😺
        </h2>
        <p className="text-sm text-gray-500">
          고양이가 타로카드로 답변해드릴게요!
        </p>
      </div>

      {!isCustom ? (
        <>
          <div className="space-y-3">
            {defaultQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full h-auto py-4 px-4 text-left bg-white hover:bg-pink-50 border-pink-200 hover:border-pink-300 transition-all duration-200"
                onClick={() => handleQuestionSelect(question)}
              >
                <span className="text-base">{question}</span>
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full text-pink-500 hover:text-pink-600 hover:bg-pink-50"
            onClick={() => setIsCustom(true)}
          >
            직접 질문하기 ✍️
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="궁금한 점을 입력해주세요..."
            value={customQuestion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCustomQuestion(e.target.value)
            }
            className="w-full h-12 text-base border-pink-200 focus:border-pink-300"
          />
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsCustom(false)}
            >
              돌아가기
            </Button>
            <Button
              className="flex-1 bg-pink-400 hover:bg-pink-500 text-white"
              onClick={handleCustomQuestion}
              disabled={!customQuestion.trim()}
            >
              질문하기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionStep;
