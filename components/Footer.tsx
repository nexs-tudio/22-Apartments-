export default function Footer() {
  return (
    <footer className="py-10 border-t-[3px] border-[#ffdf4f] text-center mt-auto bg-[#2c2c2c] text-[#fdfaf5]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-2xl font-bold tracking-widest uppercase mb-4">
          <span className="font-serif italic text-3xl mr-2 text-[#ffdf4f] drop-shadow-[0_0_8px_rgba(255,223,79,0.6)]">22</span>
          Apartments
        </div>
        <p className="mb-6 opacity-80">Elevating fine living with modern style and timeless luxury.</p>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} 22 Apartments. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
