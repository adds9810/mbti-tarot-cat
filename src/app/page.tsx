import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Share2, Instagram, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "나만의 MBTI 고양이에게 타로 조언받기 | 김웽탁 작가와 함께",
  description:
    "고양이와 함께하는 성격 해석과 타로 조언, 지금 시작해보세요! 김웽탁 작가의 따뜻한 일러스트와 함께하는 특별한 MBTI 테스트",
  keywords: "MBTI, 타로, 고양이, 김웽탁, 성격테스트, 타로카드",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-mint-50 relative overflow-hidden">
      {/* 배경 패턴 요소들 */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* 여기에 고양이 발바닥, 별, 달 등의 패턴 요소들이 들어갈 예정입니다 */}
      </div>

      <main className="container mx-auto px-4 py-8 max-w-[500px] min-h-screen flex flex-col items-center justify-between">
        {/* 상단 섹션 */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full text-center">
          {/* 고양이 일러스트 영역 */}
          <div className="relative w-[280px] h-[280px] mb-4">
            {/* 여기에 고양이 일러스트가 들어갈 예정입니다 */}
            <div className="w-full h-full bg-pink-100 rounded-full animate-pulse" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            나만의 MBTI 고양이에게
            <br />
            타로 조언받기
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed max-w-[320px]">
            고양이와 함께하는 성격 해석과 타로 조언,
            <br />
            지금 시작해보세요!
          </p>

          <div className="flex flex-col gap-3 w-full max-w-[280px] mt-4">
            <Button
              size="lg"
              className="bg-pink-400 hover:bg-pink-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              aria-label="테스트 시작"
            >
              테스트 시작하기
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-pink-200 text-gray-600 hover:bg-pink-50"
            >
              고양이 소개 보기
            </Button>
          </div>
        </div>

        {/* 하단 섹션 */}
        <footer className="w-full py-6 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <button
              className="p-2 text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="카카오톡으로 공유하기"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="인스타그램으로 공유하기"
            >
              <Instagram className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-pink-400 transition-colors"
              aria-label="트위터로 공유하기"
            >
              <Twitter className="w-5 h-5" />
            </button>
          </div>

          <small className="text-gray-400 text-xs">
            일러스트: 김웽탁 | 기획 및 제작: 꼬기
          </small>
        </footer>
      </main>
    </div>
  );
}
