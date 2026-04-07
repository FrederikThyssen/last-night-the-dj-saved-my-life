import Image from "next/image";
import { Star } from "lucide-react";
import { type Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/8">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-gray-300 leading-relaxed italic">
        &ldquo;{testimonial.comment}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-violet-500/40">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-gray-500">
            {testimonial.event} · {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );
}
