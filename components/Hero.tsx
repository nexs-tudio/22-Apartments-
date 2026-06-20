export const Hero = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-10 py-16 flex flex-col lg:flex-row items-center gap-16 bg-white rounded-[32px] shadow-[0_18px_50px_rgba(28,28,28,0.06)]">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start text-left">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#cca752]"></div>
          <span className="text-[#cca752] text-xs font-bold tracking-[0.2em] uppercase">
            Premium Residences &middot; IDH, Colombo
          </span>
        </div>

        <h1 className="text-[6rem] leading-[0.85] font-bold text-[#1c1c1c] font-[family-name:var(--font-oswald)] uppercase">
          LIVE<br />
          ABOVE
        </h1>
        <h2 className="text-[6rem] leading-[0.8] text-[#cca752] font-[family-name:var(--font-playfair)] italic mb-8 mt-2 lowercase">
          the rest
        </h2>

        <p className="text-[#1c1c1c]/70 max-w-[400px] mb-12 text-sm leading-relaxed">
          22 meticulously designed apartments in IDH, Colombo, offering an elevated lifestyle where modern architecture meets curated living.
        </p>

        <div className="flex items-center gap-8">
          <button className="px-8 py-3.5 bg-[#1c1c1c] text-white font-medium text-sm rounded-[32px] hover:bg-[#2a2a2a] transition-all">
            View Apartments
          </button>
          <button className="text-[#1c1c1c] font-medium text-sm hover:text-[#cca752] transition-colors flex items-center gap-2">
            Schedule Tour <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Right Image/Mockup */}
      <div className="flex-1 relative w-full aspect-[4/5] bg-gray-200 rounded-[32px] overflow-hidden shadow-xl">
        {/* Placeholder image background */}
        <div className="absolute inset-0 bg-neutral-300"></div>
        
        {/* Badges */}
        <div className="absolute top-8 right-6 flex flex-col gap-3">
          <div className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-semibold flex items-center gap-2 text-[#1c1c1c]">
            <span>🏊</span> Pool & Spa
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-semibold flex items-center gap-2 text-[#1c1c1c]">
            <span>🏋️</span> Fitness Center
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-semibold flex items-center gap-2 text-[#1c1c1c]">
            <span>🛡️</span> 24/7 Security
          </div>
        </div>
      </div>
      
    </div>
  );
};
