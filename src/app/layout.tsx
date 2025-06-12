import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import AnimatedBackground from "@/components/layouts/AnimatedBackground";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "나를 닮은 고양이에게 타로 한마디!",
  description: "고양이 타로 테스트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased`}>
        <AnimatedBackground>
          <Header />
          <div className="container mx-auto px-4 pt-14 max-w-[500px] min-h-screen flex flex-col items-center justify-between">
            <main className="flex-1 flex flex-col items-center justify-center gap-6 w-full text-center relative">
              {children}
            </main>
            <Footer />
          </div>
        </AnimatedBackground>
      </body>
    </html>
  );
}
