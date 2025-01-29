/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true, // Deaktiviert die Optimierung für statische Bilder
    },
};

export default nextConfig;
