import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div
      className="noise relative min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.055) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <CustomCursor />
      <ScrollProgress />
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
