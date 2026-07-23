"use client";
import { useEffect, useRef, useState } from "react";

const PREVIEW_TIMEOUT_MS = 9000;

export default function SitePreview({ url }: { url: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fullUrl = url.startsWith("http") ? url : `https://${url}`;
  const src = `https://api.microlink.io/?url=${encodeURIComponent(fullUrl)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&screenshot.quality=70&waitUntil=domcontentloaded`;

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus((s) => (s === "idle" ? "loading" : s));
          obs.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (status !== "loading") return;
    timeoutRef.current = setTimeout(() => {
      setStatus((s) => (s === "loading" ? "error" : s));
    }, PREVIEW_TIMEOUT_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [status]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-[#07070f] overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-300 ${status === "loaded" || status === "error" ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="h-7 bg-white/3 border-b border-white/5" />
        <div className="p-5 flex flex-col gap-3">
          {[70, 55, 80, 45, 65].map((w, i) => (
            <div key={i} className="h-1.5 bg-white/4 rounded-full animate-pulse" style={{ width: `${w}%`, animationDelay: `${i * 100}ms` }} />
          ))}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-16 bg-white/3 rounded-lg animate-pulse" style={{ animationDelay: `${i * 120}ms` }} />
            ))}
          </div>
        </div>
      </div>

      {status !== "idle" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${url} preview`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
          onLoad={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setStatus("loaded"); }}
          onError={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setStatus("error"); }}
        />
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/4 border border-white/8 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="text-white/25">
              <circle cx="9" cy="9" r="7" />
              <path d="M9 6v3.5M9 12.5v.5" />
            </svg>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/25">{url}</p>
        </div>
      )}
    </div>
  );
}
