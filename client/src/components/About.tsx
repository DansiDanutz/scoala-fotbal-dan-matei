/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * About: Asymmetric two-column layout, image on right bleeding off-edge,
 * values displayed as bold stat cards.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Heart, Shield, GraduationCap } from "lucide-react";

const ABOUT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/leHEqN1ffaQFmrsfheUxWA/sandbox/NFpOUD7TMDds6ZoJ0wNIEx-img-2_1771682010000_na1fn_YWJvdXQtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGVIRXFOMWZmYVFGbXJzZmhlVXhXQS9zYW5kYm94L05GcE9VRDdUTURkczZab0owd05JRXgtaW1nLTJfMTc3MTY4MjAxMDAwMF9uYTFmbl9ZV0p2ZFhRdFltYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iEgCsN-w5JnHO5UgNaxh3tNOpZko3n3vnVV~GbORCjPyP1Mc3bqe3Toueqwld48deyQv78xszZ4rWHdomfRwfPG246DDej2EhKYm0-NQc0fD7iur4DDgWeN06MEvg6XvfdCE8sBYd5yBYJFbGe7RPWFaWYbL0JuP5ZAh8klk8-xPP~wBAOTnzWAtaSxG~3gGUTux8Mw~uV~aYvRuJQO97t0jh8ciuLHR~5hInkLG0KUYGsQmn1zcPT8y1lA6JMlTuCTDwgYmIOpPvFWTjhsAXABKHzHi1QWESZk1pOjSFDzC6gCruayYh8gRPklv3qPo~NWgzy5a1CCW6y-QXEw1uA__";

const values = [
  {
    icon: Heart,
    title: "Pasiune",
    description: "Iubirea pentru fotbal este fundamentul a tot ceea ce facem. Inspirăm copiii să descopere bucuria jocului.",
  },
  {
    icon: GraduationCap,
    title: "Educație",
    description: "Dezvoltăm nu doar abilități tehnice, ci și caracter, disciplină și valori care contează în viață.",
  },
  {
    icon: Shield,
    title: "Fair-Play",
    description: "Respectul pentru adversar, coechipieri și regulile jocului este la baza filosofiei noastre.",
  },
  {
    icon: Trophy,
    title: "Profesionalism",
    description: "Antrenamente structurate, metodologie modernă și antrenori cu licență UEFA.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="despre" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Section Header */}
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="font-heading text-sm uppercase tracking-[0.3em] text-cyan mb-4 block">
                Despre Noi
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] text-white mb-6">
                Formăm<br />
                <span className="text-gradient-gold">Campioni</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-body text-lg text-white/70 leading-relaxed mb-6">
                ACS Școala de Fotbal Dan Matei a fost fondată în 2017 în Cluj-Napoca cu misiunea de a oferi copiilor și tinerilor o educație sportivă completă. Sub conducerea antrenorului Dan Matei, deținător al licenței UEFA, academia noastră a format peste 100 de sportivi.
              </p>
              <p className="font-body text-lg text-white/70 leading-relaxed mb-8">
                Antrenamentele se desfășoară la Baza Sportivă Mănăștur, oferind condiții excelente pentru dezvoltarea tinerilor fotbaliști. Motto-ul nostru, <span className="text-cyan font-semibold">"Work hard, Feel good"</span>, reflectă filosofia noastră: munca asiduă duce la satisfacție și performanță.
              </p>
            </motion.div>

            {/* Motto Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-[oklch(0.17_0.025_250)] border border-white/10 rounded-lg px-6 py-4"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/50">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/111041160/DDZUuYiqUdGYLpXL.jpeg"
                  alt="Dan Matei"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-sm uppercase tracking-wider text-white block">
                  Antrenor Dan Matei
                </span>
                <span className="font-body text-xs text-white/50">
                  Fondator • Licență UEFA
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={ABOUT_BG}
                alt="Antrenament pe teren"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_250)] via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-cyan/20 rounded-lg -z-10" />
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group bg-[oklch(0.15_0.025_250)] border border-white/5 rounded-lg p-6 hover:border-cyan/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                <value.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="font-heading text-xl uppercase tracking-wider text-white mb-2">
                {value.title}
              </h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
