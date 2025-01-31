import AboutSection from "./components/AboutSection";
import ProjectSectionDone from "@/app/components/ProjectSectionDone";
import ExperienceSection from "@/app/components/ExperienceSection";


export default function Page() {
    return (
        <main>
            <AboutSection />
            <ProjectSectionDone />
            <ExperienceSection />
            <footer className= "text-black py-4 mt-14 text-center">
                <p className="text-sm">
                    © 2025 Khalil Hasan. Alle Rechte vorbehalten.
                </p>
            </footer>
        </main>
    );
}
