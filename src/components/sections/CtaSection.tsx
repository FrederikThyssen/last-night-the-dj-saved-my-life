import Button from "@/components/ui/Button";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[500px] w-[800px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-violet-500/15 text-violet-400 border border-violet-500/30">
          Devis gratuit
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Votre événement mérite{" "}
          <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
            le meilleur
          </span>
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Décrivez-moi votre projet et obtenez un devis personnalisé sous 24h, sans
          engagement. Premier contact par message ou par téléphone, c'est vous qui choisissez.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Demander mon devis gratuit
            <ArrowRight className="h-5 w-5" />
          </Button>
          <a
            href="tel:+33612345678"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-lg font-medium"
          >
            <Phone className="h-5 w-5" />
            06 12 34 56 78
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Devis gratuit et rapide
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Sans engagement
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Réponse sous 24h
          </span>
        </div>
      </div>
    </section>
  );
}
