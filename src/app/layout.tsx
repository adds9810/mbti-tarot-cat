import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "나만의 MBTI 고양이에게 타로 조언받기 | 김웽탁 작가와 함께하는 고양이 비급",
  description:
    "고양이 비급의 조언이 오늘도 내 운명을 알려줄 예정! 김웽탁 작가의 따뜻한 일러스트와 함께하는 특별한 MBTI 타로 테스트",
  keywords: "MBTI, 타로, 고양이, 김웽탁, 고양이비급, 타로카드, 성격테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased`}>{children}</body>
    </html>
  );
}
