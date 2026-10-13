/** Drop the leading "# Title" (after any frontmatter): the page template renders the one <h1>. */
export function stripLeadingTitle(source: string): string {
  return source.replace(/^(---\n[\s\S]*?\n---\n)?\s*# [^\n]*\n+/, "$1");
}
