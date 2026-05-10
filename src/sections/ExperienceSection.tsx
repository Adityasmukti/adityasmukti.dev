"use client";

// Experience Timeline Section - Vertical timeline modern

import { motion } from "framer-motion";
import { Calendar, Briefcase, ExternalLink } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <FadeIn>
        <SectionHeader
          badge="Experience"
          title="Perjalanan Karir"
          description="Pengalaman profesional dan proyek yang membentuk keahlian saya sebagai developer."
        />
      </FadeIn>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent transform md:-translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex gap-6 md:gap-0",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 flex items-start justify-center w-12 md:w-1/2">
                <div className={cn(
                  "hidden md:flex",
                  index % 2 === 0 ? "justify-end pr-6" : "justify-start pl-6",
                  "w-full"
                )}>
                  {/* Period label (desktop) */}
                  <div className="flex items-center gap-1.5 text-text-muted text-sm mt-4">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                {/* Dot - only show on mobile */}
                <div className="md:hidden absolute left-0 top-4 w-3 h-3 rounded-full bg-accent border-2 border-bg-primary shadow-glow-sm" />
              </div>

              {/* Center dot (desktop) */}
              <div className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 z-20">
                <motion.div
                  className="w-3 h-3 rounded-full bg-accent border-2 border-bg-primary shadow-glow-sm"
                  animate={exp.isCurrent ? {
                    boxShadow: [
                      "0 0 0 0px rgba(99, 102, 241, 0.4)",
                      "0 0 0 8px rgba(99, 102, 241, 0)",
                    ],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Card */}
              <div className={cn(
                "flex-1 ml-8 md:ml-0 md:w-1/2",
                index % 2 === 0 ? "md:pl-6" : "md:pr-6"
              )}>
                <motion.div
                  className="group relative p-5 rounded-2xl border border-border bg-bg-card overflow-hidden"
                  whileHover={{ borderColor: "rgba(99, 102, 241, 0.3)", y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Hover bg */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent" />
                  </div>

                  {/* Current badge */}
                  {exp.isCurrent && (
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                      <span className="text-emerald-400 text-xs font-medium">Current</span>
                    </div>
                  )}

                  {/* Mobile period */}
                  <div className="flex items-center gap-1.5 text-text-muted text-sm mb-3 md:hidden">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-text-secondary text-base">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4 relative z-10">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
