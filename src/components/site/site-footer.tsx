import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Github } from "lucide-react";
import { Logo } from "./logo";

const COLUMNS = [
  { title: "Platform", links: [{ label: "Nexus", to: "/nexus" }, { label: "Vera", to: "/vera" }, { label: "Chakra", to: "/chakra" }, { label: "Govern", to: "/govern" }, { label: "Platform overview", to: "/platform" }] },
  { title: "Resources", links: [{ label: "Blog", to: "/blog" }, { label: "Documentation", to: "/docs" }, { label: "Metrics", to: "/metrics" }, { label: "Services", to: "/services" }, { label: "Pricing", to: "/pricing" }] },
  { title: "Company", links: [{ label: "About", to: "/about" }, { label: "Design partners", to: "/customers" }, { label: "Security & trust", to: "/security" }, { label: "Contact", to: "/contact" }] },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white text-[#17213f]">
      <div className="mx-auto w-full max-w-[1480px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <Link to="/" aria-label="Shyena home" className="inline-flex"><Logo size="footer" /></Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#667085]">Test, evaluate and secure AI systems with confidence. Evidence-backed assurance for production agents.</p>
            <div className="mt-6 flex items-center gap-2">
              <a href="https://www.linkedin.com/company/shyena-ai/" aria-label="Shyena on LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e1e4e9] text-[#596273] transition hover:border-[#17213f] hover:text-[#17213f]"><Linkedin className="h-4 w-4" /></a>
              <a href="https://github.com/sbparimi/Shyena" aria-label="Shyena on GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e1e4e9] text-[#596273] transition hover:border-[#17213f] hover:text-[#17213f]"><Github className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((column) => <div key={column.title}><h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#17213f]">{column.title}</h3><ul className="mt-5 space-y-3">{column.links.map((link) => <li key={`${column.title}-${link.label}`}><Link to={link.to} className="text-sm text-[#667085] transition-colors hover:text-[#e87512]">{link.label}</Link></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mt-8 border-t border-[#e5e7eb] pt-5 text-xs leading-5 text-[#7a8290]">
  <div>Shyena · Netherlands</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#7a8290]">
  <Link to="/privacy" className="hover:text-[#e87512]">Privacy Policy</Link>
  <Link to="/cookies" className="hover:text-[#e87512]">Cookie notice</Link><Link to="/terms" className="hover:text-[#e87512]">Terms</Link>
</div>
<div className="mt-6 flex flex-col gap-4 border-t border-[#e5e7eb] pt-6 text-xs text-[#7a8290] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Shyena. All rights reserved.</div>
          <div className="flex items-center gap-2">Built for a more trustworthy AI future <ArrowRight className="h-3.5 w-3.5" /></div>
        </div>
      </div>
    </footer>
  );
}
