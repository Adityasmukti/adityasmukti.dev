"use client";

// Section wrapper dengan padding dan max-width konsisten
// Digunakan sebagai container standar setiap section

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32 overflow-hidden", className)}
    >
      <div className={cn("relative z-10 max-w-6xl mx-auto px-6 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

// Section header dengan label badge, heading, dan description
interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6",
            "text-xs font-medium text-accent",
            "bg-accent/10 border border-accent/20",
            centered && "mx-auto"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
