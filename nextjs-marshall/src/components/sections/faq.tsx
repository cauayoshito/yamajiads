"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState, KeyboardEvent } from "react";
import { faq } from "../../data/faq";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-body text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas antes de garantir seu acesso ao curso.
          </p>
        </motion.div>

        {/* Lista */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faq.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const btnId = `${baseId}-button-${index}`;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-xl border border-border bg-primary shadow-sm"
              >
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                  onKeyDown={(e) => onKey(e, index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/20 rounded-xl"
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: {
                      height: "auto",
                      opacity: 1,
                      marginTop: 0,
                      transition: { duration: prefersReduced ? 0 : 0.25 },
                    },
                    closed: {
                      height: 0,
                      opacity: 0,
                      marginTop: 0,
                      transition: { duration: prefersReduced ? 0 : 0.2 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-black/80">{item.answer}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
