"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";

type Category = (typeof galleryCategories)[number]["id"];

export default function GallerieClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const lightboxItem = galleryItems.find((item) => item.id === lightbox);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as Category)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === cat.id
                ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                : "border border-white/15 text-gray-400 hover:text-white hover:border-white/30"
            )}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <span className="ml-2 text-xs text-violet-300">({filtered.length})</span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-zoom-in"
            onClick={() => setLightbox(item.id)}
            aria-label={`Voir en grand : ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100" />
            </div>
            {item.caption && (
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-gray-200 text-left">{item.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image"
        >
          <button
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxItem.src.replace("w=800", "w=1600")}
              alt={lightboxItem.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[80vh]"
            />
            {lightboxItem.caption && (
              <div className="bg-black/80 p-3 text-center">
                <p className="text-sm text-gray-300">{lightboxItem.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
