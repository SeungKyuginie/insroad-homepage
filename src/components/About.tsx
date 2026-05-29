const principles = [
  {
    title: "Less, but better.",
    description:
      "필요한 것만 남기고 비웁니다. 단순함이 가장 신뢰할 수 있는 구조라고 믿습니다.",
  },
  {
    title: "Craft over speed.",
    description:
      "빠르게 만드는 것보다 오래 가는 것을 만듭니다. 코드 한 줄, 픽셀 하나에 정성을 둡니다.",
  },
  {
    title: "In quiet, we listen.",
    description:
      "고객의 문제를 깊이 들여다본 후 움직입니다. 좋은 질문이 좋은 결과를 만든다고 생각합니다.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-40">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-stone-500">
              <span className="h-px w-10 bg-stone-300" />
              About
            </div>
            <h2 className="mt-8 font-[family-name:var(--font-serif)] text-4xl leading-[1.15] text-stone-900 sm:text-5xl">
              기술로 길을 잇는,
              <br />
              조용한 장인들.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-stone-600 sm:text-lg">
              인스로드(INSROAD)는 통찰(Insight)과 길(Road)을 잇는 이름입니다.
              우리는 화려한 기술 트렌드보다 비즈니스의 본질에 더 오래 머무릅니다.
              스타트업의 첫 제품부터 엔터프라이즈의 장기 운영까지, 규모와
              산업에 구애받지 않고 코드로 답을 찾아 왔습니다.
            </p>
            <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
              기획부터 설계, 개발, 운영까지 — 하나의 흐름으로 책임지는
              파트너가 되겠습니다.
            </p>

            <ul className="mt-16 divide-y divide-stone-200 border-t border-stone-200">
              {principles.map((p, idx) => (
                <li
                  key={p.title}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-8 sm:grid-cols-[80px_1fr]"
                >
                  <span className="font-[family-name:var(--font-serif)] text-2xl text-stone-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg text-stone-900 sm:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600 sm:text-base">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
