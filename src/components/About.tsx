const values = [
  {
    title: "신뢰",
    description:
      "납기와 품질에 대한 약속을 지키며, 투명한 커뮤니케이션으로 고객과 동행합니다.",
  },
  {
    title: "전문성",
    description:
      "최신 기술과 검증된 아키텍처로 비즈니스 문제를 가장 효율적인 방식으로 해결합니다.",
  },
  {
    title: "지속성",
    description:
      "단순 납품을 넘어 운영·고도화 단계까지 함께하는 장기 파트너가 되겠습니다.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              About INSROAD
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              기술로 길을 만드는 회사,
              <br />
              주식회사 인스로드.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              인스로드(INSROAD)는 &lsquo;Insight&rsquo;와 &lsquo;Road&rsquo;의
              합성어로, 통찰력 있는 기술로 고객의 새로운 길을 열어간다는 의미를
              담고 있습니다. 우리는 작은 스타트업부터 대규모 엔터프라이즈까지,
              규모와 산업에 구애받지 않고 비즈니스의 본질에 집중한 소프트웨어를
              만들어 왔습니다.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              기획부터 개발, 배포, 그리고 운영까지 — 제품의 전 주기를 함께
              책임지는 진짜 기술 파트너가 되겠습니다.
            </p>
          </div>

          <ul className="grid gap-6">
            {values.map((v, idx) => (
              <li
                key={v.title}
                className="group relative flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-md"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {v.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
