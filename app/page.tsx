import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import portfolioData from "@/data/portfolio.json";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950">
      <main>
        <div id="home">
          <HeroSection
            personal={portfolioData.personal}
            social={portfolioData.social}
          />
        </div>

        <SkillsSection skills={portfolioData.skills} />

        <ProjectsSection projects={portfolioData.projects} />

        <ExperienceSection experience={portfolioData.experience} />

        <ContactSection personal={portfolioData.personal} />
      </main>
    </div>
  );
}
