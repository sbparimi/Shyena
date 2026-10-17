# Shyena Autonomous QA — One-Team MVP

## Purpose

Deliver a small, usable starting point for one engineering team. The Test Manager coordinates bounded specialist agents; existing Jira, GitHub and Playwright capabilities remain the systems of record and execution engines.

## MVP boundary

Included in the first UI slice:

- One team workspace.
- Setup form for a Jira project, GitHub repository and Playwright command.
- Approval policy selection.
- Test Manager queue with four starter workflows.
- Six-agent roster with bounded responsibilities.
- Local browser persistence for a prototype walkthrough.
- Safe-by-default repair policy: changes are proposed as a pull request, never merged automatically.

Not yet implemented:

- OAuth or token exchange for Jira/GitHub.
- Live calls to Atlassian MCP, GitHub MCP or Playwright MCP from the deployed app.
- Durable server-side tenancy, authentication, secrets storage or task queue.
- Remote test execution and artifact upload.
- Real model/agent calls or automatic PR-triggered execution.

The workspace explicitly labels these limitations. Browser-local setup values are not credentials and must not be used to store secrets.

## Recommended integration shape

```text
GitHub PR / Manual run
        |
        v
Test Manager (workflow state machine)
        |
        +--> Requirements Analyst --> Atlassian MCP --> Jira
        |
        +--> Test Planner ----------> Test-plan artifact + approval
        |
        +--> Test Executor ---------> Playwright test command / Playwright MCP exploration
        |
        +--> Failure Analyst -------> Playwright report, traces, logs, screenshots
        |
        +--> Repair Agent ----------> GitHub MCP --> branch + pull request
        |
        v
Evidence-backed team report
```

## Integration rules

1. Prefer official Atlassian and GitHub MCP servers over custom API clients when their capabilities fit.
2. Use Playwright MCP for bounded browser exploration; use native Playwright suites for repeatable CI execution.
3. OAuth is initiated explicitly by the user. Never request users to paste tokens into the setup form.
4. Keep each organisation/team's credentials and artifacts isolated.
5. All agent tasks have explicit input, output, permissions and status.
6. Test-plan approval is required by default before execution.
7. Repair agents may create branches and PRs, but cannot merge to the default branch.
8. Every execution must record the repository commit, environment, command, outcome and artifact references.
9. A missing result or incomplete evidence is never treated as a pass.

## Next implementation increments

1. Add authenticated backend and workspace persistence.
2. Implement explicit OAuth connections for Atlassian and GitHub.
3. Add a server-side connector registry with least-privilege scopes.
4. Implement task queue/state transitions and event history.
5. Execute a connected Playwright project in an isolated runner.
6. Publish reports and evidence links to GitHub PRs and Jira issues.
7. Add tenant isolation and audit tests before enabling more than one team.
