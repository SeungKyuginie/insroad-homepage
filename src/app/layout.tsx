import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "주식회사 인스로드 | InsRoad",
  description:
    "주식회사 인스로드(InsRoad)는 HR 솔루션과 숏폼 영상 제작 도구를 개발하는 소프트웨어 기업입니다.",
  keywords: [
    "인스로드",
    "InsRoad",
    "숏츠메이커",
    "ShortsMaker",
    "숏폼 영상 제작",
    "HR 솔루션",
    "인사관리",
    "사무업무 통합 시스템",
    "사무 자동화",
    "소프트웨어",
  ],
  openGraph: {
    title: "주식회사 인스로드 | InsRoad",
    description:
      "HR 솔루션과 숏폼 영상 제작 도구를 개발하는 소프트웨어 기업",
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
