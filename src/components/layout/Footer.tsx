import Link from "next/link";
import { Music2, Phone, Mail, MapPin, Share2, Link2 } from "lucide-react";

const footerLinks = {
  prestations: [
    { href: "/prestations/mariages", label: "Mariages" },
    { href: "/prestations/anniversaires", label: "Anniversaires" },
    { href: "/prestations/soirees", label: "Soirées & Fêtes" },
    { href: "/prestations/evenements-pro", label: "Événements Pro" },
  ],
  pages: [
    { href: "/galerie", label: "Galerie" },
    { href: "/avis", label: "Avis clients" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600">
                <Music2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Fred<span className="text-violet-400">Music</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              DJ professionnel basé à Vis en artois. Mariages, anniversaires, soirées
              privées et événements d'entreprise. Disponible sur toute la France.
            </p>
            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FredMusic (Voir sur Instagram)"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook FredMusic (Voir sur Facebook)"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200"
              >
                <Link2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Prestations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Prestations
            </h4>
            <ul className="space-y-3">
              {footerLinks.prestations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-3.5 w-3.5 text-violet-400 flex-shrink-0" />
                <a href="tel:+33612345678" className="hover:text-violet-400 transition-colors">
                  06 12 34 56 78
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-3.5 w-3.5 text-violet-400 flex-shrink-0" />
                <a href="mailto:contact@fredmusic.fr" className="hover:text-violet-400 transition-colors">
                  contact@fredmusic.fr
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-3.5 w-3.5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>Haut de France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {currentYear} FredMusic. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/mentions-legales" className="hover:text-gray-400 transition-colors">
              Mentions légales
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
