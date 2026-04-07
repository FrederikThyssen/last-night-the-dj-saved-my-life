import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/data/services";
import PrestationPageLayout from "@/components/sections/PrestationPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Événements Professionnels — DJ Max",
  description:
    "DJ professionnel pour soirées d'entreprise, galas, séminaires et événements corporate. Disponible partout en France. Devis gratuit.",
};

export default function EvenementsProfessionnelsPage() {
  const service = getServiceBySlug("evenements-pro");
  if (!service) return notFound();

  const related = services.filter((s) => s.slug !== "evenements-pro").slice(0, 3);

  return <PrestationPageLayout service={service} relatedServices={related} />;
}
