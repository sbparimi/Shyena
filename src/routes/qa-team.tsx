import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Activity, ArrowRight, Bot, Check, CheckCircle2, ChevronRight,
  Circle, Clock3, GitPullRequest, Link2, ListChecks, Play,
  RefreshCw, Settings2, ShieldCheck, Sparkles, Users, Workflow, XCircle,
} from "lucide-react";

type TaskStatus = "Ready" | "Running" | "Needs review" | "Completed";
type Task = { id: string; title: string; agent: string; detail: string; status: TaskStatus; time: string };

const initialTasks: Task[] = [
  { id: "QA-001", title: "Analyze latest pull request", agent: "Test Manager", detail: "Inspect changed files and map affected requirements", status: "Ready", time: "On demand" },
  { id: "QA-002", title: "Generate test plan", agent: "Test Planner", detail: "Create a reviewable plan with scope, risks and expected evidence", status: "Ready", time: "After analysis" },
  { id: "QA-003", title: "Execute web regression", agent: "Test Executor", detail: "Run the connected Playwright suite and collect artifacts", status: "Ready", time: "After approval" },
  { id: "QA-004", title: "Classify failures", agent: "Failure Analyst", detail: "Separate product defects, automation failures and environment issues", status: "Ready", time: "After execution" },
];

const agents = [
  { name: "Test Manager", role: "Coordinator", description: "Owns workflow state, delegates tasks and enforces approval policy.", icon: Workflow },
  { name: "Requirements Analyst", role: "Jira", description: "Reads selected stories, acceptance criteria and linked defects.", icon: ListChecks },
  { name: "Test Planner", role: "Planning", description: "Produces a versioned, reviewable test plan before execution.", icon: Sparkles },
  { name: "Test Executor", role: "Playwright", description: "Runs existing tests; uses browser MCP for bounded exploration.", icon: Play },
  { name: "Failure Analyst", role: "Evidence", description: "Classifies failures using reports and captured execution evidence.", icon: Activity },
  { name: "Repair Agent", role: "GitHub", description: "Proposes a branch and pull request; never pushes directly to main.", icon: GitPullRequest },
];

const storageKey = "shyena-qa-team-mvp-v1";

export const Route = createFileRoute("/qa-team")({
  head: () => ({
    meta: [
      { title: "Autonomous QA Team | Shyena" },
      { name: "description", content: "Configure a coordinated AI QA team for Jira, GitHub and Playwright." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: QaTeamPage,
});

function QaTeamPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "setup" | "agents">("overview");
  const [teamName, setTeamName] = useState("Platform QA");
  const [jiraProject, setJiraProject] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const [playwrightCommand, setPlaywrightCommand] = useState("npx playwright test");
  const [approvalMode, setApprovalMode] = useState("review-plan");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [setupComplete, setSetupComplete] = useState(false);
  const [notice, setNotice] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const data = JSON.parse(saved) as Partial<{ teamName: string; jiraProject: string; githubRepo: string; playwrightCommand: string; approvalMode: string; tasks: Task[]; setupComplete: boolean }>;
        if (data.teamName) setTeamName(data.teamName);
        if (data.jiraProject) setJiraProject(data.jiraProject);
        if (data.githubRepo) setGithubRepo(data.githubRepo);
        if (data.playwrightCommand) setPlaywrightCommand(data.playwrightCommand);
        if (data.approvalMode) setApprovalMode(data.approvalMode);
        if (data.tasks) setTasks(data.tasks);
        if (data.setupComplete) setSetupComplete(data.setupComplete);
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify({ teamName, jiraProject, githubRepo, playwrightCommand, approvalMode, tasks, setupComplete }));
  }, [hydrated, teamName, jiraProject, githubRepo, playwrightCommand, approvalMode, tasks, setupComplete]);

  const readyCount = useMemo(() => [jiraProject.trim(), githubRepo.trim(), playwrightCommand.trim()].filter(Boolean).length, [jiraProject, githubRepo, playwrightCommand]);
  const completed = tasks.filter((task) => task.status === "Completed").length;

  function saveSetup() {
    if (!teamName.trim()) {
      setNotice("Enter a team name to continue.");
      return;
    }
    if (!jiraProject.trim() || !githubRepo.trim() || !playwrightCommand.trim()) {
      setNotice("Add a Jira project, GitHub repository and test command. These are configuration values; integrations still need authorization.");
      setActiveTab("setup");
      return;
    }
    setSetupComplete(true);
    setNotice("Team configuration saved in this browser. Connectors are not authenticated by this demo.");
    setActiveTab("overview");
  }

  function runTask(id: string) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, status: task.status === "Completed" ? "Ready" : "Needs review" } : task));
    setNotice("Task queued for review in this MVP workspace. Live agent execution is not connected yet.");
  }

  function resetWorkspace() {
    setTasks(initialTasks);
    setSetupComplete(false);
    setNotice("Workspace reset.");
  }

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-[#111827]">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111827] text-[#ffbd2e]"><Bot className="h-5 w-5" /></div>
            <div className="min-w-0"><div className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">Shyena / Autonomous QA</div><div className="truncate text-lg font-bold">Team workspace</div></div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 sm:flex"><span className={"h-2 w-2 rounded-full " + (setupComplete ? "bg-emerald-500" : "bg-amber-500")} />{setupComplete ? "Configuration saved" : "Setup required"}</div>
          <button onClick={() => setActiveTab("setup")} className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-3 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"><Settings2 className="h-4 w-4" /><span className="hidden sm:inline">Configure team</span><span className="sm:hidden">Setup</span></button>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-6 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-10 lg:py-8">
        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500"><Users className="h-4 w-4" /> Current team</div>
            <div className="text-base font-bold">{teamName || "Unnamed team"}</div>
            <div className="mt-1 text-sm text-slate-500">Single-team MVP</div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between"><span className="text-slate-500">Specialist agents</span><span className="font-semibold">6</span></div>
              <div className="flex items-center justify-between"><span className="text-slate-500">Integrations configured</span><span className="font-semibold">{readyCount}/3</span></div>
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 lg:flex-col" aria-label="Workspace sections">
            {([{ id: "overview", label: "Overview", icon: Activity }, { id: "setup", label: "Team setup", icon: Settings2 }, { id: "agents", label: "Agent roster", icon: Bot }] as const).map((item) => {
              const Icon = item.icon;
              return <button key={item.id} onClick={() => setActiveTab(item.id)} className={"flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition " + (activeTab === item.id ? "bg-[#111827] text-white" : "text-slate-600 hover:bg-slate-100")}><Icon className="h-4 w-4" />{item.label}</button>;
            })}
          </nav>
          <div className="hidden rounded-2xl border border-slate-200 bg-white p-4 lg:block">
            <div className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="h-4 w-4 text-slate-700" />Safe by default</div>
            <p className="mt-2 text-xs leading-5 text-slate-500">Plan review before execution. Repair work proposes a PR; it never merges directly to the default branch.</p>
          </div>
        </aside>

        <section className="min-w-0 space-y-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><div className="text-xs font-bold uppercase tracking-[.18em] text-[#9a6700]">Autonomous test engineering</div><h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Your QA team, coordinated.</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">One Test Manager coordinates specialist agents across requirements, planning, execution and failure analysis. Start with one team and one web test runner.</p></div>
            <button onClick={() => setActiveTab("setup")} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"><Link2 className="h-4 w-4" /> Connect tools <ArrowRight className="h-4 w-4" /></button>
          </div>

          {notice && <div role="status" className="flex items-start justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"><span>{notice}</span><button aria-label="Dismiss message" onClick={() => setNotice("")}><XCircle className="h-4 w-4" /></button></div>}

          {activeTab === "overview" && <>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Agent tasks", value: String(tasks.length), note: "In this workspace", icon: Bot },
                { label: "Completed", value: String(completed), note: "Tasks marked complete", icon: CheckCircle2 },
                { label: "Needs review", value: String(tasks.filter((task) => task.status === "Needs review").length), note: "Human decision required", icon: ShieldCheck },
                { label: "Tool connections", value: String(readyCount) + "/3", note: "Configuration only", icon: Link2 },
              ].map((stat) => { const Icon = stat.icon; return <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between text-sm text-slate-500"><span>{stat.label}</span><Icon className="h-4 w-4" /></div><div className="mt-3 text-3xl font-extrabold tracking-tight">{stat.value}</div><div className="mt-1 text-xs text-slate-500">{stat.note}</div></div>; })}
            </div>
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,.8fr)]">
              <div className="rounded-2xl border border-slate-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5"><div><h2 className="font-bold">Coordinator queue</h2><p className="mt-1 text-sm text-slate-500">The Test Manager owns task state and hand-offs.</p></div><button onClick={() => { setTasks(initialTasks); setNotice("Queue refreshed."); }} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold"><RefreshCw className="h-3.5 w-3.5" /> Refresh queue</button></div>
                <div className="divide-y divide-slate-100">
                  {tasks.map((task) => <div key={task.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 gap-3"><div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100"><Circle className="h-4 w-4 text-slate-500" /></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-mono text-slate-400">{task.id}</span><span className="font-semibold">{task.title}</span></div><p className="mt-1 text-sm text-slate-500">{task.detail}</p><p className="mt-2 text-xs text-slate-400">{task.agent} · {task.time}</p></div></div><div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end"><span className={"rounded-full px-2.5 py-1 text-xs font-semibold " + (task.status === "Completed" ? "bg-emerald-50 text-emerald-700" : task.status === "Needs review" ? "bg-amber-50 text-amber-800" : task.status === "Running" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600")}>{task.status}</span><button onClick={() => runTask(task.id)} className="text-xs font-semibold text-slate-700 underline underline-offset-4">{task.status === "Needs review" ? "Approve / reset" : task.status === "Completed" ? "Reset task" : "Review task"}</button></div></div>)}
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center gap-2"><Workflow className="h-5 w-5" /><h2 className="font-bold">Default workflow</h2></div><div className="mt-5 space-y-4">{["Pull request detected", "Requirements and change reviewed", "Test plan generated", "Human approval (configured policy)", "Playwright execution", "Failure analysis and report"].map((step, i) => <div key={step} className="flex gap-3"><div className="flex flex-col items-center"><div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[10px] font-bold">{String(i + 1).padStart(2, "0")}</div>{i < 5 && <div className="mt-1 h-5 w-px bg-slate-200" />}</div><div className="pt-1 text-sm text-slate-700">{step}</div></div>)}</div></div>
                <div className="rounded-2xl border border-[#ead6a0] bg-[#fffaf0] p-5"><div className="flex items-center gap-2 text-[#815b00]"><Clock3 className="h-5 w-5" /><h2 className="font-bold">Integration status</h2></div><p className="mt-2 text-sm leading-6 text-slate-700">This is the MVP workspace UI. Jira/GitHub OAuth, live MCP calls and remote execution require backend credentials and are not active in this screen yet.</p><button onClick={() => setActiveTab("setup")} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#815b00]">Complete team setup <ChevronRight className="h-4 w-4" /></button></div>
              </div>
            </div>
          </>}

          {activeTab === "setup" && <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 p-5 sm:p-6"><h2 className="text-xl font-bold">Configure your first team</h2><p className="mt-1 text-sm text-slate-500">Save the workspace configuration, then wire the OAuth/MCP backend as the next integration step.</p></div>
            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-2">
              <label className="block text-sm font-semibold">Team name<input value={teamName} onChange={(e) => setTeamName(e.target.value)} className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-normal outline-none focus:border-slate-600" placeholder="Platform QA" /></label>
              <label className="block text-sm font-semibold">Jira project key<input value={jiraProject} onChange={(e) => setJiraProject(e.target.value)} className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-normal outline-none focus:border-slate-600" placeholder="PAY or https://company.atlassian.net" /></label>
              <label className="block text-sm font-semibold">GitHub repository<input value={githubRepo} onChange={(e) => setGithubRepo(e.target.value)} className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-normal outline-none focus:border-slate-600" placeholder="owner/repository" /></label>
              <label className="block text-sm font-semibold">Playwright test command<input value={playwrightCommand} onChange={(e) => setPlaywrightCommand(e.target.value)} className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-mono text-sm font-normal outline-none focus:border-slate-600" placeholder="npx playwright test" /></label>
              <fieldset className="lg:col-span-2"><legend className="text-sm font-semibold">Execution approval policy</legend><div className="mt-3 grid gap-3 sm:grid-cols-3">{[{id:"review-plan",title:"Review test plan",body:"Require approval before test execution."},{id:"autonomous-low-risk",title:"Low-risk autonomous",body:"Allow low-risk runs; review high-risk plans."},{id:"manual-only",title:"Manual approval",body:"Require approval before every run."}].map((mode) => <label key={mode.id} className={"cursor-pointer rounded-xl border p-4 " + (approvalMode === mode.id ? "border-slate-900 bg-slate-50" : "border-slate-200")}><span className="flex items-center gap-2 text-sm font-bold"><input type="radio" name="approval" value={mode.id} checked={approvalMode === mode.id} onChange={() => setApprovalMode(mode.id)} />{mode.title}</span><span className="mt-2 block text-xs leading-5 text-slate-500">{mode.body}</span></label>)}</div></fieldset>
            </div>
            <div className="flex flex-col justify-between gap-3 border-t border-slate-100 bg-slate-50 p-5 sm:flex-row sm:items-center sm:px-6"><p className="text-xs leading-5 text-slate-500">Values are stored locally in this browser only. Do not enter secrets or access tokens here.</p><button onClick={saveSetup} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#111827] px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"><Check className="h-4 w-4" /> Save team configuration</button></div>
          </div>}

          {activeTab === "agents" && <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{agents.map((agent, i) => { const Icon = agent.icon; return <article key={agent.name} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100"><Icon className="h-5 w-5" /></div><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{agent.role}</span></div><h2 className="mt-4 text-lg font-bold">{agent.name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{agent.description}</p><div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500"><CheckCircle2 className="h-4 w-4" />{i === 0 ? "Always active" : "Delegated by Test Manager"}</div></article>; })}</div>}

          <footer className="flex flex-col justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center"><span>Shyena Autonomous QA · One-team MVP · Configuration preview</span><button onClick={resetWorkspace} className="inline-flex items-center gap-2 self-start font-semibold hover:text-slate-900"><RefreshCw className="h-3.5 w-3.5" /> Reset local workspace</button></footer>
        </section>
      </div>
    </main>
  );
}
