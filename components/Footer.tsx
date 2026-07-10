import { contact, navLinks, whatsappUrl } from "@/lib/content";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Marque */}
          <div>
            <p className="font-display text-2xl font-semibold text-ink">
              {contact.brand}
            </p>
            <p className="mt-3 max-w-xs text-sm font-light text-ink-soft">
              {contact.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold-deep"
              >
                <TiktokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold-deep">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-ink-soft transition-colors hover:text-gold-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <p className="text-xs uppercase tracking-widest2 text-gold-deep">
              Rendez-vous
            </p>
            <p className="mt-4 text-sm font-light text-ink-soft">
              {contact.address.line1}
              <br />
              {contact.address.line2}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold-deep"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center text-xs font-light text-ink-soft">
          © {year} {contact.brand}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
