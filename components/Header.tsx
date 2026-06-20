import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-10 flex justify-between items-center bg-[#f4ecdf] text-[#1c1c1c]">
      <div className="text-xl font-bold tracking-widest uppercase flex items-center gap-2 font-[family-name:var(--font-oswald)]">
        <span className="text-[#cca752] text-2xl leading-none">•</span>
        22 APARTMENTS
      </div>
      <nav className="flex items-center gap-8 text-sm font-medium text-[#1c1c1c]/70">
        <Link href="#apartments" className="hover:text-[#1c1c1c] transition-colors">
          Apartments
        </Link>
        <Link href="#gallery" className="hover:text-[#1c1c1c] transition-colors">
          Gallery
        </Link>
        <Link href="#about" className="hover:text-[#1c1c1c] transition-colors">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-[#1c1c1c] transition-colors">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
