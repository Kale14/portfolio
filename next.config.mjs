/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        unoptimized: true, // Deaktiviert die Optimierung für statische Bilder
    },
};

export default nextConfig;
