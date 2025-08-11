"use client";

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Displays a section heading and optional subtitle. Animates into view
 * via a fade and slide.
 */
export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('text-center max-w-3xl mx-auto', className)}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wide text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-foreground/80 mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}