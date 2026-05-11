import { personalInfo } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="border-x border-primary/10 bg-white">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Kontak</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                Ayo <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">diskusi tentang proyek</span> Anda berikutnya.
                            </h2>
                            <p className="text-secondary text-lg">
                                Saya selalu terbuka untuk kolaborasi menarik, proyek freelance, atau sekadar berbagi ide tentang pengembangan sistem.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-primary uppercase font-medium">Email</p>
                                <Link 
                                    href={`mailto:${personalInfo.email}`}
                                    className="text-lg sm:text-xl font-medium text-primary hover:text-violet-600 transition-colors"
                                >
                                    {personalInfo.email}
                                </Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-primary uppercase font-medium">Lokasi</p>
                                <p className="text-lg sm:text-xl font-medium text-primary">
                                    {personalInfo.location}
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-primary uppercase font-medium">Media Sosial</p>
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
                                    <span className="text-base font-semibold text-white">Mulai Percakapan</span>
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
