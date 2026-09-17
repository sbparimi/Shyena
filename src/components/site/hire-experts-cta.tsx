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

// Only genuine page-level/key CTAs are eligible. Generic action buttons such as
// "Test", "Evaluate", "Build" and card actions are deliberately excluded.
const CTA_PATTERN = /^(book(?: a)?(?: demo| walkthrough)?|request(?: a)? demo|start(?: a)? pilot|discuss|talk|contact|get started|see how(?: it works)?|scope|explore|learn|schedule|try|demo|pilot|assessment|assurance review|consult)\b/i;

function getPageSkills(): string[] {
  const text = document.querySelector("main")?.innerText?.toLowerCase() ?? "";
  return SKILL_RULES.filter(([, terms]) => terms.some((term) => text.includes(term))).map(([skill]) => skill);
}

function buildHireHref(skills: string[]) {
  const params = new URLSearchParams();
  params.set("expert", "matched specialists");
  if (skills.length) params.set("skills", skills.join(", "));
  params.set("source", window.location.pathname);
  return `/contact?${params.toString()}`;
}

function isVisible(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function addExpertCtas() {
  const main = document.querySelector("main");
  if (!main) return;

  const skills = getPageSkills();
  const href = buildHireHref(skills);
  const candidates = Array.from(main.querySelectorAll<HTMLElement>("a, button"));
  const seenCtas = new Set<string>();

  candidates.forEach((element) => {
    if (element.closest("[data-shyena-hire-experts]")) return;
    if (element.dataset.shyenaHireExpertAttached === "true") return;
    if (!isVisible(element)) return;

    const text = (element.textContent ?? "").replace(/\s+/g, " ").trim();
    if (!text || !CTA_PATTERN.test(text)) return;
    if (text.toLowerCase().includes("hire expert")) return;

    // One Hire Experts button per actual CTA. This also collapses duplicate
    // desktop/mobile copies of the same CTA when they share the same label + destination.
    const destination = element instanceof HTMLAnchorElement ? element.getAttribute("href") ?? "" : "button";
    const ctaKey = `${text.toLowerCase()}|${destination}`;
    if (seenCtas.has(ctaKey)) return;
    seenCtas.add(ctaKey);

    const wrapper = document.createElement("span");
    wrapper.dataset.shyenaHireExperts = "true";
    wrapper.className = "inline-flex flex-wrap items-center gap-2 align-middle ml-2 my-1";

    const link = document.createElement("a");
    link.href = href;
    link.dataset.hireExpertsSource = window.location.pathname;
    link.className = "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#17213f] bg-white px-4 text-xs font-semibold text-[#17213f] transition hover:border-[#ff5a0a] hover:text-[#ff5a0a]";
    link.title = skills.length ? `Find experts for: ${skills.join(", ")}` : "Find Shyena experts matched to this page";
    link.textContent = "Hire Experts";

    wrapper.appendChild(link);
    element.dataset.shyenaHireExpertAttached = "true";
    element.insertAdjacentElement("afterend", wrapper);
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
