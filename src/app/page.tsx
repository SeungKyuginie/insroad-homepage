"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hdr = document.getElementById("hdr");
    const onScroll = () => {
      if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <header id="hdr" className="site-header">
        <div className="wrap nav">
          <a href="#top" className="brand" aria-label="주식회사 인스로드 홈으로">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/insroadlogo.png" alt="INSROAD" />
            <span className="brand-co">주식회사 인스로드</span>
          </a>
          <nav className={`nav-links${menuOpen ? " open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              회사소개
            </a>
            <a href="#products" onClick={() => setMenuOpen(false)}>
              제품
            </a>
            <a href="#values" onClick={() => setMenuOpen(false)}>
              가치
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              문의
            </a>
          </nav>
          <a href="#contact" className="nav-cta">
            제휴 문의
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div className="hero-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/insroadlogo.png" alt="InsRoad 로고" />
        </div>
        <div className="wrap hero-inner">
          <span className="eyebrow">Software Company</span>
          <h1>
            <span className="line">
              <span>일하는 방식을</span>
            </span>
            <span className="line">
              <span>
                <em>다시 설계</em>합니다
              </span>
            </span>
          </h1>
          <p className="lead">
            주식회사 인스로드는 조직의 인사 관리와 콘텐츠 제작을 자동화하는
            소프트웨어를 만듭니다. 복잡한 업무를 단순하게, 반복되는 일을
            자동으로.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              제품 살펴보기 →
            </a>
            <a href="#contact" className="btn btn-ghost">
              제휴·문의하기
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about sec-pad" id="about">
        <div className="wrap">
          <div className="about-grid reveal">
            <div>
              <span className="sec-tag">About InsRoad</span>
              <p className="lead-txt">
                기술로 <em>사람의 시간</em>을 되찾아주는 회사.
              </p>
              <p className="body-txt">
                주식회사 인스로드(InsRoad)는 HR 솔루션, AI 기반 콘텐츠
                제작 서비스, 다국어 실시간 번역 채팅, 그리고 외국인 계절
                근로자 관리 프로그램까지 개발하는 소프트웨어 기업입니다.
                우리는 사람이 해야 할 판단에
                집중할 수 있도록, 반복적이고 소모적인 업무를 기술로 대체합니다.
                작지만 빠르게 움직이는 팀으로 실제 현장의 문제에서 출발한
                제품을 만듭니다.
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="num">HR</div>
                <div className="lab">인사·근태·급여·세금·결재 통합 운영</div>
              </div>
              <div className="stat">
                <div className="num">AI</div>
                <div className="lab">광고·상세페이지·블로그·숏츠 자동 생성</div>
              </div>
              <div className="stat">
                <div className="num">20개 언어</div>
                <div className="lab">실시간 번역 채팅</div>
              </div>
              <div className="stat">
                <div className="num">지자체·농가</div>
                <div className="lab">계절근로자 통합 관리</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="sec-pad" id="products">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-tag">Our Products</span>
            <h2>
              현장의 문제에서<br />
              출발한 제품
            </h2>
            <p>인스로드가 개발하고 있는 자체 소프트웨어 라인업입니다.</p>
          </div>
          <div className="products-grid">
            <div className="pcard reveal">
              <span className="badge">서비스 중</span>
              <div className="pico">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path d="M3 21v-2a6 6 0 016-6h6a6 6 0 016 6v2" />
                </svg>
              </div>
              <h3>인스로드 HR</h3>
              <div className="ptag">InsRoad HR · 인사·근태·급여·세금·전자결재 통합</div>
              <p>
                중소기업과 소상공인을 위한 통합 운영 솔루션. 근태·급여·세금·
                전자결재·매장 양식까지 한 화면에서 관리해 흩어진 사무업무를
                하나의 흐름으로 묶고 노무 리스크를 줄입니다. 이미 실제 현장
                에서 운영 중입니다.
              </p>
              <ul>
                <li>근태·급여·4대보험·세금 자동 계산</li>
                <li>세금계산서·전자결재 통합 관리</li>
                <li>매장별 양식과 보고서 운영</li>
                <li>PC·모바일 어디서나 같은 데이터</li>
              </ul>
              <div className="pcard-links">
                <a href="/hr" className="pcard-link">
                  자세히 보기 →
                </a>
                <a
                  href="https://hr.insroad.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pcard-link pcard-link-sub"
                >
                  hr.insroad.co.kr
                </a>
              </div>
            </div>
            <div className="pcard reveal">
              <span className="badge">서비스 중</span>
              <div className="pico">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M10 9l5 3-5 3V9z" />
                </svg>
              </div>
              <h3>숏츠마법사</h3>
              <div className="ptag">숏츠마법사 · 매장 홍보 콘텐츠 자동 제작</div>
              <p>
                매장 사진 몇 장만 올리면 유튜브 숏츠·인스타 릴스 영상, 네이버
                블로그 글, 상세페이지, 홍보 배너까지 자동으로 만들어 드립니다.
                마트·사진관 등 매장에서 현재 사용 중인 상용 서비스입니다.
              </p>
              <ul>
                <li>숏츠·릴스 영상 자동 제작</li>
                <li>네이버 블로그 글 작성</li>
                <li>상세페이지 자동 생성</li>
                <li>홍보 배너 제작</li>
              </ul>
              <div className="pcard-links">
                <a href="/shorts" className="pcard-link">
                  자세히 보기 →
                </a>
                <a
                  href="https://shorts.insroad.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pcard-link pcard-link-sub"
                >
                  바로 써보기
                </a>
              </div>
            </div>
            <div className="pcard reveal">
              <span className="badge">파일럿 운영 중</span>
              <div className="pico">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
              </div>
              <h3>다말해</h3>
              <div className="ptag">Damalhae · 실시간 번역 채팅</div>
              <p>
                한국어로 쓰면 베트남 동료는 베트남어로, 태국 동료는 태국어로
                읽습니다. 가입 없이 링크 하나로 바로 시작하는 20개 언어
                실시간 번역 채팅. 외국인 직원·다국적 팀의 업무 소통을 위해
                만들어진 서비스입니다.
              </p>
              <ul>
                <li>20개 언어 실시간 번역</li>
                <li>가입 없이 링크 하나로 시작</li>
                <li>글·음성 메시지 모두 지원</li>
                <li>이름·직함·존댓말까지 업무 맥락 반영</li>
              </ul>
              <div className="pcard-links">
                <a href="/damalhae" className="pcard-link">
                  자세히 보기 →
                </a>
                <a
                  href="https://chat.lording.co.kr/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pcard-link pcard-link-sub"
                >
                  혼자서 체험하기
                </a>
              </div>
            </div>
            <div className="pcard reveal">
              <span className="badge">도입 상담 중</span>
              <div className="pico">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
                  <path d="M9 3h6a2 2 0 012 2v1h3v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6h3V5a2 2 0 012-2z" />
                  <path d="M9 11h6M9 15h4" />
                </svg>
              </div>
              <h3>계절근로자 관리</h3>
              <div className="ptag">지자체·농가 통합 관리 프로그램</div>
              <p>
                담당 공무원 한두 명이 수백 명을 엑셀로 관리하던 외국인
                계절근로자 업무를 하나의 화면으로. 체류 만료, 임금 점검, 이탈
                대응, 다국어 계약서까지 지자체 담당자와 농가가 함께
                사용합니다.
              </p>
              <ul>
                <li>근로자·농가 통합 대시보드</li>
                <li>농가 모바일 출근·근태 입력</li>
                <li>체류·보험·점검 알림 센터</li>
                <li>10개 이상 언어 근로계약서</li>
                <li>다말해 연동으로 20개 언어 실시간 소통</li>
              </ul>
              <div className="pcard-links">
                <a href="/seasonal-worker" className="pcard-link">
                  자세히 보기 →
                </a>
                <a href="#contact" className="pcard-link pcard-link-sub">
                  도입 문의하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values sec-pad" id="values">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-tag">How We Work</span>
            <h2>우리가 일하는 방식</h2>
          </div>
          <div className="val-grid reveal">
            <div className="val">
              <div className="vn">01</div>
              <h4>현장에서 출발</h4>
              <p>
                책상 위 아이디어가 아니라 실제 업무 현장의 불편에서 제품을
                시작합니다.
              </p>
            </div>
            <div className="val">
              <div className="vn">02</div>
              <h4>빠르게 만든다</h4>
              <p>작은 팀의 강점을 살려 빠르게 만들고, 쓰면서 다듬습니다.</p>
            </div>
            <div className="val">
              <div className="vn">03</div>
              <h4>단순함을 설계</h4>
              <p>
                복잡한 기능보다, 쓰는 사람이 고민하지 않아도 되는 단순함을
                추구합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec-pad" id="contact">
        <div className="wrap">
          <div className="contact-box reveal">
            <div>
              <span className="sec-tag">Contact</span>
              <h2>
                함께할 이야기가<br />
                있으신가요?
              </h2>
              <p>
                제품 도입, 제휴, 채용 등 무엇이든 편하게 연락 주세요. 빠르게
                회신드리겠습니다.
              </p>
              <a href="mailto:limbus2021@naver.com" className="btn btn-primary">
                이메일 보내기 →
              </a>
            </div>
            <div className="contact-info">
              <div className="cinfo-row">
                <div className="k">상호</div>
                <div className="v">주식회사 인스로드 (InsRoad Co., Ltd.)</div>
              </div>
              <div className="cinfo-row">
                <div className="k">대표</div>
                <div className="v">김경애</div>
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
              <div className="cinfo-row">
                <div className="k">주소</div>
                <div className="v">
                  서울특별시 중랑구 신내역로3길 40-36
                  <br />
                  신내데시앙플렉스 B동 1207호
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand-wrap">
              <div className="foot-brand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/insroadlogo.png" alt="INSROAD" />
              </div>
              <p className="foot-desc">
                HR 솔루션, AI 콘텐츠 제작 서비스, 실시간 번역 채팅, 계절근로자 관리 프로그램을 개발하는 소프트웨어 기업.
              </p>
            </div>
            <div className="foot-legal">
              <div>
                <span className="hl">주식회사 인스로드</span> | 대표 김경애
              </div>
              <div>사업자등록번호 501-88-03153</div>
              <div>
                서울특별시 중랑구 신내역로3길 40-36 신내데시앙플렉스 B동
                1207호
              </div>
              <div>limbus2021@naver.com · 070-8064-1478</div>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2026 InsRoad Co., Ltd. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
