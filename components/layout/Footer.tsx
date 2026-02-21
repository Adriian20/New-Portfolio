import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { contact, navLinks } from "@/lib/data";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-muted/30">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.55 0.22 265 / 0.3), oklch(0.6 0.18 300 / 0.3), transparent)",
        }}
      />

      <div className="mx-auto max-w-(--content-max-width) px-(--section-padding-x) py-10">
        <div className="grid gap-8 sm:grid-cols-3 sm:items-center">
          <div>
            <Link
              href="#hero"
              className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              AM<span className="text-primary">.</span>
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">
              Adrián Marqués Roqueta
            </p>
          </div>

          <nav className="flex flex-wrap justify-start sm:justify-center gap-x-5 gap-y-2">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:justify-end">
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              aria-label="GitHub"
            >
              <SiGithub className="size-4" />
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="size-4" />
            </Link>
            <a
              href="#hero"
              className="flex size-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              aria-label="Volver arriba"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border/30 pt-6 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Adrián Marqués Roqueta. Hecho con
            <Heart className="size-3 text-red-400 fill-red-400" /> y mucho café.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Built with Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
