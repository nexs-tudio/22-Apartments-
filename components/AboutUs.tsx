export default function AboutUs() {
  return (
    <section
      className="w-full bg-[#f4ecdf] text-[#1c1c1c] py-12 sm:py-16 md:py-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1c1c1c] text-[#cca752] text-xs tracking-[3px] uppercase px-4 py-1.5 mb-6 sm:mb-8">
          <span className="text-[#f4ecdf]">Est. Colombo</span> · Sri Lanka's Trusted Rental Platform
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#cca752] leading-tight mb-2 sm:mb-4">About Us</h2>
        <p className="text-base sm:text-lg text-[#5a4a2e] italic mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-[#cca752]/25">
          Where Every Space Tells a Story.
        </p>

        {/* Who We Are */}
        <div className="mb-8 sm:mb-12">
          <SectionLabel>Who we are</SectionLabel>
          <p className="text-sm sm:text-base leading-relaxed text-[#3a2e1e] mb-3 sm:mb-4">
            Welcome to <span className="italic text-[#cca752]">22</span>{" "}
            <strong>APARTMENTS</strong> — a Sri Lanka-based property platform dedicated to
            connecting people with quality apartments they can truly call home. We are a team
            of passionate locals who understand what it's like to search for a home in a
            busy, fast-moving rental market.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#3a2e1e]">
            We know the anxiety of arriving at a listing that looks nothing like the photos.
            So we built <span className="italic text-[#cca752]">22 Apartments</span> to
            change that — for every renter, from every corner of the world.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-8 sm:mb-12">
          <SectionLabel>What we do</SectionLabel>
          <p className="text-sm sm:text-base leading-relaxed text-[#3a2e1e] mb-4 sm:mb-6">
            Every property is personally verified by our local team — on-site inspections,
            confirmed landlord credentials, and no hidden fees. What you see online is
            exactly what you'll find in person.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#ede4d3] p-5 sm:p-6 border-t-[3px] border-[#cca752]">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#cca752] mb-2 sm:mb-3">For locals</h4>
              <p className="text-sm leading-relaxed text-[#3a2e1e]">
                Simple, verified listings with real landlords, fair pricing, and properties
                you can trust — no misleading descriptions.
              </p>
            </div>
            <div className="bg-[#ede4d3] p-5 sm:p-6 border-t-[3px] border-[#cca752]">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#cca752] mb-2 sm:mb-3">For internationals</h4>
              <p className="text-sm leading-relaxed text-[#3a2e1e]">
                English support, virtual tours, transparent pricing in LKR & USD, and a
                team built for renting from abroad.
              </p>
            </div>
          </div>
        </div>

        {/* International */}
        <div className="mb-8 sm:mb-12">
          <SectionLabel>Our international community</SectionLabel>
          <p className="text-sm sm:text-base leading-relaxed text-[#3a2e1e] mb-3 sm:mb-4">
            New country. New city. New chapter. We've helped professionals, families, and
            individuals from Europe, Asia, the Middle East, and beyond find apartments they
            are proud to call home in Sri Lanka.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#3a2e1e]">
            You do not have to be here to find your place here. We handle the groundwork —
            so you can arrive with confidence.
          </p>
        </div>

        {/* Promise */}
        <div className="bg-[#1c1c1c] text-[#f4ecdf] p-6 sm:p-8 mb-8 sm:mb-10">
          <SectionLabel dark>Our promise</SectionLabel>
          <blockquote className="text-lg sm:text-xl italic text-[#cca752] border-l-[3px] border-[#cca752] pl-4 my-4 sm:my-6">
            Transparency builds trust.
          </blockquote>
          <p className="text-sm sm:text-base leading-relaxed text-[#d4c5a9] mb-3 sm:mb-4">
            Every landlord we partner with is committed to honest communication. Every
            listing has passed our internal review. Every person — whether searching from
            Colombo or Copenhagen — deserves to be treated with respect and honesty.
          </p>
          <p className="italic text-[#cca752] text-sm sm:text-base">
            This is more than a rental platform. It is a community built on trust.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button className="bg-[#cca752] text-[#1c1c1c] font-bold text-sm tracking-wide px-6 sm:px-8 py-3 hover:bg-[#b8913e] transition-colors">
            Explore Listings
          </button>
          <button className="bg-transparent text-[#1c1c1c] font-bold text-sm tracking-wide px-6 sm:px-8 py-3 border-2 border-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-[#f4ecdf] transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-xs tracking-[3px] uppercase font-bold text-[#cca752] mb-3 sm:mb-4`}>
      {children}
      <span className={`flex-1 h-px ${dark ? "bg-[#cca752]/20" : "bg-[#cca752]/20"}`} />
    </div>
  );
}