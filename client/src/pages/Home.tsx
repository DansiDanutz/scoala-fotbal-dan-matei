/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Home: Single-page layout combining all major sections in sequence.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
