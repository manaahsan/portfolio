"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [profileError, setProfileError] = useState(false);

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 border-t border-border bg-background overflow-hidden"
    >
      {/* Vertical OPEN FOR WORK */}
      <div
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center gap-2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">Open For Work</span>
      </div>

      <div className="mx-auto max-w-375 px-6 lg:px-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left: text */}
          <div className="col-span-12 lg:col-span-4 reveal">
            {/* Section label */}
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              [ 02 ]
            </div>

            {/* Heading */}
            <h2 className="font-display text-6xl lg:text-7xl leading-[0.88] tracking-tight mb-1">
              ABOUT <span className="text-blue">ME</span>
            </h2>
            {/* Blue underline */}
            <div className="w-8 h-0.5 bg-blue mt-3 mb-6" />

            {/* Copy */}
            <p className="text-sm lg:text-base leading-relaxed text-foreground mb-4">
              I&apos;m Manazir Ahsan, a Full Stack Developer and AI
              enthusiast who builds scalable, real-world solutions using
              modern technologies.
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-muted-foreground mb-8">
              I focus on creating performant, accessible, and user-centric
              applications that solve meaningful problems.
            </p>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2.5 border border-border px-5 py-2.5 text-[11px] uppercase tracking-widest font-mono font-medium hover:border-blue hover:text-blue transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="1" width="10" height="12" rx="1" />
                <path d="M5 7h4M7 5v4" />
              </svg>
              DOWNLOAD RESUME
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M6 2v6M3 6l3 3 3-3" />
              </svg>
            </a>
          </div>

          {/* Center: photo */}
          <div className="col-span-12 lg:col-span-5 relative flex items-end justify-center reveal reveal-d1" style={{ minHeight: "420px" }}>
            {[
              { top: "12%", left: "38%" },
              { top: "48%", left: "8%" },
              { bottom: "10%", right: "6%" },
            ].map((pos, i) => (
              <div key={i} className="absolute text-border text-sm select-none" style={pos}>+</div>
            ))}

            <div
              className="absolute rounded-full bg-blue"
              style={{ width: "280px", height: "280px", bottom: "0px", left: "50%", transform: "translateX(-50%)" }}
            />


            <div className="relative z-10" style={{ width: "320px", height: "400px" }}>
              {!profileError ? (
                <Image
                  src="/profile.jpg"
                  alt="Manazir Ahsan"
                  fill
                  unoptimized
                  className="object-cover object-top grayscale"
                  onError={() => setProfileError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center text-center">
                  <div className="text-muted-foreground">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2 opacity-40">
                      <circle cx="24" cy="16" r="8" />
                      <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" />
                    </svg>
                    <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Add profile.jpg<br />to /public</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 reveal reveal-d2">
            {[
              {
                val: "5+",
                label: "YEARS EXPERIENCE",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2l7 4v4l-7 4-7-4V6l7-4z" />
                    <path d="M3 10l7 4 7-4" />
                  </svg>
                ),
              },
              {
                val: "20+",
                label: "PROJECTS DELIVERED",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 2L4 11h6l-1 7 7-9h-6l1-7z" />
                  </svg>
                ),
              },
              {
                val: "10+",
                label: "HAPPY CLIENTS",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7.5" cy="7" r="3" />
                    <circle cx="13.5" cy="7" r="3" />
                    <path d="M1 17c0-3.314 2.91-6 6.5-6" />
                    <path d="M10 17c0-3.314 2.91-6 6.5-6" strokeOpacity="0.4" />
                    <path d="M10 17c0-3.314 1.343-6 3-6" />
                  </svg>
                ),
              },
              {
                val: "99%",
                label: "CLIENT SATISFACTION",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2c.5 1.5 2 3 2 5 0 1.1-.9 2-2 2s-2-.9-2-2c0-2 1.5-3.5 2-5z" />
                    <path d="M4 16c0-3.314 2.686-6 6-6s6 2.686 6 6" />
                    <path d="M7.5 16l1.5-3 1.5 3" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 bg-card border border-border p-4 hover:border-blue transition-colors duration-200"
                style={{ borderRadius: "8px" }}
              >
                <div
                  className="shrink-0 flex items-center justify-center text-blue bg-background border border-border"
                  style={{ width: "44px", height: "44px", borderRadius: "10px" }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="font-display text-3xl leading-none">{s.val}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
