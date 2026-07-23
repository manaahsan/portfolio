"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stackTabs, stackData } from "@/lib/data";
import type { StackCat } from "@/lib/types";
import { fadeUp, slideLeft, staggerContainer, ease, VIEW_ONCE } from "@/lib/animations";

const CX = 50;
const CY = 45;

const POSITIONS: Record<number, [number, number][]> = {
  7: [[21, 10], [77, 10], [21, 45], [77, 45], [21, 79], [77, 79], [50, 91]],
  6: [[21, 10], [77, 10], [21, 45], [77, 45], [21, 79], [77, 79]],
  5: [[21, 10], [77, 10], [21, 45], [77, 45], [50, 88]],
  4: [[21, 10], [77, 10], [21, 79], [77, 79]],
  3: [[21, 10], [77, 45], [21, 79]],
};

const ARC_R = 91;
const ARC_CIRC = 2 * Math.PI * ARC_R;

export default function Stack() {
  const [active, setActive] = useState<StackCat>("frontend");
  const techs = stackData[active];
  const count = Math.min(techs.length, 7) as keyof typeof POSITIONS;
  const positions = POSITIONS[count] ?? POSITIONS[7];
  const activeTab = stackTabs.find((t) => t.id === active)!;

  return (
    <section
      id="stack"
      className="relative py-14 lg:py-20 border-t border-border"
      style={{ backgroundColor: "#f0f3fa" }}
    >
      {/* Top-right dot grid */}
      <div className="absolute top-4 right-6 hidden lg:grid grid-cols-10 gap-1.5 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} className="w-0.5 h-0.5 rounded-full bg-blue/25" />
        ))}
      </div>

      {/* OPEN FOR WORK vertical */}
      <div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="block w-px h-6 bg-blue/30 shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue/70">Open For Work</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] gap-8 lg:gap-10 items-start">

          {/* Left panel */}
          <motion.div
            className="lg:pt-16"
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEW_ONCE}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              [ 04 ]
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              MY{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)" }}
              >
                STACK
              </span>
            </motion.h2>

            <motion.div variants={fadeUp} className="w-8 h-0.5 bg-blue mt-4 mb-6" />

            <motion.p variants={fadeUp} className="text-sm leading-relaxed text-foreground/60 mb-8">
              I work with modern technologies and tools to build fast, scalable
              and maintainable applications.
            </motion.p>

            <motion.div
              className="rounded-xl border border-blue/15 bg-white/70 backdrop-blur-sm p-4"
              variants={slideLeft}
            >
              <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-blue mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                FOCUSED ON: PERFORMANCE
              </div>
              <div className="flex flex-col gap-2">
                {[
                  "Clean code, Scalable architecture.",
                  "Machine testing for faster DX.",
                  "Performance, accessibility & SEO focused.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 mt-0.5 text-blue">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[11px] text-foreground/55 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="hidden lg:grid grid-cols-6 gap-2 mt-8 pointer-events-none opacity-25">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-foreground/30" />
              ))}
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEW_ONCE}>

            <div className="flex items-center justify-center border-b border-foreground/10 overflow-x-auto scrollbar-hide">
              {stackTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-5 py-3.5 text-[10px] uppercase tracking-widest font-mono whitespace-nowrap border-b-2 -mb-px transition-all duration-200 ${
                    active === tab.id
                      ? "border-blue text-blue"
                      : "border-transparent text-foreground/40 hover:text-foreground/65"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:block relative" style={{ height: 560 }}>

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {positions.map(([px, py], i) => {
                  const midX = (CX + px) / 2;
                  const midY = (CY + py) / 2;
                  const endX = CX + 0.84 * (px - CX);
                  const endY = CY + 0.84 * (py - CY);
                  return (
                    <g key={i}>
                      <line
                        x1={CX} y1={CY}
                        x2={px} y2={py}
                        stroke="rgba(99,139,255,0.18)"
                        strokeWidth="0.2"
                      />
                      <circle cx={midX} cy={midY} r="0.72" fill="rgba(59,130,246,0.55)" />
                      <circle cx={endX} cy={endY} r="0.9" fill="rgba(59,130,246,0.65)" />
                    </g>
                  );
                })}
              </svg>

              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: `${CX}%`, top: `${CY}%`,
                  transform: "translate(-50%,-50%)",
                  width: 400, height: 400,
                  border: "1px dashed rgba(99,139,255,0.1)",
                }}
              />
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: `${CX}%`, top: `${CY}%`,
                  transform: "translate(-50%,-50%)",
                  width: 278, height: 278,
                  border: "1px solid rgba(99,139,255,0.12)",
                }}
              />

              <div
                className="absolute pointer-events-none"
                style={{ left: `${CX}%`, top: "9%", transform: "translateX(-50%)" }}
              >
                <div className="w-5 h-5 rounded-full border-2 border-yellow-400/70 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                </div>
              </div>

              <div className="absolute flex gap-1 pointer-events-none" style={{ right: "2%", top: "37%" }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-blue/30" />
                ))}
              </div>

              <span className="absolute text-blue/30 text-sm pointer-events-none select-none" style={{ left: "68%", top: "5%" }}>+</span>
              <span className="absolute text-blue/25 text-sm pointer-events-none select-none" style={{ right: "3%", top: "63%" }}>+</span>
              <span className="absolute text-blue/25 text-sm pointer-events-none select-none" style={{ left: "43%", top: "85%" }}>+</span>

              <div className="absolute w-3 h-3 rounded-full border border-blue/20 pointer-events-none" style={{ left: "36%", top: "76%" }} />
              <div className="absolute w-2.5 h-2.5 rounded-full border border-blue/15 pointer-events-none" style={{ right: "10%", top: "18%" }} />
              <div className="absolute w-2 h-2 rounded-full border border-blue/15 pointer-events-none" style={{ right: "7%", top: "70%" }} />

              <div
                className="absolute z-10"
                style={{
                  left: `${CX}%`, top: `${CY}%`,
                  transform: "translate(-50%,-50%)",
                  width: 196, height: 196,
                }}
              >
                <svg viewBox="0 0 196 196" fill="none" className="absolute inset-0 w-full h-full">
                  <defs>
                    <radialGradient id="cGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(240,244,255,0.98)" />
                      <stop offset="65%" stopColor="rgba(228,236,255,0.94)" />
                      <stop offset="100%" stopColor="rgba(210,225,255,0.85)" />
                    </radialGradient>
                  </defs>
                  <circle cx="98" cy="98" r="86" fill="url(#cGrad)" />
                  <circle cx="98" cy="98" r="86" stroke="rgba(99,139,255,0.14)" strokeWidth="0.8" fill="none" />
                  <circle cx="98" cy="98" r="70" stroke="rgba(99,139,255,0.1)" strokeWidth="0.6" strokeDasharray="3 5" fill="none" />
                  <circle
                    cx="98" cy="98"
                    r={ARC_R}
                    stroke="#3b6eff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={`${0.76 * ARC_CIRC} ${ARC_CIRC}`}
                    transform="rotate(-90 98 98)"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      className="flex flex-col items-center gap-2"
                      initial={{ opacity: 0, scale: 0.82 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.82 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <span className="text-blue" style={{ fontSize: 20 }}>{activeTab.icon}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue font-semibold">
                        {activeTab.label}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={active} className="absolute inset-0 pointer-events-none">
                  {techs.slice(0, count).map((tech, i) => {
                    const [px, py] = positions[i];
                    return (
                      // Plain, non-animated wrapper: owns the centering transform only.
                      // Framer Motion must NOT touch this element, or it will overwrite
                      // `transform` from its own x/y/scale motion values and silently
                      // drop the translate(-50%,-50%) centering below.
                      <div
                        key={tech.name}
                        className="absolute pointer-events-auto"
                        style={{
                          left: `${px}%`,
                          top: `${py}%`,
                          transform: "translate(-50%, -50%)",
                          width: 168,
                          minWidth: 168,
                          maxWidth: 168,
                        }}
                      >
                        <motion.div
                          className="flex items-center gap-3 bg-white rounded-2xl px-3 py-3"
                          style={{
                            border: "1px solid rgba(220,228,255,0.9)",
                            boxShadow: "0 2px 12px rgba(99,139,255,0.07)",
                            width: 168,
                            minWidth: 168,
                            maxWidth: 168,
                            boxSizing: "border-box",
                          }}
                          initial={{ opacity: 0, scale: 0.82, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.85, y: -8 }}
                          transition={{ delay: i * 0.07, duration: 0.4, ease }}
                          whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(99,139,255,0.16)", scale: 1.03 }}
                        >
                          <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl overflow-hidden" style={{ background: "rgba(245,247,255,0.9)" }}>
                            {tech.logo}
                          </div>
                          <div className="min-w-0 flex-1 overflow-hidden">
                            <p className="text-[12px] font-semibold leading-tight truncate" style={{ color: "#1a1a2e" }}>{tech.name}</p>
                            <p className="text-[10px] leading-snug mt-0.5 truncate" style={{ color: "#9ba3c4" }}>{tech.desc}</p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-blue/8 hover:border-blue/25 transition-colors"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35, ease }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">{tech.logo}</div>
                    <p className="text-[11px] font-semibold text-center text-foreground/75 leading-tight">{tech.name}</p>
                    <p className="text-[9px] font-mono text-center text-foreground/40 leading-tight">{tech.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}