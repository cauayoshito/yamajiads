"use client";

import Container from '../ui/container';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { cn } from '../../lib/utils';

/**
 * The footer provides basic company information and social links. Icons are
 * labelled for accessibility. The design stays minimal, consistent with
 * the dark theme, and includes a thin border on top.
 */
export default function Footer() {
  const social = [
    { href: 'https://wa.me/5541999999999', icon: FaWhatsapp, label: 'WhatsApp' },
    { href: 'https://www.instagram.com/placeholder', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/placeholder', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://www.facebook.com/placeholder', icon: FaFacebook, label: 'Facebook' },
  ];
  return (
    <footer className="border-t border-border py-16 bg-background">
      <Container className="flex flex-col items-center space-y-6">
        <Link href="#hero" className="text-xl font-heading text-primary">
          Yamaji Studio
        </Link>
        <p className="text-sm text-foreground/60 text-center max-w-md">
          © {new Date().getFullYear()} Yamaji Studio. Todos os direitos reservados. Desenvolvido para fins
          educacionais.
        </p>
        <div className="flex space-x-6">
          {social.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}