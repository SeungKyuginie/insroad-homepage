import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "계절근로자 관리 프로그램 | 주식회사 인스로드",
  description:
    "체류 만료부터 임금 점검, 이탈 대응, 다국어 계약서까지. 지자체 담당자와 농가가 함께 쓰는 외국인 계절근로자 관리 프로그램입니다.",
  openGraph: {
    title: "계절근로자 관리 프로그램 | 주식회사 인스로드",
    description: "엑셀 대신 하나의 화면으로 — 지자체·농가 통합 외국인 계절근로자 관리",
    type: "website",
    locale: "ko_KR",
  },
};

const MAIL = "limbus2021@naver.com";
const TEL = "070-8064-1478";

const PROBLEMS = [
  "담당 공무원 한두 명이 수백 명의 근로자를 엑셀로 관리합니다.",
  "체류 만료일, 산재보험, 숙소 점검 날짜를 놓치기 쉽습니다.",
  "최저임금 미달이나 임금 체불을 뒤늦게 알게 됩니다.",
  "근로자가 이탈해도 언제, 어디서 마지막으로 일했는지 바로 확인하기 어렵습니다.",
  "계약서와 동의서를 근로자 모국어로 준비하기가 번거롭습니다.",
];

const FEATURES: { tag: string; title: string; items: [string, string][] }[] = [
  {
    tag: "01",
    title: "기본 정보",
    items: [
      ["근로자·농가 관리", "등록, 검색, 농가별 배정을 한곳에서. 기존 엑셀 명단은 그대로 올려서 시작합니다."],
      ["대시보드", "체류 만료 임박, 서류 미비, 점검 예정 같은 할 일을 첫 화면에 모아 보여 줍니다."],
    ],
  },
  {
    tag: "02",
    title: "현장 관리",
    items: [
      ["농가 모바일 입력", "농가주가 휴대폰으로 출근·퇴근과 작업 내용을 입력합니다. 앱 설치 없이 홈 화면에 추가해 씁니다."],
      ["근태 현황", "농가별·근로자별 출근 기록을 담당자가 실시간으로 확인합니다."],
      ["임금 점검", "입력된 임금을 최저임금 기준으로 자동 판정해 미달·이상 건을 표시합니다."],
    ],
  },
  {
    tag: "03",
    title: "리스크 관리",
    items: [
      ["알림 센터", "체류 만료, 보험, 숙소 점검 등 놓치면 안 되는 일정을 미리 알려 줍니다(휴대폰 푸시 알림 포함)."],
      ["이탈 관리", "이탈 발생 기록과 처리 과정을 한곳에서 관리합니다."],
      ["재입국 관리", "성실 근로자의 재입국 추천 현황을 시즌별로 정리합니다."],
      ["민원 접수", "근로자·농가 민원을 접수하고 처리 상태를 기록합니다."],
    ],
  },
  {
    tag: "04",
    title: "서류",
    items: [
      ["다국어 근로계약서", "베트남어, 캄보디아어(크메르어), 라오어, 네팔어, 필리핀어, 우즈베크어, 몽골어, 태국어, 인도네시아어, 영어 등 근로자 모국어와 한국어를 함께 씁니다."],
      ["동의서 관리", "개인정보·위치정보 동의 여부와 날짜를 근로자별로 관리합니다."],
      ["서류 출력", "근로자 현황, 농가 점검표, 임금 대장 등을 PDF로 바로 출력합니다."],
    ],
  },
];

const SECURITY: [string, string][] = [
  ["2단계 인증(OTP)", "담당자 계정은 비밀번호와 휴대폰 인증 코드를 함께 확인합니다."],
  ["민감정보 암호화", "여권번호, 외국인등록번호는 암호화해 저장합니다."],
  ["접속기록 관리", "누가, 언제, 어디서(IP) 어떤 개인정보를 열람·수정했는지 모두 기록합니다. 엑셀 내려받기와 월 점검 화면을 제공합니다."],
  ["자동 로그아웃", "30분 동안 사용이 없으면 자동으로 로그아웃됩니다."],
  ["권한 분리", "관리자, 담당자, 열람자, 농가 계정마다 볼 수 있는 범위가 다릅니다. 농가는 자기 농가 근로자만 봅니다."],
  ["지자체별 데이터 분리", "여러 지자체가 써도 각 지자체의 정보는 서로 보이지 않습니다."],
];

const STEPS: [string, string][] = [
  ["도입 문의", "관리 인원과 현재 업무 방식을 알려 주세요."],
  ["시범 사용", "실제 화면으로 담당자가 직접 써 봅니다."],
  ["기존 자료 이관", "쓰시던 엑셀 명단을 옮겨 드립니다."],
  ["교육 후 사용 시작", "담당자 교육을 마치고 바로 사용합니다."],
];

export default function SeasonalWorkerPage() {
  return (
    <>
      <header className="site-header scrolled">
        <div className="wrap nav">
          <Link href="/" className="brand" aria-label="주식회사 인스로드 홈으로">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/insroadlogo.png" alt="INSROAD" />
            <span className="brand-co">주식회사 인스로드</span>
          </Link>
          <div className="sw-nav">
            <Link href="/#products" className="sw-back">
              ← 전체 제품
            </Link>
            <a href="#contact" className="nav-cta sw-cta">
              도입 문의
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero sw-hero" id="top">
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div className="wrap hero-inner">
          <span className="eyebrow">Seasonal Worker Management</span>
          <h1 className="sw-h1">
            <span className="line">
              <span>계절근로자 관리,</span>
            </span>
            <span className="line">
              <span>
                엑셀 대신 <em>하나의 화면</em>으로
              </span>
            </span>
          </h1>
          <p className="lead">
            체류 만료부터 임금 점검, 이탈 대응, 다국어 계약서까지. 지자체
            담당자와 농가가 함께 쓰는 외국인 계절근로자 관리 프로그램입니다.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
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
            <span className="sec-tag">Problems</span>
            <h2>이런 문제를 해결합니다</h2>
          </div>
          <ul className="sw-problems">
            {PROBLEMS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec-pad" id="features">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">Features</span>
            <h2>주요 기능</h2>
            <p>지자체 담당자의 사무실 업무와 농가의 현장 입력을 하나로 잇습니다.</p>
          </div>
          <div className="products-grid">
            {FEATURES.map((g) => (
              <div className="pcard" key={g.title}>
                <div className="sw-num">{g.tag}</div>
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

      {/* SECURITY */}
      <section className="values sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">Security</span>
            <h2>관공서 기준의 보안</h2>
            <p>근로자의 여권번호·임금 같은 민감한 정보를 다루는 만큼, 보안을 기본으로 설계했습니다.</p>
          </div>
          <div className="val-grid">
            {SECURITY.map(([k, v], i) => (
              <div className="val" key={k}>
                <div className="vn">{String(i + 1).padStart(2, "0")}</div>
                <h4>{k}</h4>
                <p>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">How to Start</span>
            <h2>도입 방법</h2>
          </div>
          <ol className="sw-steps">
            {STEPS.map(([k, v], i) => (
              <li key={k}>
                <span className="sw-step-n">{i + 1}</span>
                <h4>{k}</h4>
                <p>{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPANION — 다말해 연동 */}
      <section className="sec-pad sw-companion-sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">With Damalhae</span>
            <h2>
              <span className="sw-companion-accent">다말해</span> 연동 가능
            </h2>
            <p>
              농가주는 한국어로, 근로자는 모국어로 씁니다. 각자 자기 말로
              읽습니다. 작업 지시·일정·안전 안내를 20개 언어로 바로.
            </p>
          </div>
          <div className="sw-companion">
            <div className="sw-companion-copy">
              <ul className="sw-companion-list">
                <li>20개 언어 실시간 번역 · 음성 입력 지원</li>
                <li>회원가입 없이 링크 하나로 바로 사용</li>
                <li>작업 지시·안전 공지·일정 안내에 그대로 활용</li>
              </ul>
              <div className="sw-companion-actions">
                <Link href="/damalhae" className="btn btn-ghost">
                  다말해 자세히 보기 →
                </Link>
                <a
                  href="https://chat.lording.co.kr/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary sw-companion-btn"
                >
                  혼자서 체험하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec-pad" id="contact">
        <div className="wrap">
          <div className="contact-box">
            <div>
              <span className="sec-tag">Contact</span>
              <h2>
                도입을
                <br />
                검토하고 계신가요?
              </h2>
              <p>
                관리 인원과 현재 업무 방식을 알려 주시면 시범 사용과 요금을
                안내해 드립니다.
              </p>
              <a href={`mailto:${MAIL}?subject=${encodeURIComponent("계절근로자 관리 프로그램 도입 문의")}`} className="btn btn-primary">
                이메일로 문의하기 →
              </a>
            </div>
            <div className="contact-info">
              <div className="cinfo-row">
                <div className="k">요금</div>
                <div className="v">관리 인원에 따라 안내 (문의)</div>
              </div>
              <div className="cinfo-row">
                <div className="k">이메일</div>
                <div className="v">
                  <a href={`mailto:${MAIL}`}>{MAIL}</a>
                </div>
              </div>
              <div className="cinfo-row">
                <div className="k">전화</div>
                <div className="v">
                  <a href={`tel:+82-${TEL.slice(1)}`}>{TEL}</a>
                </div>
              </div>
              <div className="cinfo-row">
                <div className="k">상호</div>
                <div className="v">주식회사 인스로드 (InsRoad Co., Ltd.)</div>
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
