"use client";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const mentList = [
  "운세 좀 볼 줄 아는 고양이~ 🐱",
  "오늘 카드... 느낌이 와. 진짜임 🙀",
  "냥촉 발동~ 믿어봐라옹",
  "뽑아봐~ 나도 궁금함 😼",
  "오늘 운세 쫌 있음 ✨",
  "타로? 몰라도 해줄게 🐾",
  "믿든 말든~ 고양이 감임",
  "왜 자꾸 맞지...? 무섭다옹 😹",
];

export default function HomePage() {
  const [showSpeech, setShowSpeech] = useState(false);
  const [animateCat, setAnimateCat] = useState(false);
  const [randomMent, setRandomMent] = useState("오늘도 운명을 점쳐볼까?");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateCat(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * mentList.length);
        setRandomMent(mentList[randomIndex]);
        setShowSpeech(true);
        setTimeout(() => {
          setShowSpeech(false);
          setAnimateCat(false);
        }, 5000);
      }, 0);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* 고양이 이미지 */}
      <motion.div
        className="relative mb-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0.5, 1.05, 1], opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={
            animateCat ? { scale: 1.05, rotate: 2 } : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.6 }}
          className="w-full h-full bg-gradient-to-br from-[pink-100] to-orange-100 rounded-[2rem] shadow-lg"
        >
          <img
            src="https://placehold.co/280x280"
            alt="과장된 표정으로 점을 치는 고양이"
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </motion.div>
        <AnimatePresence>
          {showSpeech && (
            <motion.div
              key="speech"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white/90 px-4 py-2 rounded-2xl shadow-lg origin-bottom-right"
            >
              <span className="text-md font-medium font-omyu text-gray-700">
                {randomMent}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 제목 */}
      <motion.h1
        className="text-4xl font-gangwon font-bold text-gray-800 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        타로냥이의 딱! 한마디
      </motion.h1>

      {/* 설명 */}
      <motion.p
        className="text-gray-600 text-2xl font-medium font-omyu max-w-[320px] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        냥냥이 점집, 오늘은 네 차례냐옹~
        <br />
        일단 들어오라옹~! 🐾
        <span className="absolute -right-6 -top-2 text-2xl animate-wiggle">
          ✨
        </span>
      </motion.p>

      {/* 버튼과 참여자수 */}
      <motion.div
        className="flex flex-col gap-3 w-full max-w-[365px] mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/test"
          className="font-omyu text-3xl py-4 font-bold bg-gradient-to-r from-pink-400 to-orange-400 hover:from-pink-500 hover:to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 active:shadow-sm"
          aria-label="테스트 시작"
        >
          시작하기 😺
        </Link>
        <p className="font-bold text-black">참여자수 | 1,234명</p>
      </motion.div>
    </div>
  );
}
