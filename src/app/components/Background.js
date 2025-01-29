"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine); // Engine initialisieren
    }, []);

    const particlesOptions = {
        background: {
            color: { value: "#ffffff" }, // Weißer Hintergrund (sollte sichtbar sein)
        },
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: { value: "#cccccc" },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.6,
            },
            size: {
                value: 3,
                random: true,
            },
            lineLinked: {
                enable: true,
                distance: 150,
                color: "#cccccc",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            className="absolute inset-0 z-0"
        />
    );
}
