import { useEffect } from "react";

const SKILL_RULES: Array<[string, string[]]> = [
  ["AI agent testing", ["ai agent", "agent testing", "agentic"]],
  ["AI evaluation", ["evaluation", "evaluat", "llm-as-judge", "semantic"]],
  ["Conversational AI", ["conversational", "cognigy", "chatbot"]],
  ["AI security testing", ["security", "ziran", "prompt injection", "red team"]],
  ["Autonomous testing", ["autonomous", "self-healing", "autonomous qa"]],
  ["Web testing", ["web testing", "browser", "playwright", "selenium"]],
  ["Mobile testing", ["mobile", "ios", "android", "appium"]],
  ["API testing", ["api testing", "rest", "graphql", "contract testing"]],
  ["Accessibility testing", ["accessibility", "wcag", "screen reader", "voiceover", "nvda"]],
  ["Oracle Fusion testing", ["oracle fusion", "oracle"]],
  ["Salesforce & Agentforce testing", ["salesforce", "agentforce"]],
  ["CIS / system understanding", ["cis", "system understanding", "nexus"]],
  ["Failure forensics", ["forensic", "failure analysis", "root cause", "splunk", "logs", "traces"]],
  ["Regression testing", ["regression", "release gate", "release assurance"]],
  ["CI/CD test automation", ["ci/cd", "github actions", "gitlab", "azure devops", "pipeline"]],
  ["RAG testing", ["rag", "retrieval augmented", "opensearch"]],
  ["LLM testing", ["llm", "bedrock", "claude", "ollama", "model"]],
  ["CRM / ERP testing", ["crm", "erp", "oracle r12"]],
  ["Performance testing", ["performance", "jmeter", "load testing"]],
  ["Test strategy & release governance", ["test strategy", "release governance", "quality engineering", "release management"]],
];

const CTA_PATTERN = /^(book(?: a)?(?: demo| walkthrough)?|request(?: a)? demo|start(?: a)? pilot|discuss|talk|contact|get started|see how(?: it works)?|scope|explore|learn|schedule|try|demo|pilot|assessment|assurance review|consult)\b/i;

function getPageSkills(): string[] {
  const text = document.querySelector("main")?.innerText?.toLowerCase() ?? "";
  return SKILL_RULES.filter(([, terms]) => terms.some((term) => text.includes(term))).map(([skill]) => skill);
}

function buildHireHref(skills: string[]) {
  const params = new URLSearchParams();
  if (skills.length) params.set("skills", skills.join(", "));
  params.set("source", window.location.pathname);
  return "/experts";
}

function isVisible(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function isKeyCta(element: HTMLElement): boolean {
  const text = (element.textContent ?? "").replace(/\s+/g, " ").trim();
  return Boolean(text) && CTA_PATTERN.test(text) && !text.toLowerCase().includes("hire expert");
}

function getCtaGroup(element: HTMLElement, main: HTMLElement, candidates: HTMLElement[]): HTMLElement {
  let current = element.parentElement;
  let best = element.parentElement ?? main;

  while (current && current !== main) {
    const display = window.getComputedStyle(current).display;
    if (display === "flex" || display === "inline-flex") {
      const siblings = candidates.filter((candidate) => candidate.parentElement === current);
      if (siblings.length > 1) return current;
      best = current;
    }
    current = current.parentElement;
  }

  return best;
}

function createHireExpertsLink(href: string, skills: string[]): HTMLAnchorElement {
  const link = document.createElement("a");
  link.href = href;
  link.dataset.hireExpertsSource = window.location.pathname;
  link.dataset.shyenaHireExpertLink = "true";
  link.className = "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#17213f] bg-white px-4 text-xs font-semibold text-[#17213f] transition hover:border-[#ff5a0a] hover:text-[#ff5a0a]";
  link.title = skills.length ? `Talk to experts for: ${skills.join(", ")}` : "Talk to Shyena experts";
  link.textContent = "Talk to Experts";
  return link;
}

function addExpertCtas() {
  // Contact and pricing already have intentional conversion actions; do not add a second CTA.
  if (window.location.pathname === "/contact" || window.location.pathname === "/pricing") return;

  const main = document.querySelector("main") as HTMLElement | null;
  if (!main) return;

  const skills = getPageSkills();
  const href = buildHireHref(skills);
  const candidates = Array.from(
    main.querySelectorAll<HTMLElement>("a:not([data-shyena-hire-expert-link='true']), button"),
  ).filter((element) => isVisible(element) && isKeyCta(element));

  const groups = new Map<HTMLElement, HTMLElement[]>();
  candidates.forEach((element) => {
    const group = getCtaGroup(element, main, candidates);
    const members = groups.get(group) ?? [];
    members.push(element);
    groups.set(group, members);
  });

  groups.forEach((members) => {
    // Never attach a contextual CTA to a group that already has one.
    // This also prevents the MutationObserver from recursively attaching
    // "Talk to Experts" to the CTA it just created.
    const group = members[0]?.parentElement;
    if (
      members.some((element) => element.dataset.shyenaHireExpertAttached === "true") ||
      group?.querySelector("[data-shyena-hire-expert-link='true']")
    ) return;

    const lastCta = members[members.length - 1];
    const wrapper = document.createElement("span");
    wrapper.dataset.shyenaHireExperts = "true";
    wrapper.className = "inline-flex items-center gap-2 align-middle ml-2 my-1";
    wrapper.appendChild(createHireExpertsLink(href, skills));

    members.forEach((element) => {
      element.dataset.shyenaHireExpertAttached = "true";
    });
    lastCta.insertAdjacentElement("afterend", wrapper);
  });
}

export function HireExpertsCtaInjector() {
  useEffect(() => {
    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(addExpertCtas);
    };

    run();
    const observer = new MutationObserver(run);
    observer.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
