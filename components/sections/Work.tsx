import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-375 px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end reveal">
          <div className="col-span-12 lg:col-span-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            [02] / SELECTED WORK
            <br />
            <span className="text-blue">03 CASES · 2024—2025</span>
          </div>
          <h2 className="col-span-12 lg:col-span-8 font-display text-6xl lg:text-9xl">
            THINGS <span className="text-blue">I&apos;VE</span>
            <br />
            <span className="stroke-text">SHIPPED.</span>
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {projects.map((p, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <article
                key={p.no}
                className={`grid grid-cols-12 gap-4 lg:gap-6 group reveal reveal-d${(idx % 4) + 1}`}
              >
                {/* number plate */}
                <div
                  className={`col-span-12 lg:col-span-2 ${flipped ? "lg:order-3" : ""}`}
                >
                  <div className="font-display text-[7rem] lg:text-[10rem] leading-none text-blue stroke-text">
                    {p.no}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                    {p.year} · {p.kicker}
                  </div>
                </div>

                {/* visual block */}
                <div
                  className={`col-span-12 lg:col-span-6 ${flipped ? "lg:order-1" : "lg:col-start-3"} relative`}
                >
                  <div
                    className={`relative aspect-16\/10 bg-foreground overflow-hidden ${idx === 1 ? "lg:translate-y-6" : ""} ${idx === 2 ? "lg:-translate-y-4" : ""} group-hover:shadow-[0_0_40px_-8px_var(--brand-blue)] transition-shadow duration-500`}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, oklch(0.99 0 0 / 0.15) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.99 0 0 / 0.15) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    {/* Blue diagonal accent */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-blue" />
                    <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-widest text-background/70">
                      &quot; ///&quot; CASE.{p.no}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 font-display text-background text-5xl lg:text-7xl leading-[0.85]">
                      {p.title.toUpperCase()}
                    </div>
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-blue group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-1/3 right-10 w-24 h-24 border-2 border-background/60 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/3 w-32 h-px bg-blue group-hover:w-48 transition-all duration-500" />
                  </div>
                </div>

                {/* meta */}
                <div
                  className={`col-span-12 lg:col-span-4 ${flipped ? "lg:order-2 lg:col-start-9" : ""} flex flex-col gap-5`}
                >
                  <p className="text-base lg:text-lg leading-snug font-light">
                    {p.blurb}
                  </p>
                  <div className="flex gap-8 border-t border-foreground pt-4">
                    {p.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display text-4xl lg:text-5xl text-blue">
                          {m.v}
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-secondary hover:bg-blue hover:text-background transition-colors duration-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
