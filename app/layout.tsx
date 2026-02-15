import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Adrián Marqués Roqueta",
  description: "Portfolio de Adrián Marqués Roqueta",
  keywords: [
    "Portfolio",
    "Adrián Marqués Roqueta",
    "Desarrollador",
    "Programador",
    "Full Stack",
    "Frontend",
    "Backend",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "HTML",
    "CSS",
  ],
  authors: [
    { name: "Adrián Marqués Roqueta", url: "https://github.com/Adriian20" },
  ],
  creator: "Adrián Marqués Roqueta",
  publisher: "Adrián Marqués Roqueta",
  metadataBase: new URL("https://github.com/Adriian20"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
