"use client";

import { motion } from "framer-motion";
import { benefits } from "../../data/benefits";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 bg-background">
      <div className="container">
        {/* header da seção */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
            Benefícios que afetam o seu caixa
          </h2>
          <p className="mt-3 text-muted-foreground">
            O que você leva do curso e como isso vira resultado mensurável.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <motion.article
              key={title}
              role="article"
              aria-labelledby={`benefit-${i}`}
              className="group h-full rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>

              <h3
                id={`benefit-${i}`}
                className="text-h3 font-heading text-foreground mb-2"
              >
                {title}
              </h3>
              <p className="text-body text-muted-foreground">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
