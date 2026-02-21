"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function ExperienceCard({
  job,
  index,
  isLast,
}: Readonly<{
  job: (typeof experience)[number];
  index: number;
  isLast: boolean;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div variants={item} className="relative flex gap-6">
      <div className="hidden sm:flex flex-col items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-chart-5 text-white shadow-lg shadow-primary/20">
          <Briefcase className="size-5" />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-linear-to-b from-primary/40 to-border/30" />
        )}
      </div>

      <div className="group flex-1 pb-10">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 md:p-7">
          <div className="absolute -top-10 -right-10 size-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {job.company}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {job.role}
                  </span>
                  {index === 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                      </span>Actual</span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex size-9 items-center justify-center rounded-xl border border-border/60 bg-muted/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary sm:hidden"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Colapsar" : "Expandir"}
              >
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    isExpanded && "rotate-180",
                  )}
                />
              </button>
            </div>

            <p
              className={cn(
                "mt-4 text-muted-foreground leading-relaxed text-[0.95rem]",
                !isExpanded && "line-clamp-3 sm:line-clamp-none",
              )}
            >
              {job.description}
            </p>

            {job.description.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs font-medium text-primary/80 hover:text-primary transition-colors sm:hidden inline-flex items-center gap-1"
              >
                {isExpanded ? "Ver menos" : "Ver más"}
                <ChevronDown
                  className={cn(
                    "size-3 transition-transform duration-200",
                    isExpanded && "rotate-180",
                  )}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-(--section-padding-x) py-(--section-padding-y) bg-muted/30 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div
        className="pointer-events-none absolute top-1/3 -left-20 size-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 265 / 0.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-(--content-max-width)">
        <motion.div
          className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Briefcase className="size-3.5" aria-hidden />
          Trayectoria
        </motion.div>
        <motion.h2
          id="experience-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Experiencia
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Mi recorrido profesional en el mundo del desarrollo web, desde
          prácticas hasta mi puesto actual como Backend Developer.
        </motion.p>

        <motion.div
          className="mt-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experience.map((job, i) => (
            <ExperienceCard
              key={job.company}
              job={job}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
