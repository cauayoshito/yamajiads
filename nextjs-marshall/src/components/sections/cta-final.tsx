"use client";

import Container from "../ui/container";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/button";

export default function CtaFinal() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="cta-final" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-card p-12 text-center shadow-md"
        >
          <h3 className="mb-4 text-h2 font-heading text-foreground">
            O próximo case de sucesso pode ser o seu.
          </h3>

          <p className="mb-8 text-body-lg text-muted-foreground">
            Entre para a Yamaji Ads Academy e construa campanhas que vendem
            todos os dias com método, suporte e garantia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="#oferta" ariaLabel="Ir para a oferta">
              Começar agora
            </Button>
            <Button
              variant="outline"
              href="#conteudo"
              ariaLabel="Ver conteúdo do curso"
            >
              Ver conteúdo do curso
            </Button>
          </div>

          <p className="mt-4 text-small text-foreground/70">
            Garantia de 7 dias • Pagamento seguro • Acesso vitalício
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
