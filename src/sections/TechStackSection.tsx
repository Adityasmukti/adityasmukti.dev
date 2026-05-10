"use client";

// Tech Stack Section - Menampilkan teknologi dalam grid card beranimasi

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, { border: string; glow: string; badge: string }> = {
  Frontend: {
    border: "border-blue-500/20 hover:border-blue-500/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  Backend: {
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  Database: {
    border: "border-red-500/20 hover:border-red-500/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]",
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  DevOps: {
    border: "border-orange-500/20 hover:border-orange-500/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  "AI & Automation": {
    border: "border-violet-500/20 hover:border-violet-500/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
};

export function TechStackSection() {
  return (
    <Section id="stack">
      <FadeIn>
        <SectionHeader
          badge="Tech Stack"
          title="Teknologi Yang Saya Gunakan"
          description="Stack lengkap dari frontend hingga infrastruktur yang mendukung pembangunan sistem modern dan scalable."
        />
      </FadeIn>

      <div className="space-y-10">
        {Object.entries(techStack).map(([category, techs], catIndex) => {
          const colors = categoryColors[category] || categoryColors["Frontend"];
          return (
            <FadeIn key={category} delay={catIndex * 0.1}>
              <div>
                {/* Category label */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={cn("text-sm font-medium px-4 py-1.5 rounded-full border", colors.badge)}>
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Tech cards */}
                <StaggerContainer
                  className={cn(
                    "grid gap-3",
                    techs.length <= 2 ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-2 max-w-md" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                  )}
                  staggerDelay={0.06}
                >
                  {techs.map((tech) => (
                    <StaggerItem key={tech.name}>
                      <motion.div
                        className={cn(
                          "group relative flex items-center gap-3 p-4 rounded-xl border bg-bg-card overflow-hidden cursor-default transition-all duration-200",
                          colors.border,
                          colors.glow
                        )}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.15 }}
                      >
                        {/* Background hover effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                        </div>

                        {/* Icon */}
                        <div className="relative z-10 text-3xl flex-shrink-0 w-10 text-center">
                          {tech.icon}
                        </div>

                        {/* Info */}
                        <div className="relative z-10 min-w-0">
                          <p className="text-white text-base font-medium leading-none mb-1.5 truncate">
                            {tech.name}
                          </p>
                          <p className="text-text-muted text-sm">{tech.description}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
