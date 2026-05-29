const services = [
  {
    no: "01",
    title: "Web",
    korean: "웹 서비스",
    description:
      "Next.js와 React 기반의 견고하고 빠른 웹. 랜딩 페이지부터 대규모 SaaS 플랫폼까지.",
    items: ["반응형 웹사이트", "관리자 대시보드", "SaaS 플랫폼"],
  },
  {
    no: "02",
    title: "Mobile",
    korean: "모바일 앱",
    description:
      "React Native·Flutter로 iOS와 Android를 한 흐름으로. 네이티브에 가까운 경험을 만듭니다.",
    items: ["크로스 플랫폼 앱", "네이티브 연동", "스토어 배포"],
  },
  {
    no: "03",
    title: "Cloud",
    korean: "클라우드 · DevOps",
    description:
      "AWS와 GCP 위에서 확장 가능한 인프라와 자동화된 배포를 설계합니다.",
    items: ["인프라 설계", "CI/CD 자동화", "모니터링 운영"],
  },
  {
    no: "04",
    title: "AI",
    korean: "AI · 데이터",
    description:
      "LLM과 머신러닝을 제품에 자연스럽게 녹여 새로운 가치를 더합니다.",
    items: ["LLM 통합", "데이터 파이프라인", "AI 어시스턴트"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-stone-100/60">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-40">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-stone-500">
              <span className="h-px w-10 bg-stone-300" />
              Services
            </div>
            <h2 className="mt-8 font-[family-name:var(--font-serif)] text-4xl leading-[1.15] text-stone-900 sm:text-5xl">
              제품의 시작과 끝,
              <br />
              한 흐름으로.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-stone-600 sm:text-base">
            한 분야에 머무르지 않고, 비즈니스에 필요한 모든 기술을 연결합니다.
          </p>
        </div>

        <ul className="mt-20 divide-y divide-stone-200 border-y border-stone-200">
          {services.map((s) => (
            <li key={s.no}>
              <article className="group grid grid-cols-1 gap-6 py-10 transition sm:grid-cols-12 sm:gap-10 sm:py-14">
                <div className="font-[family-name:var(--font-serif)] text-2xl text-stone-400 sm:col-span-1">
                  {s.no}
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-[family-name:var(--font-serif)] text-3xl text-stone-900 sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                    {s.korean}
                  </p>
                </div>
                <p className="text-sm leading-7 text-stone-600 sm:col-span-5 sm:text-base sm:leading-8">
                  {s.description}
                </p>
                <ul className="space-y-2 text-sm text-stone-500 sm:col-span-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-px w-3 bg-stone-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
