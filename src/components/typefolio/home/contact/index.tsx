'use client';

import { personalInfo } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/i18n";

const ContactSection = () => {
    const { t, locale } = useLocale();
    const location = locale === 'id' ? personalInfo.locationId : personalInfo.location;

    return (
        <section id="contact">
            <div className="container">
                <div className="border-x border-primary/10 bg-white">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">{t('contact.badge')}</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                {t('contact.title')}
                            </h2>
                            <p className="text-secondary text-lg">
                                {t('contact.description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-primary uppercase font-medium">{t('contact.email')}</p>
                                <Link 
                                    href={`mailto:${personalInfo.email}`}
                                    className="text-lg sm:text-xl font-medium text-primary hover:text-violet-600 transition-colors"
                                >
                                    {personalInfo.email}
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-primary uppercase font-medium">{t('contact.location')}</p>
                                <p className="text-lg sm:text-xl font-medium text-primary">
                                    {location}
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-primary uppercase font-medium">{t('contact.social')}</p>
                                <div className="flex flex-wrap gap-4">
                                    <Link 
                                        href={personalInfo.linkedin} 
                                        target="_blank" 
                                        className="text-primary hover:text-violet-600 font-medium transition-colors"
                                    >
                                        LinkedIn
                                    </Link>
                                    <Link 
                                        href={personalInfo.github} 
                                        target="_blank" 
                                        className="text-primary hover:text-violet-600 font-medium transition-colors"
                                    >
                                        GitHub
                                    </Link>
                                    <Link 
                                        href={personalInfo.whatsapp} 
                                        target="_blank" 
                                        className="text-primary hover:text-violet-600 font-medium transition-colors"
                                    >
                                        WhatsApp
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Link
                                href={personalInfo.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] group"
                            >
                                <span className="flex items-center gap-3 bg-primary group-hover:bg-transparent py-3 px-8 rounded-full transition-all duration-300">
                                    <Image
                                        src="/images/icon/spark-icon.svg"
                                        alt="spark-icon"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="text-base font-semibold text-white">{t('contact.start')}</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
