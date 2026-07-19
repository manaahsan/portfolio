export default function Ticker() {
  return (
    <section
      aria-hidden
      className="border-y border-foreground py-3 overflow-hidden bg-foreground text-background"
    >
      <div className="flex whitespace-nowrap ticker">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-10 px-5 font-display text-3xl lg:text-4xl tracking-wider"
          >
            {[
              "AI ENGINEERING",
              "◆",
              "FULL STACK SYSTEMS",
              "◆",
              "REAL-TIME IoT",
              "◆",
              "CONVERSATIONAL UX",
              "◆",
              "PLATFORM ARCHITECTURE",
              "◆",
            ].map((t, j) => (
              <span key={j} className={j % 2 === 0 ? "" : "text-blue"}>
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
