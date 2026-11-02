import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "주식회사 인스로드 | InsRoad",
  description:
    "주식회사 인스로드(InsRoad)는 HR 솔루션, 매장 홍보 콘텐츠 자동 제작 서비스 '숏츠마법사', 다국어 실시간 번역 채팅 '다말해', 외국인 계절근로자 관리 프로그램을 개발하는 소프트웨어 기업입니다.",
  keywords: [
    "인스로드",
    "InsRoad",
    "숏츠마법사",
    "Shorts Wizard",
    "매장 홍보 자동화",
    "다말해",
    "Damalhae",
    "실시간 번역 채팅",
    "다국어 채팅",
    "계절근로자 관리",
    "외국인 근로자 관리",
    "지자체 소프트웨어",
    "농가 관리",
    "AI 광고 영상",
    "상세페이지 생성",
    "블로그 자동 작성",
    "숏폼 영상 제작",
    "AI 콘텐츠 제작",
    "HR 솔루션",
    "인스로드 SIS",
    "InsRoad SIS",
    "급여 시뮬레이션",
    "세금계산서 관리",
    "전자결재",
    "인사관리",
    "사무업무 통합 시스템",
    "사무 자동화",
    "소프트웨어",
  ],
  openGraph: {
    title: "주식회사 인스로드 | InsRoad",
    description:
      "HR 솔루션, AI 콘텐츠 제작 서비스, 실시간 번역 채팅, 계절근로자 관리 프로그램을 개발하는 소프트웨어 기업",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
