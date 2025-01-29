"use client";
import Parser from 'html-react-parser';
export default function Modal({ isOpen, onClose, project }) {
    if (!isOpen || !project) return null; // Wenn Modal geschlossen ist, rendere nichts

    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={(e) => {
                if (e.target.id === "modal-overlay") onClose();
            }}
            style={{
                overflowY: "auto", // Aktiviert vertikales Scrollen
            }}
        >
            <div
                className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl p-6 mt-56 mb-10 relative"
                onClick={(e) => e.stopPropagation()} // Verhindert Schließen durch Klick im Modal

            >
                {/* Schließen-Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                {/* Titel des Projekts */}
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>

                {/* Kurze Beschreibung */}
                <p className="text-gray-700 font-semibold mb-6">{project.description}</p>

                {/* Abschnitt: Beschreibung */}
                <div className="mb-6">
                    <hr className="border-gray-300 mb-4" /> {/* Horizontale Linie */}
                    <p className="text-gray-700 whitespace-pre-wrap">{Parser(project.details)}</p>
                </div>

                {/* Bild */}
                <div className="mt-6 flex justify-center">
                    <img
                        src={project.imagep}
                        alt={project.title}
                        className="max-w-full max-h-96 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
