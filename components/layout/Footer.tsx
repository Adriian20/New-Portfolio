import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { contact } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-(--content-max-width) px-(--section-padding-x) py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adrián Marqués Roqueta
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md",
              )}
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md",
              )}
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
