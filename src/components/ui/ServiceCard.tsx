import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Cake, Music, Briefcase } from "lucide-react";
import { type Service } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap = {
  Heart,
  Cake,
  Music,
  Briefcase,
};

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
};

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Music;

  return (
    <Link
      href={`/prestations/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500",
        "border-white/10 bg-white/5 hover:border-violet-500/50 hover:bg-white/8",
        "hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1",
        featured && "md:col-span-2"
      )}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600/90 backdrop-blur-sm">
            <Icon className="h-4 w-4 text-white" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            {service.title}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
          {service.subtitle}
        </h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Price & CTA */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-semibold text-amber-400">
            {service.startingPrice}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
            En savoir plus
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
