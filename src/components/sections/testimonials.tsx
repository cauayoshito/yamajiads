"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mx-auto mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-primary text-4xl md:text-5xl">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            {testimonials.subtitle}
          </p>
        </motion.div>

        {/* Lista de Depoimentos */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <motion.figure
              key={i}
              className="flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg focus-within:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.avatar}
                  alt={`Foto de ${item.name}`}
                  width={56}
                  height={56}
                  className="rounded-full object-cover ring-1 ring-white/10"
                />
                <figcaption>
                  <h3 className="font-semibold text-foreground leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-sm text-primary">{item.role}</p>
                </figcaption>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed">
                “{item.feedback}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
