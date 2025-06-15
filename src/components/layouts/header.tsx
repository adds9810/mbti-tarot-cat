"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // 10px 이상 스크롤하면 blur
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[500px] mx-auto px-4 py-3 flex items-center justify-between ${
        scrolled ? "bg-white/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
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
