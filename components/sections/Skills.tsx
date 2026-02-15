"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { TechIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="px-(--section-padding-x) py-(--section-padding-y) bg-muted/30"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-(--content-max-width)">
        <motion.div
          className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stack & herramientas
        </motion.div>
        <motion.h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className={cn(
                "rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/15 hover:shadow-md",
              )}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-muted/50 px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/20 hover:bg-primary/5">
                      <TechIcon
                        name={skill}
                        size={18}
                        className="text-primary"
                      />
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
