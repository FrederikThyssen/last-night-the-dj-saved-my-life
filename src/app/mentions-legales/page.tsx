import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales — FredMusic",
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-24 bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
        <h1 className="text-3xl font-black text-white mb-8">Mentions légales</h1>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">Éditeur</h2>
            <p>
              Ce site est édité par Maxime Dupont, DJ professionnel auto-entrepreneur.
              <br />
              Siège social : Paris, 75000 France
              <br />
              Téléphone : 06 12 34 56 78
              <br />
              Email : contact@fredmusic.fr
              <br />
              SIRET : 123 456 789 00010 (fictif — POC)
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San
              Francisco, California 94104, USA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos)
              sont la propriété exclusive de Maxime Dupont, sauf mentions contraires.
              Les images utilisées dans ce POC proviennent de{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300"
              >
                Unsplash
              </a>{" "}
              (licence libre de droit).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              Données personnelles
            </h2>
            <p>
              Les informations recueillies via le formulaire de contact sont utilisées
              uniquement pour répondre à vos demandes et ne sont jamais transmises à
              des tiers. Conformément au RGPD, vous disposez d&apos;un droit
              d&apos;accès, de rectification et de suppression de vos données en
              contactant contact@fredmusic.fr.
            </p>
          </section>

          <p className="text-xs text-gray-600">
            Ce site est un POC (Proof of Concept) — les données présentées sont
            fictives à des fins de démonstration.
          </p>
        </div>
      </div>
    </section>
  );
}
