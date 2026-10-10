import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/terms")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.shyena.eu/terms" }],
    meta: [
      { title: "Terms | Shyena" },
      { name: "description", content: "Terms for use of the Shyena website and services." },
    ],
  }),
  component: Terms,
});
function Terms() {
  return (
    <main className="bg-white text-[#17213f]">
      <section className="bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 lg:py-24">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">
            Legal
          </div>
          <h1 className="mt-5 font-[Sora] text-5xl font-extrabold">Terms</h1>
          <p className="mt-5 text-white/60">
            Website and service terms will be published before contractual use.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="prose prose-slate max-w-none">
          <h2>Website use</h2>
          <p>
            You may use this website for lawful business and informational purposes. Website content
            is provided for general information and may change without notice.
          </p>
          <h2>Services</h2>
          <p>
            Any Shyena assurance, engineering or governance engagement is governed by the applicable
            written proposal, order, statement of work or other agreement between the parties.
            Website descriptions do not create a commitment to deliver a particular result.
          </p>
          <h2>Assurance positioning</h2>
          <p>
            Shyena provides technical evaluation and evidence workflows. Shyena is not a legal
            adviser, certification body or regulator, and technical evidence does not by itself
            establish regulatory compliance.
          </p>
          <h2>Data protection</h2>
          <p>
            For engagements that process personal data on behalf of a customer, applicable
            data-processing terms should be agreed before processing begins. See the Privacy and
            Security pages for website-level information.
          </p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to contact@shyena.eu.</p>
        </div>
      </section>
    </main>
  );
}
