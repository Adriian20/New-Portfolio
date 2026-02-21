"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";
import { TechIcon } from "@/lib/tech-icons";
import { ExternalLink, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectCard({
  project,
  index,
}: Readonly<{
  project: (typeof projects)[number];
  index: number;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div variants={item}>
      <Card
        className={cn(
          "group relative h-full overflow-hidden transition-all duration-500",
          "hover:shadow-2xl hover:shadow-primary/8 hover:border-primary/25",
          "bg-card/80 backdrop-blur-sm",
        )}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />

          <div className="absolute top-3 left-3 flex size-8 items-center justify-center rounded-lg bg-primary/90 text-xs font-bold text-primary-foreground shadow-lg backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="absolute top-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105"
              aria-label={`Ver proyecto ${project.title}`}
            >
              <SiGithub className="size-3.5" />
              Ver código
            </Link>
          </div>
        </div>

        <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3 space-y-0 pb-2">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-lg font-bold tracking-tight">
              {project.title}
            </CardTitle>

            <div className="mt-2">
              <CardDescription
                className={cn(
                  "text-muted-foreground leading-relaxed transition-all duration-300",
                  !isExpanded && "line-clamp-2",
                )}
              >
                {project.description}
              </CardDescription>
              {project.description.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-primary/80 transition-colors hover:text-primary"
                  aria-expanded={isExpanded}
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

          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Ver proyecto ${project.title}`}
          >
            <ExternalLink className="size-4" />
          </Link>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
              >
                <TechIcon
                  name={tech}
                  size={14}
                  className="text-primary"
                />
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-(--section-padding-x) py-(--section-padding-y) bg-muted/40 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 265 / 0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-(--content-max-width)">
        <motion.div
          className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trabajo reciente
        </motion.div>
        <motion.h2
          id="projects-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Proyectos
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Una selección de proyectos personales que reflejan mi pasión por el
          desarrollo web y las tecnologías modernas.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-8 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
