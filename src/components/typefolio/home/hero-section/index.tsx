'use client';

import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const HeroSection = () => {
    const { t, locale } = useLocale();
    const location = locale === 'id' ? personalInfo.locationId : personalInfo.location;

    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/aditias-1-1x1.webp"} alt={personalInfo.name} width={1080} height={267} priority className="w-full h-full object-cover object-[50%_30%]" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/images/aditias-2-1x1.webp"} alt={personalInfo.name} width={145} height={145} priority className="border-4 border-white rounded-full bg-slate-200 object-cover" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
                                <p className="text-violet-700 font-medium">{personalInfo.title}</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">{location}</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <Link 
                                        href={personalInfo.linkedin} 
                                        target="_blank"
                                        className="text-primary hover:text-violet-600 transition-colors"
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={24} />
                                    </Link>
                                    <Link 
                                        href={personalInfo.github} 
                                        target="_blank"
                                        className="text-primary hover:text-violet-600 transition-colors"
                                        title="GitHub"
                                    >
                                        <Github size={24} />
                                    </Link>
                                </div>
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href={personalInfo.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                                            <Image
                                                src="/images/icon/spark-icon.svg"
                                                alt="spark-icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span className="text-sm sm:text-base font-semibold text-white">{t('hero.cta.contact')}</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
