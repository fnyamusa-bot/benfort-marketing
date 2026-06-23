export async function GET() {
  const pages = ['/'];
  const site = 'https://www.benfort.net';
  const now = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${site}${p}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
