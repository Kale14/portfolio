export const dynamic = "force-dynamic";

export async function GET() {
    const baseUrl = "https://deine-domain.com"; // Ersetze mit deiner echten Domain

    // Nur die Hauptseite aufnehmen
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}

