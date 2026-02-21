"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import {
  User,
  Code2,
  Server,
  Boxes,
  Sparkles,
  Rocket,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Server,
    label: "Backend",
    value: "Symfony & Spring Boot",
    color: "from-violet-500 to-indigo-600",
    bgGlow: "bg-violet-500/10",
  },
  {
    icon: Code2,
    label: "Frontend",
    value: "Vue.js & TypeScript",
    color: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/10",
  },
  {
    icon: Boxes,
    label: "DevOps",
    value: "Docker, Redis & RabbitMQ",
    color: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10",
  },
  {
    icon: Rocket,
    label: "Metodología",
    value: "Agile / Scrum",
    color: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section
      id="about"
      className="relative px-(--section-padding-x) py-(--section-padding-y) bg-muted/30 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 265 / 0.3), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.18 300 / 0.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-(--content-max-width)">
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

        <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {about.paragraphs.map((paragraph, i) => {
              const paragraphGradients = [
                "linear-gradient(to bottom, oklch(0.55 0.22 265), oklch(0.6 0.18 300))",
                "linear-gradient(to bottom, oklch(0.6 0.18 300), oklch(0.55 0.2 200))",
                "linear-gradient(to bottom, oklch(0.55 0.2 200), oklch(0.6 0.22 265))",
              ];

              return (
              <motion.div key={paragraph} variants={itemVariants} className="group">
                <div className="relative rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5 md:p-7">
                  <div
                    className="absolute top-0 left-0 h-full w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
                    style={{
                      background: paragraphGradients[i],
                    }}
                  />
                  <p className="pl-4 text-muted-foreground leading-relaxed text-[0.95rem]">
                    {paragraph}
                  </p>
                </div>
              </motion.div>
              );
            })}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              <Sparkles className="size-5 text-primary/70 shrink-0" />
              <p className="text-sm font-medium italic text-primary/80">
                &quot;Me motiva evolucionar con cada proyecto y aportar soluciones escalables que generen impacto real.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/60 px-5 py-4 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-foreground">
                Disponible para nuevas oportunidades
              </span>
            </motion.div>

            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div
                  className={`absolute -top-8 -right-8 size-24 rounded-full ${h.bgGlow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex items-center gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${h.color} text-white shadow-lg shadow-primary/10`}
                  >
                    <h.icon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                      {h.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                      {h.value}
                    </p>
                  </div>
                  <Zap className="size-4 text-primary/30 transition-colors group-hover:text-primary/60" />
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-primary/20 p-5"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 265 / 0.08) 0%, oklch(0.6 0.18 300 / 0.05) 100%)",
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
                    Experiencia profesional
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    +1 año
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    en desarrollo backend de alto rendimiento
                  </p>
                </div>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Rocket className="size-7 text-primary" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
