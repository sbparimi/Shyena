import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText } from "lucide-react";

export const Route = createFileRoute("/sample-report")({
  head: () => ({
    meta: [
      { title: "Sample Assurance Report | Shyena" },
      {
        name: "description",
        content:
          "An illustrative example of how Shyena connects test execution, evaluation evidence, findings and release decisions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/sample-report" }],
  }),
  component: SampleReportPage,
});

const evidence = [
  ["Deterministic checks", "Illustrative", "Assertions and business invariants"],
  ["Semantic evaluation", "Illustrative", "Rubric, threshold and evaluator rationale"],
  ["Execution integrity", "Illustrative", "Journey completion and trace consistency"],
  ["Security assurance", "Illustrative", "Control boundary and verified findings"],
];

function SampleReportPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <section className="border-b border-[#e5e5e5] bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[.12em] text-[#555]">
            <FileText className="h-4 w-4" /> Sample evidence / reference only
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            From execution evidence to a release decision.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555]">
            This illustrative report shows the structure of an assurance record. It contains no
            live customer run, production result, customer name or measured performance claim.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 border border-[#b9b9b9] bg-white px-3 py-2 text-sm font-medium">
            <CheckCircle2 className="h-4 w-4" /> Demonstration data — not a real execution
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-[1000px] px-5 py-12 sm:px-8 sm:py-16">
        <section aria-labelledby="evidence-heading">
          <h2 id="evidence-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Evidence included in a defensible report
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#555]">
            Each evidence layer should link to the underlying observation and the rule used to
            interpret it. A real report is populated from an actual run and its configured release
            policy.
          </p>
          <div className="mt-8 overflow-x-auto border border-[#e5e5e5]">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="bg-[#f6f6f6]">
                <tr>
                  <th scope="col" className="border-b border-[#e5e5e5] p-4 font-semibold">Evidence layer</th>
                  <th scope="col" className="border-b border-[#e5e5e5] p-4 font-semibold">Status</th>
                  <th scope="col" className="border-b border-[#e5e5e5] p-4 font-semibold">Expected evidence</th>
                </tr>
              </thead>
              <tbody>
                {evidence.map(([layer, status, detail]) => (
                  <tr key={layer}>
                    <th scope="row" className="border-b border-[#e5e5e5] p-4 font-medium">{layer}</th>
                    <td className="border-b border-[#e5e5e5] p-4 text-[#555]">{status}</td>
                    <td className="border-b border-[#e5e5e5] p-4 text-[#555]">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-12 border border-[#e5e5e5] p-6 sm:p-8" aria-labelledby="verdict-heading">
          <div className="font-mono text-xs uppercase tracking-[.12em] text-[#555]">Release disposition</div>
          <h2 id="verdict-heading" className="mt-3 text-2xl font-semibold">No verdict generated</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#555]">
            Because this is sample content and no test run was executed, this page does not claim
            PASS, FAIL or approval. A production verdict must be derived from recorded evidence and
            the release policy.
          </p>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/docs/reporting" className="inline-flex min-h-11 items-center gap-2 border border-[#171717] bg-[#eff57a] px-4 text-sm font-medium text-[#171717]">
            Read reporting documentation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 border border-[#b9b9b9] px-4 text-sm font-medium text-[#171717]">
            Discuss an assurance walkthrough
          </Link>
          <Link to="/" className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-medium text-[#555]">
            <ArrowLeft className="h-4 w-4" /> Back to Shyena
          </Link>
        </div>
      </main>
    </div>
  );
}
