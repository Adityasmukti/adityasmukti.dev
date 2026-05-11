import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

const FeaturedWork = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Proyek Pilihan</p>
                            <Button asChild variant={"outline"} className="h-auto">
                                <Link href="/projects" className="py-3 px-5">
                                    Lihat Semua Proyek
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {projects?.slice(0, 4).map((project, index: number) => {
                            const isRightCol = index % 2 === 1;
                            
                            // Prioritize the first image from project data, fallback to placeholder
                            const projectImg = (project.images && project.images.length > 0) 
                                ? project.images[0] 
                                : `/images/feature-work/feature-img-${(index % 2) + 1}.png`;

                            return (
                                <div
                                    key={project.id}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''} border-b border-primary/10`}
                                >
                                    <Link href={`/projects/${project.id}`} className="overflow-hidden rounded-xl">
                                        <Image
                                            src={projectImg}
                                            alt={project.title}
                                            width={490}
                                            height={300}
                                            className="w-full h-auto group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <Link href={`/projects/${project.id}`}>
                                            <h4 className="hover:text-violet-600 transition-colors">{project.title}</h4>
                                        </Link>
                                        <div className="flex flex-wrap gap-2">
                                            <p className="text-sm text-secondary line-clamp-2">{project.description}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[10px] px-2 py-0.5 bg-primary/5 rounded-full text-primary/60 border border-primary/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork
