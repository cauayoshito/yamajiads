"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/button";
import Container from "../../components/ui/container";

const LOGO_SRC = "/images/yamaji.png";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Glow/gradiente */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),_transparent_55%)]" />
      </div>

      <Container className="relative z-10 flex min-h-screen items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-md"
        >
          {/* Brand */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Image
              src={LOGO_SRC}
              alt="Yamaji Ads Academy"
              width={60}
              height={60}
              className="mb-3"
              priority
            />
            <h1 className="font-heading text-2xl font-extrabold text-primary">
              Yamaji Ads Academy
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Acesse sua área para continuar os estudos.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-card/70 p-6 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue="yamaji@ads.com.br"
                  className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                  placeholder="voce@email.com"
                  required
                />
              </div>

              {/* Senha */}
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-foreground"
                  >
                    Senha
                  </label>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:opacity-90"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={show ? "text" : "password"}
                    autoComplete="current-password"
                    defaultValue="12345678"
                    className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 pr-16 text-foreground placeholder:text-foreground/40 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShow((v) => !v)}
                    aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {show ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>

              {/* Lembrar */}
              <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/25 bg-transparent text-primary focus:ring-primary/30"
                />
                Lembrar de mim
              </label>

              {/* CTA principal */}
              <Button type="submit" className="w-full">
                Entrar
              </Button>

              {/* ------- ALTERADO: divisor mais visível e texto ------- */}
              <div className="relative py-3 text-center">
                <span className="relative z-10 rounded-lg bg-card/80 px-3 text-sm font-medium text-foreground/90">
                  ou conectar com
                </span>
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/20" />
              </div>

              {/* ------- ALTERADO: texto 'Conectar com' e mais contraste ------- */}
              <div className="grid gap-3 sm:grid-cols-2">
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-foreground hover:bg-white/10"
                >
                  <span className="mr-2 inline-block h-3 w-3 rounded-full bg-[#4285F4]" />
                  Conectar com Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-foreground hover:bg-white/10"
                >
                  <span className="mr-2 inline-block h-3 w-3 rounded-full bg-white" />
                  Conectar com GitHub
                </Button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Não tem conta?{" "}
              <Link href="#" className="text-primary hover:opacity-90">
                Criar agora
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
