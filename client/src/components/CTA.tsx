/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * CTA: Full-bleed hero section with goal net image, dramatic overlay,
 * centered call-to-action with enrollment details.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CTA_BG = "https://private-us-east-1.manuscdn.com/sessionFile/leHEqN1ffaQFmrsfheUxWA/sandbox/NFpOUD7TMDds6ZoJ0wNIEx-img-4_1771682008000_na1fn_Y3RhLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGVIRXFOMWZmYVFGbXJzZmhlVXhXQS9zYW5kYm94L05GcE9VRDdUTURkczZab0owd05JRXgtaW1nLTRfMTc3MTY4MjAwODAwMF9uYTFmbl9ZM1JoTFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NmK8ho55Nt1Z12HDxaxNdjCsq6-FPTiFIld8EU2j0cDIUmJmF~rMn~Rwwknd3ngA~30U7Y5uhBXNsHdoRroWYVYzzuO3Ykaku0KNUWgPuBxBARDa4jy3W4jcgdqltrOhdBSOHFCMLqwXl5RQSOB3zOA5QHWUyieV9x3YRZT24nIu83GhQdYMd9J3cOPQyV2P8OIuhctwTt~9YzMqG6haSmqYIBQJEt5to4xE3TEKHO23cdTvRnkSIrWRzYAc8kytS8HSYZwDNI6cMw8tFQG3EjAwY1iSQFexO90cfHe7~-D89XM3yXw9ikX~bl98JvdgnamqP619Jl4HmnzzzihG3A__";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="enrollment"
      className="relative py-32 overflow-hidden"
      ref={ref}
      style={{
        backgroundImage: `url('${CTA_BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.02_250/0.92)] via-[oklch(0.08_0.02_250/0.85)] to-[oklch(0.08_0.02_250/0.92)] -z-10" />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-body text-sm text-white/80 tracking-wide">
            Înscrierea este deschisă pentru toate categoriile
          </span>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] text-white mb-6">
            Gata să devii<br />
            <span className="text-gradient-cyan">Campion?</span>
          </h2>
          <p className="font-body text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Alătură-te Școlii de Fotbal Dan Matei și descoperă pasiunea pentru fotbal.
            Antrenamente profesionale, antrenori cu licență UEFA și o comunitate dedicată succesului tău.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:0744311147"
            className="inline-flex items-center justify-center gap-2 bg-gold text-[oklch(0.10_0.02_250)] font-heading text-sm uppercase tracking-[0.15em] px-10 py-5 rounded hover:bg-[oklch(0.85_0.16_80)] transition-all duration-300 glow-gold"
          >
            Sună Acum: 0744 311 147
          </a>
          <a
            href="mailto:zzizzou5@yahoo.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-cyan text-cyan font-heading text-sm uppercase tracking-[0.15em] px-10 py-5 rounded hover:bg-cyan/10 transition-all duration-300"
          >
            Trimite Email
          </a>
        </motion.div>

        {/* Enrollment Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10 w-full"
        >
          {[
            {
              title: "Categorii",
              description: "2006-2011, 2012-2014, 2015-2017",
            },
            {
              title: "Locație",
              description: "Baza Sportivă Mănăștur, Cluj-Napoca",
            },
            {
              title: "Program",
              description: "Luni - Vineri, 16:00 - 19:00",
            },
          ].map((info) => (
            <div key={info.title}>
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-gold block mb-2">
                {info.title}
              </span>
              <span className="font-body text-white/70">{info.description}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
