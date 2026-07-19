"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
      <div className="mx-auto max-w-375 px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl tracking-wider flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 bg-blue rounded-full" />
          MANAZIR<span className="text-muted-foreground">/A</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.22em] font-medium">
          <a href="#work" className="hover:text-blue transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-blue transition-colors">
            About
          </a>
          <a href="#stack" className="hover:text-blue transition-colors">
            Stack
          </a>
          <a href="#contact" className="hover:text-blue transition-colors">
            Contact
          </a>
        </nav>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
          KHI · {time}
        </div>
      </div>
    </header>
  );
}
