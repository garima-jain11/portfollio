import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}
