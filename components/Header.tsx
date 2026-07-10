"use client";

import { useEffect, useState } from "react";
import { contact, navLinks, whatsappUrl } from "@/lib/content";
import { WhatsappIcon } from "@/components/icons";
import { useReveal } from "@/components/useReveal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Active les animations reveal-on-scroll pour toute la page.
  useReveal();

  // Header sticky : change d'apparence après un léger défilement.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 shadow-[0_1px_20px_rgba(43,35,32,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-wide text-ink"
        >
          {contact.brand}
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-ink-soft transition-colors hover:text-gold-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gold-deep"
          >
            <WhatsappIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Bouton menu mobile */}
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-current transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div
        className={`overflow-hidden border-t border-line bg-bg/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 text-sm tracking-wide text-ink-soft last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
