import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf5]">
      <header className="w-full py-6 px-10 flex justify-between items-center bg-[#fdfaf5] shadow-sm">
        <div className="text-2xl font-bold text-gray-800 tracking-wider">
          <span className="text-[#D4AF37]" style={{ textShadow: "0 0 10px rgba(212,175,55,0.5)" }}>LUMI</span>N
        </div>
        <nav className="flex gap-8">
          <Link href="/" className="font-semibold text-gray-700 hover:text-[#D4AF37] hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.8)] transition-all">
            Home
          </Link>
          <Link href="/services" className="font-semibold text-gray-700 hover:text-[#D4AF37] hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.8)] transition-all">
            Services
          </Link>
          <Link href="/pricing" className="font-semibold text-gray-700 hover:text-[#D4AF37] hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.8)] transition-all">
            Pricing
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Hero />
      </main>
    </div>
  );
}
