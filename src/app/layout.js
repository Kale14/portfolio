import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="relative bg-[#0a192f] text-white">
        {children} {/* Inhalte der Seite */}
        </body>
        </html>
    );
}
