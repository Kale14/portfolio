import AboutSection from "./components/AboutSection";
import TimelineSection from "@/app/components/TimelineSection";
import ProjectsSectionGoing from "@/app/components/ProjectsSectionGoing";
import ProjectSectionDone from "@/app/components/ProjectSectionDone";


export default function Page() {
    return (
        <main>
            <AboutSection />
            <ProjectSectionDone />
            <TimelineSection />
            <footer className= "text-black py-4 mt-14 text-center">
                <p className="text-sm">
                    © 2025 Khalil Hasan. Alle Rechte vorbehalten.
                </p>
            </footer>
        </main>
    );
}
