"use client";
import { MdShare } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();
  const isPage = pathname === "/" || pathname.startsWith("/result");
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="w-full pt-8 pb-6 flex flex-col items-center gap-4"
    >
      {isPage && (
        <>
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
        </>
      )}

      <small className="text-gray-500 text-xs bg-white/50 px-4 py-2 rounded-full">
        일러스트: 김웽탁 | 기획 및 제작: 꼬기 🙆‍♀️✨
      </small>
    </motion.footer>
  );
}
