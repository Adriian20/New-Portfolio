"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/data";
import { Download, Code2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden px-(--section-padding-x) pt-24 pb-(--section-padding-y)"
      aria-labelledby="hero-heading"
    >
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-image:var(--hero-glow) bg-no-repeat"
        aria-hidden
      />
      <div
        className="absolute right-0 top-1/3 h-100 w-100 rounded-full bg-primary/10 blur-[120px] -translate-y-1/2"
        aria-hidden
      />
      <div
        className="absolute bottom-20 left-0 h-75 w-75 rounded-full bg-chart-2/10 blur-[100px]"
        aria-hidden
      />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0_0/0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-(--content-max-width)">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Code2 className="size-4" />
            Full Stack Web Developer
          </motion.div>
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {hero.name}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-xl text-muted-foreground sm:text-2xl">
            <Sparkles className="size-5 text-primary shrink-0" aria-hidden />
            {hero.title}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 shadow-lg shadow-primary/20"
            >
              <Link href={hero.cvUrl} target="_blank" rel="noopener noreferrer">
                <Download className="size-4" aria-hidden />
                Descargar CV
              </Link>
            </Button>
            <a
              href="#projects"
              className="text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              Ver proyectos →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
