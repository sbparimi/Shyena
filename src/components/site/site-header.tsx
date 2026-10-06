import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  ["Nexus", "/nexus"], ["Vera", "/vera"], ["How it works", "/demo"],
  ["Pricing", "/pricing"], ["Docs", "/docs"], ["Blog", "/blog"], ["About", "/about"],
] as const;

export function SiteHeader(){
  const location=useLocation(); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>12); window.addEventListener("scroll",f,{passive:true}); return()=>window.removeEventListener("scroll",f)},[]);
  useEffect(()=>setOpen(false),[location.pathname]);
  const active=(to:string)=>location.pathname===to||location.pathname.startsWith(to+"/");
  return <header className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl ${scrolled?"border-[#dfe3ea] shadow-[0_8px_30px_-22px_rgba(23,35,63,.55)]":"border-[#e8eaf0]"}`}>
    <div className="mx-auto flex h-[68px] max-w-[1480px] items-center px-5 sm:px-7 lg:px-8 xl:px-10"><Link to="/" aria-label="Shyena home"><Logo size="header"/></Link>
      <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary navigation">{NAV.map(([label,to])=><Link key={to} to={to} className={`inline-flex h-10 items-center rounded-lg px-3.5 text-[13px] font-semibold ${active(to)?"bg-[#f5f6f8] text-[#17233f]":"text-[#4f5765] hover:bg-[#f7f8fa]"}`}>{label}</Link>)}</nav>
      <div className="ml-auto hidden lg:flex"><Link to="/contact" className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#e87512] px-4 text-[13px] font-semibold text-white">Book a 30-min call <ArrowRight className="h-3.5 w-3.5"/></Link></div>
      <button type="button" onClick={()=>setOpen(v=>!v)} className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden" aria-label={open?"Close menu":"Open menu"}>{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
    </div>
    {open&&<div className="border-t bg-white px-5 pb-5 pt-3 lg:hidden"><nav className="grid gap-1">{NAV.map(([label,to])=><Link key={to} to={to} className="flex min-h-12 items-center justify-between rounded-xl border px-4 text-sm font-bold">{label}<ArrowRight className="h-4 w-4"/></Link>)}<Link to="/contact" className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-[#e87512] text-sm font-bold text-white">Book a 30-min call</Link></nav></div>}
  </header>;
}
