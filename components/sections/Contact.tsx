"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/data";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

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
      <div className="relative mx-auto max-w-(--content-max-width)">
        <motion.div
          className="mx-auto max-w-xl rounded-2xl border border-border bg-card/80 p-8 text-center shadow-lg backdrop-blur-sm md:p-10"
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
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {contact.heading}
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {contact.text}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button
              asChild
              size="lg"
              className="gap-2 shadow-lg shadow-primary/20"
            >
              <Link href={`mailto:${contact.email}`}>
                <Mail className="size-4" aria-hidden />
                {contact.email}
              </Link>
            </Button>
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-11 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              >
                <Link
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-11 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              >
                <Link
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
