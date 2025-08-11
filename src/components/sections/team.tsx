"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/container";
import SectionTitle from "../ui/section-title";
import { team } from "../../data/team";
import { Linkedin, Instagram, Mail } from "lucide-react";

const card = (prefersReduced: boolean) => ({
  hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
});

export default function Team() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="equipe" className="py-24">
      <Container>
        <SectionTitle
          title="Nossa Equipe"
          subtitle="Os profissionais por trás das estratégias e resultados."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => {
            const Icon = member.icon; // Lucide component vindo do data
            return (
              <motion.article
                key={member.name}
                role="article"
                aria-labelledby={`member-${index}`}
                className="group h-full rounded-2xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg focus-within:shadow-lg"
                variants={card(prefersReduced) as any}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                {/* avatar opcional */}
                {member.avatar ? (
                  <div className="mb-4 h-14 w-14 overflow-hidden rounded-full ring-1 ring-white/10">
                    {/* use next/image se preferir */}
                    <img
                      src={member.avatar}
                      alt={`Foto de ${member.name}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                )}

                <h4
                  id={`member-${index}`}
                  className="text-h3 font-heading text-foreground"
                >
                  {member.name}
                </h4>

                <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-small text-primary">
                  {member.role}
                </span>

                <p className="mt-3 text-body text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                {/* socials (opcionais) */}
                {(member.linkedin || member.instagram || member.email) && (
                  <div className="mt-5 flex items-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        aria-label={`LinkedIn de ${member.name}`}
                        className="inline-flex rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        aria-label={`Instagram de ${member.name}`}
                        className="inline-flex rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`E-mail de ${member.name}`}
                        className="inline-flex rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
