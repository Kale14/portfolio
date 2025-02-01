"use client";
import { useRef, useState } from "react";
import Modal from "./Modal"; // Modal-Komponente importieren
import projects from "./projectdatagoing"; // Pfad anpassen, falls notwendig

export default function ProjectsSectionGoing() {
    const carouselRef = useRef(null); // Referenz für das Karussell
    const [isModalOpen, setIsModalOpen] = useState(false); // Zustand für Modal
    const [selectedProject, setSelectedProject] = useState(null); // Aktuell ausgewähltes Projekt

    // Scroll-Funktion für das Karussell
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 300; // Scrollweite (px)
            if (direction === "next") {
                carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            } else {
                carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        }
    };

    // Öffnet das Modal mit den Daten des ausgewählten Projekts
    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    // Schließt das Modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Farben für Status-Badge
    const statusInfo = {
        "In Arbeit": { bgColor: "bg-yellow-200", textColor: "text-yellow-900", text: "In Arbeit" },
        "Abgeschlossen": { bgColor: "bg-green-200", textColor: "text-green-900", text: "Abgeschlossen" },
        "Geplant": { bgColor: "bg-gray-200", textColor: "text-gray-900", text: "Geplant" },
    };

    return (
        <section id="projects" className="relative bg-opacity-60 mt-20">
            {/* Überschrift */}
            <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>

            {/* Karussell */}
            <div
                ref={carouselRef}
                className="flex overflow-x-scroll gap-6 scrollbar-hide mx-auto max-w-4xl"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative min-w-[280px] max-w-[280px] h-[300px] flex-shrink-0 bg-white shadow-lg rounded-lg group overflow-hidden cursor-pointer"
                        onClick={() => openModal(project)} // Öffnet das Modal mit den Projektdaten
                    >
                        {/* Status-Badge oben rechts */}
                        <div
                            className={`absolute top-3 right-3 px-3 py-1 opacity-80 rounded-full shadow-md flex items-center space-x-2 ${
                                statusInfo[project.status]?.bgColor || "bg-gray-200"
                            }`}
                        >
                                    <span
                                        className={`text-sm font-medium ${
                                            statusInfo[project.status]?.textColor || "text-gray-900"
                                        }`}
                                    >
                                        {statusInfo[project.status]?.text}
                                    </span>
                        </div>

                        {/* Projektbild */}
                        <div
                            className="w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${project.image})`,
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-60 rounded-lg group-hover:bg-opacity-70 transition-all duration-300 px-4">
                                {/* Titel */}
                                <h3 className="text-white text-lg font-bold transition-transform duration-300 transform group-hover:scale-110 text-center">
                                    {project.title}
                                </h3>
                                {/* Datum unter dem Titel */}
                                <p className="text-white text-sm font-bold text-center">
                                    {project.date}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen} // Modal-Zustand
                onClose={closeModal} // Schließen-Funktion
                project={selectedProject} // Projektdaten
            />
        </section>
    );
}
