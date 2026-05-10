import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import Divider from "@/components/typefolio/divider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Project Detail`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

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
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group mb-8">
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
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
            <div className="aspect-[21/9] w-full overflow-hidden">
               <Image 
                src={bannerImg} 
                alt={project.title} 
                width={1200} 
                height={600} 
                className="w-full h-full object-cover"
              />
            </div>
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
                      <Button asChild variant="outline" className="w-full justify-start gap-3">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="size-4" />
                          GitHub Repository
                        </Link>
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
