# Deterministic & Semantic Evaluation

> **Level: Basic** · **Purpose:** understand why reliable AI-agent assurance needs more than exact-string assertions and why semantic judgment must be designed as a measurement instrument.

## 1. Two fundamentally different kinds of truth

Some properties of an agent execution are factual in a way that does not require human interpretation. Examples include:

- a tool was or was not called;
- a required field had a specific value;
- a handover occurred;
- an API returned a particular status;
- an account changed from state A to state B;
- a security control denied an action.

Other properties concern meaning:

- whether an answer actually addresses the user's question;
- whether an explanation is complete enough for the scenario;
- whether the response is respectful and appropriately phrased;
- whether retrieved evidence genuinely supports the answer;
- whether the dialogue preserved the intended goal.

These are different measurement problems. Treating both as the same kind of assertion creates either brittle tests or weak tests.

## 2. Deterministic evaluation

A deterministic evaluator computes a result from explicit, observable facts:

\[
E_d(x) \in \{0,1\}
\]

Typical examples are JSON/schema validation, exact state assertions, set membership, policy checks, route assertions and temporal conditions.

The main strength is reproducibility. Given the same evidence and evaluator, the result should be invariant.

Deterministic assertions are particularly important for safety-critical boundaries because an agent's natural-language confidence is not evidence of the underlying state.

### Example

Suppose an agent must cancel a subscription only after identity verification.

Weak assertion:

> “The assistant says the subscription has been cancelled.”

Stronger contract:

> “Identity verification succeeds, the cancellation operation is authorized, exactly one cancellation request is issued, and the subscription backend reports `cancelled`.”

The conversation can then be semantically evaluated separately for whether the user was clearly informed.

## 3. Semantic evaluation

Semantic evaluation attempts to estimate a latent property from observable output and context:

\[
E_s(y,c; r) \rightarrow \hat{q}
\]

where `y` is the observed behavior, `c` is context, `r` is the rubric, and \(\hat{q}\) is an estimated quality judgment.

The word **estimated** matters. Semantic evaluation is an instrument. It has construct validity, measurement error, calibration requirements and failure modes.

An LLM judge does not magically create objective truth. It creates a repeatable procedure for approximating a specified construct.

## 4. Do not collapse the layers

A useful evaluation model keeps separate signals for:

\[
\text{Outcome} = f(D, S, I, Sec)
\]

where:

- `D` = deterministic contract evidence;
- `S` = semantic quality evidence;
- `I` = execution/trajectory integrity;
- `Sec` = security/adversarial evidence.

A conversation can score high on semantic quality and still fail because a forbidden tool was used. Conversely, a conversation can satisfy every deterministic state transition while producing an unusable explanation.

The correct release decision depends on the policy for the system, not on a single universal score.

## 5. Rubrics define the construct

A semantic score is meaningful only when the construct is explicit.

Consider “answer quality.” It could mean relevance, correctness, completeness, clarity, groundedness or all of them. Combining them without definition makes the number difficult to interpret.

A better rubric is dimensioned:

| Dimension | Question | Example scale |
|---|---|---|
| Relevance | Did the answer address the actual request? | 0–3 |
| Correctness | Are the substantive claims correct? | 0–3 |
| Completeness | Did it cover the necessary elements? | 0–3 |
| Groundedness | Are factual claims supported by evidence? | 0–3 |
| Policy adherence | Did it remain within interaction constraints? | 0–3 |

Each dimension should define anchor examples. “3 = good” is weaker than a description of what qualifies as 3, 2, 1 and 0.

## 6. The danger of exact-string thinking

Exact matching is valuable when the system contract itself is exact. It is inappropriate when valid language has many forms.

For example, the responses:

> “Your parcel is scheduled for delivery tomorrow.”

and

> “The current tracking information indicates delivery is expected tomorrow.”

may be semantically equivalent while differing lexically.

Conversely, lexical overlap can be misleading. A response may repeat the correct terminology while misunderstanding the user's request.

## 7. Ground truth is not always a single sentence

For many agent scenarios, the truth is represented by a set of acceptable outcomes and forbidden outcomes.

Let \(G\) be the set of acceptable end states and \(B\) the set of forbidden states. Then a valid execution may satisfy:

\[
S_n \in G \quad \land \quad S_t \notin B \; \forall t
\]

This is a more useful abstraction than requiring one canonical transcript.

It also prepares the system for multiple valid trajectories. The test should specify what must be true, not unnecessarily prescribe how the agent must phrase or sequence every low-level step.

## 8. Judge failure modes

A semantic judge can be wrong in systematic ways:

- position bias;
- sensitivity to verbosity;
- preference for fluent but unsupported answers;
- inconsistent treatment of edge cases;
- insufficient context;
- agreement with another model without actual correctness;
- leakage of information from the reference answer into the judgment.

Therefore judge results should be audited against examples with independently established labels.

Current research is explicitly examining the quality of agent benchmarks themselves, including their consistency, complexity and policy coverage. urlBenchmarking the Benchmarks — arXiv 2026https://arxiv.org/abs/2608.06329

## 9. Evidence hierarchy

Not all evidence should have the same authority. For externally visible state, direct system evidence normally dominates an agent assertion. For meaning, a rubric-based judgment can be appropriate. For high-impact decisions, a layered combination is stronger than any one source.

A practical hierarchy is:

**Observed system state > structured trace fact > validated rule > calibrated semantic judgment > generated explanation.**

The order is context-dependent, but it prevents a common mistake: treating the agent's own claim about its behavior as the strongest evidence of what happened.

## 10. The first complete evaluation contract

A minimal contract should specify:

- **Goal:** what outcome is required.
- **Invariants:** what must remain true.
- **Deterministic assertions:** what exact facts are checked.
- **Semantic dimensions:** what qualities are judged.
- **Evidence sources:** which observations have authority.
- **Decision rule:** what constitutes pass, fail or inconclusive.

The next level is to turn this contract into an executable scenario with personas, playbooks, invariants, evidence requirements and controlled termination conditions.

## Research basis

NIST's AI evaluation resources emphasize measurement and evidence, while its work on agentic evaluation probes explicitly combines rubric-based model judgments with evidence traces and structured audit trails. urlNIST GenAI Evaluation Programhttps://www.nist.gov/programs-projects/generative-artificial-intelligence-evaluation-program-genai urlNIST — Building Evaluation Probes into Agentic AIhttps://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai
