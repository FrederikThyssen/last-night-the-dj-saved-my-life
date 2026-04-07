import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/data/services";
import PrestationPageLayout from "@/components/sections/PrestationPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Anniversaires — DJ Max",
  description:
    "DJ pour anniversaires en Île-de-France. 18 ans, 30 ans, 50 ans… Une fête à la hauteur de votre événement. Devis gratuit.",
};

export default function AnniversairesPage() {
  const service = getServiceBySlug("anniversaires");
  if (!service) return notFound();

  const related = services.filter((s) => s.slug !== "anniversaires").slice(0, 3);

  return <PrestationPageLayout service={service} relatedServices={related} />;
}
