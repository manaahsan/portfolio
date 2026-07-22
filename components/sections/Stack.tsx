"use client";
import { useState } from "react";
import { stackTabs, stackData } from "@/lib/data";
import type { StackCat } from "@/lib/types";

/* ── Node positions [x%, y%] for each possible tech count ── */
const POSITIONS: Record<number, [number, number][]> = {
  7: [[27,20],[72,20],[10,47],[82,47],[27,75],[72,75],[46,90]],
  6: [[27,20],[72,20],[10,47],[82,47],[27,75],[72,75]],
  5: [[27,20],[72,20],[10,47],[82,47],[46,87]],
  4: [[27,20],[72,20],[27,75],[72,75]],
  3: [[27,20],[82,47],[27,75]],
};

/* Center of the oval in % */
const CX = 46;
const CY = 47;

export default function Stack() {
  const [active, setActive] = useState<StackCat>("frontend");
  const techs = stackData[active];
  const count = Math.min(techs.length, 7) as keyof typeof POSITIONS;
  const positions = POSITIONS[count] ?? POSITIONS[7];
  const activeTab = stackTabs.find((t) => t.id === active)!;

  return (
    <section
      id="stack"
      className="relative py-14 lg:py-20 border-t border-border overflow-hidden"
      style={{ backgroundColor: "#f0f3fa" }}
    >
      {/* Dot grid — top right */}
      <div className="absolute top-6 right-6 hidden lg:grid grid-cols-10 gap-1.5 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} className="w-0.5 h-0.5 rounded-full bg-blue/25" />
        ))}
      </div>

      {/* Dot grid — bottom left */}
      <div className="absolute bottom-24 left-20 hidden lg:grid grid-cols-6 gap-2 pointer-events-none opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-foreground/30" />
        ))}
      </div>

      {/* Vertical OPEN FOR WORK */}
      <div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="block w-px h-6 bg-blue/30 shrink-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue/70">
          Open For Work
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] gap-8 lg:gap-10 items-start">

          {/* ── Left: heading + info ── */}
          <div className="lg:pt-16">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              [ 03 ]
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              MY{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)" }}
              >
                STACK
              </span>
            </h2>
            <div className="w-8 h-0.5 bg-blue mt-4 mb-6" />
            <p className="text-sm leading-relaxed text-foreground/60 mb-8">
              I work with modern technologies and tools to build fast, scalable
              and maintainable applications.
            </p>

            {/* Performance card */}
            <div className="rounded-xl border border-blue/15 bg-white/70 backdrop-blur-sm p-4">
              <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-blue mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                Focused on Performance
              </div>
              <p className="text-[12px] text-foreground/55 leading-relaxed">
                Clean code. Scalable architecture.
                <br />
                Modern tooling.
              </p>
            </div>
          </div>

          {/* ── Right: tabs + constellation ── */}
          <div>
            {/* Tab nav */}
            <div className="flex items-center overflow-x-auto border-b border-foreground/10 gap-0">
              {stackTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-3.5 text-[10px] uppercase tracking-widest font-mono whitespace-nowrap border-b-2 -mb-px transition-all duration-200 ${
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

            {/* ── Constellation panel (desktop) ── */}
            <div
              className="hidden lg:block relative rounded-b-2xl rounded-tr-2xl overflow-hidden"
              style={{
                height: 430,
                // background: "linear-gradient(140deg, #f8f9ff 0%, #edf1fc 100%)",
                // border: "1px solid rgba(99,139,255,0.12)",
                // borderTop: "none",
              }}
            >
              {/* SVG: connection lines + midpoint dots */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {positions.map(([px, py], i) => {
                  const dotX = CX + 0.68 * (px - CX);
                  const dotY = CY + 0.68 * (py - CY);
                  return (
                    <g key={i}>
                      <line
                        x1={CX} y1={CY}
                        x2={px} y2={py}
                        stroke="rgba(99,139,255,0.2)"
                        strokeWidth="0.28"
                        strokeDasharray="1.2 1.8"
                      />
                      <circle
                        cx={dotX} cy={dotY}
                        r="0.65"
                        fill="rgba(59,130,246,0.45)"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Orbital rings around center */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: `${CX}%`, top: `${CY}%`,
                  transform: "translate(-50%, -50%)",
                  width: 260, height: 260,
                  border: "1px solid rgba(99,139,255,0.13)",
                  borderRadius: "999px",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  left: `${CX}%`, top: `${CY}%`,
                  transform: "translate(-50%, -50%)",
                  width: 390, height: 390,
                  border: "1px dashed rgba(99,139,255,0.07)",
                  borderRadius: "999px",
                }}
              />
              {/* Top orbital indicator dot */}
              <div
                className="absolute pointer-events-none"
                style={{ left: `${CX}%`, top: "15%", transform: "translate(-50%, -50%)" }}
              >
                <div className="w-5 h-5 rounded-full border-2 border-yellow-400/70 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                </div>
              </div>

              {/* Center oval */}
              <div
                className="absolute z-10"
                style={{ left: `${CX}%`, top: `${CY}%`, transform: "translate(-50%, -50%)" }}
              >
                <div
                  className="flex flex-col items-center justify-center gap-1.5 py-4 px-10"
                  style={{
                    minWidth: 158,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(232,241,255,0.96) 100%)",
                    border: "1.5px solid rgba(99,139,255,0.22)",
                    borderRadius: "999px",
                    boxShadow:
                      "0 4px 32px rgba(99,139,255,0.14), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  <span className="text-blue">{activeTab.icon}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-blue font-semibold">
                    {activeTab.label}
                  </span>
                </div>
              </div>

              {/* Tech node cards */}
              {techs.slice(0, count).map((tech, i) => {
                const [px, py] = positions[i];
                return (
                  <div
                    key={tech.name}
                    className="absolute z-5 flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    style={{
                      left: `${px}%`,
                      top: `${py}%`,
                      transform: "translate(-50%, -50%)",
                      border: "1px solid rgba(99,139,255,0.1)",
                      minWidth: 138,
                    }}
                  >
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-md overflow-hidden">
                      {tech.logo}
                    </div>
                    <span className="text-[12px] font-medium text-foreground/80 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ── Mobile fallback: simple grid ── */}
            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border border-blue/8 hover:border-blue/25 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {tech.logo}
                  </div>
                  <span className="text-[10px] font-mono text-center text-foreground/55 leading-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
