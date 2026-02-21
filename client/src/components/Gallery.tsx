/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Gallery: Grid layout with hover effects, modal lightbox for full-size viewing.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/LdpMLhqIkcFjzXPk.jpeg",
    alt: "Echipa în uniforme albastre",
    category: "Team",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/EqRsprRksGRLUPJd.jpeg",
    alt: "Echipa cu trofeu",
    category: "Achievements",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/LUlIKwiiOaJHKWWj.jpeg",
    alt: "Jucători cu medalii",
    category: "Achievements",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/clCgtMbRgNvqIcwI.jpeg",
    alt: "Jucător după meci",
    category: "Action",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/LfHwKXnQzhxROMaA.jpeg",
    alt: "Antrenament pe teren",
    category: "Training",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/VsQgXxThrGIKURqj.jpeg",
    alt: "Echipa seniori",
    category: "Team",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/ccRoCFNSLsmhDQls.jpeg",
    alt: "Echipamente și uniforme",
    category: "Equipment",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/111041160/zQjmJglhxwsSsWIC.jpeg",
    alt: "Antrenament la munte",
    category: "Training",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="galerie" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-cyan mb-4 block">
            Galerie Foto
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] text-white mb-6">
            Momente din<br />
            <span className="text-gradient-gold">Istorie</span>
          </h2>
          <p className="font-body text-lg text-white/70 leading-relaxed">
            Explorează momentele memorabile din istoria Școlii de Fotbal Dan Matei.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_250/0.8)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-cyan/80 text-[oklch(0.10_0.02_250)] font-heading text-xs uppercase tracking-wider px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-2xl">+</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Main Image */}
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-auto rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-body text-sm">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
