"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useScrollSection } from "@/lib/useScrollSection";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const { scrollToSection } = useScrollSection();

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    scrollToSection(href);
    setOpen(false);
    setTimeout(() => setActiveLink(""), 800);
  };

  const navItem = (className?: string) => (
    <>
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(item.href);
          }}
          className={cn(
            "text-sm font-medium transition-all duration-300 rounded-md relative group",
            activeLink === item.href
              ? "text-primary scale-105"
              : "text-muted-foreground hover:text-primary",
            "focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className,
          )}
        >
          {item.label}<span
            className={cn(
              "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
              activeLink === item.href ? "w-full" : "w-0 group-hover:w-full",
            )}
          />
        </Link>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-(--content-max-width) items-center justify-between px-(--section-padding-x)">
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#hero");
          }}
          className="text-lg font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md hover:text-primary transition-all duration-300 relative group"
        >
          AM<span
            className={cn(
              "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
              activeLink === "#hero" ? "w-full" : "w-0 group-hover:w-full",
            )}
          />
        </Link>

        <nav
          className="hidden md:flex md:items-center md:gap-8"
          aria-label="Principal"
        >
          {navItem()}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-70 sm:max-w-70">
            <SheetHeader>
              <SheetTitle className="sr-only">Navegación</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-col gap-4 pt-6"
              aria-label="Navegación móvil"
            >
              {navItem("py-2 text-base")}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
