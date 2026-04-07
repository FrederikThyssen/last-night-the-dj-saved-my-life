import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CtaSection from "@/components/sections/CtaSection";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Avis Clients — DJ Max",
  description:
    "Découvrez les témoignages de mes clients pour mariages, anniversaires et événements d'entreprise. DJ Max noté 5/5.",
};

export default function AvisPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-black text-center">
        {/* Global rating */}
        <div className="inline-flex flex-col items-center gap-3 mb-10 rounded-2xl border border-white/10 bg-white/5 px-10 py-8">
          <p className="text-6xl font-black text-white">5.0</p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-amber-400">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Basé sur <strong className="text-white">+50 avis vérifiés</strong>
          </p>
        </div>

        <SectionTitle
          tag="Témoignages"
          title="Ils m'ont fait confiance"
          subtitle="La satisfaction de mes clients est ma priorité absolue. Voici ce qu'ils disent de leurs expériences avec DJ Max."
        />
      </section>

      {/* All testimonials */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* Info note */}
          <div className="mt-12 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 text-center">
            <p className="text-sm text-gray-400">
              Ces avis sont authentiques et proviennent de clients ayant bénéficié de
              mes prestations. Dans la version finale du site, ils seront directement
              intégrés depuis Google Business ou Mariages.net.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
