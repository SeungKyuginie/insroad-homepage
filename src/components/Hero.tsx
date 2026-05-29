export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-32 sm:px-10 sm:pt-40 sm:pb-44">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-stone-500">
          <span className="h-px w-10 bg-stone-300" />
          Software Studio · Est. Seoul
        </div>

        <h1 className="mt-10 max-w-4xl text-5xl leading-[1.05] tracking-tight text-stone-900 sm:text-7xl md:text-[88px]">
          고요한 기술,
          <br />
          <span className="font-[family-name:var(--font-serif)] italic font-normal text-stone-700">
            깊은 결과.
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
          주식회사 인스로드는 군더더기 없는 코드와 정제된 디자인으로
          비즈니스의 본질에 집중하는 소프트웨어 스튜디오입니다.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-stone-900"
          >
            <span className="border-b border-stone-900 pb-1">
              프로젝트 시작하기
            </span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#services"
            className="text-sm tracking-wide text-stone-500 transition hover:text-stone-900"
          >
            서비스 둘러보기
          </a>
        </div>
      </div>

      <div className="border-y border-stone-200">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-stone-200 px-6 sm:grid-cols-4 sm:divide-x sm:px-10">
          {[
            { k: "2014", v: "Founded" },
            { k: "100+", v: "Projects shipped" },
            { k: "50+", v: "Long-term clients" },
            { k: "12", v: "Studio members" },
          ].map((s, i) => (
            <div
              key={s.v}
              className={`flex flex-col gap-2 px-2 py-10 sm:px-8 ${
                i < 2 ? "border-b border-stone-200 sm:border-b-0" : ""
              }`}
            >
              <dt className="font-[family-name:var(--font-serif)] text-4xl text-stone-900 sm:text-5xl">
                {s.k}
              </dt>
              <dd className="text-xs uppercase tracking-[0.18em] text-stone-500">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
