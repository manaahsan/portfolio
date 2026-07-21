"use client";

const expertise = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="5,5 1,9 5,13" />
        <polyline points="13,5 17,9 13,13" />
        <line x1="10" y1="2" x2="8" y2="16" />
      </svg>
    ),
    title: "Full Stack Development",
    desc: "Building robust, responsive web applications with modern frameworks and best practices.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="9" cy="9" r="3" />
        <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "AI Integrations",
    desc: "Integrating AI capabilities to automate workflows and create intelligent experiences.",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="9,2 16,6 16,12 9,16 2,12 2,6" />
        <path d="M2 6l7 4 7-4" />
        <line x1="9" y1="10" x2="9" y2="16" />
      </svg>
    ),
    title: "Scalable Platforms",
    desc: "Designing and delivering secure, scalable systems that grow with your business.",
  },
];

const techStack = [
  { name: "Next.js", bg: "#000", fg: "#fff", abbr: "N" },
  { name: "React", bg: "#20232a", fg: "#61DAFB", abbr: "⚛" },
  { name: "TypeScript", bg: "#3178C6", fg: "#fff", abbr: "TS" },
  { name: "Node.js", bg: "#339933", fg: "#fff", abbr: "JS" },
  { name: "Python", bg: "#3776AB", fg: "#FFD43B", abbr: "Py" },
  { name: "PostgreSQL", bg: "#336791", fg: "#fff", abbr: "pg" },
  { name: "Tailwind", bg: "#06B6D4", fg: "#fff", abbr: "tw" },
  { name: "Firebase", bg: "#FFCA28", fg: "#333", abbr: "fb" },
  { name: "Docker", bg: "#2496ED", fg: "#fff", abbr: "🐳" },
];

const builds = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="18" height="13" rx="2" />
        <path d="M8 21h6M11 16v5" />
      </svg>
    ),
    title: "Web Applications",
    desc: "Fast, responsive, and user-focused web apps.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <rect x="4" y="2" width="14" height="14" rx="2" />
        <path d="M8 8h6M8 11h4" />
        <circle cx="8" cy="17" r="2" />
        <circle cx="14" cy="17" r="2" />
        <path d="M10 17h2" />
      </svg>
    ),
    title: "AI-Powered Features",
    desc: "Smart features that enhance automation and decision-making.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M4 11a7 7 0 0 1 14 0" />
        <path d="M2 14c0-2 1-3.5 2.5-4.5M19.5 9.5C21 10.5 22 12 22 14" />
        <path d="M7 20h8M11 14v6" />
        <circle cx="11" cy="14" r="2" />
      </svg>
    ),
    title: "Scalable APIs",
    desc: "Secure, well-documented APIs for modern platforms.",
  },
];

const focusAreas = [
  "Performance & Scalability",
  "Clean Architecture",
  "AI & Automation",
  "User Experience",
  "Security Best Practices",
];

const contacts = [
  {
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <path d="M7.5 1C5.015 1 3 3.015 3 5.5c0 3.875 4.5 8.5 4.5 8.5S12 9.375 12 5.5C12 3.015 9.985 1 7.5 1z" />
        <circle cx="7.5" cy="5.5" r="1.5" />
      </svg>
    ),
    text: "Dubai, UAE",
  },
  {
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <rect x="1" y="3" width="13" height="9" rx="1.5" />
        <path d="M1 4.5l6.5 4 6.5-4" />
      </svg>
    ),
    text: "ahsanmanaz@gmail.com",
  },
  {
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <path d="M4 1.5h2l1 3L5.5 6A9 9 0 0 0 9 9.5L10.5 8l3 1v2a1 1 0 0 1-1 1C5.5 12.5 1.5 9 1 4a1 1 0 0 1 1-1h2z" />
      </svg>
    ),
    text: "+971 569144033",
  },
];

/* ── Card shell ── */
function Card({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-blue">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 border-t border-border bg-background overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Scattered plus markers */}
      {(
        [
          [8, 6],
          [52, 3],
          [88, 8],
          [3, 44],
          [96, 40],
          [42, 90],
          [72, 85],
          [18, 92],
          [62, 52],
        ] as [number, number][]
      ).map(([l, t], i) => (
        <span
          key={i}
          className="absolute text-blue/20 text-base select-none leading-none"
          style={{ left: `${l}%`, top: `${t}%` }}
        >
          +
        </span>
      ))}

      {/* Vertical OPEN FOR WORK */}
      <div
        className="hidden lg:flex absolute left-4 top-1/2 z-10 items-center gap-2"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-blue">
          Open For Work
        </span>
      </div>

      <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-blue mb-6 reveal">
          <span className="w-1.5 h-1.5 rounded-full bg-blue" />[ 02 ]
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-10 lg:gap-14 items-start">
          {/* ── Left: bio ── */}
          <div className="reveal">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.88] tracking-tight">
              ABOUT <span className="text-blue">ME</span>
            </h2>
            <div className="w-8 h-0.5 bg-blue mt-4 mb-6" />

            <p className="text-sm lg:text-base leading-relaxed text-foreground mb-4">
              I&apos;m Manazir Ahsan, a Full Stack Developer and AI enthusiast
              who builds scalable, real-world solutions using modern
              technologies.
            </p>
            <p className="text-sm lg:text-base leading-relaxed text-blue mb-10">
              I focus on creating performant, accessible, and user-centric
              applications that solve meaningful problems.
            </p>

            <a
              href="https://drive.google.com/file/d/1B59Hgny1PtdqzcxcvOV20OAVG-69E7Yt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-border px-5 py-3 text-[11px] uppercase tracking-widest font-mono font-medium hover:border-blue hover:text-blue transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="1" width="10" height="12" rx="1" />
                <path d="M4 7h6M4 4h6M4 10h4" />
              </svg>
              DOWNLOAD RESUME
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <path d="M6 2v6M3 6l3 3 3-3" />
              </svg>
            </a>

            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 reveal">
              {contacts.map((c) => (
                <div
                  key={c.text}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue transition-colors"
                >
                  <span className="text-blue">{c.icon}</span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: 2×2 cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal reveal-d1">
            {/* Core Expertise */}
            <Card label="Core Expertise">
              <div className="flex flex-col gap-4">
                {expertise.map((e) => (
                  <div key={e.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center shrink-0 text-blue">
                      {e.icon}
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-foreground leading-tight">
                        {e.title}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tech Stack */}
            <Card label="Tech Stack">
              <div className="grid grid-cols-3 gap-2">
                {techStack.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-1.5 bg-background border border-border rounded-lg px-2 py-1.5 hover:border-blue/40 transition-colors"
                  >
                    <span
                      className="w-5 h-5 rounded text-[8px] font-bold flex items-center justify-center shrink-0"
                      style={{ background: t.bg, color: t.fg }}
                    >
                      {t.abbr}
                    </span>
                    <span className="text-[9px] font-medium text-foreground truncate">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* What I Build */}
            <Card label="What I Build">
              <div className="grid grid-cols-3 gap-3">
                {builds.map((b) => (
                  <div
                    key={b.title}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-xl border border-border bg-background flex items-center justify-center text-blue">
                      {b.icon}
                    </div>
                    <p className="text-[10px] font-semibold text-foreground leading-tight">
                      {b.title}
                    </p>
                    <p className="text-[9px] text-muted-foreground leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Focus Areas */}
            <Card label="Focus Areas">
              <ul className="flex flex-col gap-3">
                {focusAreas.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-[12px] text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* ── Contact bar ── */}
      </div>
    </section>
  );
}
