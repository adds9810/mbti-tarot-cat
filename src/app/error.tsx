"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative py-20 px-6 lg:px-8 w-dvw text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-6xl">😿</div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-gangwon">
          예지력 오류! 타로냥이가 버퍼링 중이에요 🌀
        </h2>
        <p className="text-gray-600 text-lg font-mediummax-w-[320px] relative font-omyu">
          예상 못 한 문제가 생겼어요.
          <br />
          메인으로 돌아가 다시 시작해볼까요?
        </p>
        <Link
          href="/"
          className="font-omyu text-lg p-3 font-bold bg-gradient-to-r from-pink-400 to-orange-400 hover:from-pink-500 hover:to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 active:shadow-sm"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </section>
  );
}
