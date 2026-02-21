"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { TechIcon } from "@/lib/tech-icons";
import {
  Users,
  Server,
  Monitor,
  Database,
  Container,
  TestTube,
} from "lucide-react";

const categoryMeta: Record<
  string,
  { icon: typeof Users; gradient: string; bgGlow: string }
> = {
  "Habilidades Sociales": {
    icon: Users,
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "bg-rose-500/10",
  },
  Backend: {
    icon: Server,
    gradient: "from-violet-500 to-indigo-600",
    bgGlow: "bg-violet-500/10",
  },
  Frontend: {
    icon: Monitor,
    gradient: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/10",
  },
  "Bases de Datos": {
    icon: Database,
    gradient: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10",
  },
  "Infraestructura y DevOps": {
    icon: Container,
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/10",
  },
  "Testing y Metodologías": {
    icon: TestTube,
    gradient: "from-fuchsia-500 to-purple-600",
    bgGlow: "bg-fuchsia-500/10",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const skillPill = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative px-(--section-padding-x) py-(--section-padding-y) bg-muted/30 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 size-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.18 300 / 0.2), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-80 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 265 / 0.2), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-(--content-max-width)">
        <motion.div
          className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stack &amp; herramientas
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
        <motion.p
          className="mt-3 max-w-2xl text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Tecnologías y herramientas con las que trabajo día a día para crear
          soluciones robustas y escalables.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((group) => {
            const meta = categoryMeta[group.category] ?? {
              icon: Server,
              gradient: "from-primary to-primary",
              bgGlow: "bg-primary/10",
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={group.category}
                variants={item}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`absolute -top-8 -right-8 size-28 rounded-full ${meta.bgGlow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${meta.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {group.category}
                  </h3>
                </div>

                <motion.ul
                  className="relative flex flex-wrap gap-2"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.03 } },
                  }}
                >
                  {group.items.map((skill) => (
                    <motion.li key={skill} variants={skillPill}>
                      <span className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-muted/40 px-3 py-2 text-sm text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary/25 hover:bg-primary/5 hover:shadow-sm hover:scale-105 cursor-default">
                        <TechIcon
                          name={skill}
                          size={16}
                          className="text-primary"
                        />
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
