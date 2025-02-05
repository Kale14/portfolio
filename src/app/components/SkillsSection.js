"use client";
import { FaPython, FaJava, FaReact, FaDocker, FaAws, FaGit, FaCuttlefish } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { SiMysql, SiHuggingface, SiPostgresql, SiMongodb, SiDjango, SiFlask, SiTensorflow, SiPytorch, SiBootstrap, SiTailwindcss, SiSap, SiKotlin, SiDart, SiR, SiHtml5, SiSqlite, SiFirebase, SiPostman, SiScikitlearn } from "react-icons/si";
import { useState } from "react";


const skillsData = {
    "Languages": [
        { icon: FaPython, name: "Python" },
        { icon: FaJava, name: "Java" },
        { icon: TbBrandTypescript, name: "TypeScript" },
        { icon: SiHtml5, name: "HTML/CSS" },
        { icon: SiR, name: "R" },
        { icon: FaGolang, name: "Go" },
        { icon: SiKotlin, name: "Kotlin" },
        { icon: SiDart, name: "Dart" },
        { icon: FaCuttlefish, name: "C#" }
    ],
    "Frameworks": [
        { icon: SiPytorch, name: "PyTorch" },
        { icon: SiTensorflow, name: "TensorFlow" },
        { icon: SiFlask, name: "Flask" },
        { icon: SiDjango, name: "Django" },
        { icon: SiScikitlearn, name: "Scikit-learn" },
        { icon: FaReact, name: "ReactJS" },
        { icon: SiBootstrap, name: "Bootstrap" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiSap, name: "SAPUI5" },
        { icon: SiHuggingface, name: "Huggingface" }
    ],
    "Databases": [
        { icon: SiMysql, name: "MySQL" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiSqlite, name: "SQLite" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiFirebase, name: "Firestore" }
    ],
    "Other Tools": [
        { icon: FaGit, name: "Git" },
        { icon: FaDocker, name: "Docker" },
        { icon: FaAws, name: "AWS" },
        { icon: SiPostman, name: "Postman" }
    ]
};

export default function SkillsSection() {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section id="skills" className="relative px-8 sm:px-40 pt-10">
            <h2 className="text-start text-white text-4xl font-bold mb-8">Skills</h2>

            <div className="flex flex-wrap justify-center gap-6 p-8 border border-gray-700 rounded-xl shadow-lg relative z-10">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="flex flex-wrap justify-center gap-4 relative">
                        <h3 className="text-xl text-white font-bold w-full text-center">{category}</h3>
                        {skills.map(({ icon: Icon, name }, index) => (
                            <div
                                key={index}
                                className={`w-20 h-20 flex items-center justify-center text-white text-lg rounded-full shadow-md transition-all duration-300 transform hover:scale-110 ${hoveredSkill === name ? 'bg-blue-900' : 'bg-blue-950'}`}
                                onMouseEnter={() => setHoveredSkill(name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                {hoveredSkill === name ? (
                                    <span className="text-sm font-semibold">{name}</span>
                                ) : (
                                    <Icon className="text-3xl" />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
