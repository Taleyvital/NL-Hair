"use client";

import { useState } from "react";
import { testimonials, testimonialsSection } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const current = testimonials[index];

  return (
    <section id="temoignages" className="bg-taupe/60 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="reveal eyebrow mb-3">{testimonialsSection.eyebrow}</p>
        <h2 className="reveal font-display text-4xl font-medium text-ink sm:text-5xl">
          {testimonialsSection.title}
        </h2>

        <div className="reveal mt-12">
          <span className="mx-auto block font-display text-6xl leading-none text-gold/50">
            &ldquo;
          </span>
          <blockquote
            key={index}
            className="mx-auto mt-2 max-w-2xl animate-[reveal-up_0.5s_ease]"
          >
            <p className="font-display text-2xl font-light italic leading-snug text-ink sm:text-3xl">
              {current.quote}
            </p>
            <cite className="mt-6 block text-xs uppercase not-italic tracking-widest2 text-gold-deep">
              {current.author}
            </cite>
          </blockquote>
        </div>

        {/* Contrôles */}
        <div className="reveal mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Témoignage précédent"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Aller au témoignage ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-taupe-deep"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Témoignage suivant"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
