import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "INSROAD — 주식회사 인스로드",
  description:
    "고요한 기술, 깊은 결과. 주식회사 인스로드는 웹·모바일·클라우드를 잇는 소프트웨어 스튜디오입니다.",
  keywords: [
    "인스로드",
    "INSROAD",
    "소프트웨어 스튜디오",
    "웹 개발",
    "모바일 앱",
    "클라우드",
  ],
  openGraph: {
    title: "INSROAD — 주식회사 인스로드",
    description: "고요한 기술, 깊은 결과.",
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
    <html
      lang="ko"
      className={`${inter.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-stone-50">
        {children}
      </body>
    </html>
  );
}
