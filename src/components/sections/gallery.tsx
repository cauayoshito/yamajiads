// components/sections/Gallery.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/container";
import SectionTitle from "../ui/section-title";
import { gallery } from "../../data/gallery";

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <Container>
        <SectionTitle
          title="Nosso Portfólio"
          subtitle="Uma amostra de projetos e visuais que traduzem a qualidade do nosso trabalho."
        />

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2">
          {gallery.map((item, index) => (
            <motion.a
              key={item.src}
              href={item.href ?? "#"}
              aria-label={`Abrir case: ${item.title ?? item.alt}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
              {...(item.href?.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {/* Thumb 16:9 sem crop; se frame === 'browser', acrescenta barra */}
              <div
                className={`relative aspect-[16/9] grid place-items-center
                bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]
                ${item.frame === "browser" ? "pt-7" : ""}`}
              >
                {/* Barra de navegador (opcional) */}
                {item.frame === "browser" && (
                  <div className="absolute left-0 right-0 top-0 h-7 border-b border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center gap-2 px-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                )}

                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Legenda */}
              <div className="mt-auto p-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-foreground font-medium leading-tight">
                    {item.title ?? item.alt}
                  </h3>
                  {!!item.tags?.length && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.tags.join(" • ")}
                    </p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition">
                  Ver detalhes →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
