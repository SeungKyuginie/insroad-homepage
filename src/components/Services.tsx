type Service = {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
};

const iconClass = "h-6 w-6";

const services: Service[] = [
  {
    title: "웹 서비스 개발",
    description:
      "Next.js·React 기반의 빠르고 견고한 웹 서비스를 설계부터 배포까지 책임집니다.",
    items: ["반응형 웹사이트", "관리자 대시보드", "SaaS 플랫폼"],
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    title: "모바일 앱 개발",
    description:
      "React Native·Flutter로 iOS와 Android를 한 번에, 네이티브 수준의 경험으로 구현합니다.",
    items: ["크로스 플랫폼", "네이티브 모듈 연동", "앱스토어 배포"],
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "클라우드 · DevOps",
    description:
      "AWS·GCP 기반의 확장 가능한 인프라와 CI/CD 자동화로 운영 비용을 최적화합니다.",
    items: ["인프라 설계", "CI/CD 구축", "모니터링 · 운영"],
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 0 0 4.5 13.5 4.5 4.5 0 0 0 6 19h11.5z" />
      </svg>
    ),
  },
  {
    title: "AI · 데이터 솔루션",
    description:
      "LLM·머신러닝 기술을 제품에 자연스럽게 녹여 새로운 가치를 만들어냅니다.",
    items: ["LLM 통합", "데이터 파이프라인", "AI 챗봇"],
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            제품의 시작과 끝, 인스로드가 함께합니다.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            한 분야에 머무르지 않고, 비즈니스에 필요한 모든 기술을 연결합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
                {service.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <svg
                      className="h-4 w-4 text-brand-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
