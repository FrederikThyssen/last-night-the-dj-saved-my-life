import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/data/services";
import PrestationPageLayout from "@/components/sections/PrestationPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Mariages — DJ Max",
  description:
    "DJ professionnel pour votre mariage en Île-de-France. Prestation sur-mesure pour un jour inoubliable. Devis gratuit.",
};

export default function MariagesPage() {
  const service = getServiceBySlug("mariages");
  if (!service) return notFound();

  const related = services.filter((s) => s.slug !== "mariages").slice(0, 3);

  return <PrestationPageLayout service={service} relatedServices={related} />;
}
