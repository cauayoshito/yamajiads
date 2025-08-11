"use client";

import { motion, useReducedMotion } from "framer-motion";
import { offers } from "../../data/offers";
import { Check, Shield } from "lucide-react";

export default function Offers() {
  const prefersReduced = useReducedMotion();

  const onCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // tracking (adicione seus IDs)
    // window.fbq?.("track", "Lead");
    // window.gtag?.("event", "generate_lead");

    // scroll suave se for âncora
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="oferta"
      className="py-20 bg-gradient-to-b from-background via-black/40 to-background"
    >
      <div className="container">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 font-heading text-foreground">
            Garanta seu acesso agora
          </h2>
          <p className="text-body text-muted-foreground mt-4">
            Oferta especial para dominar o tráfego pago e criar anúncios que
            vendem todos os dias.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 justify-center">
          {offers.map((offer, i) => (
            <motion.article
              key={offer.title + i}
              role="article"
              aria-labelledby={`offer-${i}`}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md transition-all hover:shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Ribbon diagonal */}
              {offer.badge && (
                <span
                  className="pointer-events-none absolute -right-16 top-6 rotate-45 bg-primary text-primary-foreground
                             font-bold tracking-wide py-1.5 w-56 text-center shadow"
                >
                  {offer.badge}
                </span>
              )}

              <h3
                id={`offer-${i}`}
                className="text-xl font-semibold text-foreground"
              >
                {offer.title}
              </h3>

              <div className="mt-4 mb-6">
                <p className="text-3xl font-bold text-primary leading-none">
                  {offer.price}
                </p>
                <p className="mt-1 text-muted-foreground">
                  {offer.installments}
                </p>
              </div>

              <p className="text-muted-foreground mb-6">{offer.description}</p>

              <ul role="list" className="space-y-3 flex-1">
                {offer.features.map((feature, idx) => (
                  <li
                    key={idx}
                    role="listitem"
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Check
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={offer.cta.link}
                onClick={onCtaClick}
                aria-label="Ir para o checkout"
                className="mt-8 inline-block text-center bg-primary hover:bg-primary/90
                           text-primary-foreground font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
              >
                {offer.cta.label}
              </a>

              {/* selo de garantia / confiança */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
                <Shield size={16} className="text-primary" aria-hidden="true" />
                7 dias de garantia • Pagamento seguro • Acesso vitalício
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
