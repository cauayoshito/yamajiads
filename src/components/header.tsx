// src/components/header.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import Container from "./ui/container";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Início", href: "#hero" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Destaques", href: "#destaques" },
  { label: "Portfólio", href: "#galeria" },
  { label: "Equipe", href: "#equipe" },
  { label: "Planos", href: "#planos" },
];

const LOGO_SRC = "/images/yamaji.png";
const LOGIN_PATH = "/login";
const WHATS_URL =
  "https://wa.me/5571992258349?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Yamaji%20Ads%20Academy.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeAndScroll = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link
          href="#hero"
          aria-label="Ir para o início"
          className="flex items-center"
        >
          <Image
            src={LOGO_SRC}
            alt="Logo Yamaji Studio"
            width={40}
            height={40}
            priority
            className={cn(
              "select-none transition-transform",
              scrolled ? "scale-95" : "scale-100"
            )}
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary focus:outline-none focus-visible:text-primary"
              aria-label={`Ir para a seção ${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Ações desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            href={LOGIN_PATH}
            ariaLabel="Entrar"
            variant="outline"
            className="min-h-[44px]"
          >
            Entrar
          </Button>

          {/* >>> Botão amarelo (primário) */}
          <Button
            href={WHATS_URL}
            ariaLabel="Contato WhatsApp"
            className="min-h-[44px]"
          >
            Fale com a Yamaji Studio
          </Button>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          {!open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </Container>

      {/* Overlay mobile */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Drawer mobile */}
      <nav
        id="mobile-drawer"
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-80 md:hidden border-l border-border bg-background/95 backdrop-blur-md transition-transform",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Image src={LOGO_SRC} alt="Logo" width={28} height={28} />
            <span className="font-semibold text-foreground">Menu</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* links */}
        <ul className="px-5 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:text-foreground hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTAs (mobile) */}
        <div className="px-5 pt-2 pb-6 space-y-3">
          <Button
            href="/login"
            ariaLabel="Entrar"
            variant="outline"
            className="flex w-full min-h-[44px]" // <- aqui!
            onClick={() => setOpen(false)}
          >
            Entrar
          </Button>

          <Button
            href="https://wa.me/5541999999999"
            ariaLabel="Contato WhatsApp"
            className="flex w-full min-h-[44px]" // <- e aqui!
            onClick={() => setOpen(false)}
          >
            Fale com a Yamaji Studio
          </Button>
        </div>
      </nav>
    </header>
  );
}
