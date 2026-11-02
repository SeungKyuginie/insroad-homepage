import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "숏츠마법사 | 주식회사 인스로드",
  description:
    "매장 사진 몇 장으로 숏츠 영상, 네이버 블로그 글, 상세페이지, 홍보 배너까지. 사장님을 위한 홍보 콘텐츠 자동 제작 서비스입니다.",
  openGraph: {
    title: "숏츠마법사 | 주식회사 인스로드",
    description:
      "사진만 올리면 홍보 콘텐츠가 완성됩니다 — 숏츠·블로그·상세페이지·배너",
    type: "website",
    locale: "ko_KR",
    images: ["/shorts/screenshots/01-video.png"],
  },
};

const APP_URL = "https://shorts.insroad.co.kr";

const PROBLEMS = [
  "영상 편집 프로그램을 배울 시간이 없습니다.",
  "블로그에 매장 소식을 꾸준히 올리기가 어렵습니다.",
  "상세페이지·배너 하나 맡기는 데도 디자인 비용이 듭니다.",
  "유튜브, 인스타그램, 블로그마다 따로 만들어야 해서 손이 많이 갑니다.",
];

const SCREENS: { file: string; label: string; sub: string }[] = [
  {
    file: "01-video.png",
    label: "숏츠 제작",
    sub: "정보형 숏츠 · 감성 릴스 중 선택",
  },
  {
    file: "02-blog.png",
    label: "블로그 글",
    sub: "매장 정보·발행 일정까지 한 화면에서",
  },
  {
    file: "03-detail.png",
    label: "상세페이지",
    sub: "카테고리별 구성 자동 추천",
  },
  {
    file: "04-banner.png",
    label: "홍보 배너",
    sub: "정사각·세로·띠배너 크기 선택",
  },
];

const FEATURES: { tag: string; title: string; items: [string, string][] }[] = [
  {
    tag: "01",
    title: "영상",
    items: [
      [
        "숏츠·릴스 자동 제작",
        "사진·영상을 올리면 AI가 3초 후킹 · 코너 소개 · 마무리 문구까지 대본을 씁니다.",
      ],
      [
        "자연스러운 한국어 음성",
        "30가지 이상의 한국어 AI 목소리로 나레이션을 입힙니다. 배경음악과 카라오케식 자막도 자동입니다.",
      ],
      [
        "9:16 고화질 영상",
        "유튜브 숏츠, 인스타 릴스, 틱톡, 네이버플레이스, 당근마켓에 맞는 세로 영상(최대 1080×1920)으로 받습니다.",
      ],
      [
        "유튜브·인스타 바로 올리기",
        "계정을 한 번 연결하면 버튼으로 바로 업로드합니다. (틱톡·네이버플레이스·당근마켓은 내려받아 직접 올립니다)",
      ],
    ],
  },
  {
    tag: "02",
    title: "블로그",
    items: [
      [
        "네이버 블로그 글 작성",
        "업종별 작성 방식에 맞춰 사진마다 설명이 들어간 글을 씁니다. 복사해서 붙여 넣으면 끝.",
      ],
      [
        "매장 정보 자동 첨부",
        "주소·영업시간·전화·주차 정보를 한 번 저장하면 글 끝에 그대로 붙습니다.",
      ],
      [
        "검색 키워드 점검표",
        "지역·핵심 키워드가 글에 잘 들어갔는지 확인합니다. (상위 노출을 보장하는 기능은 아닙니다)",
      ],
      [
        "시리즈 글 · 발행 일정",
        "사진이 많으면 2~3편으로 나눠 쓰고, 발행일을 휴대폰 캘린더 알림으로 받습니다.",
      ],
    ],
  },
  {
    tag: "03",
    title: "상세페이지",
    items: [
      [
        "카테고리별 자동 구성",
        "식품, 농수축산물, 화장품, 패션 등 품목에 맞는 순서와 문구로 구성합니다.",
      ],
      [
        "AI 연출컷",
        "올린 제품 사진을 바탕으로 연출 이미지를 함께 만듭니다.",
      ],
      [
        "긴 이미지 한 장으로 저장",
        "스마트스토어 등에 바로 올릴 수 있는 세로로 긴 이미지로 받습니다.",
      ],
    ],
  },
  {
    tag: "04",
    title: "배너",
    items: [
      [
        "홍보 배너",
        "사진 한 장과 행사 내용만 넣으면 문구와 디자인을 만들어 줍니다.",
      ],
      [
        "원하는 크기",
        "정사각, 세로, 가로, 띠배너까지 크기를 골라서 만듭니다.",
      ],
    ],
  },
];

const STEPS: [string, string][] = [
  ["사진 올리기", "휴대폰으로 찍은 매장·상품 사진을 올립니다."],
  ["AI가 만들기", "대본·음성·글·디자인을 AI가 자동으로 만듭니다."],
  [
    "확인하고 올리기",
    "마음에 들게 고친 뒤 내려받거나 바로 업로드합니다.",
  ],
];

export default function ShortsPage() {
  return (
    <>
      <header className="site-header scrolled">
        <div className="wrap nav">
          <Link
            href="/"
            className="brand"
            aria-label="주식회사 인스로드 홈으로"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/insroadlogo.png" alt="INSROAD" />
            <span className="brand-co">주식회사 인스로드</span>
          </Link>
          <div className="sw-nav">
            <Link href="/#products" className="sw-back">
              ← 전체 제품
            </Link>
            <a href="#contact" className="nav-cta sw-cta sh-cta">
              도입 문의
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero sw-hero sh-hero" id="top">
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div className="wrap hero-inner">
          <span className="eyebrow sh-eyebrow">
            Shorts Wizard · 매장 홍보 자동화
          </span>
          <h1 className="sw-h1 sh-h1">
            <span className="line">
              <span>사진 몇 장이면,</span>
            </span>
            <span className="line">
              <span>
                <em>홍보 콘텐츠가 완성</em>됩니다
              </span>
            </span>
          </h1>
          <p className="lead">
            숏츠·릴스 영상부터 네이버 블로그 글, 상세페이지, 홍보 배너까지.
            편집 프로그램도 디자이너도 없이 휴대폰으로 만듭니다.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary sh-btn-primary">
              도입 문의하기 →
            </a>
            <a href="#features" className="btn btn-ghost">
              기능 살펴보기
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="about sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag sh-tag">Problems</span>
            <h2>이런 문제를 해결합니다</h2>
          </div>
          <ul className="sw-problems">
            {PROBLEMS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SCREENS */}
      <section className="sec-pad sh-screens-sec" id="screens">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag sh-tag">Screens</span>
            <h2>
              화면
              <span className="sh-h2-accent"> 미리보기</span>
            </h2>
            <p>
              실제 숏츠마법사 화면입니다. 아래는 사진을 올리기 전 입력 단계
              화면이며, 완성 결과 화면은 추후 샘플 사진과 함께 교체 예정
              입니다.
            </p>
          </div>
          <div className="dh-screens sh-screens">
            {SCREENS.map((s) => (
              <figure key={s.file} className="dh-screen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/shorts/screenshots/${s.file}`}
                  alt={s.label}
                  loading="lazy"
                />
                <figcaption>
                  <strong>{s.label}</strong>
                  <span>{s.sub}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="dh-screens-note">
            * 실제 서비스 화면입니다. 화면 속 매장 정보와 사진은 예시입니다.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec-pad" id="features">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag sh-tag">Features</span>
            <h2>주요 기능</h2>
            <p>영상·블로그·상세페이지·배너까지, 홍보에 필요한 콘텐츠를 한곳에서.</p>
          </div>
          <div className="products-grid sh-features">
            {FEATURES.map((g) => (
              <div className="pcard" key={g.title}>
                <div className="sw-num sh-num">{g.tag}</div>
                <h3>{g.title}</h3>
                <dl className="sw-list">
                  {g.items.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="values sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag sh-tag">How to Use</span>
            <h2>이렇게 써요</h2>
          </div>
          <ol className="sw-steps sh-steps">
            {STEPS.map(([k, v], i) => (
              <li key={k}>
                <span className="sw-step-n sh-step-n">{i + 1}</span>
                <h4>{k}</h4>
                <p>{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec-pad" id="contact">
        <div className="wrap">
          <div className="contact-box sh-cta-box">
            <div>
              <span className="sec-tag sh-tag">Contact</span>
              <h2>
                숏츠마법사
                <br />
                이용을 원하시면
              </h2>
              <p>
                숏츠마법사는 관리자가 계정을 발급해 드리는 방식입니다. 아래로
                연락 주시면 계정을 만들어 드립니다.
              </p>
              <a
                href={`mailto:limbus2021@naver.com?subject=${encodeURIComponent("숏츠마법사 이용 문의")}`}
                className="btn btn-primary sh-btn-primary"
              >
                이메일로 문의하기 →
              </a>
            </div>
            <div className="contact-info">
              <div className="cinfo-row">
                <div className="k">서비스</div>
                <div className="v">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    shorts.insroad.co.kr
                  </a>
                </div>
              </div>
              <div className="cinfo-row">
                <div className="k">이용 방식</div>
                <div className="v">관리자 발급 계정 (셀프 가입 없음)</div>
              </div>
              <div className="cinfo-row">
                <div className="k">이메일</div>
                <div className="v">
                  <a href="mailto:limbus2021@naver.com">limbus2021@naver.com</a>
                </div>
              </div>
              <div className="cinfo-row">
                <div className="k">전화</div>
                <div className="v">
                  <a href="tel:+82-70-8064-1478">070-8064-1478</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-bottom">
            <div>© 2026 InsRoad Co., Ltd. All rights reserved.</div>
            <Link href="/">인스로드 홈으로 →</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
