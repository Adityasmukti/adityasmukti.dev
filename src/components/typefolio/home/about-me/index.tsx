import { Badge } from "@/components/ui/badge";
import { aboutDescription, specializations, personalInfo } from "@/data/portfolio";

const AboutMe = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Tentang Saya</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                Halo, saya {personalInfo.name.split(' ')[0]} — {personalInfo.title} yang {" "}
                                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                                    berfokus membangun produk digital
                                </span> {" "} yang skalabel dan efisien.
                            </h2>
                            <h5 className="text-secondary font-normal">{aboutDescription}</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Spesialisasi</p>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
