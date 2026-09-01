# Release Gates & Assurance Evidence

> **Level: Expert** · **Purpose:** turn heterogeneous agent-test observations into a defensible engineering release decision.

## 1. A release gate is a decision rule

A score is descriptive. A gate is normative.

Let `X` be the evidence collected for a candidate release and `R` the release policy. The gate computes:

\[
Decision = Gate(X,R) \in \{Release, Block, Review\}
\]

The important design choice is that not every signal belongs in one weighted average. A critical safety invariant may be non-compensatory: a high quality score cannot offset a prohibited data disclosure.

## 2. Separate evidence classes

A mature gate distinguishes:

- **hard contracts** — deterministic requirements that must hold;
- **behavioral requirements** — scenario-level outcome properties;
- **semantic quality** — calibrated judgments of meaning;
- **reliability** — repeated-run and stress behavior;
- **security** — adversarial boundary testing;
- **operational constraints** — latency, cost, availability and support limits.

This produces a more auditable decision than collapsing everything into one “AI score.”

## 3. Non-compensatory versus compensatory controls

Use non-compensatory gates where failure cannot reasonably be traded away.

Example:

\[
Release = SecurityPass \land CriticalContractPass \land PrivacyPass \land QualityThreshold
\]

For lower-criticality dimensions, a weighted model may be appropriate:

\[
Q = \sum_i w_i q_i
\]

but document why the weights exist. A weight is a governance choice, not a law of nature.

## 4. Risk-weighted testing

The depth of evidence should reflect impact.

One practical prioritization model is:

\[
Priority = Impact \times Exposure \times Uncertainty
\]

High-impact tool mutations, sensitive-data paths, regulatory boundaries and irreversible actions deserve deeper negative-path and repeated execution coverage than low-impact informational queries.

OWASP's 2026 agent-security guidance explicitly recommends blocking releases when high-risk tool policies, approval logic or credential scopes change without updated testing. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html

## 5. Evidence chains

A release record should allow a reviewer to travel from decision to raw evidence:

\[
Release\ Decision \rightarrow Gate \rightarrow Metric \rightarrow Test\ Run \rightarrow Trace \rightarrow Source\ State
\]

For example, “RAG groundedness passed” is weak evidence on its own. A stronger chain identifies the corpus version, retrieval set, claim-to-source mapping, judge configuration and raw result.

NIST's current agentic evaluation work emphasizes machine-readable audit trails that connect agent outputs to supporting evidence. urlNIST — Building Evaluation Probes into Agentic AIhttps://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai

## 6. Version everything that can affect interpretation

A reproducible evaluation package should capture:

- agent/application version;
- model provider and model version;
- prompt/instruction version;
- tool contracts and versions;
- policy configuration;
- retrieval corpus/version;
- evaluator/rubric version;
- test-suite version;
- environment;
- timestamp and execution identifier.

Otherwise a score change may be impossible to attribute.

## 7. Confidence and inconclusive results

A gate should not force false certainty. If required evidence is missing, the result can be **Review** or **Inconclusive**.

Examples include:

- unavailable backend state;
- missing trace segment;
- judge disagreement on a critical borderline case;
- insufficient repeated samples;
- changed evaluator with no calibration evidence.

Treating missing evidence as pass converts observability debt into release risk.

## 8. Regression and baseline logic

Compare releases against a defined baseline rather than an arbitrary previous run.

For metric `m`, track:

\[
\Delta m = m_{release}-m_{baseline}
\]

but interpret the delta in light of uncertainty and test composition. A small numerical decline may be noise; a newly introduced critical invariant violation is not.

Maintain explicit regression cases for failures that have previously escaped or nearly escaped.

## 9. Residual risk

Passing a gate does not imply zero risk. A release record should identify material residual risk:

```text
Risk
  -> evidence available
  -> control applied
  -> remaining uncertainty
  -> owner/decision authority
  -> acceptance date or mitigation
```

This makes unresolved limitations visible rather than hiding them behind a green dashboard.

## 10. Governance alignment

NIST's AI RMF and GenAI Profile frame AI risk management as a lifecycle activity spanning design, development, use and evaluation. urlNIST AI RMF GenAI Profilehttps://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

For agent security, OWASP similarly treats testing and validation as recurring activities tied to changes in prompts, tools, memory, policies and model providers. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html

The practical conclusion is that release evidence should be generated as part of the delivery lifecycle, not assembled retrospectively after a defect or audit request.

## 11. A reference release gate

A conservative production rule can look like:

```text
BLOCK when:
  any critical deterministic invariant fails
  OR any critical security abuse case succeeds
  OR required evidence is absent
  OR a material regression exceeds the accepted threshold

REVIEW when:
  semantic judge confidence is insufficient
  OR repeated-run sample is below the required minimum
  OR residual risk requires explicit acceptance

RELEASE when:
  all mandatory gates pass
  AND evidence package is complete
  AND known residual risks are accepted under policy
```

The exact thresholds belong to the organization and risk domain.

## 12. The assurance artifact

The final output of an assurance run should be more than a dashboard screenshot. It should be a durable artifact containing:

- tested release identity;
- scope and exclusions;
- test inventory and coverage;
- deterministic results;
- semantic results and evaluator configuration;
- trajectory/integrity evidence;
- security findings;
- reliability observations;
- failed and inconclusive cases;
- residual risk;
- final gate decision.

The artifact should be independently reviewable by someone who did not execute the tests.

## Research basis

OWASP's 2026 material explicitly calls for CI/CD adversarial testing, version-controlled abuse cases, validation evidence and release blocking for high-risk changes. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html NIST's TEVV resources emphasize evidence-backed evaluation, while current agentic evaluation work focuses on structured audit trails and reproducible probes. urlNIST AIRChttps://airc.nist.gov/
