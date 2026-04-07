import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="prestations" className="py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Mes prestations"
          title="Pour chaque moment, une ambiance"
          subtitle="Que vous prépariez le mariage de vos rêves, un anniversaire mémorable ou une soirée d'entreprise, je mets mon expertise au service de votre événement."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" variant="secondary" size="lg">
            Obtenir mon devis gratuit
          </Button>
        </div>
      </div>
    </section>
  );
}
