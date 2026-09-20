import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SapExpertise } from "@/components/sap-expertise";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { ResumeCta } from "@/components/resume-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070a0f] text-slate-200">
      {/* 1. Navigation */}
      <Navigation />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. SAP Expertise */}
        <SapExpertise />

        {/* 5. Technology Stack */}
        <TechStack />

        {/* 6. Professional Experience */}
        <Experience />

        {/* 7. Featured Projects */}
        <FeaturedProjects />

        {/* 8. Education */}
        <Education />

        {/* 9. Certifications / Achievements */}
        <Certifications />

        {/* 10. Resume CTA */}
        <ResumeCta />

        {/* 11. Contact */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
