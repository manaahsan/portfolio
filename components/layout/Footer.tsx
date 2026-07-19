export default function Footer() {
  return (
    <footer className="border-t border-foreground py-8 bg-foreground text-background">
      <div className="mx-auto max-w-375 px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest">
        <div>© 2026 MANAZIR AHSAN · ALL RIGHTS RESERVED</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
          CRAFTED IN KARACHI
        </div>
      </div>
    </footer>
  );
}
