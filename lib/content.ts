/**
 * Contenu éditable du site NL Hair.
 * -------------------------------------------------------------
 * Tout le texte, les images et les coordonnées vivent ici afin
 * de pouvoir être remplacés facilement sans toucher aux composants.
 *
 * ⚠️  PLACEHOLDERS À REMPLACER (voir bloc `contact` plus bas) :
 *     - numéro WhatsApp
 *     - adresse exacte
 *     - liens réseaux sociaux
 *     - images dans /public/images/
 */

export type Service = {
  title: string;
  description: string;
  price: string;
  icon: "scissors" | "drop" | "leaf" | "sparkle";
};

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Coupe" | "Couleur" | "Mariées";
};

export type Testimonial = {
  quote: string;
  author: string;
};

/* -------------------------------------------------------------------------- */
/*  COORDONNÉES & LIENS  — ⚠️ PLACEHOLDERS, à remplacer par les vraies valeurs */
/* -------------------------------------------------------------------------- */

export const contact = {
  brand: "NL Hair",
  tagline: "Salon de coiffure — Abidjan, Côte d'Ivoire",

  // Numéro au format international SANS le "+" ni espaces (pour wa.me)
  whatsappNumber: "2250103095259",
  whatsappMessage: "Bonjour NL Hair, je souhaite prendre rendez-vous.",

  // ⚠️ Adresse à remplacer
  address: {
    line1: "Cocody, Deux-Plateaux", // PLACEHOLDER
    line2: "Abidjan, Côte d'Ivoire", // PLACEHOLDER
  },

  hours: [
    { day: "Mardi – Samedi", value: "09h00 – 19h00" },
    { day: "Dimanche", value: "Sur rendez-vous uniquement" },
    { day: "Lundi", value: "Fermé" },
  ],

  // ⚠️ Instagram & Facebook encore à remplacer
  socials: {
    instagram: "https://instagram.com/", // PLACEHOLDER
    facebook: "https://facebook.com/", // PLACEHOLDER
    tiktok: "https://www.tiktok.com/@nl_hair1",
  },

  // ⚠️ Optionnel : lien Google Maps « Itinéraire »
  mapsUrl: "https://maps.google.com/", // PLACEHOLDER
};

/** Lien WhatsApp prêt à l'emploi (utilisé par tous les boutons). */
export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "NL Hair — Abidjan",
  title: "Votre chevelure, votre signature",
  subtitle:
    "Un salon d'exception où chaque coiffure est pensée comme une œuvre, à Cocody, Abidjan.",
  cta: "Réserver sur WhatsApp",
  image: "/images/placeholder-hero.jpg",
  imageAlt: "Coiffure signature réalisée au salon NL Hair",
};

/* -------------------------------------------------------------------------- */
/*  PRESTATIONS                                                                */
/* -------------------------------------------------------------------------- */

export const servicesSection = {
  eyebrow: "Prestations",
  title: "Nos savoir-faire",
};

export const services: Service[] = [
  {
    icon: "scissors",
    title: "Coupe & Coiffage",
    description:
      "L'art de sublimer votre visage à travers une coupe sur mesure et un coiffage soigné.",
    price: "À partir de 10 000 FCFA",
  },
  {
    icon: "drop",
    title: "Coloration & Balayage",
    description:
      "Nuances personnalisées et reflets de lumière pour révéler l'éclat naturel de vos cheveux.",
    price: "À partir de 25 000 FCFA",
  },
  {
    icon: "leaf",
    title: "Soins Capillaires",
    description:
      "Rituels réparateurs et régénérants pour restaurer force, souplesse et brillance.",
    price: "À partir de 15 000 FCFA",
  },
  {
    icon: "sparkle",
    title: "Tissage & Extensions",
    description:
      "Volume et longueur sur mesure, avec une pose soignée, discrète et durable.",
    price: "À partir de 20 000 FCFA",
  },
];

/* -------------------------------------------------------------------------- */
/*  À PROPOS / L'HISTOIRE                                                       */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "L'histoire",
  title: "Plus qu'un salon, un refuge de beauté.",
  paragraphs: [
    "Chez NL Hair, nous croyons que chaque femme possède une beauté unique qui ne demande qu'à être révélée. Notre équipe accueille chacune avec attention, écoute et exigence.",
    "De la coupe à la couleur, en passant par le soin, nous mettons tout notre savoir-faire au service de votre chevelure et de votre bien-être.",
  ],
  quote:
    "« Nous ne coiffons pas seulement des cheveux, nous sculptons la confiance et l'image que vous portez au monde. »",
  quoteAuthor: "L'équipe NL Hair",
  image: "/images/placeholder-about.jpg",
  imageAlt: "L'équipe NL Hair dans le salon",
};

/* -------------------------------------------------------------------------- */
/*  GALERIE                                                                     */
/* -------------------------------------------------------------------------- */

export const gallerySection = {
  eyebrow: "Galerie",
  title: "Nos réalisations",
  // Onglet « Tout » ajouté automatiquement par le composant.
  categories: ["Coupe", "Couleur", "Mariées"] as const,
};

export const gallery: GalleryItem[] = [
  { src: "/images/placeholder-gallery-1.jpg", alt: "Réalisation coupe 1", category: "Coupe" },
  { src: "/images/placeholder-gallery-2.jpg", alt: "Réalisation couleur 1", category: "Couleur" },
  { src: "/images/placeholder-gallery-3.jpg", alt: "Réalisation mariée 1", category: "Mariées" },
  { src: "/images/placeholder-gallery-4.jpg", alt: "Réalisation coupe 2", category: "Coupe" },
  { src: "/images/placeholder-gallery-5.jpg", alt: "Réalisation couleur 2", category: "Couleur" },
  { src: "/images/placeholder-gallery-6.jpg", alt: "Réalisation mariée 2", category: "Mariées" },
];

/* -------------------------------------------------------------------------- */
/*  TÉMOIGNAGES                                                                 */
/* -------------------------------------------------------------------------- */

export const testimonialsSection = {
  eyebrow: "Elles en parlent",
  title: "La parole à nos clientes",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Une expérience hors du temps. Mise en beauté et prise en main parfaites du début à la fin. Je ressors toujours métamorphosée et sublimée.",
    author: "— Marie-Claire A.",
  },
  {
    quote:
      "J'ai fait ma coloration ici et le résultat est bluffant. J'adore le rendu naturel et l'attention portée aux détails. Je recommande à 100 %.",
    author: "— Aïcha D.",
  },
  {
    quote:
      "Le service, l'accueil et le savoir-faire sont d'exception. On ressent une vraie passion et un sens du détail rare. Mon salon préféré à Abidjan.",
    author: "— Fatoumata K.",
  },
];

/* -------------------------------------------------------------------------- */
/*  TIKTOK                                                                      */
/* -------------------------------------------------------------------------- */

export const tiktokSection = {
  eyebrow: "TikTok",
  title: "Nos coiffures en vidéo",
  subtitle:
    "Retrouvez nos dernières réalisations, coulisses et conseils sur notre compte TikTok.",
  handle: "@nl_hair1",
  profileUrl: contact.socials.tiktok,
  cta: "Voir le profil TikTok",

  /**
   * ⚠️ Collez ici les liens de vos vidéos TikTok à mettre en avant.
   * (Dans l'appli TikTok : bouton « Partager » → « Copier le lien ».)
   * Tant que la liste est vide, la section affiche un aperçu du profil.
   * Exemple :
   *   "https://www.tiktok.com/@nl_hair1/video/7300000000000000000",
   */
  videos: [] as string[],
};

/* -------------------------------------------------------------------------- */
/*  CONTACT                                                                     */
/* -------------------------------------------------------------------------- */

export const contactSection = {
  eyebrow: "Nous trouver",
  title: "Prenez rendez-vous pour une expérience d'exception.",
  cta: "Réserver sur WhatsApp",
  mapImage: "/images/placeholder-map.jpg",
  mapAlt: "Localisation du salon NL Hair à Abidjan",
};

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  CRÉDIT / SIGNATURE (footer)                                                 */
/* -------------------------------------------------------------------------- */

export const credit = {
  label: "Développé par",
  name: "Webey Agency",
  url: "https://webey-agency-elevate.vercel.app/",
  // Déposez le logo ici : /public/images/webey-agency-logo.png
  logo: "/images/webey-agency-logo.png",
  logoAlt: "Webey Agency",
};

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                  */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Galerie", href: "#galerie" },
  { label: "TikTok", href: "#tiktok" },
  { label: "Contact", href: "#contact" },
];
