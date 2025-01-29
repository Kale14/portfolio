"use client";
import { useState, useEffect } from "react";

export default function AboutSection() {
    console.log("AboutSection rendered");
    const [boxWidth, setBoxWidth] = useState(62); // Initiale Breite in Prozent

    useEffect(() => {
        let currentWidth = 62; // Initiale Breite
        let animationFrame;

        const handleScroll = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const maxScroll = window.innerHeight * 2;
            const minWidth = 49;

            const targetWidth = Math.max(
                minWidth,
                62 - (scrollTop / maxScroll) * 60
            );

            const animate = () => {
                currentWidth += (targetWidth - currentWidth) * 0.1; // Interpoliere langsam zur Zielbreite
                setBoxWidth(currentWidth);

                if (Math.abs(targetWidth - currentWidth) > 0.5) {
                    animationFrame = requestAnimationFrame(animate); // Wiederhole Animation
                }
            };

            cancelAnimationFrame(animationFrame); // Bestehende Animation abbrechen
            animationFrame = requestAnimationFrame(animate); // Neue Animation starten
        };

        document.body.addEventListener("scroll", handleScroll);

        return () => {
            document.body.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrame); // Cleanup
        };
    }, []);




    return (
        <section
            id="about-section"
            className="relative mb-20"
        >
            <div
                className="bg-gray-300  h-[390px] p-6 rounded-lg ease-in-out mx-auto mt-20 flex overflow-hidden"
                style={{
                    width: `${boxWidth}%`, // Dynamische Breite
                    boxShadow: "0 0 100px 20px rgba(255, 255, 255, 1)",
                }}
            >
                {/* Linke Seite: Bild */}
                <div className="flex-shrink-0 h-full">
                    <img
                        src="/image.jpg" // Ersetze mit deinem Bildpfad
                        alt="Über mich"
                        className="h-full w-auto object-cover rounded-l-lg shadow-right shadow-left shadow-top shadow-bottom"
                    />
                </div>
                {/* Rechte Seite: Text */}
                <div className="flex flex-col justify-center items-start pl-14 pr-6 mb-4 mt-4 w-full">
                    <h2 className="text-3xl font-bold text-center mb-8">Hey, ich bin Khalil!</h2>
                    <p className="text-gray-700 break-words">
                         mit einer Leidenschaft für Künstliche Intelligenz und Prozessautomatisierung habe ich das Ziel, durch kreative Ansätze datenbasierte Lösungen zu entwickeln, die echten Mehrwerten schaffen.
                        Dabei fasziniert mich nicht nur das Ergebnis, sondern auch, wie und warum Dinge funktionieren – ich will hinter die Kulissen blicken und tief in die Materie eintauchen, um innovative Anwendungen zu gestalten.
                    </p>
                </div>
            </div>
        </section>
    );
}
