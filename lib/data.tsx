import type { ReactNode } from "react";
import type { Project, StackCat } from "./types";

export const projects: Project[] = [
  {
    no: "01",
    year: "2025",
    title: "Vox Commerce",
    subtitle: "AI-Powered Headless Storefront",
    kicker: "AI · Commerce",
    featured: true,
    blurb:
      "A scalable storefront with a voice assistant for conversational product discovery. Integrated AI recommendations that increased engagement and conversions significantly.",
    metrics: [
      { v: "+45%", l: "Engagement",        icon: "chart" },
      { v: "1.2s",  l: "TTI",              icon: "clock" },
      { v: "92%",   l: "User Satisfaction", icon: "users" },
      { v: "100%",  l: "Responsive",        icon: "code"  },
    ],
    stack: ["Next.js", "OpenAI", "Stripe", "PostgreSQL", "Tailwind CSS"],
    links: { caseStudy: "#", live: "#" },
  },
  {
    no: "02",
    year: "2024",
    title: "Sentinel Grid",
    subtitle: "Real-time IoT Monitoring Dashboard",
    kicker: "IoT · Real-time",
    blurb:
      "Real-time SSR dashboard for smart waste sensors across the city. Tuned rendering for high-frequency feeds — sub-200ms updates at the edge.",
    metrics: [
      { v: "<200ms", l: "Latency",       icon: "bolt"       },
      { v: "10K+",   l: "Sessions",      icon: "db"         },
      { v: "99.9%",  l: "Uptime",        icon: "signal"     },
      { v: "-30%",   l: "Cost Optimized", icon: "trend-down" },
    ],
    stack: ["Next.js", "SSR", "MQTT", "TimescaleDB", "D3.js", "Tailwind CSS"],
    links: { caseStudy: "#", live: "#" },
  },
  {
    no: "03",
    year: "2024",
    title: "Halo Network",
    subtitle: "Multi-tenant Affiliate Platform",
    kicker: "Multi-tenant · Platform",
    blurb:
      "Affiliate & influencer platform with automated campaign workflows and a reward engine processing 1,000+ daily transactions with full audit trail.",
    metrics: [
      { v: "1K+",  l: "TX / Day",   icon: "chart"  },
      { v: "100%", l: "Audited",    icon: "code"   },
      { v: "3×",   l: "Revenue",    icon: "trend-down" },
      { v: "50ms", l: "Response",   icon: "bolt"   },
    ],
    stack: ["TypeScript", "tRPC", "Prisma", "Redis"],
    links: { caseStudy: "#", live: "#" },
  },
  {
    no: "04",
    year: "2023",
    title: "Maple",
    subtitle: "Team Productivity Analytics",
    kicker: "Analytics · SaaS",
    blurb:
      "End-to-end engineering team performance platform with AI sprint forecasting and cycle-time analytics. Reduced planning overhead by 40% across 12 organizations.",
    metrics: [
      { v: "50+",  l: "Teams",      icon: "users"  },
      { v: "40%",  l: "Time Saved", icon: "clock"  },
      { v: "98%",  l: "Retention",  icon: "chart"  },
      { v: "12ms", l: "P99 Query",  icon: "bolt"   },
    ],
    stack: ["React", "Golang", "ClickHouse", "Temporal", "Tailwind CSS"],
    links: { caseStudy: "#", live: "#" },
  },
];

export interface Tech {
  name: string;
  logo: ReactNode;
}

export interface StackTab {
  id: StackCat;
  label: string;
  icon: ReactNode;
}

export const stackTabs: StackTab[] = [
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

export const stackData: Record<StackCat, Tech[]> = {
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
