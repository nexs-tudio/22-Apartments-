import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-10 flex justify-between items-center bg-[#fdfaf5] text-[#2c2c2c] shadow-md border-b-[1px] border-[#2c2c2c]/10">
      <div className="text-3xl font-bold tracking-widest uppercase">
        <span className="font-serif italic text-4xl mr-2 text-[#ffdf4f] drop-shadow-[0_0_8px_rgba(255,223,79,0.8)]">22</span>
        Apartments
      </div>
      <nav>
        <ul className="flex space-x-8 font-semibold">
          <li>
            <Link href="/" className="hover:text-[#ffdf4f] hover:drop-shadow-[0_0_5px_rgba(255,223,79,0.8)] transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-[#ffdf4f] hover:drop-shadow-[0_0_5px_rgba(255,223,79,0.8)] transition-all">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#ffdf4f] hover:drop-shadow-[0_0_5px_rgba(255,223,79,0.8)] transition-all">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
