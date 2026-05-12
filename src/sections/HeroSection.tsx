"use client";

// Hero Section - Entry point utama website portfolio
// Menampilkan nama, title, subtitle, CTA buttons, dan animated background

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { AnimatedGrid } from "@/components/animations/AnimatedGrid";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-20">
      {/* Animated background */}
      <AnimatedGrid />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Available for freelance projects
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-[1.05]"
        >
          {personalInfo.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "gradient-text-accent" : ""}>
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
          <p className="text-text-secondary text-lg md:text-xl font-medium">
            {personalInfo.title}
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="default"
            size="lg"
            onClick={() => handleScrollTo("projects")}
            className="shadow-glow-md hover:shadow-glow-lg"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button asChild variant="secondary" size="lg">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => handleScrollTo("contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-muted cursor-pointer"
            onClick={() => handleScrollTo("about")}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
