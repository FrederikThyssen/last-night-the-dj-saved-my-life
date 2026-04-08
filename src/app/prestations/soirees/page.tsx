import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/data/services";
import PrestationPageLayout from "@/components/sections/PrestationPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Soirées & Fêtes — FredMusic",
  description:
    "DJ pour soirées privées, EVJF, EVG, fêtes entre amis en Île-de-France. Ambiance garantie ! Devis gratuit.",
};

export default function SoireesPage() {
  const service = getServiceBySlug("soirees");
  if (!service) return notFound();

  const related = services.filter((s) => s.slug !== "soirees").slice(0, 3);

  return <PrestationPageLayout service={service} relatedServices={related} />;
}
