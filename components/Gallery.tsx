"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { gallery, gallerySection } from "@/lib/content";

const TABS = ["Tout", ...gallerySection.categories] as const;
type Tab = (typeof TABS)[number];

export default function Gallery() {
  const [active, setActive] = useState<Tab>("Tout");

  const items = useMemo(
    () =>
      active === "Tout"
        ? gallery
        : gallery.filter((item) => item.category === active),
    [active],
  );

  return (
    <section id="galerie" className="bg-bg py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-3">{gallerySection.eyebrow}</p>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">
            {gallerySection.title}
          </h2>
        </div>

        {/* Onglets de filtre */}
        <div className="reveal mb-10 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest2 transition-colors ${
                active === tab
                  ? "bg-gold text-white"
                  : "border border-line text-ink-soft hover:border-gold/50 hover:text-gold-deep"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.src}
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-xl bg-taupe/40"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 30vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/50 to-transparent p-3 text-[11px] uppercase tracking-widest2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
