import fs from 'node:fs';
import { load } from 'cheerio';

const SOURCE = 'https://euengineers.eu/resources';
const HOST = 'euengineers.eu';
const SEED_ARTICLES = [
  'https://euengineers.eu/blog/ai/architecting-real-time-fraud-detection-agent-reliability-too-day-3',
];

const absolute = (value, base = SOURCE) => {
  try { return new URL(value, base).href; } catch { return value; }
};

const slugify = (value) => value.toLowerCase().trim()
  .replace(/&amp;/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 90);

async function get(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; Shyena-Content-Migration/3.0)',
      accept: 'text/html,application/xhtml+xml,text/plain',
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return await response.text();
}

async function getWithFallback(url) {
  try {
    return await get(url);
  } catch (directError) {
    const proxy = `https://r.jina.ai/http://${url.replace(/^https?:\/\//, '')}`;
    try {
      console.warn(`Direct fetch failed for ${url}; retrying through reader proxy.`);
      return await get(proxy);
    } catch (proxyError) {
      throw new Error(`Direct: ${directError.message}; Proxy: ${proxyError.message}`);
    }
  }
}

const indexHtml = await getWithFallback(SOURCE);
const $index = load(indexHtml);
const links = new Set(SEED_ARTICLES);
$index('a[href]').each((_, el) => {
  const href = absolute($index(el).attr('href'));
  try {
    const u = new URL(href);
    if (u.hostname === HOST && u.pathname.startsWith('/blog/') && u.pathname.length > '/blog/'.length) {
      links.add(`${u.origin}${u.pathname}`);
    }
  } catch {}
});

if (!links.size) throw new Error('No EU Engineers blog articles found.');

const articles = [];
for (const url of [...links]) {
  try {
    const html = await getWithFallback(url);
    const $ = load(html);
    const title = $('meta[property="og:title"]').attr('content')?.trim() || $('h1').first().text().trim();
    const description = $('meta[name="description"]').attr('content')?.trim() || '';
    const published = $('time').first().attr('datetime') || $('time').first().text().trim() || '';
    const root = $('article').first().length ? $('article').first() : $('main').first();
    if (!root.length || !title) {
      console.warn(`No article root/title found for ${url}`);
      continue;
    }

    root.find('script,style,noscript,nav,header,footer,form,button,[aria-hidden="true"]').remove();
    root.find('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || $(el).attr('data-lazy-src');
      if (src) $(el).attr('src', absolute(src, url));
      $(el).removeAttr('srcset').removeAttr('loading');
    });
    root.find('a[href]').each((_, el) => $(el).attr('href', absolute($(el).attr('href'), url)));

    root.find('*').each((_, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text.length < 20) return;
      if (text.includes('hire this expert') || text.includes('contact engineer') || text.includes('request tester profiles') || text.includes('get similar results')) {
        $(el).remove();
      }
    });

    const cleanHtml = root.html()?.trim();
    if (!cleanHtml) continue;
    articles.push({ slug: slugify(title), title, description, published, sourceUrl: url, html: cleanHtml });
  } catch (error) {
    console.warn(`Skipping ${url}: ${error.message}`);
  }
}

const unique = [...new Map(articles.map((article) => [article.sourceUrl, article])).values()];
unique.sort((a, b) => a.title.localeCompare(b.title));
if (!unique.length) throw new Error('Article discovery succeeded, but no article content could be extracted.');

const output = `// Generated from ${SOURCE}. Do not edit manually.\nexport const EUENGINEERS_RESOURCES = ${JSON.stringify(unique, null, 2)} as const;\n`;
fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/euengineers-resources.ts', output);

console.log(`Imported ${unique.length} EU Engineers blog articles.`);
for (const article of unique) console.log(`- ${article.title} -> /docs/resource/${article.slug}`);
