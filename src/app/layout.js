import "./globals.css";
import Background from "./components/Background";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="relative">
        <Background /> {/* Hintergrund bleibt fix */}
        {children} {/* Sektionen */}
        </body>
        </html>
    );
}
