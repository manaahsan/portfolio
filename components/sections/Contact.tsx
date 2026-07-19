export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 border-t border-foreground"
    >
      <div className="mx-auto max-w-375 px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3 font-mono text-[10px] uppercase tracking-widest text-blue lg:pt-6 reveal">
            [05] / CONTACT
          </div>
          <div className="col-span-12 lg:col-span-9 reveal reveal-d1">
            <h2 className="font-display text-7xl lg:text-[12rem] leading-[0.85]">
              LET&apos;S BUILD
              <br />
              <span className="text-blue">SOMETHING</span>
              <br />
              <span className="stroke-text">RARE.</span>
            </h2>

            <div className="mt-12 grid grid-cols-12 gap-4">
              <a
                href="mailto:ahsanmanaz@gmail.com"
                className="col-span-12 lg:col-span-8 group flex items-center justify-between border-2 border-foreground p-6 lg:p-8 hover:bg-foreground hover:text-background hover:border-blue transition-all duration-300"
              >
                <span className="font-display text-3xl lg:text-5xl tracking-wider">
                  AHSANMANAZ@GMAIL.COM
                </span>
                <span className="text-3xl group-hover:translate-x-3 transition-transform duration-300">
                  →
                </span>
              </a>
              <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-2">
                {[
                  { l: "GITHUB", h: "https://github.com/manaahsan" },
                  { l: "LINKEDIN", h: "https://www.linkedin.com/in/manazir-ahsan-dev/" },
                  // { l: "TWITTER", h: "https://twitter.com/ahsanmanaz" },
                  // { l: "READ.CV", h: "https://read.cv/ahsanmanaz" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    className="border border-foreground p-4 font-display text-xl tracking-wider hover:bg-blue hover:text-background hover:border-blue transition-all duration-200 flex items-center justify-between group"
                  >
                    {s.l}{" "}
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
