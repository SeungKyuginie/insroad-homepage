import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "주식회사 인스로드 | INSROAD",
  description:
    "주식회사 인스로드는 웹·모바일 개발, 클라우드, AI를 아우르는 소프트웨어 전문 기업입니다. 비즈니스의 길을 코드로 잇습니다.",
  keywords: [
    "인스로드",
    "INSROAD",
    "소프트웨어 개발",
    "웹 개발",
    "모바일 앱 개발",
    "클라우드",
    "DevOps",
    "SI",
  ],
  openGraph: {
    title: "주식회사 인스로드 | INSROAD",
    description:
      "비즈니스의 길을 코드로 잇는 소프트웨어 개발 전문 기업, 주식회사 인스로드",
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
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
