"use client";

import { useEffect } from "react";
import Script from "next/script";
import { tiktokSection } from "@/lib/content";
import { TiktokIcon } from "@/components/icons";

/** Extrait l'identifiant numérique d'une URL de vidéo TikTok. */
function getVideoId(url: string): string {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : "";
}

// L'API injectée par embed.js (pour re-render côté client si besoin).
declare global {
  interface Window {
    tiktokEmbed?: { lib?: { render?: (el?: Element) => void } };
  }
}

export default function TiktokFeed() {
  const videos = tiktokSection.videos.filter(getVideoId);
  const hasVideos = videos.length > 0;

  // Déclenche le rendu des embeds si le script est déjà chargé (navigation SPA).
  useEffect(() => {
    if (hasVideos) window.tiktokEmbed?.lib?.render?.();
  }, [hasVideos]);

  return (
    <section id="tiktok" className="bg-bg py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-3">{tiktokSection.eyebrow}</p>
          <h2 className="font-display text-4xl font-medium text-ink sm:text-5xl">
            {tiktokSection.title}
          </h2>
          <p className="mt-4 text-sm font-light text-ink-soft sm:text-base">
            {tiktokSection.subtitle}
          </p>
          <a
            href={tiktokSection.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gold-deep transition-colors hover:text-gold"
          >
            <TiktokIcon className="h-4 w-4" />
            {tiktokSection.handle}
          </a>
        </div>

        {hasVideos ? (
          <>
            <div className="flex flex-wrap justify-center gap-6">
              {videos.map((url) => (
                <blockquote
                  key={url}
                  className="tiktok-embed"
                  cite={url}
                  data-video-id={getVideoId(url)}
                  style={{ maxWidth: 325, minWidth: 260 }}
                >
                  <section>
                    <a
                      href={tiktokSection.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tiktokSection.handle}
                    </a>
                  </section>
                </blockquote>
              ))}
            </div>
            {/* Script officiel TikTok — transforme les blockquotes en lecteurs. */}
            <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
          </>
        ) : (
          /* Aperçu profil tant qu'aucune URL de vidéo n'est renseignée. */
          <div className="reveal mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <a
                  key={i}
                  href={tiktokSection.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex aspect-[9/16] items-center justify-center overflow-hidden rounded-xl border border-line bg-taupe/40 transition-colors hover:border-gold/50"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm transition-transform group-hover:scale-110">
                    <TiktokIcon className="h-6 w-6" />
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={tiktokSection.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-gold-deep"
              >
                <TiktokIcon className="h-4 w-4" />
                {tiktokSection.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
