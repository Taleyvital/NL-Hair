"use client";

import { useEffect } from "react";

/**
 * Active les animations « reveal on scroll ».
 * Ajoute la classe `.is-visible` à tout élément portant la classe `.reveal`
 * lorsqu'il entre dans le viewport, via un IntersectionObserver.
 *
 * À appeler une seule fois, dans un composant client monté globalement
 * (ici : le Header).
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // Fallback : si l'API n'existe pas, on affiche tout.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
