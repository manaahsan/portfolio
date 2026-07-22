export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-36 border-t border-foreground"
    >
      <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6">

          {/* Section label */}
          <div className="col-span-12 lg:col-span-3 font-mono text-[10px] uppercase tracking-widest text-blue lg:pt-6 reveal">
            [05] / CONTACT
          </div>

          {/* Main content */}
          <div className="col-span-12 lg:col-span-9 reveal reveal-d1">

            {/* Heading */}
            <h2
              className="font-display leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
            >
              LET&apos;S BUILD
              <br />
              <span className="text-blue">SOMETHING</span>
              <br />
              <span className="stroke-text">RARE.</span>
            </h2>

            {/* CTA row */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3">

              {/* Email button */}
              <a
                href="mailto:ahsanmanaz@gmail.com"
                className="group flex items-center justify-between gap-4 border-2 border-foreground px-5 py-5 sm:px-6 sm:py-7 hover:bg-foreground hover:text-background hover:border-blue transition-all duration-300 flex-1 min-w-0"
              >
                <span
                  className="font-display tracking-wider truncate"
                  style={{ fontSize: "clamp(0.9rem, 3vw, 3rem)" }}
                >
                  AHSANMANAZ@GMAIL.COM
                </span>
                <span className="text-2xl sm:text-3xl shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>

              {/* Social links */}
              <div className="flex flex-row sm:flex-col gap-2 sm:w-40 shrink-0">
                {[
                  { l: "GITHUB",   h: "https://github.com/manaahsan" },
                  { l: "LINKEDIN", h: "https://www.linkedin.com/in/manazir-ahsan-dev/" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none border border-foreground p-3 sm:p-4 font-display text-base sm:text-xl tracking-wider hover:bg-blue hover:text-background hover:border-blue transition-all duration-200 flex items-center justify-between group"
                  >
                    {s.l}
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
