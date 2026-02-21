/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Programs: Full-bleed background image, card overlay system,
 * age categories displayed as jersey numbers.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Clock, Target } from "lucide-react";

const PROGRAMS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/leHEqN1ffaQFmrsfheUxWA/sandbox/NFpOUD7TMDds6ZoJ0wNIEx-img-3_1771682005000_na1fn_cHJvZ3JhbXMtYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbGVIRXFOMWZmYVFGbXJzZmhlVXhXQS9zYW5kYm94L05GcE9VRDdUTURkczZab0owd05JRXgtaW1nLTNfMTc3MTY4MjAwNTAwMF9uYTFmbl9jSEp2WjNKaGJYTXRZbWMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I9Pv8H7~mMGlPpThpXJu0gSgWc7-N9z~nH8TNLNrl6lHQVs7mrnNdAEM~sQTGpjGbdCLmfmfp~RTOfsnzwJCMm1CjZCWI0Ucmdw3795OM50QUavqdqYeOkN0Gk7-suctGdah~mqaEKTsPVqmEXW2YH7qKmeHFoWqcJf8p~QP8c9-dzK~sdJoqOGfwHa2CCtapTxx6TeQCRxuixYonBuiqNOYG4mIM5K2LVUer~HpEMXjipWy~e5FTk3lXBSI0Jck6OJhDCVsbZN1RCVSxtl3kQaL9Vrm00Nz1lHTGzSfspq7MqB~tbud3AgStO1ozESzMsmwmVzCao28tP2ktSXG0g__";

const programs = [
  {
    category: "Copii Mici",
    ageRange: "2006-2011",
    description: "Inițiere și dezvoltare fundamentală a tehnicii de fotbal",
    features: ["Antrenamente 2x/săptămână", "Jocuri amicale", "Dezvoltare caracter"],
    icon: Users,
  },
  {
    category: "Copii",
    ageRange: "2012-2014",
    description: "Consolidare a abilităților și introducere în competiții oficiale",
    features: ["Antrenamente 3x/săptămână", "Campionate regionale", "Nutriție sportivă"],
    icon: Target,
  },
  {
    category: "Juniori",
    ageRange: "2015-2017",
    description: "Pregătire avansată și participare în competiții de nivel înalt",
    features: ["Antrenamente 4x/săptămână", "Campionate naționale", "Analiză video"],
    icon: Clock,
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="programe"
      className="relative py-24 overflow-hidden section-diagonal"
      ref={ref}
      style={{
        backgroundImage: `url('${PROGRAMS_BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.02_250/0.95)] via-[oklch(0.08_0.02_250/0.85)] to-[oklch(0.08_0.02_250/0.75)] -z-10" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Programe de Antrenament
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] text-white mb-6">
            Categorii<br />
            <span className="text-gradient-cyan">de Vârstă</span>
          </h2>
          <p className="font-body text-lg text-white/70 leading-relaxed">
            Programe structurate pentru fiecare categorie de vârstă, cu metodologie modernă și antrenori cu licență UEFA.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-[oklch(0.12_0.02_250/0.8)] backdrop-blur-xl border border-white/10 rounded-lg p-8 h-full hover:border-cyan/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Jersey Number Badge */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-cyan/20 to-transparent group-hover:from-cyan/40 transition-all duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <program.icon className="w-7 h-7 text-cyan" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold mb-2 block">
                    {program.ageRange}
                  </span>
                  <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-3">
                    {program.category}
                  </h3>
                  <p className="font-body text-sm text-white/60 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 flex-shrink-0" />
                        <span className="font-body text-sm text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-cyan font-heading text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300"
                  >
                    Află mai mult
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-2">
              Gata să te alături?
            </h3>
            <p className="font-body text-white/60">
              Contactează-ne pentru mai multe detalii și pentru a-ți înscrie copilul.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-gold text-[oklch(0.10_0.02_250)] font-heading text-sm uppercase tracking-[0.15em] px-8 py-4 rounded hover:bg-[oklch(0.85_0.16_80)] transition-all duration-300 glow-gold"
          >
            Contactează-ne
          </a>
        </motion.div>
      </div>
    </section>
  );
}
