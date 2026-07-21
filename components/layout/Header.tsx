"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    tick();
    const interval = setInterval(tick, 30_000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
        <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-2xl tracking-wider flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 bg-blue rounded-full" />
            MANAZIR<span className="text-muted-foreground">/A</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.22em] font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              KHI · {time}
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 shrink-0"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${
                  open ? "-rotate-45 translate-y-[-3.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-64 border-t border-border" : "max-h-0"
          }`}
        >
          <nav className="bg-background/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3 border-b border-border last:border-0 text-xs uppercase tracking-[0.22em] font-medium hover:text-blue transition-colors"
              >
                <span>{l.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </a>
            ))}
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground pt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              KHI · {time}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
