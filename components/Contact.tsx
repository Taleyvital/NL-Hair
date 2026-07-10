import Image from "next/image";
import { contact, contactSection, whatsappUrl } from "@/lib/content";
import { WhatsappIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        {/* Infos */}
        <div className="reveal">
          <p className="eyebrow mb-3">{contactSection.eyebrow}</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {contactSection.title}
          </h2>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-gold-deep">
                Adresse
              </dt>
              <dd className="mt-1 text-sm font-light text-ink-soft">
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest2 text-gold-deep">
                Horaires
              </dt>
              <dd className="mt-1 space-y-1 text-sm font-light text-ink-soft">
                {contact.hours.map((h) => (
                  <p key={h.day} className="flex justify-between gap-6 sm:max-w-xs">
                    <span>{h.day}</span>
                    <span className="text-ink">{h.value}</span>
                  </p>
                ))}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest2 text-gold-deep">
                Contact
              </dt>
              <dd className="mt-1 text-sm font-light text-ink-soft">
                WhatsApp uniquement — réponse rapide.
              </dd>
            </div>
          </dl>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-gold-deep"
          >
            <WhatsappIcon className="h-4 w-4" />
            {contactSection.cta}
          </a>
        </div>

        {/* Carte (placeholder image, à remplacer par une vraie carte) */}
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-line"
        >
          <Image
            src={contactSection.mapImage}
            alt={contactSection.mapAlt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-bg/90 px-5 py-2 text-xs uppercase tracking-widest2 text-ink shadow-sm backdrop-blur">
              Voir l&apos;itinéraire
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
