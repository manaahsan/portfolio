import Image from "next/image";
import type { CSSProperties } from "react";

const specializing = [
  "AI Integrated Systems",
  "Real-time IoT Platforms",
  "Scalable Web Applications",
  "E-commerce Solutions",
];

const stats = [
  { icon: "circle", val: "5+",  label: "YEARS EXPERIENCE" },
  { icon: "bolt",   val: "20+", label: "PROJECTS DELIVERED" },
  { icon: "circle", val: "10+", label: "HAPPY CLIENTS" },
  { icon: "arrow",  val: "99%", label: "CLIENT SATISFACTION" },
];

function StatIcon({ type }: { type: string }) {
  if (type === "circle")
    return (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6.5" cy="6.5" r="5" />
      </svg>
    );
  if (type === "bolt")
    return (
      <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
        <path d="M7.8 1.5 3 7.5h3.8L5.2 11.5l6.5-6.5H7.5l1.8-3.5z" />
      </svg>
    );
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 11L11 2M11 2H5M11 2v6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "#edf0f8" }}
    >
      {/* Background image */}
      <Image
        src="/bg-hero.png"
        alt=""
        fill
        priority
        className="object-cover object-right pointer-events-none select-none"
      />

      {/* Mobile: full cover so cubes don't bleed through */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{ background: "rgba(237,240,248,0.94)" }}
      />

      {/* Desktop: left-to-right fade */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(237,240,248,0.97) 38%, rgba(237,240,248,0.78) 58%, rgba(237,240,248,0.15) 78%, transparent 92%)",
        }}
      />

      {/* Top/bottom soft fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(237,240,248,0.35) 0%, transparent 15%, transparent 85%, rgba(237,240,248,0.6) 100%)",
        }}
      />

      {/* Scattered + markers — desktop only */}
      <span
        className="absolute hidden lg:block text-blue text-xl font-thin pointer-events-none select-none"
        style={{ left: "49%", top: "8%" }}
      >
        +
      </span>
      <span
        className="absolute hidden lg:block text-blue text-xl font-thin pointer-events-none select-none"
        style={{ left: "66%", top: "44%" }}
      >
        +
      </span>

      {/* Vertical OPEN FOR WORK */}
      <div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="block w-px h-8 bg-blue/30 shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">
          Open For Work
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
          style={{ minHeight: "100vh" }}
        >
          {/* ── Left: text ── */}
          <div className="flex flex-col pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-0">

            {/* Meta */}
            <div className="flex items-center gap-3 sm:gap-4 font-mono text-[10px] uppercase tracking-widest mb-5 sm:mb-6">
              <span className="text-blue">[01] PORTFOLIO</span>
              <span className="text-foreground/40">VOL. 04 · 2026</span>
            </div>

            {/* Heading */}
            <h1
              className="font-display leading-[0.85] tracking-tight text-foreground"
              style={{ fontSize: "clamp(3rem, 12vw, 8.8rem)" }}
            >
              FULL
              <span
                className="inline-block bg-blue align-middle"
                style={{
                  width: "0.52em",
                  height: "0.14em",
                  margin: "0 0.14em",
                  transform: "translateY(-18%)",
                }}
              />
              STACK
            </h1>

            {/* Subheading */}
            <p
              className="font-display tracking-[0.14em] sm:tracking-[0.17em] mt-3 sm:mt-4 text-foreground"
              style={{ fontSize: "clamp(0.75rem, 2.5vw, 1.3rem)" }}
            >
              ENGINEERING <span className="text-blue">DIGITAL</span> EXPERIENCES
            </p>

            {/* Body */}
            <p className="text-sm lg:text-[15px] leading-relaxed mt-4 sm:mt-5 text-foreground/55 max-w-120">
              I build AI-powered commerce, real-time IoT solutions, and
              multi-tenant platforms that ship at scale without losing the craft.
            </p>

            {/* Mobile: Specializing In */}
            <div className="lg:hidden mt-5 border border-foreground/12 p-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-blue mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                SPECIALIZING IN
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {specializing.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[11px] text-foreground/50">
                    <span className="w-1 h-1 rounded-full bg-blue shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-6 sm:mt-8">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 bg-blue text-white px-5 sm:px-7 py-3 sm:py-3.5 text-[11px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
              >
                SEE MY WORK
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 border border-foreground/25 text-foreground px-5 sm:px-7 py-3 sm:py-3.5 text-[11px] uppercase tracking-widest font-medium hover:border-blue hover:text-blue transition-colors"
              >
                CONTACT ME
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </a>
            </div>

            {/* Stats — 2×2 on mobile, 4-col on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-4 mt-8 sm:mt-10 pt-7 sm:pt-8 border-t border-foreground/10">
              {stats.map((s) => (
                <div key={s.label} className="flex items-start gap-2">
                  <span className="text-blue mt-1 shrink-0">
                    <StatIcon type={s.icon} />
                  </span>
                  <div>
                    <div
                      className="font-display leading-none text-foreground"
                      style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}
                    >
                      {s.val}
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-widest text-foreground/40 mt-1.5 leading-tight">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative lines */}
            <div className="flex gap-2 mt-5 sm:mt-6">
              <div className="h-0.5 w-8 bg-blue" />
              <div className="h-0.5 w-14 bg-blue/25" />
            </div>
          </div>

          {/* ── Right: floating UI elements — desktop only ── */}
          <div
            className="hidden lg:block relative"
            style={{ minHeight: "560px" } as CSSProperties}
          >
            {/* Rotating badge */}
            <div className="absolute" style={{ top: "18%", left: "6%" }}>
              <div className="relative w-36 h-36">
                <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 w-full h-full">
                  <defs>
                    <path id="hero-badge" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                  </defs>
                  <text style={{ fontFamily: "Bebas Neue", fontSize: 17, letterSpacing: 5 }} fill="rgba(10,10,30,0.45)">
                    <textPath href="#hero-badge">AI · STACK · IOT · PLATFORMS · </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue text-white flex items-center justify-center font-display text-lg shadow-xl shadow-blue/35 hover:scale-105 transition-transform duration-300">
                    M·A
                  </div>
                </div>
              </div>
            </div>

            {/* Specializing In card */}
            <div className="absolute" style={{ bottom: "10%", right: "2%", width: "260px" }}>
              <div className="relative p-5 shadow-2xl" style={{ background: "#0c0e15", borderRadius: "3px" }}>
                <div className="font-mono text-[9px] uppercase tracking-widest text-blue mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  SPECIALIZING IN
                </div>
                {specializing.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[11px] py-2.5 border-b border-white/7 last:border-0 last:pb-0 text-white/65">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-white/25">
                      <rect x="1" y="1" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M4 6h4M6 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {item}
                  </div>
                ))}
                <a
                  href="#work"
                  className="absolute flex items-center justify-center bg-blue text-white text-sm hover:opacity-90 transition-opacity"
                  style={{ bottom: "-14px", right: "-14px", width: "40px", height: "40px" }}
                >
                  ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
