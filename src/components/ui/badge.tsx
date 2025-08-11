import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Simple badge component used to display short labels such as "Novo" or
 * "Mais vendido". It uses the primary colour as text and a faint
 * translucent background.
 */
export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider',
        className
      )}
    >
      {children}
    </span>
  );
}