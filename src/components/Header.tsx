import Link from "next/link";

const navItems = [
  { href: "#about", label: "회사 소개" },
  { href: "#services", label: "서비스" },
  { href: "#contact", label: "문의하기" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-md bg-brand-600 text-sm font-bold text-white"
          >
            IR
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              INSROAD
            </span>
            <span className="text-[11px] text-slate-500">주식회사 인스로드</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 md:inline-flex"
        >
          프로젝트 문의
        </a>
      </div>
    </header>
  );
}
