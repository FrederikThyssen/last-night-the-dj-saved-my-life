import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import CtaSection from "@/components/sections/CtaSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

type PrestationPageLayoutProps = {
  service: Service;
  relatedServices?: Service[];
};

export default function PrestationPageLayout({
  service,
  relatedServices = [],
}: PrestationPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Accueil
          </Link>
          <span className="block mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">
            Prestation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">{service.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg">
              Demander un devis gratuit
            </Button>
            <span className="text-lg font-semibold text-amber-400">
              {service.startingPrice}
            </span>
          </div>
        </div>
      </section>

      {/* Highlights stats */}
      <section className="bg-zinc-950 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {service.highlights.map((h) => (
              <div key={h.label} className="py-8 px-6 text-center">
                <p className="text-xl font-bold text-white">{h.value}</p>
                <p className="text-sm text-gray-500 mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Long description */}
            <div>
              <SectionTitle
                tag={service.title}
                title="La prestation en détail"
                subtitle=""
                centered={false}
              />
              <p className="mt-6 text-gray-400 leading-relaxed text-lg">
                {service.longDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  Discutons de votre projet
                </Button>
              </div>
            </div>

            {/* Features list */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-bold text-white mb-6">
                Ce qui est inclus dans la prestation
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Découvrez aussi mes autres prestations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/prestations/${s.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-5 hover:border-violet-500/50 hover:bg-white/8 transition-all duration-300"
                >
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {s.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{s.startingPrice}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaSection />
    </>
  );
}
