import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";
import { Phone, Mail, MapPin, Clock, Share2, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit — FredMusic",
  description:
    "Contactez FredMusic pour obtenir un devis gratuit pour votre mariage, anniversaire ou événement. Réponse sous 24h.",
};

const contactInfos = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 12 34 56 78",
    href: "tel:+33612345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@fredmusic.fr",
    href: "mailto:contact@fredmusic.fr",
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: "Paris & Île-de-France, France entière sur demande",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Lun–Sam, 9h–19h. Réponse sous 24h.",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-black text-center">
        <SectionTitle
          tag="Prendre contact"
          title="Parlons de votre événement"
          subtitle="Décrivez-moi votre projet et je vous recontacte sous 24h avec un devis personnalisé et sans engagement."
        />
      </section>

      {/* Contact content */}
      <section className="py-12 pb-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact infos */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Mes coordonnées
                </h2>
                <div className="space-y-4">
                  {contactInfos.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.label}
                        className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600/20">
                          <Icon className="h-5 w-5 text-violet-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm text-gray-200 hover:text-violet-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-gray-200">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
                  Suivez FredMusic
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram FredMusic"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200"
                  >
                    <Share2 className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook FredMusic"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200"
                  >
                    <Link2 className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Note */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-xs text-amber-300 leading-relaxed">
                  💡 Plus vous me donnez de détails sur votre événement (lieu,
                  nombre d'invités, ambiance souhaitée), plus mon devis sera
                  précis et adapté à vos besoins.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-xl font-bold text-white mb-8">
                Envoyez-moi un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
