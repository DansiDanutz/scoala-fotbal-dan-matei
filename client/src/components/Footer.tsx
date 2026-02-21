/**
 * Design: Stadium Tunnel — Cinematic Sports Brutalism
 * Footer: Dark navy background, organized info sections, social links.
 */
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.08_0.02_250)] border-t border-white/5">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/111041160/DDZUuYiqUdGYLpXL.jpeg"
                alt="Logo"
                className="w-10 h-10 rounded-full border border-cyan/30"
              />
              <div>
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-white block leading-none">
                  Dan Matei
                </span>
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-cyan">
                  Școala de Fotbal
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Formând viitorul fotbalului românesc prin pasiune, educație și fair-play.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-white mb-6 font-bold">
              Navigare
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Acasă", href: "#acasa" },
                { label: "Despre Noi", href: "#despre" },
                { label: "Programe", href: "#programe" },
                { label: "Galerie", href: "#galerie" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-white mb-6 font-bold">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0744311147"
                  className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-cyan transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0744 311 147
                </a>
              </li>
              <li>
                <a
                  href="mailto:zzizzou5@yahoo.com"
                  className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-cyan transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  zzizzou5@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Baza Sportivă Mănăștur, Cluj-Napoca</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-white mb-6 font-bold">
              Urmărește-ne
            </h3>
            <a
              href="https://www.facebook.com/share/1GEmo1NpaV/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[oklch(0.15_0.025_250)] border border-white/10 text-white px-4 py-2 rounded hover:border-cyan/50 hover:text-cyan transition-all"
            >
              <Facebook className="w-4 h-4" />
              <span className="font-body text-sm">Facebook</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/40">
              © {currentYear} ACS Școala de Fotbal Dan Matei. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-6">
              <a href="#acasa" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">
                Politica de Confidențialitate
              </a>
              <a href="#acasa" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">
                Termeni și Condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
