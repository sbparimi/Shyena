# Shyena Repository Engineering Instructions

## Product architecture
- Shyena is an AI agent assurance platform.
- Public product names are Nexus, Vera, and Chakra.
- CIS, ECAAP, and Ziran are underlying technologies/capabilities and must not be presented as separate public products unless the task explicitly requires technical disclosure.
- Nexus provides system/agent intelligence and discovery.
- Vera provides AI agent testing and evaluation.
- Chakra provides AI agent security assurance and uses Ziran for adversarial security testing.

## Engineering standards
- Inspect the existing implementation before changing it.
- Preserve existing functionality unless the requested change explicitly replaces it.
- Prefer small, focused changes over broad rewrites.
- Reuse existing components, utilities, styling conventions, and dependencies.
- Do not add dependencies when the existing stack can solve the problem.
- TypeScript must remain type-safe; avoid `any` unless unavoidable and justified.
- Do not commit secrets, tokens, credentials, customer data, or private URLs.

## UI/UX
- Shyena uses a modern, corporate enterprise SaaS visual language.
- Preserve the established Shyena visual identity unless the task explicitly requests a redesign.
- Prioritize hierarchy, readability, spacing, responsive behavior, keyboard navigation, and accessible contrast.
- Forms must validate input at the point of entry and provide clear error/constraint messaging.
- Interactive calculators must update predictably as the user types and must normalize invalid input safely.

## Accessibility
- Use semantic HTML and accessible labels.
- Interactive controls must be keyboard accessible.
- Do not rely on color alone to communicate state.
- Preserve visible focus states.
- Check common WCAG 2.2 AA issues for changed UI.

## SEO and public content
- Public pages should have accurate title, description, canonical URL, and appropriate structured data where useful.
- Use natural search terminology; never keyword-stuff.
- Do not make unsupported competitive, performance, security, compliance, or pricing claims.
- Product claims must match actual implemented capabilities.

## Commercial/pricing rules
- Shyena's public pricing model is usage-based.
- CIS-generated test journeys, Vera executed AI-agent conversations, and Chakra/Ziran security interactions are distinct measurable usage units when the product implements those meters.
- Do not invent pricing, quotas, overage rates, or included services.
- Do not promise unlimited execution, unlimited security testing, unlimited engineering, unlimited integrations, or bundled bespoke development unless explicitly approved in the task.
- Onboarding and professional services must be described accurately and separately from recurring SaaS usage where applicable.

## Testing before PR
For a code change, run the repository's applicable checks before opening or updating a PR:
1. lint
2. TypeScript/type checking
3. build
4. unit/component tests
5. relevant Playwright/end-to-end tests
6. security/dependency checks when available

Review the complete diff for regressions, dead links, broken routes, accessibility issues, security risks, and accidental product-claim changes before declaring the work complete.

## PR discipline
- PR descriptions must explain what changed, why, and how it was validated.
- Keep commits focused and descriptive.
- Never bypass failing checks merely to obtain a merge.
- If a requirement is ambiguous or cannot be validated, state the limitation rather than inventing behavior.
