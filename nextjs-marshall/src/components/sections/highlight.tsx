"use client";

import { motion } from 'framer-motion';
import Container from '../ui/container';
import Button from '../ui/button';

/**
 * Highlight section presents a concise tagline or quote about the studio
 * followed by a secondary call to action. The card floats on a dark
 * background with a translucent fill to draw attention.
 */
export default function Highlight() {
  return (
    <section id="destaques" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl rounded-3xl border border-border bg-card px-8 py-16 text-center shadow-lg backdrop-blur-md"
        >
          <h3 className="mb-4 text-3xl md:text-4xl font-heading text-primary">
            Sua Visão, Nossa Missão
          </h3>
          <p className="mb-8 text-lg text-foreground/80">
            Transformamos ideias em experiências digitais memoráveis e
            impactantes. Confie em uma equipe apaixonada por inovação para
            elevar o seu projeto.
          </p>
          <Button href="https://wa.me/5541999999999" variant="secondary" ariaLabel="Entre em contato">
            Entre em contato
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}