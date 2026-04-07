import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryClient from "@/components/sections/GalleryClient";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Galerie — DJ Max",
  description:
    "Découvrez les photos de mes prestations : mariages, anniversaires, soirées privées et événements d'entreprise.",
};

export default function GaleriePage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-black text-center">
        <SectionTitle
          tag="Portfolio"
          title="Galerie de mes événements"
          subtitle="Des moments de bonheur capturés lors de mes prestations. Chaque soirée est unique, chaque sourire est ma récompense."
        />
      </section>

      {/* Gallery */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
