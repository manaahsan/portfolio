export interface Project {
  no: string;
  year: string;
  title: string;
  subtitle: string;
  kicker: string;
  blurb: string;
  metrics: { v: string; l: string; icon: "chart" | "clock" | "users" | "code" | "bolt" | "db" | "signal" | "trend-down" }[];
  stack: string[];
  featured?: boolean;
  links?: { caseStudy?: string; live?: string };
}

export type StackCat = "frontend" | "backend" | "database" | "tools" | "others";
