"use client";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTools, FaLightbulb, FaCode, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function Modal({ isOpen, onClose, project }) {
    const [openChallenges, setOpenChallenges] = useState([]);

    const toggleChallenge = (index) => {
        setOpenChallenges(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const handleClose = () => {
        setOpenChallenges([]);
        onClose(); //
    };

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex justify-center items-start overflow-y-auto p-4 scrollbar-hide" onClick={handleClose}>
            <div className="bg-gray-900 text-white max-w-2xl w-full relative shadow-2xl transform transition-all duration-300 mb-32 top-20 animate-fadeIn rounded-xl overflow-hidden"
                 onClick={(e) => e.stopPropagation()}>

                {/* Schließen-Button */}
                <button className="absolute top-2 right-2 text-white text-xl hover:text-gray-400 transition" onClick={handleClose}>
                    ✕
                </button>

                {/* Modal Inhalt */}
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-green-400">{project.title}</h2>
                    {project.subtitle && <p className="text-gray-300 text-xl italic mb-4">{project.subtitle}</p>}

                    <p className="text-gray-300 text-l leading-relaxed mt-5 mb-4">{project.description}</p>

                    {/* Herausforderungen & Lösungen */}
                    <div className="border-t border-gray-700 mt-4 pt-4">
                        <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
                            <FaLightbulb /> Herausforderungen & Lösungen
                        </h3>
                        <div className="mt-2">
                            {project.challenges.map((challenge, index) => (
                                <div key={index} className="relative bg-gray-800 mb-4 mt-4 p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:bg-gray-700"
                                     onClick={() => toggleChallenge(index)}>
                                    <div className="flex items-center gap-3">
                                        <p className="text-white text-l font-semibold">{challenge.text}</p>
                                    </div>

                                    {/* Lösung */}
                                    {openChallenges.includes(index) && (
                                        <div className="mt-3 text-l p-4 bg-green-700 rounded-md text-green-300 flex items-start gap-3 transition-all duration-300 animate-fadeIn">
                                            <p>{challenge.solution}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologien & Tools */}
                    <div className="border-t border-gray-700 mt-4 pt-4">
                        <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
                            <FaCode /> Technologien & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-full text-l">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bild an der Kante */}
                <div className="w-full relative mt-4">
                    <Image
                        src={project.images}
                        alt={project.title}
                        width={800}
                        height={250}
                        className="w-full h-auto object-cover rounded-b-xl"
                    />
                </div>
            </div>
        </div>
    );
}
