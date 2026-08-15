import Link from "next/link";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function NavBar() {
  return (
    <header className="px-6 sm:px-10 lg:px-20 py-8 w-full">
      <nav className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-150" />
          <span className="tracking-[0.35em] text-sm font-semibold uppercase">
            Rijas
          </span>
        </Link>
        <ul className="flex items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm text-secondarytext transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
