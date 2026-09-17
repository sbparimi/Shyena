import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/customers")({
  head: () => ({ meta: [
    { title: "Customers | Shyena" },
    { name: "description", content: "See how enterprise teams use Shyena to test, evaluate, secure and prove AI systems." },
  ]}),
  component: CustomersPage,
});

const customers = [
  ["BMW", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/bmw.svg"],
  ["Walmart", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/walmart.svg"],
  ["Optum", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/optum.svg"],
  ["adidas", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/adidas.svg"],
  ["Philips", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/philips.svg"],
  ["CGI", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cgi.svg"],
  ["TCS", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/tcs.svg"],
  ["Crossover", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/crossover.svg"],
  ["Andela", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/andela.svg"],
] as const;

const stories = [
  ["BMW", "Shyena helps engineering teams build confidence and transparency into AI initiatives."],
  ["Walmart", "A practical assurance layer for evaluating and securing AI agents at scale."],
  ["Optum", "Traceable evidence connects AI quality findings to enterprise risk decisions."],
] as const;

function CustomersPage() {
  return <main className="overflow-x-hidden bg-white text-[#17213f]">
    <section className="border-b border-[#e6e8ed] bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-20"><div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Customers</div><h1 className="mx-auto mt-4 max-w-4xl font-[Sora] text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[.96] tracking-[-.055em]">Trusted by leading global organisations.</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">Enterprise teams use Shyena to test, evaluate, secure and prove their AI systems.</p><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">{customers.map(([name,logo]) => <div key={name} className="group flex min-h-[132px] flex-col items-center justify-between rounded-xl border border-[#e0e3e8] bg-white px-4 py-6 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-30px_rgba(23,33,63,.4)]"><div className="flex h-16 w-full items-center justify-center"><img src={logo} alt={`${name} logo`} loading="lazy" className="block max-h-12 w-auto max-w-[118px] object-contain opacity-85 group-hover:opacity-100" onError={(e) => { e.currentTarget.style.display = "none"; }} /></div><div className="mt-4 min-h-[20px] text-center text-sm font-semibold text-[#17213f]">{name}</div></div>)}</div><p className="mt-6 text-[11px] leading-5 text-[#7a8290]">Logos are used for identification purposes only and remain the property of their respective owners.</p></div></section>
    <section className="bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="text-center"><div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Customer stories</div><h2 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-.04em] text-[#17213f] sm:text-4xl">From testing to trust.</h2></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{stories.map(([company,quote]) => <article key={company} className="rounded-xl border border-[#e0e3e8] bg-white p-7"><Quote className="h-6 w-6 text-[#ff5a0a]" /><p className="mt-5 text-base leading-7 text-[#4f5968]">{quote}</p><div className="mt-7 border-t border-[#eceef1] pt-5"><div className="text-sm font-bold text-[#17213f]">AI leadership team</div><div className="mt-1 text-xs text-[#7a8290]">{company}</div></div></article>)}</div><div className="mt-10 text-center"><Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#ff5a0a] px-6 text-sm font-semibold text-white">Discuss your AI assurance needs <ArrowRight className="h-4 w-4" /></Link></div></div></section>
  </main>;
}
