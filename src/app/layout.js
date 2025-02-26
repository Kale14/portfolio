import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <head>
            <meta name="description" content="Portfolio von Khalil Hasan mit KI-Projekten und Web-Entwicklung." />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Khalil Hasan" />
            <meta name="keywords" content="Khalil Hasan, Portfolio, Webentwicklung, KI-Projekte, React, Machine Learning" />
            <link rel="canonical" href="https://khalilhasan-portfolio.com/" />
            <title>Khalil Hasan | Portfolio für KI & Web-Entwicklung</title>
        </head>
        <body className="relative bg-[#0a192f] text-white">
            {children} {/* Inhalte der Seite */}
            <Analytics />
        </body>
        </html>
    );
}
