export const ContactUs = () => {
    const contactItems = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[#cca752]">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            label: "Visit Us",
            values: ["Colombo, Western Province, Sri Lanka"],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[#cca752]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            label: "Call us",
            values: [
                "+94 71 694 4441",
                "+94 71 900 9600"
            ],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[#cca752]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: "Email Us",
            values: [
                "amashakya7@hotmail.com",
                "Yushinmalinga@yahoo.com"
            ],
        },
    ];

    return (
        <section
            id="contact"
            className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section label */}
                <div className="flex items-center gap-3 mb-8 sm:mb-12">
                    <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#cca752]">
                        Contact Us
                    </span>
                    <span className="block w-6 sm:w-7 h-px bg-[#cca752]" />
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

                    {/* ── Left: headline + contact details ── */}
                    <div>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] leading-tight mb-4 sm:mb-6">
                            Let's find your
                            <br />
                            <em className="not-italic text-[#cca752]">place to belong.</em>
                        </h2>
                        <p className="text-sm sm:text-base text-[#1c1c1c]/60 leading-relaxed mb-8 sm:mb-12 max-w-sm">
                            Whether you're a local searching for a new home or an international renter planning your move, our team is here to guide you every step of the way.
                        </p>

                        {/* Contact info items */}
                        <div className="flex flex-col gap-5 sm:gap-6">
                            {contactItems.map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#1c1c1c] flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col gap-1 pt-0.5">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-[#1c1c1c]">
                                            {item.label}
                                        </span>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 flex-wrap">
                                            {item.values.map((v, index) => (
                                                <div key={v} className="flex items-center gap-2">
                                                    {index > 0 && (
                                                        <span className="hidden sm:block w-1 h-1 bg-[#cca752] flex-shrink-0" />
                                                    )}
                                                    <span className="text-xs sm:text-sm text-[#1c1c1c]/60">{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: dark panel with Our Promise ── */}
                    <div className="bg-[#1c1c1c] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-80 md:min-h-96">

                        {/* Promise content (moved from AboutUs) */}
                        <div className="relative">
                            <span
                                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-7xl sm:text-[120px] font-bold leading-none select-none pointer-events-none"
                                style={{ color: "rgba(204,167,82,0.06)" }}
                                aria-hidden="true"
                            >
                                22
                            </span>

                            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#cca752] mb-4 sm:mb-6 relative z-10">
                                Our Promise
                            </p>

                            <blockquote className="relative z-10">
                                <p className="font-serif text-xl sm:text-2xl md:text-3xl italic font-semibold text-[#f4ecdf] leading-snug mb-4 sm:mb-6">
                                    "Transparency builds trust. That is the founding belief of everything we do."
                                </p>
                                <footer className="text-[10px] sm:text-xs text-[#fdfaf5]/40 tracking-widest uppercase">
                                    — 22 Apartments
                                </footer>
                            </blockquote>

                            <p className="relative z-10 text-sm sm:text-base leading-relaxed text-[#d4c5a9] mt-5 sm:mt-6">
                                Every landlord we partner with is committed to honest communication. Every
                                listing has passed our internal review. Every person — whether searching from
                                Colombo or Copenhagen — deserves to be treated with respect and honesty.
                            </p>
                            <p className="relative z-10 italic text-[#cca752] text-sm sm:text-base mt-3">
                                This is more than a rental platform. It is a community built on trust.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};