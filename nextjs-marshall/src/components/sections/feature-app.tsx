"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";
import Container from "../ui/container";
import SectionTitle from "../ui/section-title";
import Button from "../ui/button";
import { CheckCircle2 } from "lucide-react";

type Feature = { title: string; description: string };

export default function FeatureApp() {
  const prefersReduced = useReducedMotion();

  // cubic-bezier equivalente ao "easeOut"
  const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: easeOut,
      },
    }),
  };

  const features: Feature[] = [
    {
      title: "Interface Intuitiva",
      description:
        "Organização clara das aulas, tarefas e materiais — foque em aprender, não em procurar.",
    },
    {
      title: "Métricas em Tempo Real",
      description:
        "Acompanhe progresso, taxa de conclusão e checkpoints do curso em um painel simples.",
    },
    {
      title: "Integração Completa",
      description:
        "Suporte a dispositivos móveis e integração com e-mail, comunidade e calendário.",
    },
  ];

  // scroll suave para anchors (funciona com o Button que renderiza <Link>)
  const goToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="feature" className="py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionTitle
            title="Tecnologia e Design em Harmonia"
            subtitle="Experiência fluida, performance alta e visual premium — tudo pensado para retenção e conclusão do curso."
          />

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Texto/Lista */}
            <motion.div variants={itemVariants} custom={0}>
              <ul className="space-y-6">
                {features.map((f, i) => (
                  <motion.li
                    key={f.title}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                      <CheckCircle2
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h4 className="mb-1 text-h3 font-heading text-foreground">
                        {f.title}
                      </h4>
                      <p className="text-body text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  href="#oferta"
                  ariaLabel="Ir para a oferta"
                  onClick={goToOffer}
                >
                  Começar agora
                </Button>
              </div>
            </motion.div>

            {/* Mockup */}
            <motion.div
              className="relative mx-auto max-w-md"
              variants={itemVariants}
              custom={1}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-white/10 shadow-soft">
                <Image
                  src="/images/feature_app.png"
                  alt="Tela do app/aluno com módulos e progresso"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, 480px"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
