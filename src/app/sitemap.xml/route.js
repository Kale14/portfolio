export const dynamic = "force-dynamic";

export async function GET() {
    const baseUrl = "https://khalilhasan-portfolio.com";

    const pages = [
        "",
        "projects",
        "experience",
        "skills"
    ];

    // Generiere das XML für die Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
        .map((page) => {
            return `
                    <url>
                        <loc>${baseUrl}/${page}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.8</priority>
                    </url>
                `;
        })
        .join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}
