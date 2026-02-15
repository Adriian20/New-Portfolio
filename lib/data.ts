export const hero = {
  name: "Adrián Marqués Roqueta",
  title: "Web Developer | Full Stack | Programmer | PHP | JAVA",
  summary:
    "Desarrollador web con interés en construir aplicaciones dinámicas, seguras y fáciles de usar. Especializado en backend con PHP y JAVA, con experiencia en Vue.js y entornos Agile.",
  cvUrl: "/archives/Marques.Roqueta.Adrian.CV.pdf",
} as const;

export const about = {
  paragraphs: [
    "Soy Adrián Marqués Roqueta, desarrollador web con interés en construir aplicaciones dinámicas, seguras y fáciles de usar. Durante mi formación adquirí una base sólida en Java y MySQL, y en mis prácticas profesionales consolidé mis conocimientos en PHP, Vue.js y MariaDB, participando en proyectos reales de desarrollo.",
    "Actualmente trabajo en Adnovation (EXOGROUP) como Web Developer Symfony, donde desarrollo y mantengo aplicaciones backend de alto rendimiento utilizando Symfony, PHP OOP y MySQL, además de integrar tecnologías como Redis, RabbitMQ y Docker. También participo en equipos multidisciplinares bajo metodologías Agile (Scrum), con enfoque en optimización, escalabilidad y buenas prácticas de desarrollo.",
    "Me motiva seguir aprendiendo nuevas tecnologías y asumir retos que me permitan evolucionar tanto a nivel técnico como personal, aportando valor en cada proyecto en el que participo.",
  ],
} as const;

export const skills = [
  {
    category: "Habilidades Sociales",
    items: [
      "Trabajo en equipo",
      "Comunicativo",
      "Solución de incidencias",
      "Slack",
      "Jira",
      "Confluence",
    ],
  },
  {
    category: "Backend",
    items: [
      "Desarrollo de Backend",
      "Java",
      "Spring Boot",
      "PHP",
      "Laravel",
      "Symfony",
      "RabbitMQ",
      "Redis",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Desarrollo de Frontend",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Bases de Datos",
    items: ["MySQL", "MariaDB", "MongoDB"],
  },
  {
    category: "Control de Versiones",
    items: ["Git", "GitHub", "BitBucket", "Control de versiones"],
  },
] as const;

export const experience = [
  {
    company: "Adnovation (EXOGROUP)",
    role: "Backend Developer",
    description:
      "Actualmente desempeño el rol de Web Developer Symfony, donde participo en el desarrollo y mantenimiento de aplicaciones backend de alto rendimiento utilizando PHP (OOP) y Symfony, integrando tecnologías como Redis y RabbitMQ. Formo parte de todo el ciclo de desarrollo: análisis, diseño, codificación, pruebas automatizadas con PHPUnit/PHPSpec y despliegue en producción. Trabajo en un entorno Agile (Scrum), colaborando con equipos multidisciplinares y utilizando Git en sistemas Linux. Además, participo en la optimización de procesos en entornos de alto tráfico, aplicando herramientas como Docker, Jenkins y bases de datos MySQL y MongoDB. Esta experiencia me ha permitido crecer como desarrollador backend y aportar soluciones escalables alineadas con los objetivos estratégicos de la empresa.",
  },
  {
    company: "TuGesto",
    role: "Full Stack Web Developer",
    description:
      "Participé en el diseño, desarrollo y mantenimiento de sitios web, aplicando tecnologías como SCSS, JavaScript, PHP y Vue.js. Colaboré estrechamente con el equipo para mejorar la experiencia de usuario y optimizar el rendimiento de las aplicaciones. También tuve la oportunidad de trabajar en la resolución de incidencias técnicas y en la implementación de nuevas funcionalidades, adquiriendo experiencia práctica en el uso de herramientas como Git, Jira y en el manejo de metodologías ágiles como Scrum. Esta experiencia me permitió fortalecer mis habilidades técnicas y de trabajo en equipo en un entorno profesional dinámico.",
  },
] as const;

export const projects = [
  {
    title: "Concesionario Vue",
    slug: "concesionario-vue",
    description:
      "Aplicación web para la gestión de un concesionario de coches, desarrollada con Vue.js.",
    technologies: ["Vue.js"],
    href: "https://github.com/Adriian20/Concesionario-Vue",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    imageAlt: "Vista de aplicación tipo concesionario",
  },
  {
    title: "Tienda De Fútbol Java",
    slug: "tienda-futbol-java",
    description:
      "Backend de una tienda de artículos de fútbol, implementado en Java con Spring Boot.",
    technologies: ["Java", "Spring Boot"],
    href: "https://github.com/Adriian20/TiendaFutbol-Backend",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    imageAlt: "Backend API / código",
  },
  {
    title: "Tienda De Fútbol Vue",
    slug: "tienda-futbol-vue",
    description:
      "Frontend de una tienda de artículos de fútbol, desarrollado con Vue.js y TailwindCSS.",
    technologies: ["Vue.js", "TailwindCSS"],
    href: "https://github.com/Adriian20/TiendaFutbol-Frontend",
    image:
      "https://images.unsplash.com/photo-1731692483141-1ec523809aa1?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Tienda de fútbol - proyecto frontend",
  },
  {
    title: "Sagunto Kids",
    slug: "sagunto-kids",
    description:
      "Página web completa de búsqueda de actividades extraescolares para niños en Sagunto.",
    technologies: ["JAVA", "MySQL", "TailwindCSS", "Docker"],
    href: "https://github.com/Adriian20/SaguntoKids",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    imageAlt: "Página web de Sagunto Kids",
  },
] as const;

export const contact = {
  heading: "¡Hablemos!",
  text: "Si estás buscando un programador web con experiencia en Java, PHP y Vue.js, y con ganas de asumir nuevos retos, estoy aquí para ayudarte. Ya sea para colaborar en proyectos interesantes o para formar parte de tu equipo. Puedes escribirme o conectarte conmigo en LinkedIn. Estoy siempre abierto a nuevas oportunidades y conversaciones sobre desarrollo, tecnología y cómo podemos trabajar juntos.",
  email: "adrianmarquesroqueta@gmail.com",
  linkedin: "https://www.linkedin.com/in/adrian-marques/",
  github: "https://github.com/Adriian20",
} as const;

export const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
] as const;
