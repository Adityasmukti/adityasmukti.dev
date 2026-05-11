import Divider from "@/components/typefolio/divider"
import AboutMe from "@/components/typefolio/home/about-me"
import Experience from "@/components/typefolio/home/experience"
import FeaturedWork from "@/components/typefolio/home/featured-work"
import HeroSection from "@/components/typefolio/home/hero-section"
import ProjectOverview from "@/components/typefolio/home/project-overview"
import TechStack from "@/components/typefolio/home/tech-stack"
import ContactSection from "@/components/typefolio/home/contact"

export default function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <TechStack />
      <Divider />
      <FeaturedWork />
      <Divider />
      <Experience />
      <Divider />
      <ProjectOverview />
      <Divider />
      <ContactSection />
      <Divider />
    </main>
  );
}
