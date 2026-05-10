"use client";

// Architecture Section - Visualisasi sistem architecture dengan animated flow

import { motion } from "framer-motion";
import { Monitor, Shield, Database, Cpu, HardDrive, ArrowDown } from "lucide-react";
import { architectureLayers } from "@/data/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Shield,
  Database,
  Cpu,
  HardDrive,
};

// Animasi flow particle yang bergerak dari atas ke bawah
function FlowLine({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative flex flex-col items-center my-1">
      {/* Static line */}
      <div className="w-px h-10 bg-gradient-to-b from-accent/30 to-accent/10" />
      {/* Animated particle */}
      <motion.div
        className="absolute w-1 h-3 rounded-full bg-accent/70"
        style={{ top: 0 }}
        animate={{ y: [0, 40], opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Arrow */}
      <ArrowDown className="w-4 h-4 text-accent/40 -mt-1" />
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <Section id="architecture">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Explanation */}
        <FadeIn direction="left">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              System Architecture
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
              Scalable
              <br />
              <span className="gradient-text-accent">Infrastructure</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Arsitektur berlapis yang memastikan ketahanan, skalabilitas, dan performa tinggi. Setiap layer memiliki tanggung jawab yang jelas dengan separation of concern yang bersih.
            </p>

            {/* Key principles */}
            <div className="space-y-3">
              {[
                { label: "Event-Driven Architecture", desc: "Komunikasi async antar service" },
                { label: "Queue-Based Processing", desc: "Redis untuk reliabel job processing" },
                { label: "Cache-Aside Pattern", desc: "Optimasi performa dengan Redis cache" },
              ].map((principle) => (
                <div key={principle.label} className="flex items-start gap-3 p-3 rounded-xl bg-bg-card border border-border">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white text-base font-medium">{principle.label}</p>
                    <p className="text-text-muted text-sm">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right: Architecture Flow Diagram */}
        <FadeIn direction="right" delay={0.2}>
          <div className="flex flex-col items-center">
            {architectureLayers.map((layer, index) => {
              const Icon = iconMap[layer.icon];
              return (
                <div key={layer.id} className="flex flex-col items-center w-full max-w-xs">
                  {/* Layer Card */}
                  <motion.div
                    className={cn(
                      "relative w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 cursor-default overflow-hidden",
                      layer.bgColor,
                      layer.borderColor
                    )}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Pulse indicator */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className={cn("absolute inset-0 rounded-xl opacity-30", layer.bgColor)}
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                      />
                      <div className={cn("relative w-12 h-12 rounded-xl border flex items-center justify-center", layer.borderColor, layer.bgColor)}>
                        {Icon && <Icon className={cn("w-6 h-6", layer.color)} />}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-white text-base font-semibold leading-none mb-1.5">
                        {layer.label}
                      </p>
                      <p className="text-text-muted text-sm">{layer.description}</p>
                    </div>

                    {/* Layer number */}
                    <div className="text-text-muted/30 text-xs font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Shimmer */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none shimmer rounded-2xl" />
                  </motion.div>

                  {/* Flow connector */}
                  {index < architectureLayers.length - 1 && (
                    <FlowLine delay={index * 0.3} />
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
