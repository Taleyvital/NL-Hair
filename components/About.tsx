import Image from "next/image";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="histoire" className="bg-taupe/60 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src={about.image}
            alt={about.imageAlt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Texte */}
        <div className="reveal">
          <p className="eyebrow mb-3">{about.eyebrow}</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-sm font-light leading-relaxed text-ink-soft sm:text-base">
                {p}
              </p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-gold pl-5">
            <p className="font-display text-xl italic leading-snug text-ink sm:text-2xl">
              {about.quote}
            </p>
            <cite className="mt-3 block text-xs uppercase not-italic tracking-widest2 text-gold-deep">
              {about.quoteAuthor}
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
