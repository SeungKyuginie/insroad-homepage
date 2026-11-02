import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "다말해 — 20개 언어 실시간 번역 채팅 | 주식회사 인스로드",
  description:
    "서로 다른 언어로 써도, 상대는 자기 언어로 읽습니다. 20개 언어 실시간 번역 채팅 '다말해'. 가입 없이 링크 하나로 바로 시작하세요.",
  openGraph: {
    title: "다말해 — 말이 달라도, 다 말해요",
    description:
      "한국어로 쓰면 베트남 동료는 베트남어로, 태국 동료는 태국어로 읽습니다. 20개 언어 실시간 번역 채팅, 다말해.",
    type: "website",
    locale: "ko_KR",
    images: ["/damalhae/icon-512.png"],
  },
};

const APP_URL = "https://chat.lording.co.kr";
const DEMO_URL = "https://chat.lording.co.kr/demo";
const PRIVACY_URL = "https://chat.lording.co.kr/privacy";

const STEPS: [string, string][] = [
  ["방 만들기", `${APP_URL} 에서 방 이름을 정하고 들어가기`],
  [
    "초대 링크 보내기",
    "동료는 링크를 눌러 이름과 자기 언어만 고르면 끝. 회원가입 없음",
  ],
  [
    "자기 말로 쓰거나 말하기",
    "글도, 음성도 상대에게는 자동으로 자기 언어로 번역돼 보입니다",
  ],
];

const FEATURES: { title: string; desc: string }[] = [
  {
    title: "가입 없이 링크 하나로",
    desc: "방을 만들고 링크만 보내면 바로 대화. 회원가입·로그인·앱 설치 없음.",
  },
  {
    title: "쓰거나, 말하거나",
    desc: "🎤를 누른 채 말하면 글로 받아 적어 번역하고, 상대는 자기 언어 목소리로 들을 수 있습니다.",
  },
  {
    title: "일하는 말투 그대로",
    desc: "사람 이름·직함(이사·반장)은 바꾸지 않고, 앞 대화 흐름을 보고 번역. 한국어로 옮길 때는 존댓말.",
  },
  {
    title: "비밀번호 방",
    desc: "비밀번호를 아는 사람만 대화를 볼 수 있도록 보호된 공간을 만들 수 있습니다.",
  },
  {
    title: "1:1 대화·친구 목록",
    desc: "단체방에서 이름을 눌러 1:1 대화 시작, 함께 대화한 사람이 친구 목록에 쌓입니다.",
  },
  {
    title: "홈 화면 추가로 알림까지",
    desc: "폰 홈 화면에 추가하면 앱처럼 쓰고 새 메시지 알림을 받을 수 있습니다.",
  },
];

const LANGS = [
  "한국어",
  "English",
  "Tiếng Việt",
  "ภาษาไทย",
  "简体中文",
  "日本語",
  "Bahasa Indonesia",
  "O‘zbek",
  "ភាសាខ្មែរ",
  "नेपाली",
  "မြန်မာ",
  "Filipino",
  "Монгол",
  "বাংলা",
  "සිංහල",
  "Русский",
  "ລາວ",
  "Кыргызча",
  "Português (PT)",
  "Português (BR)",
];

const SCREENS: { file: string; label: string; sub: string }[] = [
  {
    file: "01-chat-ko.png",
    label: "한국인 관리자 화면",
    sub: "다국어 메시지가 한국어로 보임",
  },
  {
    file: "02-chat-vi.png",
    label: "베트남 직원 화면",
    sub: "모두 베트남어로 보임",
  },
  {
    file: "03-chat-th.png",
    label: "태국 직원 화면",
    sub: "모두 태국어로 보임",
  },
  {
    file: "04-chat-lo.png",
    label: "라오스 직원 화면",
    sub: "모두 라오스어로 보임",
  },
];

const SAFETY: [string, string][] = [
  ["HTTPS 암호화 통신", "모든 메시지와 음성은 암호화되어 오갑니다."],
  [
    "비밀번호 방·1:1 보호",
    "자격이 있는 기기만 읽을 수 있도록 데이터베이스에서 접근을 막습니다.",
  ],
  [
    "자동 삭제",
    "대화 내용은 1년 뒤 자동 삭제, 1년 동안 쓰지 않은 사용자 정보도 자동 삭제됩니다.",
  ],
  [
    "이메일은 선택",
    "회원가입이 없고, 이메일을 연결하더라도 광고 메일을 보내지 않습니다.",
  ],
];

export default function DamalhaePage() {
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
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta sw-cta"
            >
              혼자서 체험하기
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero sw-hero dh-hero" id="top">
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div className="wrap hero-inner">
          <span className="eyebrow dh-eyebrow">
            Real-time Translation Chat · 파일럿 운영 중
          </span>
          <h1 className="sw-h1 dh-h1">
            <span className="line">
              <span>말이 달라도,</span>
            </span>
            <span className="line">
              <span>
                <em>다 말해요.</em>
              </span>
            </span>
          </h1>
          <p className="lead">
            한국어로 쓰면 베트남 동료는 베트남어로, 태국 동료는 태국어로
            읽습니다. 20개 언어 실시간 번역 채팅, 다말해. 가입 없이 링크 하나로
            바로 시작하세요.
          </p>
          <div className="hero-actions">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary dh-btn-primary"
            >
              혼자서 체험하기 →
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              바로 쓰기
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="about sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag dh-tag">How to Use</span>
            <h2>이렇게 써요</h2>
            <p>복잡한 설정 없이 세 단계면 외국인 동료와 바로 대화합니다.</p>
          </div>
          <ol className="sw-steps dh-steps">
            {STEPS.map(([k, v], i) => (
              <li key={k}>
                <span className="sw-step-n dh-step-n">{i + 1}</span>
                <h4>{k}</h4>
                <p>{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SCREENSHOTS — 한 대화, 네 가지 언어 */}
      <section className="sec-pad dh-screens-sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag dh-tag">One Conversation, Four Languages</span>
            <h2>
              한 대화,
              <br className="dh-br-mobile" />
              <span className="dh-h2-accent"> 네 가지 언어</span>
            </h2>
            <p>
              같은 대화를 각자 자기 언어로 봅니다. 아래는 1공장 생산팀의 가상
              대화 화면입니다.
            </p>
          </div>
          <div className="dh-screens">
            {SCREENS.map((s) => (
              <figure key={s.file} className="dh-screen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/damalhae/screenshots/${s.file}`}
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
            * 번역문은 사람이 직접 쓴 가상 예시입니다. 실제 AI 번역 결과는 상황에
            따라 다를 수 있습니다.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec-pad" id="features">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag dh-tag">Features</span>
            <h2>주요 기능</h2>
            <p>지금 실제로 동작하는 기능들입니다.</p>
          </div>
          <div className="dh-feat-grid">
            {FEATURES.map((f) => (
              <div className="pcard dh-feat" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="values sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag dh-tag">Supported Languages</span>
            <h2>20개 언어 지원</h2>
            <p>
              화면 메뉴와 안내 문구까지 사용자 언어로 나옵니다. 음성 입력은
              대부분의 언어를 지원합니다.
            </p>
          </div>
          <ul className="dh-langs">
            {LANGS.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SAFETY */}
      <section className="sec-pad">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag dh-tag">Safety &amp; Privacy</span>
            <h2>안전·개인정보</h2>
          </div>
          <div className="val-grid">
            {SAFETY.map(([k, v], i) => (
              <div className="val" key={k}>
                <div className="vn dh-vn">{String(i + 1).padStart(2, "0")}</div>
                <h4>{k}</h4>
                <p>{v}</p>
              </div>
            ))}
          </div>
          <p className="dh-privacy-link">
            자세한 내용은{" "}
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              개인정보 처리방침
            </a>
            에서 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-pad" id="contact">
        <div className="wrap">
          <div className="contact-box dh-cta-box">
            <div>
              <span className="sec-tag dh-tag">Try Now</span>
              <h2>
                지금 혼자서
                <br />
                체험해 보세요
              </h2>
              <p>
                상대 없이 실제 번역이 어떻게 보이는지 바로 확인할 수 있습니다.
                현재 파일럿 운영 중이며, 추후 유료 전환이 예정되어 있습니다.
              </p>
              <div className="dh-cta-actions">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary dh-btn-primary"
                >
                  혼자서 체험하기 →
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  바로 쓰기
                </a>
              </div>
            </div>
            <div className="contact-info">
              <div className="cinfo-row">
                <div className="k">앱 주소</div>
                <div className="v">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    chat.lording.co.kr
                  </a>
                </div>
              </div>
              <div className="cinfo-row">
                <div className="k">형태</div>
                <div className="v">
                  웹앱 (브라우저에서 바로 실행, 앱스토어 앱 없음)
                </div>
              </div>
              <div className="cinfo-row">
                <div className="k">상태</div>
                <div className="v">파일럿 운영 중 · 추후 유료 전환 예정</div>
              </div>
              <div className="cinfo-row">
                <div className="k">도입 문의</div>
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
