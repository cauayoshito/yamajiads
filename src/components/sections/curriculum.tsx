"use client";

import { motion } from "framer-motion";
import { curriculum } from "../../data/curriculum";

export default function CurriculumSection() {
  return (
    <section
      id="curriculum"
      className="py-20 bg-gradient-to-b from-background via-background/80 to-background text-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            {curriculum.title}
          </h2>
          <p className="text-lg text-muted-foreground">{curriculum.subtitle}</p>
        </div>

        {/* Lista de módulos */}
        <div className="grid md:grid-cols-2 gap-8">
          {curriculum.modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-card shadow-lg hover:shadow-primary/20 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {module.title}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                {module.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-primary">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={curriculum.cta.link}
            className="px-8 py-4 text-lg font-semibold bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
          >
            {curriculum.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
