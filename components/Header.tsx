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
        <Link href="#amenities" className="hover:text-[#1c1c1c] transition-colors">
          Amenities
        </Link>
        <Link href="#floor-plans" className="hover:text-[#1c1c1c] transition-colors">
          Floor Plans
        </Link>
        <Link href="/contact" className="hover:text-[#1c1c1c] transition-colors">
          Contact
        </Link>
        <Link 
          href="#schedule" 
          className="ml-4 px-6 py-2.5 bg-[#1c1c1c] text-white rounded-[24px] hover:bg-[#2a2a2a] transition-colors font-semibold"
        >
          Schedule Tour
        </Link>
      </nav>
    </header>
  );
}
