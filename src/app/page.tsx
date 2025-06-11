import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title:
    "나만의 MBTI 고양이에게 타로 조언받기 | 김웽탁 작가와 함께하는 고양이 비급",
  description:
    "고양이 비급의 조언이 오늘도 내 운명을 알려줄 예정! 김웽탁 작가의 따뜻한 일러스트와 함께하는 특별한 MBTI 타로 테스트",
  keywords: "MBTI, 타로, 고양이, 김웽탁, 고양이비급, 타로카드, 성격테스트",
};

export default function Home() {
  return <HomePage />;
}
