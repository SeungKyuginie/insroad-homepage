export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <p className="text-sm font-medium tracking-[0.2em] text-stone-900">
              INSROAD
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-stone-500">
              고요한 기술로 비즈니스의 길을 잇는 소프트웨어 스튜디오.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-y-8 text-sm sm:col-span-7 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-stone-400">
                Contact
              </dt>
              <dd className="mt-3 text-stone-700">contact@insroad.co.kr</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-stone-400">
                사업자등록
              </dt>
              <dd className="mt-3 text-stone-700">000-00-00000</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-stone-400">
                Studio
              </dt>
              <dd className="mt-3 text-stone-700">Seoul, KR</dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-stone-200 pt-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} INSROAD Inc.</span>
          <span className="tracking-[0.18em] uppercase">
            Quiet tech, deep results.
          </span>
        </div>
      </div>
    </footer>
  );
}
