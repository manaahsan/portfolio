"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    no: "01",
    year: "2025",
    title: "Vox Commerce",
    kicker: "AI · Commerce",
    blurb:
      "A scalable storefront with a voice assistant for conversational product discovery. +45% engagement and intelligent recommendations baked into every step.",
    metrics: [
      { v: "+45%", l: "engagement" },
      { v: "1.2s", l: "TTI" },
    ],
    stack: ["Next.js", "OpenAI", "Stripe", "Postgres"],
  },
  {
    no: "02",
    year: "2024",
    title: "Sentinel Grid",
    kicker: "IoT · Real-time",
    blurb:
      "Real-time SSR dashboard for smart waste sensors across the city. Tuned rendering for high-frequency feeds — sub-200ms updates at the edge.",
    metrics: [
      { v: "<200ms", l: "latency" },
      { v: "10k", l: "sensors" },
    ],
    stack: ["Next.js SSR", "MQTT", "TimescaleDB", "D3"],
  },
  {
    no: "03",
    year: "2024",
    title: "Halo Network",
    kicker: "Multi-tenant · Platform",
    blurb:
      "Affiliate & influencer platform with automated campaign workflows and a reward engine processing 1,000+ daily transactions with full audit trail.",
    metrics: [
      { v: "1k+", l: "tx/day" },
      { v: "100%", l: "audited" },
    ],
    stack: ["TypeScript", "tRPC", "Prisma", "Redis"],
  },
];

const stackTabs = [
  {
    id: "frontend",
    label: "Frontend",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="2" width="12" height="9" rx="1" /><path d="M5 13h4M7 11v2" />
      </svg>
    ),
  },
  {
    id: "backend",
    label: "Backend",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="1" y="2" width="12" height="3" rx="1" /><rect x="1" y="6" width="12" height="3" rx="1" /><rect x="1" y="10" width="12" height="2" rx="1" />
      </svg>
    ),
  },
  {
    id: "database",
    label: "Database",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <ellipse cx="7" cy="3.5" rx="5" ry="1.5" /><path d="M2 3.5v7c0 .83 2.24 1.5 5 1.5s5-.67 5-1.5v-7" /><path d="M2 7c0 .83 2.24 1.5 5 1.5S12 7.83 12 7" />
      </svg>
    ),
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M11.5 6a4 4 0 0 0-7.66-1.5H3.5a2.5 2.5 0 1 0 0 5h8a2 2 0 1 0 0-4h-.17" />
      </svg>
    ),
  },
  {
    id: "others",
    label: "Others",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="7" cy="7" r="5.5" />
        <circle cx="5" cy="7" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="7" cy="7" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="9" cy="7" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

type StackCat = "frontend" | "backend" | "database" | "tools" | "others";

const stackData: Record<StackCat, { name: string; logo: React.ReactNode }[]> = {
  frontend: [
    {
      name: "Next.js",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#000" />
          <path fill="#fff" d="M12 29V11l20 20-3.5 2.5L16 21v8h-4z" />
          <rect fill="#fff" x="21" y="11" width="3.5" height="11.5" />
        </svg>
      ),
    },
    {
      name: "React",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" />
          <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 20 20)" />
          <circle cx="20" cy="20" r="2.5" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#3178C6" />
          <text x="20" y="28" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15">TS</text>
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <path fill="#06B6D4" d="M20 7c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.37.34 2.35 1.34 3.44 2.44C22.67 15.84 25.1 18.2 30 18.2c4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.37-.34-2.35-1.34-3.44-2.44C27.33 9.36 24.9 7 20 7z" />
          <path fill="#06B6D4" d="M11 21.8c-4.8 0-7.8 2.4-9 7.2 1.8-2.4 3.9-3.3 6.3-2.7 1.37.34 2.35 1.34 3.44 2.44C13.67 30.64 16.1 33 21 33c4.8 0 7.8-2.4 9-7.2-1.8 2.4-3.9 3.3-6.3 2.7-1.37-.34-2.35-1.34-3.44-2.44C18.33 24.16 15.9 21.8 11 21.8z" />
        </svg>
      ),
    },
    {
      name: "TanStack Query",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#FF4154" />
          <path fill="white" d="M14 16h12l-3 5h-6l-3-5z" />
          <path stroke="white" strokeWidth="2.5" strokeLinecap="round" d="M17 21v5M23 21v5" />
          <circle cx="14.5" cy="14" r="2.5" fill="white" />
          <circle cx="25.5" cy="14" r="2.5" fill="white" />
          <path stroke="white" strokeWidth="2" d="M14.5 14h11" />
        </svg>
      ),
    },
    {
      name: "Zustand",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="6" fill="#7B5230" />
          <ellipse cx="20" cy="14" rx="9" ry="7" fill="#A0785A" />
          <ellipse cx="13" cy="11" rx="3.5" ry="3" fill="#8B6040" />
          <ellipse cx="27" cy="11" rx="3.5" ry="3" fill="#8B6040" />
          <circle cx="16" cy="16" r="2.5" fill="#2A1A0A" />
          <circle cx="24" cy="16" r="2.5" fill="#2A1A0A" />
          <ellipse cx="20" cy="21" rx="5" ry="2" fill="#2A1A0A" opacity="0.3" />
          <path stroke="#F5DEB3" strokeWidth="1.8" strokeLinecap="round" d="M15 25c1.7 2.5 8.3 2.5 10 0" />
        </svg>
      ),
    },
    {
      name: "shadcn/ui",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#18181B" />
          <path stroke="white" strokeWidth="3.5" strokeLinecap="round" d="M26 14L14 26" />
          <path stroke="white" strokeWidth="3.5" strokeLinecap="round" d="M26 25h-6a6 6 0 0 1 0-12h0" />
        </svg>
      ),
    },
  ],
  backend: [
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <path fill="#339933" d="M20 3L5 12v16l15 9 15-9V12L20 3z" />
          <text x="20" y="27" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="11">JS</text>
        </svg>
      ),
    },
    {
      name: "Express",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#1C1C1C" />
          <text x="20" y="25" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="400">ex.</text>
        </svg>
      ),
    },
    {
      name: "tRPC",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#2596BE" />
          <text x="20" y="26" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="11">tRPC</text>
        </svg>
      ),
    },
    {
      name: "Python",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <path fill="#3776AB" d="M20 4c-5.5 0-9 2-9 4.5v3H20v1.5H8.5C6 13 4 15.5 4 20s2 7 4.5 7H11v-4.5C11 20 13.5 18 20 18h9c2.5 0 4-2 4-4.5V8.5C33 6 29.5 4 20 4zM16 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
          <path fill="#FFD43B" d="M20 36c5.5 0 9-2 9-4.5v-3H20v-1.5h11.5c2.5 0 4.5-2.5 4.5-7s-2-7-4.5-7H29v4.5c0 2.5-2.5 4.5-9 4.5h-9c-2.5 0-4 2-4 4.5v5C7 34 10.5 36 20 36zm4-4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      ),
    },
    {
      name: "FastAPI",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#009688" />
          <path fill="white" d="M22 7l-9 15h9l-4 11 13-17h-9l4-9z" />
        </svg>
      ),
    },
    {
      name: "GraphQL",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <polygon points="20,5 34,13.5 34,26.5 20,35 6,26.5 6,13.5" stroke="#E10098" strokeWidth="2" fill="none" />
          <circle cx="20" cy="5" r="2.5" fill="#E10098" />
          <circle cx="34" cy="13.5" r="2.5" fill="#E10098" />
          <circle cx="34" cy="26.5" r="2.5" fill="#E10098" />
          <circle cx="20" cy="35" r="2.5" fill="#E10098" />
          <circle cx="6" cy="26.5" r="2.5" fill="#E10098" />
          <circle cx="6" cy="13.5" r="2.5" fill="#E10098" />
          <circle cx="20" cy="20" r="3.5" fill="#E10098" />
        </svg>
      ),
    },
  ],
  database: [
    {
      name: "PostgreSQL",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="12" rx="12" ry="5" fill="#4A90D9" />
          <rect x="8" y="12" width="24" height="16" fill="#336791" />
          <ellipse cx="20" cy="28" rx="12" ry="5" fill="#4A90D9" />
          <ellipse cx="20" cy="12" rx="12" ry="5" fill="#4A90D9" />
          <path stroke="white" strokeWidth="1.5" d="M14 20h12M14 24h8" />
        </svg>
      ),
    },
    {
      name: "Redis",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#DC382D" />
          <path fill="white" d="M10 22l10-5 10 5-10 5-10-5z" />
          <path fill="white" opacity="0.7" d="M10 18l10-5 10 5-10 5-10-5z" />
          <path fill="white" opacity="0.4" d="M10 14l10-5 10 5-10 5-10-5z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <path fill="#00ED64" d="M20 3c0 0-8 10.5-8 18 0 4.42 3.58 8 8 8s8-3.58 8-8c0-7.5-8-18-8-18z" />
          <path fill="#00A543" d="M20 3s-1.5 10-1.5 18v8.5l1.5.5V3z" />
          <rect x="19.5" y="28" width="1" height="9" fill="#00A543" />
        </svg>
      ),
    },
    {
      name: "Prisma",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <path fill="#0C344B" d="M8 32L20 5l12 27-12 3L8 32z" />
          <path fill="#16A394" opacity="0.65" d="M8 32l12 3V14L8 32z" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#00758F" />
          <text x="20" y="26" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="10">MySQL</text>
        </svg>
      ),
    },
  ],
  tools: [
    {
      name: "AWS",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#232F3E" />
          <text x="20" y="20" textAnchor="middle" fill="#FF9900" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="11">aws</text>
          <path fill="#FF9900" d="M10 23c4 2 16 2 20 0l2 3c-5 3-19 3-24 0l2-3z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#2496ED" />
          <rect x="6" y="19" width="5" height="4" rx="0.5" fill="white" />
          <rect x="12" y="19" width="5" height="4" rx="0.5" fill="white" />
          <rect x="18" y="19" width="5" height="4" rx="0.5" fill="white" />
          <rect x="24" y="19" width="5" height="4" rx="0.5" fill="white" />
          <rect x="12" y="14" width="5" height="4" rx="0.5" fill="white" />
          <rect x="18" y="14" width="5" height="4" rx="0.5" fill="white" />
          <rect x="18" y="9" width="5" height="4" rx="0.5" fill="white" />
          <path stroke="white" strokeWidth="1.5" d="M32 21s3-2 5 0" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#000" />
          <path fill="white" d="M20 10L34 30H6L20 10z" />
        </svg>
      ),
    },
    {
      name: "Git",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#F05032" />
          <circle cx="28" cy="12" r="3.5" fill="white" />
          <circle cx="12" cy="20" r="3.5" fill="white" />
          <circle cx="28" cy="28" r="3.5" fill="white" />
          <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M15.5 20h9M25 15.5v9" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#181717" />
          <path fill="white" d="M20 8a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 20 8z" />
        </svg>
      ),
    },
    {
      name: "Nginx",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#009900" />
          <path fill="white" d="M10 30V10l10 13V10l10 20H22V17l-8-7h16" opacity="0.9" />
        </svg>
      ),
    },
  ],
  others: [
    {
      name: "OpenAI",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#000" />
          <path stroke="white" strokeWidth="1.5" fill="none" d="M20 9a11 11 0 0 1 0 22A11 11 0 0 1 20 9z" />
          <path stroke="white" strokeWidth="1.5" d="M9.5 14.5l21 11M9.5 25.5l21-11M20 9v22" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#635BFF" />
          <path fill="white" d="M18 17c0-1.7 1.4-2.2 3-2.2 2.7 0 5.5.8 5.5.8V11s-2.4-.8-5.5-.8c-4.5 0-7.5 2.3-7.5 6.2 0 6 8.5 5 8.5 7.8 0 1.5-1.3 2-3 2-2.8 0-5.5-1.2-5.5-1.2V29s2.5 1 5.5 1c4.5 0 7.5-2.2 7.5-6.4C27 17.3 18 18.3 18 17z" />
        </svg>
      ),
    },
    {
      name: "Supabase",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#1C1C1C" />
          <path fill="#3ECF8E" d="M22 6L9 22h11l-2 12L33 18H22V6z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect x="13" y="4" width="14" height="10" rx="5" fill="#F24E1E" />
          <rect x="13" y="14" width="7" height="10" rx="4" fill="#A259FF" />
          <rect x="13" y="24" width="7" height="10" rx="4" fill="#0ACF83" />
          <circle cx="27" cy="19" r="5" fill="#1ABCFE" />
          <rect x="20" y="14" width="7" height="10" rx="4" fill="#FF7262" />
        </svg>
      ),
    },
    {
      name: "Postman",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="#FF6C37" />
          <circle cx="22" cy="18" r="7" stroke="white" strokeWidth="1.8" fill="none" />
          <path stroke="white" strokeWidth="2" strokeLinecap="round" d="M11 29l8-8" />
          <circle cx="22" cy="18" r="2.5" fill="white" />
        </svg>
      ),
    },
    {
      name: "Cloudflare",
      logo: (
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="5" fill="#F48120" />
          <path fill="white" d="M27 22c.1-.4.2-.8.2-1.2a4.8 4.8 0 0 0-8.9-2.5 2.8 2.8 0 0 0-4.1 3.7H27z" />
          <path fill="white" opacity="0.5" d="M29 22.5H10.5a1.5 1.5 0 0 0 0 3H29a1.5 1.5 0 0 0 0-3z" />
        </svg>
      ),
    },
  ],
};

export default function Home() {
  const [time, setTime] = useState("");
  const [profileError, setProfileError] = useState(false);
  const [activeStack, setActiveStack] = useState<StackCat>("frontend");
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clock
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

    // Custom cursor
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 2.5}px, ${my - 2.5}px)`;
      }
    };

    const animateCursor = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      raf = requestAnimationFrame(animateCursor);
    };
    raf = requestAnimationFrame(animateCursor);

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role=button]")) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onMouseOut = () => document.body.classList.remove("cursor-hover");

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    // Scroll progress
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      if (scrollBarRef.current) {
        scrollBarRef.current.style.width = `${pct}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll reveal
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="noise relative min-h-screen overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.055) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Custom cursor */}
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />

      {/* Scroll progress */}
      <div ref={scrollBarRef} className="scroll-bar" />

      {/* Nav */}
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

      {/* HERO */}
      <section id="top" className="relative pt-24 pb-0 lg:pt-32 overflow-hidden">
        {/* Vertical OPEN FOR WORK */}
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center gap-2"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">Open For Work</span>
        </div>

        <div className="mx-auto max-w-375 px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">

            {/* ── Left column ── */}
            <div
              className="col-span-12 lg:col-span-6 flex flex-col rise"
              style={{ "--delay": "0.1s" } as React.CSSProperties}
            >
              {/* Meta labels */}
              <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
                <span className="text-blue">[01] PORTFOLIO</span>
                <span>VOL. 04 · 2026</span>
              </div>

              {/* Main heading */}
              <h1 className="font-display leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(5rem, 12vw, 9.5rem)" }}>
                FULL<span className="text-blue">·</span>STACK
              </h1>

              {/* Subheading */}
              <p className="font-display tracking-[0.18em] mt-3"
                style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)" }}>
                ENGINEERING{" "}
                <span className="text-blue">DIGITAL</span>{" "}
                EXPERIENCES
              </p>

              {/* Description */}
              <p className="text-sm lg:text-base leading-relaxed mt-5 text-muted-foreground max-w-md">
                I build AI-powered commerce, real-time IoT solutions,
                and multi-tenant platforms that ship at scale
                without losing the craft.
              </p>

              {/* CTAs */}
              <div
                className="flex items-center gap-4 mt-8 rise"
                style={{ "--delay": "0.3s" } as React.CSSProperties}
              >
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 bg-blue text-white px-6 py-3 text-xs uppercase tracking-widest font-medium hover:gap-3 transition-all duration-200"
                >
                  SEE MY WORK <span>↗</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-xs uppercase tracking-widest font-medium hover:border-blue hover:text-blue transition-colors duration-200"
                >
                  CONTACT ME <span>↗</span>
                </a>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-border rise"
                style={{ "--delay": "0.45s" } as React.CSSProperties}
              >
                {[
                  { icon: "⬡", val: "5+", label: "YEARS EXPERIENCE" },
                  { icon: "⚡", val: "20+", label: "PROJECTS DELIVERED" },
                  { icon: "⬡", val: "10+", label: "HAPPY CLIENTS" },
                  { icon: "↗", val: "99%", label: "CLIENT SATISFACTION" },
                ].map((s) => (
                  <div key={s.label} className="flex items-start gap-2">
                    <span className="text-blue text-sm mt-0.5 leading-none">{s.icon}</span>
                    <div>
                      <div className="font-display text-3xl leading-none">{s.val}</div>
                      <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground mt-1.5 leading-tight">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column: Visual ── */}
            <div
              className="hidden lg:block col-span-6 relative rise"
              style={{ "--delay": "0.2s", height: "600px" } as React.CSSProperties}
            >
              {/* Large circle backdrop */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "480px",
                  height: "480px",
                  background: "linear-gradient(135deg, #e8e8f2 0%, #f4f4f8 100%)",
                  top: "50%",
                  right: "-40px",
                  transform: "translateY(-50%)",
                }}
              />

              {/* Grid crosshairs */}
              {[
                { top: "10%", left: "40%" },
                { top: "55%", left: "12%" },
                { top: "80%", right: "10%" },
              ].map((pos, i) => (
                <div key={i} className="absolute text-border text-sm font-light select-none" style={pos}>+</div>
              ))}

              {/* ── 3D Blocks ── */}
              <div
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -52%)",
                  width: "360px",
                  height: "420px",
                }}
              >
                {/* Dark marble block */}
                <div
                  className="absolute"
                  style={{
                    width: "168px",
                    height: "202px",
                    top: "18px",
                    left: "62px",
                    background:
                      "linear-gradient(155deg, #484858 0%, #2e2e40 45%, #1c1c2c 100%)",
                    boxShadow:
                      "14px 18px 40px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.08)",
                    transform:
                      "perspective(900px) rotateX(7deg) rotateY(-9deg)",
                    borderRadius: "2px",
                  }}
                />

                {/* White marble block */}
                <div
                  className="absolute"
                  style={{
                    width: "192px",
                    height: "150px",
                    top: "208px",
                    left: "8px",
                    background:
                      "linear-gradient(155deg, #f6f6f2 0%, #e6e6e0 60%, #d4d4cc 100%)",
                    boxShadow:
                      "12px 16px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
                    transform:
                      "perspective(900px) rotateX(7deg) rotateY(-9deg)",
                    borderRadius: "2px",
                  }}
                />

                {/* Blue glass block */}
                <div
                  className="absolute"
                  style={{
                    width: "152px",
                    height: "278px",
                    top: "62px",
                    left: "198px",
                    background:
                      "linear-gradient(155deg, rgba(50,100,255,0.82) 0%, rgba(35,80,240,0.68) 50%, rgba(22,58,215,0.58) 100%)",
                    boxShadow:
                      "12px 16px 36px rgba(40,85,255,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
                    transform:
                      "perspective(900px) rotateX(7deg) rotateY(-9deg)",
                    borderRadius: "2px",
                  }}
                />
              </div>

              {/* ── Specializing In card ── */}
              <div
                className="absolute z-20 rise"
                style={{
                  bottom: "36px",
                  right: "0px",
                  width: "220px",
                  "--delay": "0.55s",
                } as React.CSSProperties}
              >
                <div className="bg-foreground text-background p-5 shadow-2xl" style={{ borderRadius: "4px" }}>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-blue mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                    SPECIALIZING IN
                  </div>
                  {[
                    "AI Integrated Systems",
                    "Real-time IoT Platforms",
                    "Scalable Web Applications",
                    "E-commerce Solutions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[11px] py-2 border-b border-white/10 last:border-0 last:pb-0 text-background/85"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-muted-foreground">
                        <rect x="1" y="1" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M4 6h4M6 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      {item}
                    </div>
                  ))}
                  <div
                    className="absolute flex items-center justify-center bg-blue text-white text-base"
                    style={{ bottom: "-12px", right: "-12px", width: "36px", height: "36px" }}
                  >
                    ↗
                  </div>
                </div>
              </div>

              {/* ── Rotating badge ── */}
              <div className="absolute floaty" style={{ top: "8px", right: "8px" }}>
                <div className="relative w-36 h-36">
                  <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 w-full h-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                      />
                    </defs>
                    <text
                      className="fill-foreground"
                      style={{ fontFamily: "Bebas Neue", fontSize: 18, letterSpacing: 4 }}
                    >
                      <textPath href="#circle">AI · FULL STACK · IoT · PLATFORMS · </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue text-white flex items-center justify-center font-display text-2xl hover:scale-110 transition-transform duration-300">
                      M·A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack strip ── */}
        <div className="mt-12 border-t border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto max-w-375 px-6 lg:px-16 py-4 flex items-center gap-8 overflow-x-auto">
            <span className="font-mono text-[9px] uppercase tracking-widest text-blue shrink-0">
              TECH STACK
            </span>
            {[
              { name: "Next.js", abbr: "N" },
              { name: "React", abbr: "⚛" },
              { name: "TypeScript", abbr: "TS" },
              { name: "Node.js", abbr: "⬡" },
              { name: "PostgreSQL", abbr: "⬡" },
              { name: "AWS", abbr: "⬡" },
            ].map((t) => (
              <div key={t.name} className="flex items-center gap-2 shrink-0 text-muted-foreground hover:text-foreground transition-colors duration-200">
                <span
                  className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold bg-secondary text-foreground"
                >
                  {t.abbr}
                </span>
                <span className="text-xs font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
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

      {/* WORK */}
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

      {/* ABOUT */}
      <section
        id="about"
        className="relative py-20 lg:py-28 border-t border-border bg-background overflow-hidden"
      >
        {/* Vertical OPEN FOR WORK */}
        <div
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center gap-2"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">Open For Work</span>
        </div>

        <div className="mx-auto max-w-375 px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* ── Left: text ── */}
            <div className="col-span-12 lg:col-span-4 reveal">
              {/* Section label */}
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                [ 02 ]
              </div>

              {/* Heading */}
              <h2 className="font-display text-6xl lg:text-7xl leading-[0.88] tracking-tight mb-1">
                ABOUT <span className="text-blue">ME</span>
              </h2>
              {/* Blue underline */}
              <div className="w-8 h-0.5 bg-blue mt-3 mb-6" />

              {/* Copy */}
              <p className="text-sm lg:text-base leading-relaxed text-foreground mb-4">
                I&apos;m Manazir Ahsan, a Full Stack Developer and AI
                enthusiast who builds scalable, real-world solutions using
                modern technologies.
              </p>
              <p className="text-sm lg:text-base leading-relaxed text-muted-foreground mb-8">
                I focus on creating performant, accessible, and user-centric
                applications that solve meaningful problems.
              </p>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2.5 border border-border px-5 py-2.5 text-[11px] uppercase tracking-widest font-mono font-medium hover:border-blue hover:text-blue transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="1" width="10" height="12" rx="1" />
                  <path d="M5 7h4M7 5v4" />
                </svg>
                DOWNLOAD RESUME
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M6 2v6M3 6l3 3 3-3" />
                </svg>
              </a>
            </div>

            {/* ── Center: photo ── */}
            <div className="col-span-12 lg:col-span-5 relative flex items-end justify-center reveal reveal-d1" style={{ minHeight: "420px" }}>
              {/* Grid crosshairs */}
              {[
                { top: "12%", left: "38%" },
                { top: "48%", left: "8%" },
                { bottom: "10%", right: "6%" },
              ].map((pos, i) => (
                <div key={i} className="absolute text-border text-sm select-none" style={pos}>+</div>
              ))}

              {/* Blue circle backdrop */}
              <div
                className="absolute rounded-full bg-blue"
                style={{ width: "280px", height: "280px", bottom: "0px", left: "50%", transform: "translateX(-50%)" }}
              />

              {/* Photo — add profile.jpg to /public to display your photo */}
              <div className="relative z-10" style={{ width: "320px", height: "400px" }}>
                {!profileError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Manazir Ahsan"
                    fill
                    unoptimized
                    className="object-cover object-top grayscale"
                    onError={() => setProfileError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center text-center">
                    <div className="text-muted-foreground">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2 opacity-40">
                        <circle cx="24" cy="16" r="8" />
                        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" />
                      </svg>
                      <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Add profile.jpg<br />to /public</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Right: stat cards ── */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 reveal reveal-d2">
              {[
                {
                  val: "5+",
                  label: "YEARS EXPERIENCE",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2l7 4v4l-7 4-7-4V6l7-4z" />
                      <path d="M3 10l7 4 7-4" />
                    </svg>
                  ),
                },
                {
                  val: "20+",
                  label: "PROJECTS DELIVERED",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 2L4 11h6l-1 7 7-9h-6l1-7z" />
                    </svg>
                  ),
                },
                {
                  val: "10+",
                  label: "HAPPY CLIENTS",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="7.5" cy="7" r="3" />
                      <circle cx="13.5" cy="7" r="3" />
                      <path d="M1 17c0-3.314 2.91-6 6.5-6" />
                      <path d="M10 17c0-3.314 2.91-6 6.5-6" strokeOpacity="0.4" />
                      <path d="M10 17c0-3.314 1.343-6 3-6" />
                    </svg>
                  ),
                },
                {
                  val: "99%",
                  label: "CLIENT SATISFACTION",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2c.5 1.5 2 3 2 5 0 1.1-.9 2-2 2s-2-.9-2-2c0-2 1.5-3.5 2-5z" />
                      <path d="M4 16c0-3.314 2.686-6 6-6s6 2.686 6 6" />
                      <path d="M7.5 16l1.5-3 1.5 3" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 bg-card border border-border p-4 hover:border-blue transition-colors duration-200"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center text-blue bg-background border border-border"
                    style={{ width: "44px", height: "44px", borderRadius: "10px" }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-display text-3xl leading-none">{s.val}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="relative py-20 border-t border-border overflow-hidden">
        {/* Dot grid decoration */}
        <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-30 pointer-events-none" aria-hidden>
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-muted-foreground" />
          ))}
        </div>

        {/* Vertical OPEN FOR WORK */}
        <div
          className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">Open For Work</span>
        </div>

        <div className="mx-auto max-w-375 px-6 lg:px-16">
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* ── Left: heading ── */}
            <div className="col-span-12 lg:col-span-3 reveal">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                [ 03 ]
              </div>
              <h2 className="font-display text-5xl lg:text-6xl leading-[0.88] tracking-tight mb-1">
                MY <span className="text-blue">STACK</span>
              </h2>
              <div className="w-8 h-0.5 bg-blue mt-3 mb-5" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                I work with modern technologies and tools to build fast, scalable and maintainable applications.
              </p>
            </div>

            {/* ── Right: tabs + grid ── */}
            <div className="col-span-12 lg:col-span-9 reveal reveal-d1">
              {/* Tab navigation */}
              <div className="flex items-center overflow-x-auto border-b border-border mb-8 gap-0">
                {stackTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStack(tab.id as StackCat)}
                    className={`flex items-center gap-2 px-5 py-3.5 text-[10px] uppercase tracking-widest font-mono whitespace-nowrap border-b-2 -mb-px transition-all duration-200 ${
                      activeStack === tab.id
                        ? "border-blue text-blue font-bold"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tech cards grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {stackData[activeStack].map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 p-4 bg-card border border-border hover:border-blue hover:-translate-y-0.5 transition-all duration-200 group"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {tech.logo}
                    </div>
                    <span className="text-[10px] font-mono text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
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
                  href="mailto:hello@manazir.dev"
                  className="col-span-12 lg:col-span-8 group flex items-center justify-between border-2 border-foreground p-6 lg:p-8 hover:bg-foreground hover:text-background hover:border-blue transition-all duration-300"
                >
                  <span className="font-display text-3xl lg:text-5xl tracking-wider">
                    HELLO@MANAZIR.DEV
                  </span>
                  <span className="text-3xl group-hover:translate-x-3 transition-transform duration-300">
                    →
                  </span>
                </a>
                <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-2">
                  {[
                    { l: "GITHUB", h: "#" },
                    { l: "LINKEDIN", h: "#" },
                    { l: "TWITTER", h: "#" },
                    { l: "READ.CV", h: "#" },
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

      {/* Footer */}
      <footer className="border-t border-foreground py-8 bg-foreground text-background">
        <div className="mx-auto max-w-375 px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest">
          <div>© 2026 MANAZIR AHSAN · ALL RIGHTS RESERVED</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            CRAFTED IN KARACHI
          </div>
        </div>
      </footer>
    </div>
  );
}
