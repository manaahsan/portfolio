import Image from "next/image";
import type { CSSProperties } from "react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      {/* ── Full-section background image ── */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover object-top-right pointer-events-none select-none"
      />

      {/* Bottom fade to blend with page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />

      {/* Vertical OPEN FOR WORK */}
      <div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">
          Open For Work
        </span>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-375 px-6 lg:px-16 pt-24 lg:pt-32">
        <div
          className="grid grid-cols-12 gap-6 lg:gap-8 items-center"
          style={{ minHeight: "calc(100vh - 10rem)" }}
        >
          {/* Left column: text */}
          <div
            className="col-span-12 lg:col-span-6 flex flex-col rise"
            style={{ "--delay": "0.1s" } as CSSProperties}
          >
            {/* Meta */}
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
              <span className="text-blue">[01] PORTFOLIO</span>
              <span>VOL. 04 · 2026</span>
            </div>

            {/* Heading */}
            <h1
              className="font-display leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(5rem, 12vw, 9.5rem)" }}
            >
              FULL<span className="text-blue">·</span>STACK
            </h1>

            {/* Subheading */}
            <p
              className="font-display tracking-[0.18em] mt-3"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)" }}
            >
              ENGINEERING{" "}
              <span className="text-blue">DIGITAL</span>{" "}
              EXPERIENCES
            </p>

            {/* Description */}
            <p className="text-sm lg:text-base leading-relaxed mt-5 text-muted-foreground max-w-md">
              I build AI-powered commerce, real-time IoT solutions, and
              multi-tenant platforms that ship at scale without losing the
              craft.
            </p>

            {/* CTAs */}
            <div
              className="flex items-center gap-4 mt-8 rise"
              style={{ "--delay": "0.3s" } as CSSProperties}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-blue text-white px-6 py-3 text-xs uppercase tracking-widest font-medium hover:gap-3 transition-all duration-200"
              >
                SEE MY WORK <span>↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-xs uppercase tracking-widest font-medium hover:border-blue hover:text-blue transition-colors duration-200"
              >
                CONTACT ME <span>↗</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-border rise"
              style={{ "--delay": "0.45s" } as CSSProperties}
            >
              {[
                { icon: "⬡", val: "5+",  label: "YEARS EXPERIENCE" },
                { icon: "⚡", val: "20+", label: "PROJECTS DELIVERED" },
                { icon: "⬡", val: "10+", label: "HAPPY CLIENTS" },
                { icon: "↗", val: "99%", label: "CLIENT SATISFACTION" },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-2">
                  <span className="text-blue text-sm mt-0.5 leading-none">
                    {s.icon}
                  </span>
                  <div>
                    <div className="font-display text-3xl leading-none">
                      {s.val}
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground mt-1.5 leading-tight">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: overlays on top of the background image */}
          <div
            className="hidden lg:flex col-span-6 relative items-end justify-end pb-12 rise"
            style={{ "--delay": "0.2s", minHeight: "560px" } as CSSProperties}
          >
            {/* Specializing In card */}
            <div
              className="absolute z-20 rise"
              style={{
                bottom: "48px",
                right: "0px",
                width: "220px",
                "--delay": "0.55s",
              } as CSSProperties}
            >
              <div
                className="bg-foreground text-background p-5 shadow-2xl"
                style={{ borderRadius: "4px" }}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest text-blue mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  SPECIALIZING IN
                </div>
                {[
                  "AI Integrated Systems",
                  "Real-time IoT Platforms",
                  "Scalable Web Applications",
                  "E-commerce Solutions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[11px] py-2 border-b border-white/10 last:border-0 last:pb-0 text-background/85"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="shrink-0 text-muted-foreground"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="10"
                        height="10"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 6h4M6 4v4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
                <div
                  className="absolute flex items-center justify-center bg-blue text-white text-base"
                  style={{
                    bottom: "-12px",
                    right: "-12px",
                    width: "36px",
                    height: "36px",
                  }}
                >
                  ↗
                </div>
              </div>
            </div>

            {/* Rotating badge */}
            <div
              className="absolute floaty"
              style={{ top: "8px", right: "8px" }}
            >
              <div className="relative w-36 h-36">
                <svg
                  viewBox="0 0 200 200"
                  className="spin-slow absolute inset-0 w-full h-full"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text
                    className="fill-foreground"
                    style={{
                      fontFamily: "Bebas Neue",
                      fontSize: 18,
                      letterSpacing: 4,
                    }}
                  >
                    <textPath href="#circle">
                      AI · FULL STACK · IoT · PLATFORMS ·{" "}
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue text-white flex items-center justify-center font-display text-2xl hover:scale-110 transition-transform duration-300">
                    M·A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
