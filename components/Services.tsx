import { services, servicesSection } from "@/lib/content";
import { ServiceIcon } from "@/components/icons";

export default function Services() {
  return (
    <section id="prestations" className="bg-bg py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-3">{servicesSection.eyebrow}</p>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">
            {servicesSection.title}
          </h2>
          <span className="mx-auto mt-6 block h-px w-16 bg-gold/50" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="reveal group flex flex-col items-center rounded-2xl border border-line bg-bg-soft px-8 py-10 text-center transition-shadow hover:shadow-[0_12px_40px_rgba(43,35,32,0.07)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-medium text-ink">
                {service.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest2 text-gold-deep">
                {service.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
