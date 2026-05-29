export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center rounded-md bg-brand-600 text-sm font-bold text-white"
              >
                IR
              </span>
              <span className="text-base font-semibold text-slate-900">
                주식회사 인스로드
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              비즈니스의 길을 코드로 잇는 소프트웨어 개발 전문 기업.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-slate-900">이메일</dt>
              <dd>contact@insroad.co.kr</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900">사업자등록번호</dt>
              <dd>000-00-00000</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-slate-900">주소</dt>
              <dd>서울특별시</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-400">
          © {year} INSROAD Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
