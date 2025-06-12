import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title:
    "나를 닮은 고양이에게 타로 한마디! | 김웽탁 작가와 함께하는 B급 감성 타로",
  description:
    "김웽탁 작가의 고양이 일러스트와 함께하는 B급 감성 테스트! 나를 닮은 고양이가 건네는 타로 한마디, 믿을 건 없지만 재밌다옹!",
  keywords:
    "타로, 고양이, 김웽탁, 성격 테스트, 고양이 타로, 감성MBTI, B급감성, 냥냥이 점",
};

export default function Home() {
  return <HomePage />;
}
