"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/animations";

export default function Header() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    tick();
    const interval = setInterval(tick, 30_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work",    label: "Work" },
    { href: "#about",   label: "About" },
    { href: "#stack",   label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border transition-colors duration-300"
        style={{ backgroundColor: scrolled ? "rgba(var(--background), 0.92)" : "rgba(var(--background), 0.75)" }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <motion.a
            href="#top"
            className="font-display text-2xl tracking-wider flex items-center gap-2"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <motion.span
              className="inline-block w-2 h-2 bg-blue rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            MANAZIR<span className="text-muted-foreground">/A</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.22em] font-medium">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="relative group"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease }}
                whileHover={{ color: "var(--brand-blue)" }}
              >
                {l.label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px bg-blue"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.div
              className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              UAE · {time}
            </motion.div>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 shrink-0"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${open ? "-rotate-45 translate-y-[-3.5px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden border-t border-border overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              <nav className="bg-background/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0 text-xs uppercase tracking-[0.22em] font-medium hover:text-blue transition-colors"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease }}
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  </motion.a>
                ))}
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground pt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                  UAE · {time}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
