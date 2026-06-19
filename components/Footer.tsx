export default function Footer() {
  return (
    <footer className="py-10 border-t-[3px] border-[#ffdf4f] text-center mt-auto bg-[#2c2c2c] text-[#fdfaf5]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-2xl font-bold tracking-wider mb-4">
          <span className="text-[#ffdf4f] drop-shadow-[0_0_8px_rgba(255,223,79,0.4)]">LUMI</span>N
        </div>
        <p className="mb-6 opacity-80">Lighting the way forward with style and precision.</p>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} LUMIN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
