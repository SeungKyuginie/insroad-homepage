export function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          새로운 길을 함께 만들어 갈 준비가 되셨다면.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          아이디어 단계라도 좋습니다. 인스로드가 가장 빠른 길을 함께
          찾아드립니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="mailto:contact@insroad.co.kr"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 sm:w-auto"
          >
            contact@insroad.co.kr
          </a>
          <a
            href="tel:+8200000000"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            전화 상담 요청
          </a>
        </div>
      </div>
    </section>
  );
}
