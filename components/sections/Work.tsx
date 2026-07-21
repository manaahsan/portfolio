import type { CSSProperties } from "react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";

/* ── Metric icons ── */
function MetricIcon({ type }: { type: Project["metrics"][number]["icon"] }) {
  const cls = "w-5 h-5 text-blue shrink-0";
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
  // trend-down
  return (
    <svg className={cls} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,6 7,11 11,8 18,15" />
      <polyline points="14,15 18,15 18,11" />
    </svg>
  );
}

/* ── Project preview mockups ── */
function VoxPreview() {
  return (
    <div className="w-full h-full bg-white flex flex-col text-[0px] overflow-hidden">
      {/* browser bar */}
      <div className="bg-[#f5f5f5] border-b border-gray-200 px-3 py-2 flex items-center gap-2 shrink-0">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white rounded border border-gray-200 px-2 py-0.5 text-[8px] text-gray-400 font-mono">vox.store</div>
        <div className="flex gap-2 text-gray-400">
          {["⌕","✦","☆","👤"].map(i => <span key={i} className="text-[8px]">{i}</span>)}
        </div>
      </div>
      {/* nav */}
      <div className="bg-white border-b border-gray-100 px-4 py-1.5 flex items-center justify-between shrink-0">
        <span className="text-[9px] font-bold text-gray-900 tracking-wider">VOX</span>
        <div className="flex gap-3 text-[7px] text-gray-500">
          {["Shop","Categories","Deals","About"].map(l => <span key={l}>{l}</span>)}
        </div>
      </div>
      {/* hero */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 p-3 flex flex-col justify-center gap-2">
          <p className="text-[11px] font-bold text-gray-900 leading-tight">Shop smarter<br/>with your voice</p>
          <p className="text-[7px] text-gray-400">Ask, discover and buy — all in one conversation.</p>
          <div className="flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1 bg-white max-w-30">
            <span className="text-[7px] text-gray-400 flex-1 truncate">Try &quot;wireless headphones...&quot;</span>
            <span className="w-3 h-3 rounded-full bg-blue flex items-center justify-center text-white text-[5px]">🎤</span>
          </div>
          {/* recommendations */}
          <p className="text-[7px] font-semibold text-gray-700 mt-1">Recommended for you</p>
          <div className="flex gap-1.5">
            {[
              { name: "Smart Watch XR", price: "$199" },
              { name: "Noise Cancelling", price: "$149" },
              { name: "Tech Backpack", price: "$99" },
            ].map((p) => (
              <div key={p.name} className="flex-1 bg-gray-50 rounded p-1 border border-gray-100">
                <div className="w-full aspect-square bg-gray-200 rounded mb-1" />
                <p className="text-[6px] text-gray-700 font-medium leading-tight truncate">{p.name}</p>
                <p className="text-[6px] text-gray-500">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
        {/* product image area */}
        <div className="w-22.5 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-2">
          <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center text-[22px]">🎧</div>
        </div>
      </div>
    </div>
  );
}

function SentinelPreview() {
  const stats = [
    { l: "Total Bins", v: "1,248", d: "+12%", c: "text-green-500" },
    { l: "Active",     v: "1,023", d: "+8%",  c: "text-green-500" },
    { l: "Fill Avg.",  v: "68%",   d: "+5%",  c: "text-green-500" },
    { l: "Alerts",    v: "23",    d: "-10%", c: "text-red-400"   },
  ];
  return (
    <div className="w-full h-full bg-[#0f172a] flex overflow-hidden text-[0px]">
      {/* sidebar */}
      <div className="w-17.5 border-r border-white/10 flex flex-col shrink-0">
        <div className="p-2 border-b border-white/10 flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-blue flex items-center justify-center text-white text-[6px] font-bold shrink-0">SG</div>
          <span className="text-[7px] text-white font-semibold">SENTINEL</span>
        </div>
        {["Overview","Sensors","Alerts","Analytics","Reports","Settings"].map((item, i) => (
          <div key={item} className={`px-2 py-1.5 flex items-center gap-1.5 ${i === 0 ? "bg-blue/20 border-l-2 border-blue" : ""}`}>
            <div className="w-1.5 h-1.5 rounded-sm bg-white/40" />
            <span className="text-[6px] text-white/70">{item}</span>
          </div>
        ))}
      </div>
      {/* main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between shrink-0">
          <span className="text-[8px] text-white font-semibold">Overview</span>
          <span className="text-[6px] text-white/40 border border-white/20 px-1.5 py-0.5 rounded">Last 24 Hours ▾</span>
        </div>
        {/* stat cards */}
        <div className="grid grid-cols-4 gap-1.5 px-3 py-2 shrink-0">
          {stats.map((s) => (
            <div key={s.l} className="bg-white/5 rounded p-1.5">
              <p className="text-[5px] text-white/40 uppercase tracking-wide">{s.l}</p>
              <p className="text-[9px] font-bold text-white leading-tight">{s.v}</p>
              <p className={`text-[5px] font-mono ${s.c}`}>{s.d}</p>
            </div>
          ))}
        </div>
        {/* panels */}
        <div className="flex gap-2 px-3 pb-2 flex-1 min-h-0">
          <div className="flex-1 bg-white/5 rounded p-2 flex flex-col">
            <p className="text-[6px] text-white/50 mb-1">Live Map</p>
            <div className="flex-1 bg-[#0a1628] rounded relative overflow-hidden">
              {/* fake map dots */}
              {[[20,30],[40,45],[55,20],[35,60],[65,50],[25,70]].map(([x,y],i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-green-400" style={{left:`${x}%`,top:`${y}%`,opacity:0.7+i*0.05}} />
              ))}
              {/* tooltip */}
              <div className="absolute bg-[#0f172a] border border-white/20 rounded p-1" style={{left:"30%",top:"50%"}}>
                <p className="text-[5px] text-white/80">Bin A-32</p>
                <p className="text-[5px] text-white/50">Fill 88%</p>
              </div>
            </div>
          </div>
          <div className="w-20 bg-white/5 rounded p-2 flex flex-col gap-1">
            <p className="text-[6px] text-white/50">Fill Distribution</p>
            {/* fake donut */}
            <div className="flex justify-center my-1">
              <div className="w-10 h-10 rounded-full border-4 border-blue relative flex items-center justify-center">
                <span className="text-[6px] text-white font-bold">68%</span>
              </div>
            </div>
            {[["0-25%","bg-blue/30"],["25-50%","bg-blue/50"],["50-75%","bg-blue/80"],["75-100%","bg-blue"]].map(([l,c]) => (
              <div key={l} className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-sm ${c}`} />
                <span className="text-[5px] text-white/50">{l}</span>
              </div>
            ))}
            <p className="text-[6px] text-white/50 mt-1 border-t border-white/10 pt-1">Latest Alerts</p>
            {[["Bin B-104","Overflow","2m ago"],["Bin C-170","Sensor Offline","5m ago"]].map(([b,s,t]) => (
              <div key={b} className="flex items-start gap-1">
                <span className="w-1 h-1 rounded-full bg-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[5px] text-white/70">{b}</p>
                  <p className="text-[4px] text-white/40">{s} · {t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HaloPreview() {
  return (
    <div className="w-full h-full bg-[#0f0f23] flex overflow-hidden text-[0px]">
      <div className="w-16.25 border-r border-white/10 flex flex-col shrink-0">
        <div className="p-2 border-b border-white/10">
          <span className="text-[8px] font-bold text-white tracking-wider">HALO</span>
        </div>
        {["Dashboard","Campaigns","Affiliates","Payouts","Reports"].map((item, i) => (
          <div key={item} className={`px-2 py-1.5 flex items-center gap-1.5 ${i === 0 ? "bg-purple-500/20 border-l-2 border-purple-400" : ""}`}>
            <div className="w-1.5 h-1.5 rounded-sm bg-white/30" />
            <span className="text-[6px] text-white/60">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col p-2 gap-2">
        <div className="grid grid-cols-3 gap-1.5 shrink-0">
          {[{l:"Total Revenue",v:"$48.2K",d:"+18%"},{l:"Active Affiliates",v:"342",d:"+7%"},{l:"Conversions",v:"1,284",d:"+23%"}].map(s => (
            <div key={s.l} className="bg-white/5 rounded p-1.5">
              <p className="text-[5px] text-white/40">{s.l}</p>
              <p className="text-[9px] font-bold text-white">{s.v}</p>
              <p className="text-[5px] text-green-400">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5 flex-1 min-h-0">
          <div className="flex-1 bg-white/5 rounded p-2">
            <p className="text-[6px] text-white/50 mb-1">Campaign Performance</p>
            <div className="flex items-end gap-1 h-10">
              {[40,65,50,80,60,90,75].map((h,i) => (
                <div key={i} className="flex-1 bg-purple-500/60 rounded-sm" style={{height:`${h}%`}} />
              ))}
            </div>
          </div>
          <div className="w-18.75 bg-white/5 rounded p-2">
            <p className="text-[6px] text-white/50 mb-1">Top Affiliates</p>
            {[["@nova","$8.2K"],["@kira","$6.1K"],["@zeus","$4.8K"]].map(([n,v]) => (
              <div key={n} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                <span className="text-[5.5px] text-white/70">{n}</span>
                <span className="text-[5.5px] text-purple-300">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 rounded p-2 shrink-0">
          <p className="text-[6px] text-white/50 mb-1">Recent Transactions</p>
          <div className="flex gap-1.5">
            {[{id:"TXN-9281",a:"@nova",v:"$420",s:"Paid"},{id:"TXN-9280",a:"@kira",v:"$215",s:"Pending"},{id:"TXN-9279",a:"@zeus",v:"$312",s:"Paid"}].map(t => (
              <div key={t.id} className="flex-1 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-purple-400" />
                <div>
                  <p className="text-[5px] text-white/60">{t.id}</p>
                  <p className="text-[5px] text-white/40">{t.a} · {t.v}</p>
                </div>
                <span className={`ml-auto text-[4px] px-1 py-0.5 rounded ${t.s === "Paid" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>{t.s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const previews = [VoxPreview, SentinelPreview, HaloPreview];

export default function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-10">

        {/* ── Section header (unchanged) ── */}
        <div className="grid grid-cols-12 gap-6 mb-16 items-end reveal">
          <div className="col-span-12 lg:col-span-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            [02] / SELECTED WORK
            <br />
            <span className="text-blue">03 CASES · 2024—2025</span>
          </div>
          <h2 className="col-span-12 lg:col-span-8 font-display text-5xl sm:text-6xl lg:text-9xl">
            THINGS <span className="text-blue">I&apos;VE</span>
            <br />
            <span className="stroke-text">SHIPPED.</span>
          </h2>
        </div>

        {/* ── Project cards ── */}
        <div className="space-y-6">
          {projects.map((p, idx) => {
            const Preview = previews[idx];
            return (
              <article
                key={p.no}
                className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,3fr)_minmax(0,1.6fr)] border border-border reveal"
                style={{ "--delay": `${idx * 0.15}s` } as CSSProperties}
              >

                {/* ── Left: project info ── */}
                <div className="bg-foreground text-background p-6 lg:p-8 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[11px] text-blue tracking-widest">{p.no}</span>
                    {p.featured && (
                      <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-background/60 border border-background/20 px-2 py-0.5">
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor"><path d="M6 1l1.5 3.1L11 4.6l-2.5 2.4.6 3.4L6 8.8l-3.1 1.6.6-3.4L1 4.6l3.5-.5z"/></svg>
                        Featured
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl leading-tight uppercase tracking-tight text-background">
                      {p.title.toUpperCase()}
                    </h3>
                    <p className="text-blue text-sm font-medium mt-1">{p.subtitle}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-background/70 flex-1">{p.blurb}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-background/10 border border-background/15 text-background/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={p.links?.caseStudy ?? "#"}
                      className="inline-flex items-center gap-1.5 bg-blue text-white px-4 py-2.5 text-[10px] uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
                    >
                      VIEW CASE STUDY <span>↗</span>
                    </a>
                    <a
                      href={p.links?.live ?? "#"}
                      className="inline-flex items-center gap-1.5 border border-background/30 text-background/70 px-4 py-2.5 text-[10px] uppercase tracking-widest font-medium hover:border-blue hover:text-blue transition-colors"
                    >
                      VIEW LIVE <span className="text-[9px]">↗</span>
                    </a>
                  </div>
                </div>

                {/* ── Center: preview ── */}
                <div className="relative min-h-70 sm:min-h-80 lg:min-h-0 border-t lg:border-t-0 lg:border-x border-border overflow-hidden">
                  {Preview && <Preview />}
                </div>

                {/* ── Right: metrics ── */}
                <div className="bg-background border-t lg:border-t-0 border-border grid grid-cols-2 lg:grid-cols-1 lg:divide-y lg:divide-border">
                  {p.metrics.map((m, mi) => (
                    <div
                      key={m.l}
                      className={[
                        "flex items-center gap-3 px-4 sm:px-5 py-4 lg:py-0 lg:h-[25%] border-border",
                        mi % 2 === 0 ? "border-r lg:border-r-0" : "",
                        mi < 2      ? "border-b lg:border-b-0" : "",
                      ].join(" ")}
                    >
                      <MetricIcon type={m.icon} />
                      <div>
                        <div className="font-display text-2xl sm:text-3xl leading-none">{m.v}</div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">
                          {m.l}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </article>
            );
          })}
        </div>

        {/* ── CTA footer ── */}
        <div className="mt-8 border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 2a9 9 0 0 1 0 18A9 9 0 0 1 11 2z" />
                <path d="M7 9l4-4 4 4M11 5v8" />
              </svg>
            </div>
            <div>
              <p className="font-display text-lg sm:text-xl">Have a project in mind?</p>
              <p className="text-sm text-muted-foreground">Let&apos;s build something amazing together.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue text-white px-6 py-3.5 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            LET&apos;S TALK <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
