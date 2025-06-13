import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative py-20 px-6 lg:px-8 w-dvw text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-6xl">😿</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-gangwon">
          앗! 길을 잃었어요
        </h1>
        <p className="text-gray-600 text-lg font-mediummax-w-[320px] relative font-omyu">
          타로냥이의 점성소에선 이 페이지를 못 찾겠대요... <br />
          메인으로 돌아가 다시 시작해볼까요? 🐾
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
