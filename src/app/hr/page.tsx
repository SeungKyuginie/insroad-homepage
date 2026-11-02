import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "인스로드 HR — 인사·세무·결재 통합 운영 | 주식회사 인스로드",
  description:
    "인사·근태·급여·세금·전자결재·매장 양식까지 하나의 화면으로. 중소기업과 소상공인을 위한 통합 운영 솔루션, 인스로드 HR.",
  openGraph: {
    title: "인스로드 HR — 인사·세무·결재 통합 운영",
    description:
      "흩어진 사무업무를 하나의 흐름으로. 근로기준법 계산·4대보험·세금을 자동으로 반영합니다.",
    type: "website",
    locale: "ko_KR",
    images: ["/sis/01-dashboard.png"],
  },
};

const APP_URL = "https://hr.insroad.co.kr";

const HIGHLIGHTS: { title: string; desc: string; img: string; alt: string }[] = [
  {
    title: "대시보드",
    desc: "오늘 할 일과 핵심 지표(근태·급여·결재)를 첫 화면에서 바로 확인합니다.",
    img: "/sis/01-dashboard.png",
    alt: "인스로드 HR 대시보드 화면",
  },
  {
    title: "근태 관리",
    desc: "출근·연차·연장·야간을 근로기준법 기준으로 자동 집계합니다. 월별·직원별 조회가 한 번에.",
    img: "/sis/02-attendance.png",
    alt: "인스로드 HR 근태 관리 화면",
  },
  {
    title: "급여 시뮬레이션",
    desc: "정규·연장·야간 시간과 4대보험·세금을 반영한 실수령액을 즉시 계산해 비교합니다.",
    img: "/sis/03-payroll.png",
    alt: "인스로드 HR 급여 시뮬레이션 화면",
  },
  {
    title: "세금계산서",
    desc: "매입·매출 세금계산서를 한곳에서 관리하고 월별 집계를 바로 확인합니다.",
    img: "/sis/04-tax.png",
    alt: "인스로드 HR 세금계산서 화면",
  },
  {
    title: "전자결재",
    desc: "휴가·지출·구매 등 결재 라인을 직접 설정하고 모바일에서도 승인할 수 있습니다.",
    img: "/sis/05-approval.png",
    alt: "인스로드 HR 전자결재 화면",
  },
  {
    title: "매장 양식",
    desc: "매장별 체크리스트·일일 보고서를 양식으로 운영해 본사가 실시간으로 모읍니다.",
    img: "/sis/06-store-form.png",
    alt: "인스로드 HR 매장 양식 화면",
  },
];

const WHY: [string, string][] = [
  [
    "숫자가 맞아떨어집니다",
    "근로기준법에 따른 연차·야간·연장 계산과 4대보험·세금 로직을 실제로 돌려 결과를 보여 줍니다. 대시보드와 급여 화면의 숫자가 서로 어긋나지 않습니다.",
  ],
  [
    "흩어진 업무를 하나로",
    "HR·근태·급여만이 아니라 세금계산서·전자결재·매장 양식까지 같은 자리에서 돌아갑니다. 엑셀과 메신저 사이를 오가지 않아도 됩니다.",
  ],
  [
    "현장에서 바로 쓰기",
    "별도 설치 없이 웹브라우저에서 바로 접속해 사용하고, 모바일에서도 대시보드·결재가 그대로 동작합니다.",
  ],
  [
    "실제 현장에서 운영 중",
    "소규모 사업장과 다점포 운영 현장에서 쓰이고 있으며, 요청에 따라 양식·결재선·근무규정을 맞춤 설정합니다.",
  ],
];

export default function HrPage() {
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
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta sw-cta"
            >
              서비스 바로가기
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero sw-hero sis-hero" id="top">
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div className="wrap hero-inner sis-hero-inner">
          <div className="sis-hero-copy">
            <span className="eyebrow">InsRoad HR · 인사·세무·결재 통합</span>
            <h1 className="sw-h1 sis-h1">
              <span className="line">
                <span>엑셀과 메신저 사이,</span>
              </span>
              <span className="line">
                <span>
                  <em>한 화면으로 끝</em>
                </span>
              </span>
            </h1>
            <p className="lead">
              인사·근태·급여·세금·전자결재·매장 양식까지. 중소기업과 소상공인의
              흩어진 사무 업무를 하나의 흐름으로 묶는 통합 운영 솔루션,
              인스로드 HR.
            </p>
            <div className="hero-actions">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                서비스 바로가기 →
              </a>
              <a href="#screens" className="btn btn-ghost">
                화면 둘러보기
              </a>
            </div>
          </div>
          <div className="sis-hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sis/01-dashboard.png"
              alt="인스로드 HR 대시보드 화면"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* SCREENS — 6 화면 */}
      <section className="sec-pad sis-screens-sec" id="screens">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">Screens</span>
            <h2>
              화면으로 보는
              <br className="sis-br-mobile" />
              <span className="sis-h2-accent"> 통합 운영</span>
            </h2>
            <p>
              각 화면은 실제 서비스가 돌아가는 모습이며, 모든 숫자는 근로
              기준법·세금 로직을 그대로 적용한 결과입니다.
            </p>
          </div>
          <div className="sis-screens">
            {HIGHLIGHTS.map((h, i) => (
              <article
                key={h.img}
                className={`sis-screen${i % 2 === 1 ? " sis-screen-rev" : ""}`}
              >
                <div className="sis-screen-copy">
                  <div className="sis-screen-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
                <div className="sis-screen-visual">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.img} alt={h.alt} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="values sec-pad sis-mobile-sec">
        <div className="wrap">
          <div className="sis-mobile">
            <div className="sis-mobile-copy">
              <span className="sec-tag">On the Go</span>
              <h2>
                모바일에서도
                <br />
                같은 데이터로
              </h2>
              <p>
                현장·외근 중에도 대시보드·결재·근태 확인을 그대로. 앱 설치 없이
                브라우저에서 바로 사용하고, 홈 화면에 추가하면 앱처럼
                이용할 수 있습니다.
              </p>
            </div>
            <div className="sis-mobile-visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sis/07-mobile.png"
                alt="인스로드 HR 모바일 대시보드 화면"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY HR */}
      <section className="sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">Why HR</span>
            <h2>왜 인스로드 HR인가</h2>
          </div>
          <div className="val-grid">
            {WHY.map(([k, v], i) => (
              <div className="val" key={k}>
                <div className="vn">{String(i + 1).padStart(2, "0")}</div>
                <h4>{k}</h4>
                <p>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-pad" id="contact">
        <div className="wrap">
          <div className="contact-box">
            <div>
              <span className="sec-tag">Contact</span>
              <h2>
                우리 사업장에
                <br />
                바로 쓰려면?
              </h2>
              <p>
                운영 중인 사업장 규모와 양식(근무규정·결재선·보고 양식)을
                알려주시면, 환경에 맞게 세팅해 드립니다.
              </p>
              <Link href="/#contact" className="btn btn-primary">
                도입 문의하기 →
              </Link>
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
                    hr.insroad.co.kr
                  </a>
                </div>
              </div>
              <div className="cinfo-row">
                <div className="k">형태</div>
                <div className="v">웹 서비스 (PC·모바일 브라우저)</div>
              </div>
              <div className="cinfo-row">
                <div className="k">맞춤 세팅</div>
                <div className="v">근무규정·결재선·양식을 사업장에 맞게</div>
              </div>
              <div className="cinfo-row">
                <div className="k">문의</div>
                <div className="v">
                  <Link href="/#contact">인스로드 문의처 →</Link>
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
