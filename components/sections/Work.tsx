// "use client";
// import { useEffect, useRef, useState } from "react";
// import type { CSSProperties } from "react";
// import { projects } from "@/lib/data";
// import type { Project } from "@/lib/types";

// /* ── Metric icons ── */
// function MetricIcon({ type }: { type: Project["metrics"][number]["icon"] }) {
//   const cls = "w-4 h-4 shrink-0";
//   if (type === "chart")
//     return (
//       <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="2,14 7,9 11,12 18,5" />
//         <polyline points="14,5 18,5 18,9" />
//       </svg>
//     );
//   if (type === "clock")
//     return (
//       <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
//         <circle cx="10" cy="10" r="8" />
//         <path d="M10 6v4l2.5 2.5" />
//       </svg>
//     );
//   if (type === "users")
//     return (
//       <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
//         <circle cx="8" cy="7" r="3" />
//         <path d="M2 17c0-3.3 2.7-6 6-6s6 2.7 6 6" />
//         <path d="M14 5a3 3 0 0 1 0 4M18 17c0-2.5-1.5-4.6-3.5-5.5" />
//       </svg>
//     );
//   if (type === "code")
//     return (
//       <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="6,7 2,10 6,13" />
//         <polyline points="14,7 18,10 14,13" />
//         <line x1="11" y1="5" x2="9" y2="15" />
//       </svg>
//     );
//   if (type === "bolt")
//     return (
//       <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2L6 11h6l-2 7 8-10h-6l2-6z" />
//       </svg>
//     );
//   if (type === "db")
//     return (
//       <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
//         <ellipse cx="10" cy="5" rx="7" ry="2.5" />
//         <path d="M3 5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
//         <path d="M3 10v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
//       </svg>
//     );
//   if (type === "signal")
//     return (
//       <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
//         <path d="M2 13a10 10 0 0 1 16 0" />
//         <path d="M5 16a6 6 0 0 1 10 0" />
//         <circle cx="10" cy="18" r="1.2" fill="currentColor" />
//       </svg>
//     );
//   return (
//     <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//       <polyline points="2,6 7,11 11,8 18,15" />
//       <polyline points="14,15 18,15 18,11" />
//     </svg>
//   );
// }

// /* ── Live site screenshot preview ── */
// function SitePreview({ url }: { url: string }) {
//   const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
//   const fullUrl = url.startsWith("http") ? url : `https://${url}`;
//   // Microlink screenshot API — free tier, no key required
//   const src = `https://api.microlink.io/?url=${encodeURIComponent(fullUrl)}&screenshot=true&meta=false&embed=screenshot.url`;

//   return (
//     <div className="relative w-full h-full bg-[#07070f] overflow-hidden">

//       {/* Loading skeleton */}
//       <div
//         className={`absolute inset-0 transition-opacity duration-300 ${status !== "loading" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
//       >
//         <div className="h-7 bg-white/[0.03] border-b border-white/5" />
//         <div className="p-5 flex flex-col gap-3">
//           {[70, 55, 80, 45, 65].map((w, i) => (
//             <div
//               key={i}
//               className="h-1.5 bg-white/[0.04] rounded-full animate-pulse"
//               style={{ width: `${w}%`, animationDelay: `${i * 100}ms` }}
//             />
//           ))}
//           <div className="mt-3 grid grid-cols-3 gap-2">
//             {[0, 1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="h-16 bg-white/[0.03] rounded-lg animate-pulse"
//                 style={{ animationDelay: `${i * 120}ms` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Screenshot image */}
//       {/* eslint-disable-next-line @next/next/no-img-element */}
//       <img
//         src={src}
//         alt={`${url} preview`}
//         className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
//         onLoad={() => setStatus("loaded")}
//         onError={() => setStatus("error")}
//       />

//       {/* Error / unavailable */}
//       {status === "error" && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
//           <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/8 flex items-center justify-center">
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-white/25">
//               <circle cx="9" cy="9" r="7" />
//               <path d="M9 6v3.5M9 12.5v.5" />
//             </svg>
//           </div>
//           <div className="text-center">
//             <p className="font-mono text-[9px] uppercase tracking-widest text-white/25">{url}</p>
//             <p className="font-mono text-[7px] text-white/15 mt-1">Screenshot unavailable</p>
//             <p className="font-mono text-[7px] text-white/10 mt-0.5">Update links.live with a real URL</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ── Browser frame wrapper ── */
// function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
//   return (
//     <div className="rounded-xl overflow-hidden border border-white/8 shadow-2xl h-full flex flex-col">
//       <div className="bg-[#111118] px-3 py-2 flex items-center gap-2 shrink-0">
//         <div className="flex gap-1.5">
//           <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
//           <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
//           <span className="w-2 h-2 rounded-full bg-[#28c840]" />
//         </div>
//         <div className="flex-1 bg-white/5 rounded-md px-2 py-0.5 text-[8px] text-white/35 font-mono truncate">
//           {url}
//         </div>
//         <div className="flex gap-1.5">
//           <div className="w-3 h-3 rounded-sm bg-white/8" />
//           <div className="w-3 h-3 rounded-sm bg-white/8" />
//         </div>
//       </div>
//       <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
//     </div>
//   );
// }

// const URLS = ["https://www.iqliqlive.ae/", "https://brand.iqliq.ae/", "https://mall.iqliqlive.ae/", "https://admin.iqliqlive.ae/",];

// /* ── Card styles ── */
// const CARD_BG: CSSProperties = {
//   background: "#07070f",
//   backgroundImage:
//     "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
//   backgroundSize: "48px 48px",
//   border: "1px solid rgba(255,255,255,0.06)",
//   boxShadow:
//     "0 0 0 1px rgba(59,130,246,0.04), 0 0 120px -20px rgba(59,130,246,0.16), 0 48px 120px -20px rgba(0,0,0,0.9)",
// };

// const SECTION_STYLE: CSSProperties = {
//   backgroundColor: "#fafafa",
//   backgroundImage:
//     "linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)",
//   backgroundSize: "40px 40px",
// };

// const METRICS_STRIP_STYLE: CSSProperties = {
//   background: "rgba(255,255,255,0.03)",
//   backdropFilter: "blur(12px)",
//   WebkitBackdropFilter: "blur(12px)",
//   borderTop: "1px solid rgba(255,255,255,0.06)",
// };

// export default function Work() {
//   const cardRefs = useRef<(HTMLElement | null)[]>([]);

//   useEffect(() => {
//     const HEADER = 64;

//     // Promote each card to its own compositor layer for jank-free scroll animation
//     cardRefs.current.forEach((c) => {
//       if (c) c.style.willChange = "transform, filter, opacity";
//     });

//     const onScroll = () => {
//       const VH = window.innerHeight;

//       cardRefs.current.forEach((card, i) => {
//         if (!card) return;
//         const rect = card.getBoundingClientRect();
//         const next = cardRefs.current[i + 1];

//         // ── Enter: card rising from below (0 = at viewport bottom, 1 = stuck at top) ──
//         const enterT =
//           i === 0
//             ? 1
//             : Math.max(0, Math.min(1, (VH - rect.top) / (VH - HEADER)));

//         // ── Exit: next card climbing to cover this one (0 = far below, 1 = fully on top) ──
//         let exitT = 0;
//         if (next) {
//           const nTop = next.getBoundingClientRect().top;
//           exitT = Math.max(0, Math.min(1, (VH - nTop) / (VH - HEADER)));
//         }

//         card.style.transformOrigin = "top center";

//         if (enterT < 1) {
//           // ── Entering: card expands as it rises ──
//           const scale = 0.93 + enterT * 0.07;
//           card.style.transform = `scale(${scale})`;
//           card.style.filter = "";
//           card.style.opacity = "";
//         } else if (exitT > 0) {
//           // ── Exiting: card floats up, shrinks, blurs, fades ──
//           const scale   = 1 - exitT * 0.05;
//           const ty      = -exitT * 40;
//           const blur    = exitT * 7;
//           const opacity = 1 - exitT * 0.4;
//           card.style.transform = `scale(${scale}) translateY(${ty}px)`;
//           card.style.filter    = `blur(${blur}px)`;
//           card.style.opacity   = String(opacity);
//         } else {
//           // ── Active: fully in view ──
//           card.style.transform = "";
//           card.style.filter    = "";
//           card.style.opacity   = "";
//         }
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll(); // apply on mount so initial deck peek is scaled correctly
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section id="work" className="relative py-24 lg:py-36" style={SECTION_STYLE}>
//       <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-10">

//         {/* ── Header ── */}
//         <div className="mb-14 lg:mb-20 reveal">
//           <div className="flex items-center gap-2 mb-6">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue" />
//             <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
//               [02] SELECTED WORK
//             </span>
//           </div>
//           <h2 className="font-display text-5xl sm:text-7xl lg:text-[9rem] leading-[0.88] tracking-tight text-gray-900">
//             THINGS <span className="text-blue">I&apos;VE</span>
//             <br />
//             <span className="stroke-text">BUILT</span>
//           </h2>
//           <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
//             A collection of AI products, dashboards, SaaS platforms, and scalable applications.
//           </p>
//         </div>

//         {/* ── Sticky stacking cards ── */}
//         <div>
//           {projects.map((p, idx) => {
//             const url = URLS[idx] ?? "project.app";

//             return (
//               <article
//                 key={p.no}
//                 ref={(el) => { cardRefs.current[idx] = el; }}
//                 className={`sticky top-16 rounded-4xl overflow-hidden ${idx > 0 ? "mt-12" : ""}`}
//                 style={{ ...CARD_BG, zIndex: idx + 10 } as CSSProperties}
//               >
//                 {/* Top accent line */}
//                 <div className="h-px w-full bg-linear-to-r from-transparent via-blue/40 to-transparent" />

//                 {/* Main content: left info + right mockup */}
//                 <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">

//                   {/* ── Left: project info ── */}
//                   <div className="p-7 lg:p-10 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-white/5">

//                     <div className="flex items-center justify-between">
//                       <span className="font-mono text-[10px] tracking-[0.3em] text-blue/80">{p.no}</span>
//                       <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">{p.year}</span>
//                     </div>

//                     <div>
//                       <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2">{p.kicker}</p>
//                       <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.9] tracking-tight text-white">
//                         {p.title.toUpperCase()}
//                       </h3>
//                       <p className="text-blue text-xs font-medium mt-2 tracking-wide">{p.subtitle}</p>
//                     </div>

//                     <p className="text-[13px] leading-relaxed text-white/45 flex-1 max-w-xs">{p.blurb}</p>

//                     {/* Stack pills */}
//                     <div className="flex flex-wrap gap-1.5">
//                       {p.stack.map((s) => (
//                         <span
//                           key={s}
//                           className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/40 hover:text-blue hover:border-blue/25 transition-colors"
//                         >
//                           {s}
//                         </span>
//                       ))}
//                     </div>

//                     {/* CTA buttons */}
//                     <div className="flex flex-wrap gap-2.5 pt-1">
//                       <a
//                         href={p.links?.caseStudy ?? "#"}
//                         className="inline-flex items-center gap-2 rounded-full bg-blue text-white px-4 py-2 text-[10px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
//                       >
//                         Case Study
//                         <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//                           <path d="M2 10L10 2M10 2H4M10 2v6"/>
//                         </svg>
//                       </a>
//                       <a
//                         href={p.links?.live ?? "#"}
//                         className="inline-flex items-center gap-2 rounded-full bg-white/6 border border-white/10 text-white/60 px-4 py-2 text-[10px] uppercase tracking-widest font-medium hover:bg-white/10 hover:text-white transition-all"
//                       >
//                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <circle cx="12" cy="12" r="10" />
//                           <line x1="2" y1="12" x2="22" y2="12" />
//                           <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//                         </svg>
//                         Live Demo
//                       </a>
//                       <a
//                         href="#"
//                         className="inline-flex items-center gap-2 rounded-full bg-white/4 border border-white/8 text-white/40 px-4 py-2 text-[10px] uppercase tracking-widest font-medium hover:bg-white/8 hover:text-white/70 transition-all"
//                       >
//                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
//                         </svg>
//                         GitHub
//                       </a>
//                     </div>
//                   </div>

//                   {/* ── Right: browser mockup ── */}
//                   <div
//                     className="relative min-h-64 sm:min-h-80 lg:min-h-0"
//                     style={{ height: 380 }}
//                   >
//                     <div className="absolute inset-4 lg:inset-6">
//                       <BrowserFrame url={url}>
//                         <SitePreview url={url} />
//                       </BrowserFrame>
//                     </div>
//                     {/* Subtle inner glow on right */}
//                     <div
//                       className="absolute inset-0 pointer-events-none"
//                       style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)" }}
//                     />
//                   </div>
//                 </div>

//                 {/* ── Metrics strip ── */}
//                 <div
//                   className="grid grid-cols-2 sm:grid-cols-4"
//                   style={METRICS_STRIP_STYLE}
//                 >
//                   {p.metrics.map((m, mi) => (
//                     <div
//                       key={m.l}
//                       className={`px-6 py-4 flex items-center gap-3 ${mi < p.metrics.length - 1 ? "border-r border-white/5" : ""}`}
//                     >
//                       <div className="text-blue/70">
//                         <MetricIcon type={m.icon} />
//                       </div>
//                       <div>
//                         <p className="font-display text-xl text-white leading-none">{m.v}</p>
//                         <p className="font-mono text-[9px] uppercase tracking-widest text-white/30 mt-0.5">{m.l}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <div className="h-10" />

//         {/* ── CTA footer ── */}
//         <div
//           className="mt-4 rounded-[28px] p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
//           style={{
//             ...CARD_BG,
//             boxShadow: "0 0 60px -20px rgba(59,130,246,0.12)",
//           }}
//         >
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
//               <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M11 2a9 9 0 0 1 0 18A9 9 0 0 1 11 2z" />
//                 <path d="M7 9l4-4 4 4M11 5v8" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-display text-lg sm:text-xl text-white">Have a project in mind?</p>
//               <p className="text-sm text-white/40 mt-0.5">Let&apos;s build something amazing together.</p>
//             </div>
//           </div>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 bg-blue text-white rounded-full px-6 py-3 text-[10px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
//           >
//             LET&apos;S TALK
//             <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//               <path d="M2 10L10 2M10 2H4M10 2v6"/>
//             </svg>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";

/* ── Metric icons ── */
function MetricIcon({ type }: { type: Project["metrics"][number]["icon"] }) {
  const cls = "w-4 h-4 shrink-0";
  if (type === "chart")
    return (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,14 7,9 11,12 18,5" />
        <polyline points="14,5 18,5 18,9" />
      </svg>
    );
  if (type === "clock")
    return (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l2.5 2.5" />
      </svg>
    );
  if (type === "users")
    return (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="8" cy="7" r="3" />
        <path d="M2 17c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M14 5a3 3 0 0 1 0 4M18 17c0-2.5-1.5-4.6-3.5-5.5" />
      </svg>
    );
  if (type === "code")
    return (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6,7 2,10 6,13" />
        <polyline points="14,7 18,10 14,13" />
        <line x1="11" y1="5" x2="9" y2="15" />
      </svg>
    );
  if (type === "bolt")
    return (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L6 11h6l-2 7 8-10h-6l2-6z" />
      </svg>
    );
  if (type === "db")
    return (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <ellipse cx="10" cy="5" rx="7" ry="2.5" />
        <path d="M3 5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
        <path d="M3 10v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
      </svg>
    );
  if (type === "signal")
    return (
      <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M2 13a10 10 0 0 1 16 0" />
        <path d="M5 16a6 6 0 0 1 10 0" />
        <circle cx="10" cy="18" r="1.2" fill="currentColor" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,6 7,11 11,8 18,15" />
      <polyline points="14,15 18,15 18,11" />
    </svg>
  );
}

/* ── Live site screenshot preview ──
   Fixes applied:
   1. Lazy-loads via IntersectionObserver — only fires the Microlink request
      once the card is near the viewport, instead of all cards firing at mount.
   2. Adds a hard timeout — if Microlink hasn't responded in TIMEOUT_MS,
      falls back to the error state instead of spinning forever.
   3. Passes explicit viewport/quality params to Microlink to reduce
      response size and speed up the remote render.
*/
const PREVIEW_TIMEOUT_MS = 9000;

function SitePreview({ url }: { url: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fullUrl = url.startsWith("http") ? url : `https://${url}`;
  // Microlink screenshot API — free tier, no key required.
  // Explicit viewport + quality keeps the payload small and the remote
  // render fast; embed=screenshot.url returns just the image URL.
  const src = `https://api.microlink.io/?url=${encodeURIComponent(
    fullUrl
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&screenshot.quality=70&waitUntil=domcontentloaded`;

  // Kick off loading only when the card scrolls into view (or near it)
  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus((s) => (s === "idle" ? "loading" : s));
          obs.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // Hard timeout so a slow/cold Microlink render never spins indefinitely
  useEffect(() => {
    if (status !== "loading") return;
    timeoutRef.current = setTimeout(() => {
      setStatus((s) => (s === "loading" ? "error" : s));
    }, PREVIEW_TIMEOUT_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [status]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-[#07070f] overflow-hidden">

      {/* Loading skeleton (shown while idle/loading) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          status === "loaded" || status === "error" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="h-7 bg-white/[0.03] border-b border-white/5" />
        <div className="p-5 flex flex-col gap-3">
          {[70, 55, 80, 45, 65].map((w, i) => (
            <div
              key={i}
              className="h-1.5 bg-white/[0.04] rounded-full animate-pulse"
              style={{ width: `${w}%`, animationDelay: `${i * 100}ms` }}
            />
          ))}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-16 bg-white/[0.03] rounded-lg animate-pulse"
                style={{ animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Screenshot image — only mounted once the card is in/near view */}
      {status !== "idle" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${url} preview`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setStatus("loaded");
          }}
          onError={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setStatus("error");
          }}
        />
      )}

      {/* Error / unavailable / timed out */}
      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/8 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-white/25">
              <circle cx="9" cy="9" r="7" />
              <path d="M9 6v3.5M9 12.5v.5" />
            </svg>
          </div>
          <div className="text-center">
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/25">{url}</p>
            <p className="font-mono text-[7px] text-white/15 mt-1">Screenshot unavailable</p>
            <p className="font-mono text-[7px] text-white/10 mt-0.5">Update links.live with a real URL</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Browser frame wrapper ── */
function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/8 shadow-2xl h-full flex flex-col">
      <div className="bg-[#111118] px-3 py-2 flex items-center gap-2 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white/5 rounded-md px-2 py-0.5 text-[8px] text-white/35 font-mono truncate">
          {url}
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-white/8" />
          <div className="w-3 h-3 rounded-sm bg-white/8" />
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

const URLS = [
  "https://brand.iqliq.ae/",
  "https://mall.iqliqlive.ae/",
  "https://admin.iqliqlive.ae/",
  "https://app.iqliqlive.ae/",
  "https://agency.iqliqlive.ae/",
  "https://delivery.iqliq.ae/",
];
/* ── Card styles ── */
const CARD_BG: CSSProperties = {
  background: "#07070f",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow:
    "0 0 0 1px rgba(59,130,246,0.04), 0 0 120px -20px rgba(59,130,246,0.16), 0 48px 120px -20px rgba(0,0,0,0.9)",
};

const SECTION_STYLE: CSSProperties = {
  backgroundColor: "#fafafa",
  backgroundImage:
    "linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

const METRICS_STRIP_STYLE: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderTop: "1px solid rgba(255,255,255,0.06)",
};

export default function Work() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const HEADER = 64;

    // Promote each card to its own compositor layer for jank-free scroll animation
    cardRefs.current.forEach((c) => {
      if (c) c.style.willChange = "transform, filter, opacity";
    });

    const onScroll = () => {
      const VH = window.innerHeight;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const next = cardRefs.current[i + 1];

        // ── Enter: card rising from below (0 = at viewport bottom, 1 = stuck at top) ──
        const enterT =
          i === 0
            ? 1
            : Math.max(0, Math.min(1, (VH - rect.top) / (VH - HEADER)));

        // ── Exit: next card climbing to cover this one (0 = far below, 1 = fully on top) ──
        let exitT = 0;
        if (next) {
          const nTop = next.getBoundingClientRect().top;
          exitT = Math.max(0, Math.min(1, (VH - nTop) / (VH - HEADER)));
        }

        card.style.transformOrigin = "top center";

        if (enterT < 1) {
          // ── Entering: card expands as it rises ──
          const scale = 0.93 + enterT * 0.07;
          card.style.transform = `scale(${scale})`;
          card.style.filter = "";
          card.style.opacity = "";
        } else if (exitT > 0) {
          // ── Exiting: card floats up, shrinks, blurs, fades ──
          const scale   = 1 - exitT * 0.05;
          const ty      = -exitT * 40;
          const blur    = exitT * 7;
          const opacity = 1 - exitT * 0.4;
          card.style.transform = `scale(${scale}) translateY(${ty}px)`;
          card.style.filter    = `blur(${blur}px)`;
          card.style.opacity   = String(opacity);
        } else {
          // ── Active: fully in view ──
          card.style.transform = "";
          card.style.filter    = "";
          card.style.opacity   = "";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // apply on mount so initial deck peek is scaled correctly
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="work" className="relative py-24 lg:py-36" style={SECTION_STYLE}>
      <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-14 lg:mb-20 reveal">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              [02] SELECTED WORK
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-[9rem] leading-[0.88] tracking-tight text-gray-900">
            THINGS <span className="text-blue">I&apos;VE</span>
            <br />
            <span className="stroke-text">BUILT</span>
          </h2>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A collection of AI products, dashboards, SaaS platforms, and scalable applications.
          </p>
        </div>

        {/* ── Sticky stacking cards ── */}
        <div>
          {projects.map((p, idx) => {
            const url = URLS[idx] ?? "project.app";

            return (
              <article
                key={p.no}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`sticky top-16 rounded-4xl overflow-hidden ${idx > 0 ? "mt-12" : ""}`}
                style={{ ...CARD_BG, zIndex: idx + 10 } as CSSProperties}
              >
                {/* Top accent line */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-blue/40 to-transparent" />

                {/* Main content: left info + right mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">

                  {/* ── Left: project info ── */}
                  <div className="p-7 lg:p-10 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-white/5">

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-blue/80">{p.no}</span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">{p.year}</span>
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2">{p.kicker}</p>
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.9] tracking-tight text-white">
                        {p.title.toUpperCase()}
                      </h3>
                      <p className="text-blue text-xs font-medium mt-2 tracking-wide">{p.subtitle}</p>
                    </div>

                    <p className="text-[13px] leading-relaxed text-white/45 flex-1 max-w-xs">{p.blurb}</p>

                    {/* Stack pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/40 hover:text-blue hover:border-blue/25 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      <a
                        href={p.links?.caseStudy ?? "#"}
                        className="inline-flex items-center gap-2 rounded-full bg-blue text-white px-4 py-2 text-[10px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
                      >
                        Case Study
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M2 10L10 2M10 2H4M10 2v6"/>
                        </svg>
                      </a>
                      <a
                        href={p.links?.live ?? "#"}
                        className="inline-flex items-center gap-2 rounded-full bg-white/6 border border-white/10 text-white/60 px-4 py-2 text-[10px] uppercase tracking-widest font-medium hover:bg-white/10 hover:text-white transition-all"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-white/4 border border-white/8 text-white/40 px-4 py-2 text-[10px] uppercase tracking-widest font-medium hover:bg-white/8 hover:text-white/70 transition-all"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* ── Right: browser mockup ── */}
                  <div
                    className="relative min-h-64 sm:min-h-80 lg:min-h-0"
                    style={{ height: 380 }}
                  >
                    <div className="absolute inset-4 lg:inset-6">
                      <BrowserFrame url={url}>
                        <SitePreview url={url} />
                      </BrowserFrame>
                    </div>
                    {/* Subtle inner glow on right */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)" }}
                    />
                  </div>
                </div>

                {/* ── Metrics strip ── */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-4"
                  style={METRICS_STRIP_STYLE}
                >
                  {p.metrics.map((m, mi) => (
                    <div
                      key={m.l}
                      className={`px-6 py-4 flex items-center gap-3 ${mi < p.metrics.length - 1 ? "border-r border-white/5" : ""}`}
                    >
                      <div className="text-blue/70">
                        <MetricIcon type={m.icon} />
                      </div>
                      <div>
                        <p className="font-display text-xl text-white leading-none">{m.v}</p>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-white/30 mt-0.5">{m.l}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="h-10" />

        {/* ── CTA footer ── */}
        <div
          className="mt-4 rounded-[28px] p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{
            ...CARD_BG,
            boxShadow: "0 0 60px -20px rgba(59,130,246,0.12)",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 2a9 9 0 0 1 0 18A9 9 0 0 1 11 2z" />
                <path d="M7 9l4-4 4 4M11 5v8" />
              </svg>
            </div>
            <div>
              <p className="font-display text-lg sm:text-xl text-white">Have a project in mind?</p>
              <p className="text-sm text-white/40 mt-0.5">Let&apos;s build something amazing together.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue text-white rounded-full px-6 py-3 text-[10px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            LET&apos;S TALK
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 10L10 2M10 2H4M10 2v6"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}