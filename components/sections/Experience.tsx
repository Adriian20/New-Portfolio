"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="px-(--section-padding-x) py-(--section-padding-y) bg-muted/30"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-(--content-max-width)">
        <motion.div
          className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Briefcase className="size-3.5" aria-hidden />
          Trayectoria
        </motion.div>
        <motion.h2
          id="experience-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          Experiencia
        </motion.h2>
        <motion.div
          className="mt-10 space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experience.map((job) => (
            <motion.div key={job.company} variants={item}>
              <Card className="relative overflow-hidden border-l-4 border-l-primary/50 transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {job.company}
                  </CardTitle>
                  <p className="text-sm font-medium text-primary">{job.role}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
