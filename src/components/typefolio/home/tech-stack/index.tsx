'use client';

import { techStack } from "@/data/portfolio";
import { useLocale } from "@/lib/i18n";

export default function TechStack() {
  const { t } = useLocale();

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Column: Title */}
            <div className="w-full md:w-1/3 p-4 sm:p-7 md:p-12 md:border-r border-primary/10 border-b md:border-b-0">
              <div className="sticky top-24 flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('techstack.title')}</h2>
                <p className="text-secondary leading-relaxed max-w-sm">
                  {t('techstack.description')}
                </p>
              </div>
            </div>

            {/* Right Column: Stack List */}
            <div className="w-full md:w-2/3 p-4 sm:p-7 md:p-12">
              <div className="flex flex-col gap-12">
                {Object.entries(techStack).map(([category, items]) => (
                  <div key={category} className="flex flex-col gap-6">
                    <h3 className="text-sm uppercase tracking-[2px] font-bold text-primary/40">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {items.map((tech) => (
                        <div 
                          key={tech.name}
                          className="group flex items-center gap-4 p-4 rounded-xl border border-primary/10 hover:border-violet-500/30 hover:bg-primary/5 transition-colors"
                        >
                          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/5 text-xl group-hover:scale-110 transition-transform">
                            {tech.icon}
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-semibold">{tech.name}</h4>
                            <p className="text-xs text-secondary">{tech.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
