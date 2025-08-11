// src/config/seo.ts
import type { DefaultSeoProps } from "next-seo";

/**
 * SEO default para o projeto Marshall Ads Academy (curso de Marketing/Tráfego Pago).
 * Lembre de ajustar o domain quando publicar (Vercel/domínio próprio) e gerar o /public/og.jpg.
 */
const SITE_URL = "https://marshall.yamaji.dev"; // TODO: troque pelo seu domínio final
const SITE_NAME = "Marshall Ads Academy";

export const defaultSEO: DefaultSeoProps = {
  title: `${SITE_NAME} — Domine o Tráfego Pago`,
  description:
    "Aprenda a criar anúncios que vendem todos os dias. Do zero ao gestor de tráfego pro em 30 dias — estratégias testadas e validadas.",
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    site_name: SITE_NAME,
    title: `${SITE_NAME} — Domine o Tráfego Pago`,
    description:
      "Curso premium de Marketing Digital e Tráfego Pago. Funis, Meta Ads, Google Ads, copy e remarketing na prática.",
    images: [
      {
        url: `${SITE_URL}/og.jpg`, // coloque o arquivo em /public/og.jpg
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Curso de Tráfego Pago`,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
  ],
};
