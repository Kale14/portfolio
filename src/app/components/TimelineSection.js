"use client";
import { useState } from "react";

export default function TimelineSection() {
    const [filter, setFilter] = useState("school"); // Standardmäßig "Schule"

    const schoolExperiences = [
        {
            title: "Hochschule für Technik und Wirtschaft",
            period: "Apr 2020 – Okt 2024",
            description: "Entwicklung eines Chatbots zur Optimierung des Wissensmanagements in Unternehmen",
        },
        {
            title: "Karl-Arnold-Schule Biberach",
            period: "Juni 2015 – Aug 2018",
            description: "Gestaltungs- und Medientechnik",
        },
    ];

    const workExperiences = [
        {
            title: "Fraunhofer IZM",
            period: "Feb 2024 – Jul 2024",
            description: "Automatisierung manueller Prozesse mit R-Shiny",
        },
        {
            title: "PwC - Advisory",
            period: "Jun 2022 – Feb 2023",
            description: "IoT, Cloud, Smart City Projekte",
        },
        {
            title: "HTW Berlin",
            period: "Feb 2021 – Feb 2023",
            description: "Entwicklung von interaktiven R-Shiny-Anwendungen",
        },
    ];

    const experiences = filter === "school" ? schoolExperiences : workExperiences;

    return (
        <section id="timeline" className="relative bg-white bg-opacity-60 h-[490px] pt-10 rounded-xl">
            {/* Überschrift */}
            <h2 className="text-3xl font-bold text-center mb-8">Erfahrungen</h2>

            {/* Buttons */}
            <div className="flex justify-center mb-12">
                <button
                    className={`px-6 py-2 mx-2 w-32 h-10 font-semibold rounded ${
                        filter === "school" ? "bg-gray-300 text-black" : "text-black"
                    }`}
                    onClick={() => setFilter("school")}
                >
                    Schule
                </button>
                <button
                    className={`px-6 py-2 mx-2 w-32 h-10 font-semibold rounded ${
                        filter === "work" ? "bg-gray-300 text-black" : "text-black"
                    }`}
                    onClick={() => setFilter("work")}
                >
                    Beruf
                </button>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

                {/* Stationen */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div className="flex justify-between items-center w-full" key={index}>
                            {/* Linke Station */}
                            {index % 2 === 0 ? (
                                <>
                                    <div className="w-5/12 text-right">
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <p className="text-gray-600">{exp.period}</p>
                                        <p className="text-sm text-gray-500">{exp.description}</p>
                                    </div>
                                    <div className="w-1/12 flex justify-center relative overflow-hidden">
                                        <div className="h-7 w-7 bg-blue-500 rounded-full"
                                             style={{
                                                 clipPath: "inset(0 56% 0 0)",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="w-5/12"></div>
                                </>
                            ) : (
                                /* Rechte Station */
                                <>
                                    <div className="w-5/12"></div>
                                    <div className="w-1/12 flex justify-center relative overflow-hidden">
                                        <div className="h-7 w-7 bg-blue-500 rounded-full"
                                             style={{
                                                 clipPath: "inset(0 0 0 56%)",
                                             }}
                                        ></div>
                                    </div>
                                    <div className="w-5/12 text-left">
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <p className="text-gray-600">{exp.period}</p>
                                        <p className="text-sm text-gray-500">{exp.description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
