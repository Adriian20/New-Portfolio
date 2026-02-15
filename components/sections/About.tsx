"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import { User } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="px-(--section-padding-x) py-(--section-padding-y) bg-muted/30"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-(--content-max-width)">
        <motion.div
          className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <User className="size-3.5" aria-hidden />
          Presentación
        </motion.div>
        <motion.h2
          id="about-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Sobre mí
        </motion.h2>
        <motion.div
          className="mt-8 max-w-3xl space-y-6 rounded-2xl border border-border/80 bg-card/50 p-6 shadow-sm md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
