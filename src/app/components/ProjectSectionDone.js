"use client";
import { useState } from "react";
import Modal from "./Modal"; // Modal als separate Komponente
import projects from "./projectsData"; // Projektdaten

export default function ProjectSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);


    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Farben für Status-Badge
    const statusInfo = {
        "In Arbeit": { bgColor: "bg-blue-900", textColor: "text-white", text: "In Arbeit" },
        "Abgeschlossen": { bgColor: "bg-green-900", textColor: "text-white", text: "Abgeschlossen" },
        "Geplant": { bgColor: "bg-gray-500", textColor: "text-white", text: "Geplant" },
    };

    return (
        <section id="projects" className="relative min-h-screen px-8 sm:px-40 pt-10 pb-10">
            {/* Grid-Layout für die Projekte */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 h-[250px]"
                        style={{ backgroundImage: `url(${project.image})` }}
                        onClick={() => openModal(project)}
                    >
                        {/* Overlay für besseren Kontrast */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* Status oben links */}
                        <div className={`absolute top-4 left-4 px-4 py-2 rounded-md text-sm ${statusInfo[project.status]?.bgColor || "bg-gray-200"} ${statusInfo[project.status]?.textColor || "text-black"}`}>
                            {statusInfo[project.status]?.text}
                        </div>

                        {/* Jahr oben rechts */}
                        <div className="absolute top-4 right-4 text-white font-bold text-sm">
                            /{project.date}
                        </div>

                        {/* Projektname unten */}
                        <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                            <div>{project.title}</div>
                            <div className="text-sm">{project.company}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal-Komponente bleibt als separate Datei */}
            <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
        </section>
    );
}
