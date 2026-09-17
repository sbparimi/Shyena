import { useEffect } from "react";
import { BriefcaseBusiness } from "lucide-react";

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

const CTA_PATTERN = /^(book|request|start|discuss|talk|contact|get started|see how|scope|explore|learn|schedule|try|demo|hire|build|test|evaluate|assure|run)\b|\b(demo|pilot|assessment|assurance review|consult|expert)\b/i;

function getPageSkills(): string[] {
  const text = document.querySelector("main")?.innerText?.toLowerCase() ?? document.body.innerText?.toLowerCase() ?? "";
  return SKILL_RULES.filter(([, terms]) => terms.some((term) => text.includes(term))).map(([skill]) => skill);
}

function buildHireHref(skills: string[]) {
  const params = new URLSearchParams();
  params.set("expert", "matched specialists");
  if (skills.length) params.set("skills", skills.join(", "));
  params.set("source", window.location.pathname);
  return `/contact?${params.toString()}`;
}

function addExpertCtas() {
  const skills = getPageSkills();
  const href = buildHireHref(skills);
  const candidates = Array.from(document.querySelectorAll<HTMLElement>("main a, main button"));
  candidates.forEach((element) => {
    if (element.closest("[data-shyena-hire-experts]")) return;
    if (element.getAttribute("data-hire-experts-source")) return;
    const text = (element.textContent ?? "").replace(/\s+/g, " ").trim();
    if (!text || !CTA_PATTERN.test(text)) return;
    if (text.toLowerCase().includes("hire expert")) return;
    const wrapper = document.createElement("span");
    wrapper.dataset.shyenaHireExperts = "true";
    wrapper.className = "inline-flex flex-wrap items-center gap-2 align-middle ml-2 my-1";
    const link = document.createElement("a");
    link.href = href;
    link.dataset.hireExpertsSource = window.location.pathname;
    link.className = "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#17213f] bg-white px-4 text-xs font-semibold text-[#17213f] transition hover:border-[#ff5a0a] hover:text-[#ff5a0a]";
    link.title = skills.length ? `Find experts for: ${skills.join(", ")}` : "Find Shyena experts matched to this page";
    link.innerHTML = `<span>Hire Experts</span>`;
    const iconHost = document.createElement("span");
    iconHost.className = "inline-flex";
    link.appendChild(iconHost);
    wrapper.appendChild(link);
    element.insertAdjacentElement("afterend", wrapper);
  });
}

export function HireExpertsCtaInjector() {
  useEffect(() => {
    const run = () => window.requestAnimationFrame(addExpertCtas);
    run();
    const observer = new MutationObserver(run);
    observer.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
