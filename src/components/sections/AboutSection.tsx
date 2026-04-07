import Image from "next/image";
import { CheckCircle, Award, Headphones, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const strengths = [
  {
    icon: Headphones,
    title: "Matériel pro haut de gamme",
    description: "Pioneer DJ, JBL, QSC — un son cristallin pour toutes vos salles.",
  },
  {
    icon: Award,
    title: "+200 événements réussis",
    description: "7 ans d'expérience dans l'événementiel à Paris et partout en France.",
  },
  {
    icon: CheckCircle,
    title: "Prestation sur-mesure",
    description: "Consultation préalable gratuite pour construire la playlist idéale.",
  },
  {
    icon: Clock,
    title: "Disponible 24h/24",
    description: "Je reste joignable avant, pendant et après votre événement.",
  },
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=800&q=80"
                alt="DJ Max en action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
              <p className="text-4xl font-black text-white">7+</p>
              <p className="text-sm text-gray-400">ans d'expérience</p>
            </div>
            <div className="absolute -top-6 -left-6 rounded-2xl border border-violet-500/30 bg-violet-600/20 backdrop-blur-sm p-4 shadow-xl">
              <p className="text-2xl font-black text-white">200+</p>
              <p className="text-xs text-violet-300">événements</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionTitle
              tag="À propos"
              title="La musique comme passion, l'événement comme métier"
              subtitle=""
              centered={false}
            />
            <p className="mt-6 text-gray-400 leading-relaxed">
              Je m'appelle Max, DJ professionnel basé à Paris. Depuis plus de 7 ans, je
              mets mon amour de la musique au service de vos moments les plus précieux.
              Mariage, anniversaire, soirée privée ou événement d'entreprise — chaque
              prestation est unique, préparée avec soin et passion.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Mon approche ? Vous écouter d'abord. Comprendre vos goûts, l'ambiance
              souhaitée, les contraintes du lieu. Puis construire une expérience sonore
              qui vous ressemble et qui fait danser vos invités jusqu'au bout de la nuit.
            </p>

            {/* Strengths grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <div
                    key={strength.title}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600/20">
                      <Icon className="h-4 w-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{strength.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{strength.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
