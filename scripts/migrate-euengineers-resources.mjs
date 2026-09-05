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
      'user-agent': 'Mozilla/5.0 (compatible; Shyena-Content-Migration/4.0)',
      accept: 'text/html,application/xhtml+xml,text/plain',
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return await response.text();
}

async function getArticle(url) {
  // EU Engineers may return a shell/challenge to non-browser clients. The reader
  // endpoint returns the rendered article as Markdown and is therefore used as the
  // authoritative extraction fallback.
  const proxy = `https://r.jina.ai/http://${url.replace(/^https?:\/\//, '')}`;
  return await get(proxy);
}

const indexHtml = await get(SOURCE);
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
    const markdown = await getArticle(url);
    if (!markdown || markdown.length < 300) throw new Error('Article content is empty or too short.');

    const titleMatch = markdown.match(/^#\s+(.+)$/m) || markdown.match(/^Title:\s*(.+)$/mi);
    const title = titleMatch?.[1]?.trim() || url.split('/').filter(Boolean).pop().replace(/-/g, ' ');
    const description = markdown
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith('#') && line.length > 80)?.slice(0, 240) || '';
    const published = (markdown.match(/(?:Published|Date):\s*(.+)$/im)?.[1] || '').trim();

    // Remove reader metadata and site chrome while preserving the article body.
    const cleanMarkdown = markdown
      .replace(/^Title:\s*.+\n?/im, '')
      .replace(/^URL Source:\s*.+\n?/im, '')
      .replace(/^Published Time:\s*.+\n?/im, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    articles.push({
      slug: slugify(title),
      title,
      description,
      published,
      sourceUrl: url,
      markdown: cleanMarkdown,
    });
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
