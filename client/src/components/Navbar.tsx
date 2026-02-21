/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Navbar: Fixed top, transparent on scroll-top, solid navy on scroll.
 * Oswald font for nav links, uppercase, tracking-wide.
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Acasă", href: "#acasa" },
  { label: "Despre Noi", href: "#despre" },
  { label: "Programe", href: "#programe" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.10_0.02_250/0.95)] backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#acasa" className="flex items-center gap-3 group">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/111041160/DDZUuYiqUdGYLpXL.jpeg"
            alt="Logo Școala de Fotbal Dan Matei"
            className="w-10 h-10 rounded-full border-2 border-cyan/50 group-hover:border-cyan transition-colors"
          />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-bold uppercase tracking-wider text-white leading-none">
              Dan Matei
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-cyan font-medium">
              Școala de Fotbal
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm uppercase tracking-[0.15em] text-white/80 hover:text-cyan transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0744311147"
            className="flex items-center gap-2 bg-cyan/10 border border-cyan/30 text-cyan px-4 py-2 rounded font-heading text-sm uppercase tracking-wider hover:bg-cyan/20 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            0744 311 147
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[oklch(0.10_0.02_250/0.98)] backdrop-blur-xl border-t border-white/5"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-lg uppercase tracking-[0.15em] text-white/80 hover:text-cyan transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0744311147"
                className="flex items-center justify-center gap-2 bg-cyan text-[oklch(0.10_0.02_250)] px-4 py-3 rounded font-heading text-sm uppercase tracking-wider mt-2"
              >
                <Phone className="w-4 h-4" />
                Sună Acum: 0744 311 147
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
