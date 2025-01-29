"use client";
import { useState } from "react";
import Modal from "./Modal"; // Modal-Komponente importieren
import projects from "./projectsData"; // Pfad anpassen, falls notwendig

export default function ProjectSectionDone() {
    const [isModalOpen, setIsModalOpen] = useState(false); // Zustand für Modal
    const [selectedProject, setSelectedProject] = useState(null); // Aktuell ausgewähltes Projekt
    const [currentPage, setCurrentPage] = useState(0); // Aktuelle Seite für Pagination

    const itemsPerPage = 6; // 3x2-Matrix
    const totalPages = Math.ceil(projects.length / itemsPerPage); // Berechnet Gesamtseiten

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

    // Projekte für die aktuelle Seite berechnen
    const currentProjects = projects.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    // Füllt leere Slots im Grid mit Platzhaltern auf
    const filledProjects = [
        ...currentProjects,
        ...Array(itemsPerPage - currentProjects.length).fill(null),
    ];

    // Farben für Status-Badge
    const statusInfo = {
        "In Arbeit": { bgColor: "bg-yellow-100", textColor: "text-yellow-900", text: "In Arbeit" },
        "Abgeschlossen": { bgColor: "bg-green-100", textColor: "text-green-900", text: "Abgeschlossen" },
        "Geplant": { bgColor: "bg-gray-100", textColor: "text-gray-900", text: "Geplant" },
    };

    return (
        <section id="projects" className="relative bg-white bg-opacity-60 mt-20">

            {/* Grid-Layout */}
            <div className="grid grid-cols-3 gap-6 max-w-[896px] mx-auto">
                {filledProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`h-[300px] bg-white shadow-lg rounded-lg group overflow-hidden relative ${
                            project ? "cursor-pointer" : "opacity-0 pointer-events-none"
                        }`}
                        onClick={() => project && openModal(project)}
                    >
                        {project && (
                            <>
                                {/* Status-Badge oben rechts mit Symbol + Text */}
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

                                {/* Projektkarte */}
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
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                    className={`w-10 h-10 bg-gray-300 text-white rounded-full hover:bg-gray-400 flex items-center justify-center transition-all ${
                        currentPage === 0 && "opacity-50"
                    }`}
                >
                    &lt;
                </button>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage === totalPages - 1}
                    className={`w-10 h-10 bg-gray-300 text-white rounded-full hover:bg-gray-400 flex items-center justify-center transition-all ${
                        currentPage === totalPages - 1 && "opacity-50"
                    }`}
                >
                    &gt;
                </button>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
        </section>
    );
}
