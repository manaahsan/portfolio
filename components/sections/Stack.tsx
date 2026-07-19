"use client";
import { useState } from "react";
import { stackTabs, stackData } from "@/lib/data";
import type { StackCat } from "@/lib/types";

export default function Stack() {
  const [activeStack, setActiveStack] = useState<StackCat>("frontend");

  return (
    <section id="stack" className="relative py-20 border-t border-border overflow-hidden">
      {/* Dot grid decoration */}
      <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-30 pointer-events-none" aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-muted-foreground" />
        ))}
      </div>

      {/* Vertical OPEN FOR WORK */}
      <div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">Open For Work</span>
      </div>

      <div className="mx-auto max-w-375 px-6 lg:px-16">
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* Left: heading */}
          <div className="col-span-12 lg:col-span-3 reveal">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              [ 03 ]
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.88] tracking-tight mb-1">
              MY <span className="text-blue">STACK</span>
            </h2>
            <div className="w-8 h-0.5 bg-blue mt-3 mb-5" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              I work with modern technologies and tools to build fast, scalable and maintainable applications.
            </p>
          </div>

          {/* Right: tabs + grid */}
          <div className="col-span-12 lg:col-span-9 reveal reveal-d1">
            {/* Tab navigation */}
            <div className="flex items-center overflow-x-auto border-b border-border mb-8 gap-0">
              {stackTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStack(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-[10px] uppercase tracking-widest font-mono whitespace-nowrap border-b-2 -mb-px transition-all duration-200 ${
                    activeStack === tab.id
                      ? "border-blue text-blue font-bold"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tech cards grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {stackData[activeStack].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-3 p-4 bg-card border border-border hover:border-blue hover:-translate-y-0.5 transition-all duration-200 group"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {tech.logo}
                  </div>
                  <span className="text-[10px] font-mono text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
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
