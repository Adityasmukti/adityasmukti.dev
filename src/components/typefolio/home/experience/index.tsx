import Image from "next/image"
import { experiences } from "@/data/portfolio";

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Pengalaman</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            {experiences?.map((exp, index) => {
                                return (
                                    <div
                                        key={exp.id}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                        <div className="flex flex-wrap gap-5 items-center justify-between">
                                            <div className="flex flex-col gap-1">
                                                <h5 className="font-bold">{exp.role}</h5>
                                                <p className="text-sm text-primary/70">{exp.company}</p>
                                            </div>
                                            <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                                <div className={`w-4 h-2 rounded-sm ${exp.isCurrent ? 'bg-primary' : 'bg-primary/10'} `} />
                                                <p className="text-sm xs:text-base text-primary">{exp.period} · {exp.company}</p>
                                            </div>
                                        </div>
                                        <p className="text-secondary leading-relaxed">{exp.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {exp.tags?.map((tag) => (
                                                <span key={tag} className="text-xs px-3 py-1 bg-primary/5 rounded-md text-primary/80 border border-primary/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
