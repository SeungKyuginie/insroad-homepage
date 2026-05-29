export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-1/2 aspect-[1155/678] w-[60rem] -translate-x-1/2 bg-gradient-to-tr from-brand-400 to-brand-700 opacity-20" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-medium text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            소프트웨어 개발 전문 기업
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            비즈니스의 길을
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              코드로 잇습니다.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            주식회사 인스로드는 웹·모바일·클라우드 기술로
            <br className="hidden sm:block" />
            고객의 디지털 전환을 가장 빠르고 안정적으로 실현합니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-600 px-7 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 sm:w-auto"
            >
              프로젝트 문의하기
            </a>
            <a
              href="#services"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:w-auto"
            >
              서비스 살펴보기
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-4">
          {[
            { k: "100+", v: "프로젝트 수행" },
            { k: "50+", v: "협력 고객사" },
            { k: "10년+", v: "현장 노하우" },
            { k: "24/7", v: "기술 지원" },
          ].map((s) => (
            <div key={s.v} className="flex flex-col items-center text-center">
              <dt className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {s.k}
              </dt>
              <dd className="mt-1 text-sm text-slate-500">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
