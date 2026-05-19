'use client';

import { experiences } from "@/data/portfolio";
import { useLocale } from "@/lib/i18n";

const Experience = () => {
    const { locale } = useLocale();

    return (
        <section id="experience">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                                {locale === 'en' ? 'Experience' : 'Pengalaman'}
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            {experiences?.map((exp) => {
                                const expDesc = locale === 'en' && 'descriptionEn' in exp
                                    ? (exp as unknown as Record<string, string>).descriptionEn
                                    : exp.description;
                                return (
                                    <div
                                        key={exp.id}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">

                                        <div className="flex flex-col gap-1">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h4 className="font-bold text-lg">{exp.role}</h4>
                                                {exp.isCurrent && (
                                                    <div className="flex items-center gap-1.5 bg-violet-600/10 border border-violet-600/20 rounded-full py-0.5 pl-1.5 pr-2.5">
                                                        <span className="size-1.5 rounded-full bg-violet-600 animate-pulse-slow" />
                                                        <span className="text-xs font-medium text-violet-600">
                                                            {locale === 'en' ? 'Current' : 'Current'}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-2">
                                                <span className="font-semibold text-primary">{exp.company}</span>
                                                <span className="text-xs text-secondary">•</span>
                                                <span className="text-xs text-secondary">{exp.period}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-secondary leading-relaxed"
                                        >{expDesc}</p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] px-2 py-0.5 bg-primary/5 border border-primary/5 text-primary/60 rounded-md">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
