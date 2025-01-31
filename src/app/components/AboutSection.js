"use client";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about-section" className="relative min-h-screen flex items-center justify-between bg-cover bg-center px-16 sm:px-40"
                 style={{ backgroundImage: "linear-gradient(to bottom, rgba(10, 25, 47, 0.8) 30%, rgba(10, 25, 47, 0.7) 70%, rgba(10, 25, 47, 1) 85%), url('/back.png')" }}>
            <div className="max-w-8xl w-full grid grid-cols-1 sm:grid-cols-2 gap-20 items-center">
                {/* Linke Seite: Überschrift + Text */}
                <div className="text-white text-left max-w-2xl sm:max-w-3xl lg:max-w-4xl order-1 sm:order-1">
                    <h1 className="text-7xl sm:text-8xl font-bold leading-tight">
                        Hallo, ich bin <span className="text-green-400">Khalil</span>
                    </h1>
                    <p className="text-3xl mt-8 leading-relaxed">
                        Mit Leidenschaft für KI und Prozessautomatisierung entwickle ich kreative, datenbasierte Lösungen mit echtem Mehrwert. Dabei fasziniert mich nicht nur das Ergebnis, sondern auch die Mechanismen dahinter – ich tauche tief ein, um innovative Anwendungen zu gestalten
                    </p>
                    <button
                        className="mt-12 bg-green-500 hover:bg-green-600 text-white font-semibold py-5 px-12 rounded shadow-lg text-2xl"
                        onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
                        Projekte ansehen
                    </button>
                </div>

                {/* Rechte Seite: Bild mit Skills */}
                <div className="relative flex justify-start order-2 sm:order-2 w-full sm:px-0 ml-4 sm:ml-36">
                    <div className="relative w-80 h-96 sm:w-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
                        <Image src="/image.jpg" alt="Khalil" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    {/* Floating Skill-Tags passend zum Design */}
                    <div className="hidden sm:block absolute top-[-100px] left-[140px] border-2 border-green-900 text-white px-5 py-3 rounded-md text-lg bg-transparent">JavaScript</div>
                    <div className="hidden sm:block absolute top-[80px] left-[-140px] border-2 border-green-900 text-white px-5 py-3 rounded-md text-lg bg-transparent">Python</div>
                    <div className="hidden sm:block absolute bottom-[-90px] left-[50px] border-2 border-green-900 text-white px-5 py-3 rounded-md text-lg bg-transparent">Java</div>
                    <div className="hidden sm:block absolute top-[300px] left-[440px] border-2 border-green-900 text-white px-5 py-3 rounded-md text-lg bg-transparent">Swift</div>
                </div>
            </div>
        </section>
    );
}
