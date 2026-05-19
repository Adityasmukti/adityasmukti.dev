'use client';

import { Badge } from "@/components/ui/badge";
import { aboutDescription, aboutDescriptionEn, specializations, personalInfo, education } from "@/data/portfolio";
import { useLocale } from "@/lib/i18n";

const AboutMe = () => {
    const { t, locale } = useLocale();
    const desc = locale === 'en' ? aboutDescriptionEn : aboutDescription;

    return (
        <section id="about">
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">{t('about.badge')}</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                {t('about.title', { name: personalInfo.name.split(' ')[0], title: personalInfo.title, focus: t('about.focus') })}
                            </h2>
                            <h5 className="text-secondary font-normal">{desc}</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">{t('about.specialization')}</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {specializations?.map((spec, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{spec.title}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <p className="text-sm text-primary uppercase font-medium">{t('about.education')}</p>
                            <div className="flex flex-col gap-3">
                                {education?.map((edu, index) => (
                                    <div key={index} className="flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                                        <h4 className="font-semibold">{edu.degree}</h4>
                                        <p className="text-sm text-secondary">{edu.institution} • {edu.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
