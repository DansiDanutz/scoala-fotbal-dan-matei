/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Hero: Full-viewport with cinematic stadium background, bold Oswald text,
 * diagonal overlay, and animated entrance. Dark image = white/cyan text.
 */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/leHEqN1ffaQFmrsfheUxWA/sandbox/NFpOUD7TMDds6ZoJ0wNIEx-img-1_1771681999000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGVIRXFOMWZmYVFGbXJzZmhlVXhXQS9zYW5kYm94L05GcE9VRDdUTURkczZab0owd05JRXgtaW1nLTFfMTc3MTY4MTk5OTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TY-cwFg2Ql2jARQqlCP4F1MOAxKhNOBEgK3BM4nKrvq-vGVBCIHSTmkSU6VuO3jrbLwaZRBQeaqluhJNK21RrJrl9fb8zi-~H4LuAn0gVbkyjOHjEMjQDbWuHJe7wZdGYM3Sok8hAUSNdrwdrvykCkhoy6rI9XZOzqkckgISx9xHpse2n4jjdh4iS9Ug~3JDROWubnqXY2VagB2fhV0fjCE4C8AMExJySLBYpKlPRHKAHEi~UAb368UKsuyE-F56gzP~BbMF1-vRK91uywp3X1qbnWolVdAjK~LWJhdg~7QS4pL98ToI6bO3b8vrkGH~9bcVGCut2oQrsLryirhVAA__";

export default function Hero() {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Stadium at dusk"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.02_250/0.92)] via-[oklch(0.08_0.02_250/0.75)] to-[oklch(0.08_0.02_250/0.5)]" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.12_0.02_250)] to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-body text-sm text-white/80 tracking-wide">
              Din 2017 • Cluj-Napoca, România
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-6"
          >
            <span className="text-white">Școala de</span>
            <br />
            <span className="text-white">Fotbal</span>
            <br />
            <span className="text-gradient-cyan">Dan Matei</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-body text-lg sm:text-xl text-white/70 max-w-xl mb-8 leading-relaxed"
          >
            Formăm viitorul fotbalului românesc prin pasiune, educație și fair-play.
            Antrenamente profesionale pentru copii și tineri la Baza Sportivă Mănăștur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#programe"
              className="inline-flex items-center gap-2 bg-cyan text-[oklch(0.10_0.02_250)] font-heading text-sm uppercase tracking-[0.15em] px-8 py-4 rounded hover:bg-[oklch(0.85_0.15_200)] transition-all duration-300 glow-cyan"
            >
              Programele Noastre
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-heading text-sm uppercase tracking-[0.15em] px-8 py-4 rounded hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Înscrie-ți Copilul
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
          >
            {[
              { number: "2017", label: "Anul Înființării" },
              { number: "8+", label: "Ani de Experiență" },
              { number: "100+", label: "Sportivi Formați" },
              { number: "UEFA", label: "Licență Antrenor" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold">
                  {stat.number}
                </span>
                <span className="block font-body text-xs uppercase tracking-[0.15em] text-white/50 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#despre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-cyan transition-colors"
      >
        <span className="font-body text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
