import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/70 bg-stone-50/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.2em] text-stone-900"
        >
          INSROAD
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs uppercase tracking-[0.18em] text-stone-900"
        >
          <span className="border-b border-stone-900 pb-0.5">Get in touch</span>
        </a>
      </div>
    </header>
  );
}
