import AboutSection from "./components/AboutSection";
import ProjectSectionDone from "@/app/components/ProjectSectionDone";
import ExperienceSection from "@/app/components/ExperienceSection";
import SkillsSection from "@/app/components/SkillsSection";


export default function Page() {
    return (
        <main>
            <AboutSection />
            <ProjectSectionDone />
            <ExperienceSection />
            <SkillsSection />
            <footer className= "text-white py-4 mt-14 text-center">
                <p className="text-sm">
                    © 2025 Khalil Hasan. Alle Rechte vorbehalten.
                </p>
            </footer>
        </main>
    );
}
