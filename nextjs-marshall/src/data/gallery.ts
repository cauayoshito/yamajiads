// data/gallery.ts
export interface GalleryItem {
  src: string;
  alt: string;
  title?: string;
  href?: string;
  tags?: string[];
  frame?: "none" | "browser"; // novo
}

/** Itens do portfólio */
export const gallery: GalleryItem[] = [
  // Dieisson (desktop, com moldura de navegador)
  {
    src: "/images/dieisson-desktop.png", // salve seu print aqui
    alt: "Home do site do personal Dieisson Vasques",
    title: "Dieisson Vasques — Site profissional",
    href: "#",
    tags: ["Next.js", "Landing", "Treinos Online"],
    frame: "browser",
  },

  // iPads (mantidos)
  {
    src: "/images/ipad-propriums.png",
    alt: "Hero do site Propriums em mockup iPad",
    title: "PROPRIUMS — Leilões de imóveis (iPad)",
    href: "#",
    tags: ["Landing", "Branding", "SEO", "Responsive"],
  },
  {
    src: "/images/ipad-yamaji-servicos.png",
    alt: "Seção Nossos Serviços do Yamaji Studio em mockup iPad",
    title: "Yamaji Studio — Nossos Serviços (iPad)",
    href: "#",
    tags: ["Next.js", "UI Design", "Performance", "Responsive"],
  },

  // MacBooks (opcional manter)
  {
    src: "/images/yamaji-servicos.png",
    alt: "Seção Nossos Serviços do Yamaji Studio em mockup MacBook",
    title: "Yamaji Studio — Nossos Serviços",
    href: "#",
    tags: ["Next.js", "UI Design", "Performance"],
  },
  {
    src: "/images/propriums-hero.png",
    alt: "Hero do site Propriums em mockup MacBook",
    title: "PROPRIUMS — Leilões de imóveis",
    href: "#",
    tags: ["Landing", "Branding", "SEO"],
  },
];
