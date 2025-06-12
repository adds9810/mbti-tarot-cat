"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { MdShare } from "react-icons/md";

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
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      className="min-h-screen bg-[length:400%_400%] bg-gradient-to-br from-purple-100 via-orange-100 to-mint-50 relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-pink-200 rounded-full transform rotate-45" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-200 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-7 h-7 bg-mint-200 rounded-full transform -rotate-12" />
        <div className="absolute top-1/2 right-1/3 w-12 h-8 bg-white/30 rounded-lg transform rotate-12" />
        <div className="absolute bottom-1/3 left-1/4 w-10 h-6 bg-white/30 rounded-lg transform -rotate-6" />
      </div> */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[500px] mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-gray-800"
          aria-label="홈으로 이동"
        >
          🐾 타로냥이
        </Link>
        <nav className="flex gap-4 items-center" aria-label="주요 메뉴">
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            소개
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-4 pt-14 max-w-[500px] min-h-screen flex flex-col items-center justify-between">
        <main className="flex-1 flex flex-col items-center justify-center gap-6 w-full text-center relative">
          <div className="relative mb-4">
            <motion.div
              animate={
                animateCat
                  ? { scale: 1.05, rotate: 2 }
                  : { scale: 1, rotate: 0 }
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
          </div>

          <h1 className="text-4xl font-gangwon font-bold text-gray-800 tracking-tight">
            {/* 나를 닮은 고양이에게
            <br />
            타로 한마디 */}
            타로냥이의 딱! 한마디
          </h1>

          <p className="text-gray-600 text-2xl font-medium font-omyu max-w-[320px] relative">
            냥냥이 점집, 오늘은 네 차례냐옹~
            <br />
            일단 들어오라옹~! 🐾
            <span className="absolute -right-6 -top-2 text-2xl animate-[wiggle_1s_ease-in-out_infinite]">
              ✨
            </span>
          </p>

          <div className="flex flex-col gap-3 w-full max-w-[365px] mt-4">
            <Button
              size="lg"
              className="font-omyu text-3xl py-8 font-bold bg-gradient-to-r from-pink-400 to-orange-400 hover:from-pink-500 hover:to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 active:shadow-sm"
              aria-label="테스트 시작"
            >
              시작하기 😺
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className=" border-pink-200 text-gray-600 hover:bg-pink-50 rounded-full hover:scale-105 transition-transform active:scale-95 active:translate-y-0 active:shadow-sm"
            >
              고양이 소개 🐾
            </Button> */}
            <p className="font-bold text-black">참여자수 | 1,234명</p>
          </div>
        </main>

        <footer className="w-full pt-8 pb-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-bold text-sm font-bold">
            테스트 공유하기 <MdShare />
          </div>
          <div className="flex gap-4">
            <button
              className="p-2 rounded-full bg-[#FEE500] hover:brightness-105 transition-all"
              aria-label="카카오톡으로 공유하기"
            >
              <RiKakaoTalkFill className="text-[#3C1E1E] text-xl" />
            </button>
            <button
              className="p-2 rounded-full bg-[#CFE8F9] hover:bg-[#B0DAF2] transition-all"
              aria-label="페이스북으로 공유하기"
            >
              <BiLogoFacebook className="text-[#1DA1F2] text-xl" />
            </button>
            <button
              className="p-2 rounded-full bg-black hover:bg-gray-600 transition-all"
              aria-label="트위터로 공유하기"
            >
              <FaXTwitter className="text-white text-xl" />
            </button>
          </div>

          <small className="text-gray-500 text-xs bg-white/50 px-4 py-2 rounded-full">
            일러스트: 김웽탁 | 기획 및 제작: 꼬기 🙆‍♀️✨
          </small>
        </footer>
      </div>
    </motion.div>
  );
}
