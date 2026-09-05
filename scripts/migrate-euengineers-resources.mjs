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

const docsPath = 'src/routes/docs.index.tsx';
let docs = fs.readFileSync(docsPath, 'utf8');
if (!docs.includes('EUENGINEERS_RESOURCES')) {
  docs = docs.replace(
    'import { DocConceptVisual } from "@/components/docs/doc-concept-visual";\n',
    'import { DocConceptVisual } from "@/components/docs/doc-concept-visual";\nimport { EUENGINEERS_RESOURCES } from "@/data/euengineers-resources";\n'
  );
  docs = docs.replace(
    'const normalizedQuery = query.trim().toLowerCase();\n  const filtered = useMemo(() => {',
    'const normalizedQuery = query.trim().toLowerCase();\n  const filteredResources = useMemo(() => {\n    if (!normalizedQuery) return EUENGINEERS_RESOURCES;\n    return EUENGINEERS_RESOURCES.filter((article) => `${article.title} ${article.description}`.toLowerCase().includes(normalizedQuery));\n  }, [normalizedQuery]);\n  const filtered = useMemo(() => {'
  );
  const marker = '          <div className="mt-12 border-y-2 border-slate-950 bg-[#f5f8fc]';
  const section = `          <section className="mt-16 border-t-2 border-slate-950 pt-10">\n            <div className="flex flex-col gap-3 border-b border-slate-300 pb-6 sm:flex-row sm:items-end sm:justify-between">\n              <div>\n                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Engineering library</p>\n                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0e172b] sm:text-4xl">Insights & resources</h2>\n                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">Practical engineering articles migrated from the European Engineers resource library and presented as part of the Shyena documentation system.</p>\n              </div>\n              <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">{filteredResources.length} articles</span>\n            </div>\n            {filteredResources.length > 0 && (\n              <div className="mt-0 grid sm:grid-cols-2">\n                {filteredResources.map((article, index) => (\n                  <Link key={article.slug} to="/docs/resource/$slug" params={{ slug: article.slug }} className="group block border-b border-slate-300 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7">\n                    <article className="flex min-h-64 flex-col py-8 sm:px-2">\n                      <div className="flex items-start justify-between gap-6">\n                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#a87900]">Resource</span>\n                        <span className="font-mono text-[10px] tracking-[0.12em] text-slate-400">{String(index + 1).padStart(2, '0')}</span>\n                      </div>\n                      <h3 className="mt-5 text-xl font-bold tracking-tight text-[#0e172b] group-hover:text-[#a87900]">{article.title}</h3>\n                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.description}</p>\n                      <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#0e172b]">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>\n                    </article>\n                  </Link>\n                ))}\n              </div>\n            )}\n          </section>\n\n`;
  docs = docs.replace(marker, section + marker);
  fs.writeFileSync(docsPath, docs);
}

console.log(`Imported ${articles.length} EU Engineers resources.`);
for (const article of articles) console.log(`- ${article.title} -> /docs/resource/${article.slug}`);
