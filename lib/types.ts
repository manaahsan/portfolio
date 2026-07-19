export interface Project {
  no: string;
  year: string;
  title: string;
  kicker: string;
  blurb: string;
  metrics: { v: string; l: string }[];
  stack: string[];
}

export type StackCat = "frontend" | "backend" | "database" | "tools" | "others";
