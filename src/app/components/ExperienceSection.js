"use client";
import experiences from "./experiencesData"; // Daten für die Erfahrungen

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative min-h-screen px-8 sm:px-40 mt-28 pt-16">
            {/* Überschrift */}
            <h2 className="text-white text-4xl font-bold mb-8">Meine Erfahrungen</h2>

            {/* Grid-Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="relative border border-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        {/* Datum */}
                        <p className="text-green-400 font-semibold text-sm mb-2">{experience.date}</p>

                        {/* Titel */}
                        <h3 className="text-white text-xl font-bold">{experience.title}</h3>

                        {/* Beschreibung */}
                        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{experience.description}</p>

                        {/* Skill-Badges */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {experience.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="bg-green-900 text-white px-3 py-1 rounded-md text-sm transition-all duration-300 hover:bg-green-500 hover:text-black"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
