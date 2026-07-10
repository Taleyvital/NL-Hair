import Image from "next/image";
import { hero, whatsappUrl } from "@/lib/content";
import { WhatsappIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Image de fond */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Voile dégradé pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/55" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-end px-5 pb-24 text-center sm:px-8">
        <p className="reveal eyebrow mb-5 text-white/80">{hero.eyebrow}</p>
        <h1 className="reveal font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl">
          {hero.title}
        </h1>
        <p className="reveal mt-6 max-w-xl text-base font-light text-white/85 sm:text-lg">
          {hero.subtitle}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg transition-colors hover:bg-gold-deep"
        >
          <WhatsappIcon className="h-4 w-4" />
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
