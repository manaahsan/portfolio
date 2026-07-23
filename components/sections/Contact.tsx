"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, ease, VIEW_ONCE } from "@/lib/animations";

const socials = [
  { l: "GITHUB",   h: "https://github.com/manaahsen" },
  { l: "LINKEDIN", h: "https://www.linkedin.com/in/manazir-ahsan-dev/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-36 border-t border-foreground"
    >
      <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6">

          {/* Section label */}
          <motion.div
            className="col-span-12 lg:col-span-3 font-mono text-[10px] uppercase tracking-widest text-blue lg:pt-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEW_ONCE}
          >
            [05] / CONTACT
          </motion.div>

          {/* Main content */}
          <motion.div
            className="col-span-12 lg:col-span-9"
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEW_ONCE}
          >
            {/* Heading — word by word */}
            <div className="font-display leading-[0.85] tracking-tight" style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}>
              {["LET'S BUILD", "SOMETHING", "GREAT"].map((line, li) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW_ONCE}
                  transition={{ delay: li * 0.12, duration: 0.7, ease }}
                  className={li === 1 ? "text-blue block" : li === 2 ? "stroke-text block" : "block"}
                >
                  {line === "LET'S BUILD" ? "LET’S BUILD" : line}
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="mt-5 text-sm text-foreground/50 max-w-sm leading-relaxed">
              Have a project in mind or just want to say hi?<br />
              I&apos;d love to hear from you. Let&apos;s create something impactful together.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3">

              {/* Email field */}
              <motion.a
                href="mailto:ahsanmanaz@gmail.com"
                className="group flex items-center justify-between gap-4 border-2 border-foreground px-5 py-5 sm:px-6 sm:py-7 flex-1 min-w-0"
                whileHover={{ backgroundColor: "var(--foreground)", color: "var(--background)", borderColor: "var(--brand-blue)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="shrink-0 opacity-50">
                    <rect x="2" y="4" width="16" height="12" rx="1.5" />
                    <path d="M2 6.5l8 5.5 8-5.5" />
                  </svg>
                  <span className="font-display tracking-wider truncate text-base sm:text-2xl lg:text-[clamp(1.1rem,2.5vw,2.2rem)]">
                    AHSANMANAZ@GMAIL.COM
                  </span>
                </div>
                <motion.span
                  className="text-2xl sm:text-3xl shrink-0"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.a>

              {/* Social links */}
              <div className="flex flex-row sm:flex-col gap-2 sm:w-40 shrink-0">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.l}
                    href={s.h}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none border border-foreground p-3 sm:p-4 font-display text-base sm:text-xl tracking-wider flex items-center justify-between group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEW_ONCE}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease }}
                    whileHover={{ backgroundColor: "var(--brand-blue)", color: "var(--background)", borderColor: "var(--brand-blue)" }}
                  >
                    {s.l}
                    <motion.span whileHover={{ x: 2, y: -2 }} transition={{ duration: 0.15 }}>↗</motion.span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer info strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t border-foreground/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2.5 text-sm text-foreground/50">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                  <path d="M7 1C4.8 1 3 2.8 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.2-1.8-4-4-4z" />
                  <circle cx="7" cy="5" r="1.2" />
                </svg>
                <span className="font-mono text-[10px] uppercase tracking-widest">BASED IN DUBAI, UAE</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground/50">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="text-blue">
                  <path d="M8 1L3.5 8H7L5.5 13l7-8H9L10.5 1z" />
                </svg>
                <span className="font-mono text-[10px] uppercase tracking-widest">AVAILABLE FOR FREELANCE &amp; FULL-TIME</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
