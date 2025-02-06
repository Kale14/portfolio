export async function GET() {
    const robots = `User-agent: *
Disallow: 
Sitemap: https://khalilhasan-portfolio.com/sitemap.xml`;

    return new Response(robots, {
        headers: {
            "Content-Type": "text/plain"
        }
    });
}
