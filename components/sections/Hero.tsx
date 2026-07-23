"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer, ease } from "@/lib/animations";
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

      {/* Mobile overlay */}
      <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ background: "rgba(237,240,248,0.94)" }} />

      {/* Desktop left-to-right fade */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{ background: "linear-gradient(to right, rgba(237,240,248,0.97) 38%, rgba(237,240,248,0.78) 58%, rgba(237,240,248,0.15) 78%, transparent 92%)" }}
      />

      {/* Top/bottom soft fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(237,240,248,0.35) 0%, transparent 15%, transparent 85%, rgba(237,240,248,0.6) 100%)" }}
      />

      {/* Decorative + markers */}
      <motion.span
        className="absolute hidden lg:block text-blue text-xl font-thin pointer-events-none select-none"
        style={{ left: "49%", top: "8%" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
      >+</motion.span>
      <motion.span
        className="absolute hidden lg:block text-blue text-xl font-thin pointer-events-none select-none"
        style={{ left: "66%", top: "44%" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}
      >+</motion.span>

      {/* Vertical OPEN FOR WORK */}
      <motion.div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.7 }}
      >
        <span className="block w-px h-8 bg-blue/30 shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">Open For Work</span>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8" style={{ minHeight: "100vh" }}>

          {/* ── Left: text — stagger container ── */}
          <motion.div
            className="flex flex-col pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-0"
            variants={staggerContainer(0.13, 0.05)}
            initial="hidden"
            animate="visible"
          >
            {/* Meta */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 sm:gap-4 font-mono text-[10px] uppercase tracking-widest mb-5 sm:mb-6">
              <span className="text-blue">[01] PORTFOLIO</span>
              <span className="text-foreground/40">FULL-STACK DEVELOPER</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-display leading-[0.85] tracking-tight text-foreground"
              style={{ fontSize: "clamp(3rem, 12vw, 8.8rem)" }}
            >
              FULL
              <span
                className="inline-block bg-blue align-middle"
                style={{ width: "0.52em", height: "0.14em", margin: "0 0.14em", transform: "translateY(-18%)" }}
              />
              STACK
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="font-display tracking-[0.14em] sm:tracking-[0.17em] mt-3 sm:mt-4 text-foreground"
              style={{ fontSize: "clamp(0.75rem, 2.5vw, 1.3rem)" }}
            >
              ENGINEERING <span className="text-blue">DIGITAL</span> EXPERIENCES
            </motion.p>

            {/* Body */}
            <motion.p variants={fadeUp} className="text-sm lg:text-[15px] leading-relaxed mt-4 sm:mt-5 text-foreground/55 max-w-120">
              I build AI-powered commerce, real-time IoT solutions, and
              multi-tenant platforms that ship at scale without losing the craft.
            </motion.p>

            {/* Mobile: Specializing In */}
            <motion.div variants={fadeUp} className="lg:hidden mt-5 border border-foreground/12 p-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-blue mb-3 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue" />
                </span>
                CONNECTING...
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {specializing.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[11px] text-foreground/50">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 text-blue">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mt-6 sm:mt-8">
              <motion.a
                href="#work"
                className="inline-flex items-center gap-2.5 bg-blue text-white px-5 sm:px-7 py-3 sm:py-3.5 text-[11px] uppercase tracking-widest font-medium"
                whileHover={{ opacity: 0.9, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                VIEW MY WORK
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2.5 border border-foreground/25 text-foreground px-5 sm:px-7 py-3 sm:py-3.5 text-[11px] uppercase tracking-widest font-medium"
                whileHover={{ borderColor: "var(--brand-blue)", color: "var(--brand-blue)", scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                CONTACT ME
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-4 mt-8 sm:mt-10 pt-7 sm:pt-8 border-t border-foreground/10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.08, duration: 0.5, ease }}
                >
                  <span className="text-blue mt-1 shrink-0"><StatIcon type={s.icon} /></span>
                  <div>
                    <div className="font-display leading-none text-foreground" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>
                      {s.val}
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-widest text-foreground/40 mt-1.5 leading-tight">
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative lines */}
            <motion.div variants={fadeIn} className="flex gap-2 mt-5 sm:mt-6">
              <div className="h-0.5 w-8 bg-blue" />
              <div className="h-0.5 w-14 bg-blue/25" />
            </motion.div>
          </motion.div>

          {/* ── Right: floating UI — desktop only ── */}
          <div className="hidden lg:block relative" style={{ minHeight: "560px" } as CSSProperties}>

            {/* Rotating badge */}
            <motion.div
              className="absolute"
              style={{ top: "18%", left: "6%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.7, ease }}
            >
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
                  <motion.div
                    className="w-16 h-16 rounded-full bg-blue text-white flex items-center justify-center font-display text-lg shadow-xl shadow-blue/35"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    M·A
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Specializing In card — floats */}
            <motion.div
              className="absolute"
              style={{ bottom: "10%", right: "2%", width: "260px" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative p-5 shadow-2xl" style={{ background: "#0c0e15", borderRadius: "3px" }}>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-blue mb-4 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue" />
                    </span>
                    CONNECTING...
                  </div>
                  {specializing.map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2.5 text-[11px] py-2.5 border-b border-white/7 last:border-0 last:pb-0 text-white/65"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.85 + i * 0.1, duration: 0.45, ease }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-blue">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </motion.div>
                  ))}
                  <motion.a
                    href="#work"
                    className="absolute flex items-center justify-center bg-blue text-white text-sm"
                    style={{ bottom: "-14px", right: "-14px", width: "40px", height: "40px" }}
                    whileHover={{ opacity: 0.9, scale: 1.08 }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ duration: 0.15 }}
                  >
                    ↗
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
