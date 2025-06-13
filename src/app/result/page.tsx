"use client";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "나를 닮은 고양이의 타로 한마디 | 성향 기반 타로 테스트",
//   description:
//     "김웽탁 작가의 고양이와 함께하는 B급 감성 타로 테스트! 나의 성향을 알아보고, 고양이가 건네는 특별한 타로 메시지를 받아보세요.",
//   keywords: "타로, 고양이, 김웽탁, 성향 테스트, 고양이 타로, MBTI, B급감성",
// };

import { useTestStore } from "@/store/useTestStore";
import { motion } from "framer-motion";
// import Image from "next/image";
import { toast } from "react-hot-toast";
import { FaDownload } from "react-icons/fa";
// import { RiKakaoTalkFill } from "react-icons/ri";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";

export default function Result() {
  const { mbtiResult, selectedCard, question, output } = useTestStore();

  const handleShare = (platform: string) => {
    // TODO: 공유 기능 구현
    toast.success(`${platform}으로 공유하기 준비중이에요!`);
  };

  const handleDownload = async (type: "all" | "mbti" | "tarot") => {
    // TODO: 이미지 다운로드 기능 구현
    console.log(`Downloading ${type} result...`);
    toast.success("이미지 저장 준비중이에요!");
  };

  return (
    <section className="w-full max-w-[500px] mx-auto px-4 py-8 space-y-8">
      {/* MBTI 결과 섹션 */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-omyu font-bold text-center mb-4">
          {mbtiResult} 🐱
        </h2>
        <p className="text-gray-700 font-gangwon mb-6">{mbtiResult} 설명영역</p>
        <button
          onClick={() => handleDownload("mbti")}
          className="w-full bg-pink-100 hover:bg-pink-200 text-pink-700 font-omyu py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          aria-label="MBTI 결과 이미지 저장하기"
        >
          <FaDownload /> 결과 이미지 저장하기
        </button>
      </motion.article>

      {/* 타로 결과 섹션 */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/90 rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-omyu font-bold text-center mb-4">
          제미나이의 타로 해석 ✨
        </h2>
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-gray-600 font-gangwon mb-2">당신의 질문</p>
            <p className="font-omyu text-lg">{question}</p>
          </div>

          <div className="relative w-full aspect-[3/4] max-w-[200px] mx-auto">
            {selectedCard}
            {/* <Image
              src={selectedCard.image}
              alt={`${selectedCard} 타로 카드`}
              fill
              className="object-contain"
            /> */}
          </div>

          <div className="text-center">
            <h3 className="font-omyu text-xl mb-2">{selectedCard}</h3>
            <p className="text-gray-700 font-gangwon whitespace-pre-line">
              {output}
            </p>
          </div>

          <button
            onClick={() => handleDownload("tarot")}
            className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-omyu py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
            aria-label="타로 결과 이미지 저장하기"
          >
            <FaDownload /> 타로 결과 저장하기
          </button>
        </div>
      </motion.article>

      {/* 공유 및 전체 저장 섹션 */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <button
          onClick={() => handleDownload("all")}
          className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-omyu py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          aria-label="전체 결과 이미지 저장하기"
        >
          <FaDownload /> 전체 결과 저장하기
        </button>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleShare("kakao")}
            className="p-3 bg-yellow-300 hover:bg-yellow-400 rounded-full transition-colors"
            aria-label="카카오톡으로 공유하기"
          >
            <RiKakaoTalkFill className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-colors"
            aria-label="X(트위터)로 공유하기"
          >
            <FaXTwitter className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            aria-label="페이스북으로 공유하기"
          >
            <FaFacebook className="w-6 h-6" />
          </button>
        </div>
      </motion.div> */}

      {/* 다시하기 버튼 */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => (window.location.href = "/")}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-omyu py-3 rounded-lg transition-colors"
        aria-label="테스트 다시하기"
      >
        다시 테스트하기 🎮
      </motion.button>
    </section>
  );
}
