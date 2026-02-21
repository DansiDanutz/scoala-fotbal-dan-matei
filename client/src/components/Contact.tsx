/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Contact: Two-column layout with contact info on left, form on right.
 * Dark background with cyan accents.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0744 311 147",
    href: "tel:0744311147",
  },
  {
    icon: Mail,
    label: "Email",
    value: "zzizzou5@yahoo.com",
    href: "mailto:zzizzou5@yahoo.com",
  },
  {
    icon: MapPin,
    label: "Locație",
    value: "Baza Sportivă Mănăștur, Cluj-Napoca",
    href: "#",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni - Vineri: 16:00 - 19:00",
    href: "#",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mesajul a fost trimis cu succes! Te vom contacta în curând.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="font-heading text-sm uppercase tracking-[0.3em] text-cyan mb-4 block">
                Contact
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] text-white mb-8">
                Ia<br />
                <span className="text-gradient-gold">Contact</span>
              </h2>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-lg bg-[oklch(0.15_0.025_250)] border border-white/5 hover:border-cyan/30 transition-all duration-300 hover:-translate-x-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <info.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <span className="font-heading text-xs uppercase tracking-[0.2em] text-white/50 block mb-1">
                      {info.label}
                    </span>
                    <span className="font-body text-lg text-white group-hover:text-cyan transition-colors">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social/Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <p className="font-body text-white/60 mb-4">
                Urmărește-ne pe Facebook pentru ultimele noutăți și rezultate:
              </p>
              <a
                href="https://www.facebook.com/share/1GEmo1NpaV/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan font-heading text-sm uppercase tracking-wider hover:text-gold transition-colors"
              >
                Acs Școala De Fotbal Dan Matei
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[oklch(0.15_0.025_250)] border border-white/10 rounded-lg p-8"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-heading text-sm uppercase tracking-wider text-white mb-2">
                  Nume Complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[oklch(0.12_0.02_250)] border border-white/10 rounded px-4 py-3 font-body text-white placeholder-white/30 focus:border-cyan/50 focus:outline-none transition-colors"
                  placeholder="Numele tău"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-heading text-sm uppercase tracking-wider text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[oklch(0.12_0.02_250)] border border-white/10 rounded px-4 py-3 font-body text-white placeholder-white/30 focus:border-cyan/50 focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-heading text-sm uppercase tracking-wider text-white mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[oklch(0.12_0.02_250)] border border-white/10 rounded px-4 py-3 font-body text-white placeholder-white/30 focus:border-cyan/50 focus:outline-none transition-colors"
                  placeholder="0700 000 000"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-heading text-sm uppercase tracking-wider text-white mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[oklch(0.12_0.02_250)] border border-white/10 rounded px-4 py-3 font-body text-white placeholder-white/30 focus:border-cyan/50 focus:outline-none transition-colors resize-none"
                  placeholder="Scrie-ți mesajul aici..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan text-[oklch(0.10_0.02_250)] font-heading text-sm uppercase tracking-[0.15em] px-6 py-4 rounded hover:bg-[oklch(0.85_0.15_200)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 glow-cyan flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Se trimite...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Trimite Mesajul
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
