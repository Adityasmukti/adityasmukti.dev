import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import Divider from "@/components/typefolio/divider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Lock } from "lucide-react";
import MermaidDiagram from "@/components/typefolio/MermaidDiagram";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Project Detail`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Rotating placeholder image for consistency
  const index = projects.findIndex(p => p.id === project.id);
  const bannerImg = `/images/feature-work/feature-img-${(index % 2) + 1}.png`;

  return (
    <main className="bg-background min-h-screen">
      {/* Back Button & Header Area */}
      <section className="pt-8 pb-4">
        <div className="container">
          <div className="border-x border-primary/10 px-4 sm:px-7">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group mb-8">
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Projects
            </Link>
            <div className="flex flex-col gap-4 mb-12">
              <p className="text-xs tracking-[3px] text-primary uppercase font-bold">{project.category}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <Divider />

       {/* Hero Image / Banner */}
       <section>
         <div className="container">
           <div className="border-x border-primary/10">
             {project.images && project.images.length > 0 ? (
               <div className="flex flex-col gap-8 p-4 sm:p-7">
                 {project.images.map((img, i) => (
                   <div key={i} className="w-full overflow-hidden rounded-xl border border-primary/10">
                     <Image
                       src={img}
                       alt={`${project.title} - ${i + 1}`}
                       width={1200}
                       height={800}
                       priority={i === 0}
                       className="w-full h-auto block hover:scale-[1.02] transition-transform duration-500"
                     />
                   </div>
                 ))}
               </div>
             ) : (
               <div className="w-full p-4 sm:p-7">
                 <div className="w-full overflow-hidden rounded-xl border border-primary/10">
                    <Image
                      src={bannerImg}
                      alt={project.title}
                      width={1200}
                      height={600}
                      priority
                      className="w-full h-auto block"
                    />
                 </div>
               </div>
             )}
           </div>
         </div>
       </section>

      <Divider />

      {/* Project Info Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="border-x border-primary/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-7 grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Left Column: Description & Features */}
              <div className="md:col-span-2 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Tentang Proyek</h3>
                  <p className="text-lg leading-relaxed text-secondary">{project.description}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">Fitur Utama</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-secondary">
                        <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Tech Stack & Links */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm uppercase tracking-widest font-bold text-primary/40">Teknologi</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="px-3 py-1 bg-primary/5">{t}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                   <h3 className="text-sm uppercase tracking-widest font-bold text-primary/40">Tautan</h3>
                   <div className="flex flex-col gap-3">
                    {project.liveUrl !== "#" && (
                      <Button asChild className="w-full justify-start gap-3">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="size-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button 
                        asChild={!project.isPrivate} 
                        variant="outline" 
                        className={`w-full justify-start gap-3 ${project.isPrivate ? 'opacity-70 cursor-not-allowed bg-primary/5' : ''}`}
                        disabled={project.isPrivate}
                      >
                        {project.isPrivate ? (
                          <div className="flex items-center gap-3">
                            <Lock className="size-4" />
                            Private Repository
                          </div>
                        ) : (
                          <Link href={project.githubUrl} target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="size-4"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            GitHub Repository
                          </Link>
                        )}
                      </Button>
                    )}
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Engineering Case Study Section */}
      {/* @ts-ignore - caseStudy is added dynamically in portfolio.ts */}
      {project.caseStudy && (
        <section className="py-12 md:py-20 bg-primary/5">
          <div className="container">
            <div className="border-x border-primary/10">
              <div className="max-w-3xl mx-auto px-4 sm:px-7 flex flex-col gap-16">
                
                <div className="flex flex-col gap-4 text-center">
                  <p className="text-sm tracking-[3px] text-primary uppercase font-bold">Engineering Deep Dive</p>
                  <h2 className="text-3xl font-bold">Case Study</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">The Problem</h3>
                    {/* @ts-ignore */}
                    <p className="text-secondary leading-relaxed">{project.caseStudy.problem}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">The Solution</h3>
                    {/* @ts-ignore */}
                    <p className="text-secondary leading-relaxed">{project.caseStudy.solution}</p>
                  </div>
                </div>

                {/* @ts-ignore */}
                {project.caseStudy.architecture && (
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold">System Architecture</h3>
                    {/* @ts-ignore */}
                    <MermaidDiagram chart={project.caseStudy.architecture} />
                  </div>
                )}

                {/* @ts-ignore */}
                {project.caseStudy.scalability && project.caseStudy.scalability.length > 0 && (
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold">Scalability & Performance</h3>
                    <ul className="flex flex-col gap-3">
                      {/* @ts-ignore */}
                      {project.caseStudy.scalability.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-primary/10 text-secondary">
                          <span className="mt-1 size-2 rounded-full bg-violet-500 shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      )}

      <Divider />
      {/* Footer-like CTA */}
      <section className="py-20">
        <div className="container">
          <div className="border-x border-primary/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-7 text-center flex flex-col items-center gap-8">
              <h2 className="text-2xl font-bold">Tertarik dengan proyek seperti ini?</h2>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/#contact">Mulai Diskusi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </main>
  );
}
