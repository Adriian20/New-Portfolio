"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { hero, contact } from "@/lib/data";
import { Download, Code2, Sparkles, ArrowDown, Terminal } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-(--section-padding-x) pt-24 pb-(--section-padding-y)"
      aria-labelledby="hero-heading"
    >
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
      <div
        className="absolute top-1/4 left-1/3 h-48 w-48 rounded-full bg-primary/5 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0_0/0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-(--content-max-width)">
        <div className="grid lg:grid-cols-5 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-3 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <Code2 className="size-4" />
              Full Stack Web Developer
            </motion.div>

            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="block"
              >
                {hero.name.split(" ").slice(0, 1).join(" ")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="block bg-linear-to-r from-primary via-chart-5 to-primary bg-clip-text text-transparent"
              >
                {hero.name.split(" ").slice(1).join(" ")}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-4 flex items-center gap-2 text-lg text-muted-foreground sm:text-xl"
            >
              <Sparkles className="size-5 text-primary shrink-0" aria-hidden />
              {hero.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {hero.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="gap-2 shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                <Link href={hero.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" aria-hidden />
                  Descargar CV
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all">
                <a href="#projects">
                  Ver proyectos
                  <ArrowDown className="size-4 animate-bounce" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">Sígueme</span>
              <div className="h-px flex-1 max-w-12 bg-border/60" />
              <Link
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/10 hover:scale-110 backdrop-blur-sm"
                aria-label="GitHub"
              >
                <SiGithub className="size-5" />
              </Link>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/10 hover:scale-110 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="size-5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:col-span-2 lg:flex lg:justify-center"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative w-full max-w-sm"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />

              <div className="relative rounded-2xl border border-border/60 bg-card/80 p-6 shadow-2xl shadow-primary/5 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/40">
                  <div className="size-3 rounded-full bg-red-400/80" />
                  <div className="size-3 rounded-full bg-yellow-400/80" />
                  <div className="size-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-xs text-muted-foreground/60 flex items-center gap-1">
                    <Terminal className="size-3" />
                    adrián@dev
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-[13px]">
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="text-primary/60">const</span>
                    <span className="text-foreground">dev</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-chart-2">{"{"}</span>
                  </div>
                  <div className="ml-4 flex gap-1.5 flex-wrap">
                    <span className="text-chart-5">name</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-chart-3">&quot;Adrián&quot;</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="ml-4 flex gap-1.5 flex-wrap">
                    <span className="text-chart-5">role</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-chart-3">&quot;Full Stack&quot;</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="ml-4 flex gap-1.5 flex-wrap">
                    <span className="text-chart-5">backend</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-muted-foreground">[</span>
                    <span className="text-chart-3">&quot;PHP&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    <span className="text-chart-3">&quot;Java&quot;</span>
                    <span className="text-muted-foreground">],</span>
                  </div>
                  <div className="ml-4 flex gap-1.5 flex-wrap">
                    <span className="text-chart-5">frontend</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-muted-foreground">[</span>
                    <span className="text-chart-3">&quot;Vue&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    <span className="text-chart-3">&quot;Nuxt js&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    <span className="text-chart-3">&quot;TypeScript&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    <span className="text-chart-3">&quot;Tailwind CSS&quot;</span>
                    <span className="text-muted-foreground">],</span>
                  </div>
                  <div className="ml-4 flex gap-1.5 flex-wrap">
                    <span className="text-chart-5">tools</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-muted-foreground">[</span>
                    <span className="text-chart-3">&quot;Docker&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    <span className="text-chart-3">&quot;Redis&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    <span className="text-chart-3">&quot;RabbitMQ&quot;</span>
                    <span className="text-muted-foreground">,</span>
                    <span className="text-chart-3">&quot;Jenkins&quot;</span>
                    <span className="text-muted-foreground">],</span>
                  </div>
                  <div className="ml-4 flex gap-1.5">
                    <span className="text-chart-5">passion</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-chart-3">&quot;∞&quot;</span>
                  </div>
                  <div>
                    <span className="text-chart-2">{"}"}</span>
                    <span className="text-muted-foreground">;</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 pt-2 border-t border-border/30">
                    <span className="text-primary animate-pulse">▋</span>
                    <span className="text-muted-foreground/50 text-xs">Ready to build amazing things...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="size-6 rounded-full border border-border/40 flex items-center justify-center"
        >
          <div className="size-1.5 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
