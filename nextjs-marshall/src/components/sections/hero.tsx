"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { hero } from "../../data/hero";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const scrollTo = (sel: string) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* BG full-bleed */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.image || "/images/hero-bg.png"} // coloque o arquivo em /public/images/hero-bg.jpg
          alt="Ambiente de trabalho com notebook exibindo dashboard de anúncios"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right" // ajuste: object-center / object-left
        />
        {/* overlays para legibilidade do texto */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* conteúdo */}
      <div className="container min-h-[72vh] lg:min-h-[78vh] flex items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-small text-foreground/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-primary" /> Turma aberta —
            vagas limitadas
          </div>

          <h1 className="text-display font-heading font-bold leading-[1.1] tracking-tight">
            {hero.title}
          </h1>

          <p className="mt-6 text-body-lg text-foreground/90 max-w-2xl">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo(hero.ctaPrimary.link)}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold shadow-inner-glow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              aria-label="Ir para a oferta"
            >
              {hero.ctaPrimary.label}
            </button>
            <button
              onClick={() => scrollTo(hero.ctaSecondary.link)}
              className="px-6 py-3 rounded-lg border border-white/15 text-foreground font-heading hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              aria-label="Ver conteúdo do curso"
            >
              {hero.ctaSecondary.label}
            </button>
          </div>

          <p className="mt-4 text-small text-foreground/75">
            Garantia de 7 dias • Pagamento seguro • Acesso vitalício
          </p>
        </motion.div>
      </div>
    </section>
  );
}
