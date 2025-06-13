// src/app/api/gemini/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { card, question, mbti } = body;

  if (!card || !question || !mbti) {
    return NextResponse.json(
      { error: "필수 정보가 누락되었습니다." },
      { status: 400 }
    );
  }

  try {
    const prompt = `
당신은 타로 마스터입니다. 사용자에게 맞춤형 타로 메시지를 전달해야 합니다.
사용자의 MBTI는 ${mbti}이고, 질문은 "${question}"입니다.

선택된 카드는 "${card.name}"이며, 카드의 상징은 다음과 같습니다:
${card.keywords?.join(", ") || "키워드 없음"}.

이 정보를 바탕으로, 감성적이면서 현실적인 4~6줄 분량의 조언을 주세요.
서정적이고 부드러운 말투를 사용해 주세요.
    `.trim();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    return NextResponse.json({ output: text });
  } catch (error) {
    console.error("Gemini 호출 에러:", error);
    return NextResponse.json(
      { error: "결과를 불러오는 데 실패했습니다." },
      { status: 500 }
    );
  }
}
