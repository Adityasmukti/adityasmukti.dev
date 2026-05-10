"use client";

// Projects Section - Featured projects dengan card premium dan filtering

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, GitFork } from "lucide-react";
import { projects, projectCategories } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

// Custom GitHub SVG icon
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <FadeIn>
        <SectionHeader
          badge="Featured Work"
          title="Proyek Unggulan"
          description="Kumpulan proyek yang mendemonstrasikan keahlian dalam membangun sistem scalable dan modern."
        />
      </FadeIn>

      {/* Category Filter */}
      <FadeIn delay={0.1}>
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-sm rounded-xl border font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-accent border-accent/50 text-white shadow-glow-sm"
                  : "border-border text-text-secondary hover:text-white hover:border-white/20 bg-transparent"
              )}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </FadeIn>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col h-full rounded-2xl border overflow-hidden bg-bg-card",
        project.borderColor
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top gradient preview */}
      <div className={cn("relative h-44 bg-gradient-to-br overflow-hidden", project.color)}>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-3 w-48 opacity-60">
            {[70, 85, 60, 90].map((width, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={cn("h-2 rounded-full bg-white/30", `w-[${width}%]`)}
                  style={{ width: `${width}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm", project.accentColor)}>
            {project.category}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-white font-semibold text-lg mb-2 leading-tight group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-text-secondary text-base leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-5">
          <p className="text-text-muted text-xs mb-2 uppercase tracking-wider font-medium">Features</p>
          <div className="flex flex-wrap gap-1.5">
            {project.features.slice(0, 4).map((feat) => (
              <span
                key={feat}
                className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-text-secondary"
              >
                {feat}
              </span>
            ))}
            {project.features.length > 4 && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] text-text-muted">
                +{project.features.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={cn("text-sm px-2.5 py-1 rounded-lg font-medium", project.accentColor, "bg-white/[0.05] border border-white/[0.08]")}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
          <motion.a
            href={project.liveUrl}
            className="flex items-center gap-2 text-sm font-medium text-white bg-accent/20 hover:bg-accent/30 border border-accent/30 px-4 py-2.5 rounded-xl transition-all"
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white border border-border hover:border-white/20 px-4 py-2.5 rounded-xl transition-all"
            whileTap={{ scale: 0.98 }}
          >
            <GitHubIcon className="w-4 h-4" />
            Source Code
          </motion.a>
          <div className="ml-auto">
            <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
