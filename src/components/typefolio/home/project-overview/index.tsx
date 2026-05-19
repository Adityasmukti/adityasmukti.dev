'use client';

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { useLocale } from "@/lib/i18n";

const ProjectOverview = () => {
    const { t } = useLocale();
    const sideProjects = projects.slice(2);

    return (
        <section id="side-projects">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">
                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                            <p className="max-w-fit lg:max-w-[200px] w-full text-sm tracking-[2px] text-primary uppercase font-medium">{t('projectoverview.services')}</p>
                            <div className="flex flex-col gap-4">
                                <div className="group flex items-center gap-2">
                                    <h4 className="text-lg font-semibold">{t('projectoverview.customApi')}</h4>
                                    <Image src={"/images/icon/tile-arrow-icon.svg"} alt="tile-icon" width={24} height={24} className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in" />
                                </div>
                                <div className="group flex items-center gap-2">
                                    <h4 className="text-lg font-semibold">{t('projectoverview.systemMigration')}</h4>
                                    <Image src={"/images/icon/tile-arrow-icon.svg"} alt="tile-icon" width={24} height={24} className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                            <p className="max-w-fit lg:max-w-[200px] w-full text-sm tracking-[2px] text-primary uppercase font-medium">{t('projectoverview.sideProjects')}</p>
                            <div className="flex flex-col gap-6">
                                {sideProjects.map((project) => (
                                    <Link key={project.id} href={`/projects/${project.id}`} className="group flex flex-wrap items-center gap-2">
                                        <h4 className="text-xl font-semibold group-hover:text-violet-600 transition-colors">
                                            {project.title}
                                        </h4>
                                        <Image
                                            src={"/images/icon/tile-arrow-icon.svg"}
                                            alt="tile-icon"
                                            width={24}
                                            height={24}
                                            className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                                        />
                                    </Link>
                                ))}
                                <div className="group flex flex-wrap items-center gap-2">
                                    <h4 className="text-xl font-semibold text-muted-foreground">
                                        AI Agent Workflow
                                    </h4>
                                    <div className="py-1 px-3 bg-muted rounded-lg border border-primary/5">
                                        <p className="text-xs font-normal text-muted-foreground">{t('projectoverview.comingSoon')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectOverview
