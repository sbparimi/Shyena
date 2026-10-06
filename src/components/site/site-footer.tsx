import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

const columns=[
  {title:"Products",links:[["Nexus","/nexus"],["Vera","/vera"],["Sample report","/sample-report"]]},
  {title:"Explore",links:[["How it works","/demo"],["Pricing","/pricing"],["Docs","/docs"],["Blog","/blog"]]},
  {title:"Company",links:[["About","/about"],["Design partners","/design-partners"],["Security","/security"],["Contact","/contact"]]},
] as const;

export function SiteFooter(){return <footer className="border-t border-[#e5e7eb] bg-white text-[#17213f]"><div className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 lg:px-10"><div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]"><div><Link to="/"><Logo size="footer"/></Link><p className="mt-5 max-w-sm text-sm leading-6 text-[#667085]">Independent testing and evaluation for Cognigy AI Agents.</p></div><div className="grid gap-8 sm:grid-cols-3">{columns.map(c=><div key={c.title}><h3 className="text-xs font-bold uppercase tracking-[.14em]">{c.title}</h3><ul className="mt-4 space-y-3">{c.links.map(([label,to])=><li key={to}><Link to={to} className="text-sm text-[#667085] hover:text-[#e87512]">{label}</Link></li>)}</ul></div>)}</div></div><div className="mt-10 border-t border-[#e5e7eb] pt-5 text-xs leading-5 text-[#7a8290]">Shyena is an independent company and is not affiliated with, endorsed by, or sponsored by NiCE Cognigy. Cognigy is a trademark of its respective owner.</div><div className="mt-5 flex flex-wrap gap-5 text-xs text-[#7a8290]"><Link to="/privacy">Privacy</Link><Link to="/cookies">Cookies</Link><Link to="/terms">Terms</Link></div><div className="mt-5 text-xs text-[#7a8290]">© {new Date().getFullYear()} Shyena. All rights reserved.</div></div></footer>}
