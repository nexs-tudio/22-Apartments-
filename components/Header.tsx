'use client';

import Link from 'next/link';
import { useEffect, useState, useRef, useCallback } from 'react';

const NAV_LINKS = [
  { href: '#properties', label: 'Properties', section: 'properties' },
  { href: '#about', label: 'About Us', section: 'about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [ctaLabel, setCtaLabel] = useState('Contact Us');
  const lastY = useRef(0);

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening');
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (y / max) * 100 : 0);
      setScrolled(y > 60);
      setHidden(y > lastY.current && y > 120);
      setCtaLabel(y / max > 0.45 ? 'Book a Viewing' : 'Contact Us');
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = NAV_LINKS.map(l => document.getElementById(l.section)).filter(Boolean) as HTMLElement[];
    if (!targets.length) return;
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');

        @keyframes hdr-in  { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes num-in  { from{opacity:0;transform:translateX(-10px) scale(0.85)} to{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes text-in { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:translateX(0)} }
        @keyframes nav-in  { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dot-pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(2);opacity:0.4} }
        @keyframes drawer-in { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }

        /* ── root ── */
        .hdr { position:fixed; top:0; left:0; right:0; z-index:100;
          transition: transform .35s cubic-bezier(.4,0,.2,1); }
        .hdr.hdr-hidden { transform:translateY(-110%); }

        /* ── greeting banner ── */
        .hdr-banner {
          width:100%; height:36px; background:#1a1a1a;
          display:flex; align-items:center; justify-content:center; gap:12px;
          font-family:'Oswald',sans-serif; font-size:11px; letter-spacing:2.5px;
          text-transform:uppercase; color:rgba(244,236,223,0.6);
          overflow:hidden; position:relative;
        }
        .hdr-banner-dot { width:6px; height:6px; border-radius:50%; background:#cca752;
          animation:dot-pulse 2.4s ease-in-out infinite; flex-shrink:0; }
        .hdr-banner-accent { color:#cca752; font-weight:600; }

        /* ── progress bar ── */
        .hdr-progress {
          position:absolute; bottom:0; left:0; height:2px; background:#cca752;
          transform-origin:left; transition:transform .1s linear;
          pointer-events:none;
        }

        /* ── main bar ── */
        .hdr-bar {
          background:#f4ecdf;
          transition: background .4s ease, box-shadow .4s ease, padding .35s ease;
          animation: hdr-in .55s ease both;
        }
        .hdr-bar.scrolled {
          background:#1a1a1a;
          box-shadow:0 4px 32px rgba(0,0,0,0.22);
        }
        .hdr-inner {
          max-width:1400px; margin:0 auto;
          padding:18px 40px;
          display:flex; justify-content:space-between; align-items:center;
          gap:24px;
          transition:padding .35s ease;
        }
        .hdr-bar.scrolled .hdr-inner { padding-top:14px; padding-bottom:14px; }

        /* ── logo ── */
        .hdr-logo { display:flex; align-items:center; gap:8px; text-decoration:none; flex-shrink:0; }
        .hdr-logo-num {
          font-family:'Oswald',sans-serif; font-weight:700; font-size:32px;
          color:#cca752; line-height:1; letter-spacing:-1px;
          animation: num-in .5s ease .05s both;
          transition:font-size .35s ease;
        }
        .hdr-bar.scrolled .hdr-logo-num { font-size:26px; }
        .hdr-logo-sep { width:1px; height:24px; background:#1a1a1a; opacity:.18;
          transition:background .4s ease; }
        .hdr-bar.scrolled .hdr-logo-sep { background:#f4ecdf; }
        .hdr-logo-stack { font-family:'Oswald',sans-serif; animation: text-in .5s ease .1s both; }
        .hdr-logo-main {
          font-size:13px; font-weight:600; letter-spacing:4px;
          text-transform:uppercase; color:#1a1a1a; line-height:1.1; display:block;
          transition:color .4s ease;
        }
        .hdr-bar.scrolled .hdr-logo-main { color:#f4ecdf; }
        .hdr-logo-sub {
          font-size:9px; letter-spacing:3px; text-transform:uppercase;
          color:#1a1a1a; opacity:.45; display:block;
          transition:color .4s ease;
        }
        .hdr-bar.scrolled .hdr-logo-sub { color:#f4ecdf; }

        /* ── nav ── */
        .hdr-nav { display:flex; align-items:center; gap:2px; }

        .hdr-nav-link {
          position:relative; font-family:'Oswald',sans-serif;
          font-size:12px; font-weight:500; letter-spacing:2px;
          text-transform:uppercase; color:rgba(28,28,28,.6);
          text-decoration:none; padding:7px 14px;
          display:flex; align-items:center; gap:5px;
          transition:color .22s ease; border:none; background:none; cursor:pointer;
        }
        .hdr-nav-link::after {
          content:''; position:absolute; bottom:2px; left:50%;
          width:0; height:1.5px; background:#cca752;
          transform:translateX(-50%);
          transition:width .25s ease;
        }
        .hdr-nav-link:hover::after,
        .hdr-nav-link.active::after { width:calc(100% - 28px); }
        .hdr-nav-link:hover,
        .hdr-nav-link.active { color:#1a1a1a; }
        .hdr-bar.scrolled .hdr-nav-link { color:rgba(244,236,223,.6); }
        .hdr-bar.scrolled .hdr-nav-link:hover,
        .hdr-bar.scrolled .hdr-nav-link.active { color:#f4ecdf; }
        .hdr-bar.scrolled .hdr-nav-link::after { background:#cca752; }

        .hdr-nav > *:nth-child(1) { animation:nav-in .4s ease .18s both; }
        .hdr-nav > *:nth-child(2) { animation:nav-in .4s ease .24s both; }
        .hdr-nav > *:nth-child(3) { animation:nav-in .4s ease .30s both; }
        .hdr-nav > *:nth-child(4) { animation:nav-in .4s ease .36s both; }

        /* ── CTA ── */
        .hdr-cta {
          font-family:'Oswald',sans-serif; font-size:11px; font-weight:600;
          letter-spacing:2.5px; text-transform:uppercase;
          color:#1a1a1a; border:1.5px solid rgba(28,28,28,0.4);
          padding:9px 20px; text-decoration:none; white-space:nowrap;
          transition:background .22s ease, color .22s ease, border-color .22s ease, letter-spacing .22s ease;
          animation:nav-in .4s ease .42s both;
          display:inline-block;
        }
        .hdr-cta:hover { background:#1a1a1a; color:#f4ecdf; border-color:#1a1a1a; letter-spacing:3.5px; }
        .hdr-bar.scrolled .hdr-cta { border-color:#cca752; color:#cca752; }
        .hdr-bar.scrolled .hdr-cta:hover { background:#cca752; color:#1a1a1a; border-color:#cca752; }

        /* ── hamburger ── */
        .hdr-burger {
          display:none; flex-direction:column; gap:5px;
          background:none; border:none; cursor:pointer; padding:4px;
          min-width:44px; min-height:44px;
          align-items:center; justify-content:center;
        }
        .hdr-burger span {
          display:block; width:22px; height:1.5px; background:#1a1a1a;
          transition:background .4s ease, transform .3s ease, opacity .3s ease;
          transform-origin:center;
        }
        .hdr-bar.scrolled .hdr-burger span { background:#f4ecdf; }
        .hdr-burger.open span:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
        .hdr-burger.open span:nth-child(2) { opacity:0; }
        .hdr-burger.open span:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }

        /* ── mobile drawer ── */
        .hdr-drawer {
          display:none; flex-direction:column;
          background:#1a1a1a;
          max-height:calc(100vh - 74px);
          overflow-y:auto;
          padding:8px 0 24px;
          animation:drawer-in .25s ease both;
          border-top:1px solid rgba(244,236,223,0.08);
        }
        .hdr-drawer-link {
          font-family:'Oswald',sans-serif; font-size:14px; font-weight:500;
          letter-spacing:3px; text-transform:uppercase;
          color:rgba(244,236,223,0.65); text-decoration:none;
          padding:16px 32px;
          border-bottom:1px solid rgba(244,236,223,0.05);
          transition:color .2s ease, padding-left .2s ease;
          display:flex; align-items:center;
          min-height:48px;
        }
        .hdr-drawer-link:hover { color:#cca752; padding-left:40px; }
        .hdr-drawer-cta {
          margin:20px 32px 0;
          font-family:'Oswald',sans-serif; font-size:12px; font-weight:600;
          letter-spacing:2.5px; text-transform:uppercase;
          background:#cca752; color:#1a1a1a;
          padding:16px; text-align:center; text-decoration:none; display:block;
          transition:background .22s ease;
          border-radius:2px;
        }
        .hdr-drawer-cta:hover { background:#b8923d; }

        /* ── RESPONSIVE BREAKPOINTS ── */
        @media (max-width: 1024px) {
          .hdr-inner { padding:16px 28px; gap:12px; }
        }

        @media (max-width: 768px) {
          .hdr-nav    { display:none; }
          .hdr-burger { display:flex; }
          .hdr-inner  { padding:12px 16px; }
          .hdr-banner { font-size:10px; letter-spacing:1.5px; }
        }

        @media (max-width: 390px) {
          .hdr-logo-num  { font-size:26px; }
          .hdr-logo-main { font-size:11px; letter-spacing:2px; }
          .hdr-logo-sub  { display:none; }
        }
      `}</style>

      <div className={`hdr${hidden ? ' hdr-hidden' : ''}`}>

        {/* ── Main Header Bar ── */}
        <div className={`hdr-bar${scrolled ? ' scrolled' : ''}`} style={{ position: 'relative' }}>

          {/* Progress bar */}
          <div
            className="hdr-progress"
            style={{ transform: `scaleX(${scrollPct / 100})` }}
            aria-hidden="true"
          />

          <div className="hdr-inner">

            {/* Logo */}
            <Link href="/" className="hdr-logo" aria-label="22 Apartments — home">
              <span className="hdr-logo-num">22</span>
              <span className="hdr-logo-sep" aria-hidden="true" />
              <span className="hdr-logo-stack">
                <span className="hdr-logo-main">Apartments</span>
                <span className="hdr-logo-sub">Colombo · Est. 2026</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hdr-nav" aria-label="Main navigation">
              {NAV_LINKS.map(({ href, label, section }) => (
                <Link
                  key={href}
                  href={href}
                  className={`hdr-nav-link${activeSection === section ? ' active' : ''}`}
                  onClick={e => scrollTo(e, href)}
                >
                  {label}
                </Link>
              ))}

              <Link href="#contact" className="hdr-cta" style={{ marginLeft: '8px' }}
                onClick={e => scrollTo(e, '#contact')}>
                {ctaLabel}
              </Link>
            </nav>

            {/* Hamburger — shown on mobile only */}
            <button
              className={`hdr-burger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span /><span /><span />
            </button>

          </div>

          {/* Mobile Drawer */}
          {menuOpen && (
            <div className="hdr-drawer" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hdr-drawer-link"
                  onClick={e => scrollTo(e, href)}
                >
                  {label}
                </Link>
              ))}
              <Link href="#contact" className="hdr-drawer-cta"
                onClick={e => { scrollTo(e, '#contact'); setMenuOpen(false); }}>
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Spacer — accounts for fixed header height (banner 36px + bar ~74px) */}
      <div style={{ height: '110px' }} aria-hidden="true" />
    </>
  );
}