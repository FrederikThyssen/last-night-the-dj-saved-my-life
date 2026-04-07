import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Button from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  // Affiche seulement les 3 premiers sur la landing
  const featured = testimonials.slice(0, 3);

  return (
    <section id="avis" className="py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Ils témoignent"
          title="Ce que mes clients disent"
          subtitle="La satisfaction de mes clients est ma plus belle récompense. Voici quelques témoignages de personnes qui m'ont fait confiance."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="text-center">
            <p className="text-5xl font-black text-white">5.0</p>
            <div className="flex gap-1 justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">Note moyenne</p>
          </div>
          <div className="hidden sm:block h-12 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-5xl font-black text-white">+50</p>
            <p className="text-sm text-gray-500 mt-3">Avis vérifiés</p>
          </div>
          <div className="hidden sm:block h-12 w-px bg-white/10" />
          <div className="text-center sm:text-left max-w-xs">
            <p className="text-sm text-gray-300 italic">
              "Une qualité constante depuis 7 ans, des clients toujours ravis."
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/avis" variant="outline">
            Voir tous les avis
          </Button>
        </div>
      </div>
    </section>
  );
}
