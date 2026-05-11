import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import Divider from "@/components/typefolio/divider";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Semua Proyek — Portfolio",
  description: "Daftar lengkap proyek yang telah saya kembangkan.",
};

export default function AllProjectsPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="pt-8 pb-12">
        <div className="container">
          <div className="border-x border-primary/10 px-4 sm:px-7">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group mb-8">
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Semua Proyek</h1>
              <p className="text-secondary max-w-2xl text-lg">
                Jelajahi koleksi lengkap aplikasi, sistem arsitektur, dan produk digital yang telah saya bangun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="border-x border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index: number) => {
                const placeholderImg = `/images/feature-work/feature-img-${(index % 2) + 1}.png`;
                const hasCaseStudy = !!project.caseStudy;

                return (
                  <div
                    key={project.id}
                    className={`group flex flex-col gap-4 p-4 sm:p-6 border-b border-primary/10 ${
                      index % 2 === 1 ? "md:border-l md:border-primary/10" : ""
                    } lg:border-l-0 lg:[&:nth-child(3n-1)]:border-l lg:[&:nth-child(3n)]:border-l lg:border-primary/10`}
                  >
                    <Link href={`/projects/${project.id}`} className="overflow-hidden rounded-xl relative block">
                      <Image
                        src={project.images && project.images.length > 0 ? project.images[0] : placeholderImg}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                      />
                      {hasCaseStudy && (
                        <div className="absolute top-3 right-3 bg-violet-600/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm">
                          Case Study
                        </div>
                      )}
                    </Link>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs tracking-[2px] text-primary/60 uppercase font-medium">{project.category}</p>
                      <Link href={`/projects/${project.id}`}>
                        <h4 className="font-bold text-lg hover:text-violet-600 transition-colors">{project.title}</h4>
                      </Link>
                      <p className="text-sm text-secondary line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tech.slice(0, 4).map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 bg-primary/5 rounded-md text-primary/70 border border-primary/10">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-[10px] px-2 py-0.5 text-primary/50">+{project.tech.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      <Divider />
    </main>
  );
}
