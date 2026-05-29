export function Contact() {
  return (
    <section id="contact" className="bg-stone-900 text-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-40">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-stone-400">
              <span className="h-px w-10 bg-stone-600" />
              Contact
            </div>
            <h2 className="mt-8 font-[family-name:var(--font-serif)] text-4xl leading-[1.1] text-stone-50 sm:text-6xl">
              새로운 길을
              <br />
              함께 만들어 갈 분을 찾습니다.
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-stone-400">
              아이디어 단계라도 좋습니다. 인스로드가 가장 조용한 방식으로
              가장 단단한 답을 찾아드립니다.
            </p>
          </div>

          <div className="lg:col-span-5">
            <dl className="divide-y divide-stone-700/70 border-y border-stone-700/70">
              <div className="grid grid-cols-3 gap-4 py-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Email
                </dt>
                <dd className="col-span-2">
                  <a
                    href="mailto:contact@insroad.co.kr"
                    className="text-base text-stone-50 underline-offset-4 hover:underline"
                  >
                    contact@insroad.co.kr
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Studio
                </dt>
                <dd className="col-span-2 text-base text-stone-300">
                  Seoul, Republic of Korea
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Hours
                </dt>
                <dd className="col-span-2 text-base text-stone-300">
                  Mon — Fri · 10:00 – 19:00 KST
                </dd>
              </div>
            </dl>

            <a
              href="mailto:contact@insroad.co.kr"
              className="group mt-10 inline-flex items-center gap-3 text-sm tracking-wide text-stone-50"
            >
              <span className="border-b border-stone-50 pb-1">
                이메일로 문의 보내기
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
