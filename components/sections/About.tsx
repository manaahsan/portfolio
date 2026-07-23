"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, slideLeft, slideRight, staggerContainer, ease, VIEW_ONCE } from "@/lib/animations";

/* ── Skill cards data ── */
const skills = [
  {
    title: "Clean & Scalable Code",
    desc: "Writing maintainable and efficient code that grows with your product.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,8 2,11 6,14" />
        <polyline points="16,8 20,11 16,14" />
        <line x1="13" y1="5" x2="9" y2="17" />
      </svg>
    ),
  },
  {
    title: "End-to-End Development",
    desc: "From concept to deployment, I build complete solutions that solve real problems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 1 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Solutions",
    desc: "Integrating AI capabilities to automate, optimize, and elevate user experiences.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 13H11L9 20l8.5-11H12l1.5-7z" />
      </svg>
    ),
  },
  {
    title: "User-Centric Approach",
    desc: "Designing with users in mind to deliver intuitive, accessible, and impactful products.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 20c0-3.1-1.7-5.8-4.2-7.1" />
      </svg>
    ),
  },
];

const contacts = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M8 1C5.5 1 3.5 3 3.5 5.5c0 4 4.5 9 4.5 9s4.5-5 4.5-9C12.5 3 10.5 1 8 1z" />
        <circle cx="8" cy="5.5" r="1.5" />
      </svg>
    ),
    text: "Dubai, UAE",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="1" y="3.5" width="14" height="9" rx="1.5" />
        <path d="M1 5.5l7 4.5 7-4.5" />
      </svg>
    ),
    text: "ahsanmanaz@gmail.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M4 1.5h2.5l1 3L6 6A9.5 9.5 0 0 0 10 10l1.5-1.5 3 1V12a1 1 0 0 1-1 1C5.5 13 1.5 9 1 4a1 1 0 0 1 1-1h2z" />
      </svg>
    ),
    text: "+971-500144533",
  },
];

/* ── Isometric glass cube SVG ── */
function GlassCube() {
  return (
    <svg viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
      <defs>
        <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a5c8ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="cubeSm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="245" rx="70" ry="10" fill="#3b82f6" fillOpacity="0.15" />
      <polygon points="50,130 110,95 110,185 50,220" fill="url(#cubeLeft)" />
      <polygon points="110,95 170,130 170,220 110,185" fill="url(#cubeRight)" />
      <polygon points="50,130 110,95 170,130 110,165" fill="url(#cubeTop)" />
      <polyline points="50,130 110,165 170,130" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="110" y1="95" x2="110" y2="185" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
      <polygon points="145,60 175,43 175,93 145,110" fill="url(#cubeLeft)" fillOpacity="0.75" />
      <polygon points="175,43 205,60 205,110 175,93" fill="url(#cubeRight)" fillOpacity="0.65" />
      <polygon points="145,60 175,43 205,60 175,77" fill="url(#cubeTop)" fillOpacity="0.85" />
      <polygon points="28,168 48,156 48,186 28,198" fill="url(#cubeSm)" fillOpacity="0.6" />
      <polygon points="48,156 68,168 68,198 48,186" fill="url(#cubeLeft)" fillOpacity="0.5" />
      <polygon points="28,168 48,156 68,168 48,180" fill="url(#cubeTop)" fillOpacity="0.7" />
      <ellipse cx="110" cy="218" rx="64" ry="10" fill="#3b82f6" fillOpacity="0.08" />
      <ellipse cx="110" cy="222" rx="50" ry="7" fill="#3b82f6" fillOpacity="0.05" />
    </svg>
  );
}

function OrbitRing() {
  return (
    <svg viewBox="0 0 500 500" fill="none" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#93c5fd" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <circle cx="250" cy="250" r="220" stroke="#c7d8f8" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx="250" cy="250" r="185" stroke="url(#ringGrad)" strokeWidth="5" strokeLinecap="round" strokeDasharray="720 50" transform="rotate(-90 250 250)" />
      <circle cx="250" cy="250" r="148" stroke="#dbe8fd" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="435" cy="250" r="6" fill="#3b82f6" fillOpacity="0.8" />
      <circle cx="435" cy="250" r="10" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="65" cy="250" r="4" fill="#93c5fd" fillOpacity="0.7" />
      <circle cx="250" cy="435" r="5" fill="#bfdbfe" fillOpacity="0.8" />
    </svg>
  );
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          initial={{ innerText: "0" } as never}
          animate={isInView ? { innerText: target } as never : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          onUpdate={(latest) => {
            if (ref.current) {
              const val = Math.round((latest as { innerText: number }).innerText ?? 0);
              ref.current.textContent = `${val}${suffix}`;
            }
          }}
        >
          {isInView ? target : 0}{suffix}
        </motion.span>
      </motion.span>
    </span>
  );
}

export default function About() {
  const [slide, setSlide] = useState(0);
  const visible = 3;
  const maxSlide = skills.length - visible;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border"
      style={{ backgroundColor: "#f0f3fa" }}
    >
      <Image
        src="/about-bg.png"
        alt=""
        fill
        className="object-cover object-center pointer-events-none select-none opacity-90"
      />

      {/* Vertical OPEN FOR WORK */}
      <motion.div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={VIEW_ONCE}
      >
        <span className="block w-px h-6 bg-blue/30 shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue/70">Open For Work</span>
      </motion.div>

      {/* ── Main upper section ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_minmax(0,4fr)] gap-8 lg:gap-6 items-center">

          {/* ── Left: bio ── */}
          <motion.div
            className="flex flex-col"
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEW_ONCE}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              [ 03 ]
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.88] tracking-tight">
              ABOUT{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)" }}>
                ME
              </span>
            </motion.h2>
            <motion.div variants={fadeUp} className="w-8 h-0.5 bg-blue mt-4 mb-7" />

            <motion.p variants={fadeUp} className="text-sm lg:text-[15px] leading-relaxed text-foreground/75 mb-4">
              Hi, I&apos;m Manazir Ahsan — a Full Stack Developer and AI
              enthusiast who loves building scalable digital experiences that
              make an impact.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm lg:text-[15px] leading-relaxed text-foreground/75 mb-8">
              I enjoy{" "}
              <span className="text-blue">
                turning ideas into real-world products using modern technologies
              </span>{" "}
              and clean, efficient code.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
              <motion.a
                href="YOUR_GOOGLE_DRIVE_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-blue text-white px-6 py-3 text-[11px] uppercase tracking-widest font-medium"
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 1v8M4 6l3 3 3-3" />
                  <path d="M1 10v1.5A1.5 1.5 0 0 0 2.5 13h9a1.5 1.5 0 0 0 1.5-1.5V10" />
                </svg>
                DOWNLOAD RESUME
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-foreground/70 group"
                whileHover={{ color: "var(--brand-blue)" }}
                transition={{ duration: 0.15 }}
              >
                Let&apos;s connect
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Center: floating 3D cube ── */}
          <div className="hidden lg:flex relative items-center justify-center" style={{ height: 420 }}>
            <motion.div
              className="absolute inset-0"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={VIEW_ONCE}
            >
              <OrbitRing />
            </motion.div>

            <motion.div
              className="absolute z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg shadow-blue/10 border border-white"
              style={{ top: "14%", left: "4%" }}
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VIEW_ONCE}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-blue shrink-0">
                <path d="M9.5 1L3 9h5l-1.5 6L14 7H9L9.5 1z" fill="currentColor" />
              </svg>
              <span className="font-mono text-[10px] text-foreground/70 whitespace-nowrap">Build • Scale • Innovate</span>
            </motion.div>

            {/* Floating cube */}
            <motion.div
              className="relative z-10 w-52 h-64"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={VIEW_ONCE}
              animate={{ y: [0, -16, 0] }}
              transition={{
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
              }}
            >
              <GlassCube />
            </motion.div>
          </div>

          {/* ── Right: experience card ── */}
          <motion.div
            className="flex justify-start sm:justify-center lg:justify-end"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEW_ONCE}
          >
            <div className="w-full max-w-xs mx-auto sm:mx-0 sm:w-56 bg-white/85 backdrop-blur-sm rounded-2xl p-5 sm:p-7 shadow-xl shadow-blue/8 border border-white/60 flex flex-col items-center text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/45 mb-4">Experience</p>
              <div className="font-display text-7xl leading-none bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)" }}>
                <Counter target={5} /><span className="text-5xl align-top mt-2 inline-block">+</span>
              </div>
              <p className="font-display text-2xl text-foreground mt-2 mb-5">Years</p>
              <div className="w-6 h-0.5 bg-blue/30 mb-5" />
              <p className="text-[12px] text-foreground/55 leading-relaxed">
                Building powerful solutions for web, mobile &amp; AI platforms
              </p>
              <svg viewBox="0 0 60 14" className="mt-6 w-16 text-blue/30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M0 7 Q7.5 0 15 7 Q22.5 14 30 7 Q37.5 0 45 7 Q52.5 14 60 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Skill cards carousel ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 mt-10 sm:mt-14">
        <motion.div
          className="relative rounded-2xl py-2 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEW_ONCE}
        >
          <button
            onClick={() => setSlide((s) => Math.max(0, s - 1))}
            disabled={slide === 0}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center bg-blue text-white rounded-r-none rounded-l-2xl hover:opacity-90 transition-opacity disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M10 4L6 8l4 4" />
            </svg>
          </button>

          <div className="overflow-x-auto lg:overflow-hidden py-5 sm:py-6 px-4 lg:px-14 scrollbar-hide">
            <div
              className="flex gap-4 lg:transition-transform lg:duration-400 lg:ease-in-out"
              style={{ transform: `translateX(calc(-${slide} * (100% / ${visible} + 16px / ${visible})))` }}
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  className="flex-none w-72 sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-white rounded-xl p-5 sm:p-6 border border-blue/8 shadow-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW_ONCE}
                  transition={{ delay: i * 0.1, duration: 0.6, ease }}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(59,130,246,0.12)", borderColor: "rgba(59,130,246,0.2)" }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue/8 flex items-center justify-center text-blue mb-4">
                    {skill.icon}
                  </div>
                  <p className="font-semibold text-foreground text-[13px] sm:text-[14px] mb-2">{skill.title}</p>
                  <div className="w-6 h-0.5 bg-blue mb-3" />
                  <p className="text-[12px] text-foreground/55 leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
            disabled={slide >= maxSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center bg-blue text-white rounded-l-none rounded-r-2xl hover:opacity-90 transition-opacity disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* ── Contact bar ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 mt-8 sm:mt-10 pb-12 sm:pb-16">
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-0 pt-6 sm:pt-8 border-t border-foreground/10"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEW_ONCE}
        >
          {contacts.map((c, i) => (
            <motion.div key={c.text} className="flex items-center gap-3 sm:flex-1 min-w-0" variants={fadeUp}>
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-foreground/12 mr-5 shrink-0" />}
              <span className="text-blue shrink-0">{c.icon}</span>
              <span className="text-sm text-foreground/65 hover:text-blue transition-colors truncate">{c.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
