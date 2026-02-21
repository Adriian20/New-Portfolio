"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/data";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Send,
  Sparkles,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    color: "from-violet-500 to-indigo-600",
    bgGlow: "bg-violet-500/10",
    description: "Escríbeme directamente",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    value: "adrian-marques",
    href: contact.linkedin,
    color: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/10",
    description: "Conectemos profesionalmente",
    external: true,
  },
  {
    icon: SiGithub,
    label: "GitHub",
    value: "Adriian20",
    href: contact.github,
    color: "from-gray-600 to-gray-800",
    bgGlow: "bg-gray-500/10",
    description: "Mira mi código",
    external: true,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-(--section-padding-x) py-(--section-padding-y) overflow-hidden bg-muted/40"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 bg-image:var(--hero-glow) bg-no-repeat opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 265 / 0.3), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-(--content-max-width)">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="size-3.5" aria-hidden />
              Contacto
            </motion.div>
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              {contact.heading}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-[0.95rem] lg:text-base">
              {contact.text}
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="gap-2 shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                <Link href={`mailto:${contact.email}`}>
                  <Send className="size-4" aria-hidden />
                  Enviar email
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <Sparkles className="size-4 text-primary/50" />
              <p className="text-sm italic text-muted-foreground/70">
                Siempre abierto a nuevas oportunidades y conversaciones sobre
                tecnología.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.div key={method.label} variants={itemVariants}>
                  <Link
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div
                      className={`absolute -top-8 -right-8 size-24 rounded-full ${method.bgGlow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <div
                      className={`relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${method.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                        {method.description}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold text-foreground">
                        {method.value}
                      </p>
                    </div>

                    <ArrowUpRight className="relative size-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
