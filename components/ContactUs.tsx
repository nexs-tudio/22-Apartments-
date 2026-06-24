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

    const socialLinks = [
        { label: "FB", href: "#" },
        { label: "IG", href: "#" },
        { label: "WA", href: "#" },
        { label: "Li", href: "#" },
    ];

    return (
        <section
            id="contact"
            className="w-full bg-[#f4ecdf] py-24 px-6"
        >
            <div className="max-w-5xl mx-auto">

                {/* Section label */}
                <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#cca752]">
                        Contact Us
                    </span>
                    <span className="block w-7 h-px bg-[#cca752]" />
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* ── Left: headline + contact details ── */}
                    <div>
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1c1c1c] leading-[1.18] mb-5">
                            Let's find your
                            <br />
                            <em className="not-italic text-[#cca752]">place to belong.</em>
                        </h2>
                        <p className="text-base text-[#1c1c1c]/60 leading-relaxed mb-12 max-w-sm">
                            Whether you're a local searching for a new home or an international renter planning your move, our team is here to guide you every step of the way.
                        </p>

                        {/* Contact info items */}
                        <div className="flex flex-col gap-6">
                            {contactItems.map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-sm bg-[#1c1c1c] flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col gap-1 pt-0.5">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-[#1c1c1c]">
                                            {item.label}
                                        </span>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {item.values.map((v, index) => (
                                                <div key={v} className="flex items-center gap-2">
                                                    {index > 0 && (
                                                        <span className="w-1 h-1 rounded-full bg-[#cca752] shrink-0" />
                                                    )}
                                                    <span className="text-sm text-[#1c1c1c]/60">{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: dark panel ── */}
                    <div className="bg-[#1c1c1c] rounded-sm p-10 flex flex-col justify-between min-h-90">

                        {/* Watermark number */}
                        <div className="relative">
                            <span
                                className="absolute -top-4 -right-2 text-[120px] font-bold leading-none select-none pointer-events-none"
                                style={{ color: "rgba(204,167,82,0.06)" }}
                                aria-hidden="true"
                            >
                                22
                            </span>

                            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#cca752] mb-6 relative z-10">
                                Our Promise
                            </p>

                            <blockquote className="relative z-10">
                                <p className="font-serif text-2xl sm:text-3xl italic font-semibold text-[#f4ecdf] leading-snug mb-6">
                                    "Transparency builds trust. That is the founding belief of everything we do."
                                </p>
                                <footer className="text-xs text-[#fdfaf5]/40 tracking-widest uppercase">
                                    — Apartment 22
                                </footer>
                            </blockquote>
                        </div>

                        {/* Divider */}
                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="text-xs text-[#fdfaf5]/40 mb-4 uppercase tracking-widest">
                                Find us on
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-xs font-semibold text-[#fdfaf5]/50 hover:border-[#cca752] hover:text-[#cca752] transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom rule */}
                {/* <div className="mt-20 h-px bg-[#1c1c1c]/10" /> */}
            </div>
        </section>
    );
};