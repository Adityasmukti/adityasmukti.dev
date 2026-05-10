"use client";

// About Section - Menampilkan informasi personal dan specialization cards

import { motion } from "framer-motion";
import {
  Server, Zap, Brain, BarChart3, Network, Radio
} from "lucide-react";
import { aboutDescription, specializations } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Zap,
  Brain,
  BarChart3,
  Network,
  Radio,
};

export function AboutSection() {
  return (
    <Section id="about">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <FadeIn>
        <SectionHeader
          badge="About Me"
          title="Siapa Saya"
          description={aboutDescription}
        />
      </FadeIn>

      {/* Stats Row */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-lg mx-auto">
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Built", value: "20+" },
            { label: "Systems Running", value: "10+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white gradient-text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-text-muted text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Specialization Cards */}
      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        staggerDelay={0.08}
      >
        {specializations.map((spec) => {
          const Icon = iconMap[spec.icon];
          return (
            <StaggerItem key={spec.id}>
              <motion.div
                className="group relative p-6 rounded-2xl border border-border bg-bg-card cursor-pointer overflow-hidden"
                whileHover={{ y: -4, borderColor: "rgba(99, 102, 241, 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
                    }}
                  />
                </div>

                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shimmer rounded-2xl" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-200">
                  {Icon && <Icon className="w-6 h-6 text-accent" />}
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-white font-semibold mb-2.5 text-base">
                  {spec.title}
                </h3>
                <p className="relative z-10 text-text-secondary text-sm leading-relaxed">
                  {spec.description}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      background: "radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
