"use client";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTools, FaLightbulb, FaCode } from "react-icons/fa";

export default function Modal({ isOpen, onClose, project }) {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
            <div className="bg-gray-900 text-white p-6 rounded-xl max-w-lg w-full relative shadow-2xl transform transition-all duration-300 scale-95 animate-fadeIn">

                {/* Schließen-Button */}
                <button
                    className="absolute top-2 right-2 text-white text-xl hover:text-gray-400 transition"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* Titel */}
                <h2 className="text-3xl font-bold text-green-400 mb-4">{project.title}</h2>

                {/* Beschreibung */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Technologien */}
                <div className="border-t border-gray-700 mt-4 pt-4">
                    <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                        <FaCode /> Verwendete Technologien
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{project.technologies}</p>
                </div>

                {/* Funktionen */}
                <div className="border-t border-gray-700 mt-4 pt-4">
                    <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                        <FaTools /> Projektfunktionen
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{project.features}</p>
                </div>

                {/* Herausforderungen & Learnings */}
                <div className="border-t border-gray-700 mt-4 pt-4">
                    <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                        <FaLightbulb /> Herausforderungen & Learnings
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{project.challenges}</p>
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-500 transition"
                        >
                            <FaGithub /> GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-500 transition"
                        >
                            <FaExternalLinkAlt /> Live-Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
