import fs from 'node:fs';
import { load } from 'cheerio';

const SOURCE = 'https://euengineers.eu/resources';
const HOST = 'euengineers.eu';

const absolute = (value, base = SOURCE) => {
  try { return new URL(value, base).href; } catch { return value; }
};

const slugify = (value) => value.toLowerCase().trim()
  .replace(/&amp;/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 90);

async function get(url) {
  const response = await fetch(url, { headers: { 'user-agent': 'Shyena-Content-Migration/1.0' } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return await response.text();
}

const indexHtml = await get(SOURCE);
const $index = load(indexHtml);
const links = new Set();
$index('a[href]').each((_, el) => {
  const href = absolute($index(el).attr('href'));
  try {
    const u = new URL(href);
    if (u.hostname === HOST && u.pathname.startsWith('/resources/') && u.pathname !== '/resources/' && u.pathname.length > '/resources/'.length) {
      links.add(`${u.origin}${u.pathname}`);
    }
  } catch {}
});

if (!links.size) throw new Error('No article links found on https://euengineers.eu/resources');

const articles = [];
for (const url of [...links]) {
  const html = await get(url);
  const $ = load(html);
  const title = $('meta[property="og:title"]').attr('content')?.trim() || $('h1').first().text().trim();
  const description = $('meta[name="description"]').attr('content')?.trim() || '';
  const published = $('time').first().attr('datetime') || $('time').first().text().trim() || '';
  const root = $('article').first().length ? $('article').first() : $('main').first();
  if (!root.length || !title) continue;

  root.find('script,style,noscript,nav,header,footer,form,button,[aria-hidden="true"]').remove();
  root.find('img').each((_, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src');
    if (src) $(el).attr('src', absolute(src, url));
    $(el).removeAttr('srcset').removeAttr('loading');
  });
  root.find('a[href]').each((_, el) => $(el).attr('href', absolute($(el).attr('href'), url)));

  // Remove common hiring/lead-capture blocks so the migrated resource reads as an engineering article.
  root.find('*').each((_, el) => {
    const text = $(el).text().trim().toLowerCase();
    if (text.length < 20) return;
    if (text.includes('hire this expert') || text.includes('contact engineer') || text.includes('request tester profiles')) {
      $(el).remove();
    }
  });

  const cleanHtml = root.html()?.trim();
  if (!cleanHtml) continue;
  articles.push({
    slug: slugify(title),
    title,
    description,
    published,
    sourceUrl: url,
    html: cleanHtml,
  });
}

articles.sort((a, b) => a.title.localeCompare(b.title));
const output = `// Generated from ${SOURCE}. Do not edit manually.\nexport const EUENGINEERS_RESOURCES = ${JSON.stringify(articles, null, 2)} as const;\n`;
fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/euengineers-resources.ts', output);
console.log(`Imported ${articles.length} EU Engineers resources.`);
for (const article of articles) console.log(`- ${article.title} -> /docs/resource/${article.slug}`);
