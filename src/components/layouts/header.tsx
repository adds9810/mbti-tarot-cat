import Link from "next/link";
export default function Header() {
  return (
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
  );
}
