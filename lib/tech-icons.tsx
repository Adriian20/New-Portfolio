"use client";

import React from "react";
import {
  SiVuedotjs,
  SiOpenjdk,
  SiSpringboot,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiRabbitmq,
  SiRedis,
  SiMysql,
  SiMariadb,
  SiMongodb,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSlack,
  SiJira,
  SiConfluence,
  SiTailwindcss,
  SiDocker,
  SiJenkins,
  SiSass,
} from "react-icons/si";
import {
  HiUserGroup,
  HiChatBubbleLeftRight,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

const slugToIcon: Record<string, IconType> = {
  "vue.js": SiVuedotjs,
  vue: SiVuedotjs,
  java: SiOpenjdk,
  "spring boot": SiSpringboot,
  springboot: SiSpringboot,
  php: SiPhp,
  laravel: SiLaravel,
  symfony: SiSymfony,
  rabbitmq: SiRabbitmq,
  redis: SiRedis,
  mysql: SiMysql,
  mariadb: SiMariadb,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  bitbucket: SiBitbucket,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss3,
  css3: SiCss3,
  slack: SiSlack,
  jira: SiJira,
  confluence: SiConfluence,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  docker: SiDocker,
  jenkins: SiJenkins,
  scss: SiSass,
};

const labelToIcon: Record<string, IconType> = {
  "Trabajo en equipo": HiUserGroup,
  Comunicativo: HiChatBubbleLeftRight,
  "Solución de incidencias": HiWrenchScrewdriver,
  "Desarrollo de Backend": SiSymfony,
  "Desarrollo de Frontend": SiVuedotjs,
  "Control de versiones": SiGit,
};

export function getTechIcon(name: string): IconType | null {
  const lower = name.toLowerCase().trim();
  return slugToIcon[lower] ?? labelToIcon[name] ?? null;
}

export function TechIcon({
  name,
  className,
  size = 20,
}: Readonly<{
  name: string;
  className?: string;
  size?: number;
}>) {
  const Icon = getTechIcon(name);
  if (!Icon) return null;
  return React.createElement(Icon, {
    className: cn("shrink-0", className),
    size,
    "aria-hidden": true,
  });
}
