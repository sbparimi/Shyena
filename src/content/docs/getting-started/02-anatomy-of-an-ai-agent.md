# Anatomy of an AI Agent

> **Level: Basic** · **Purpose:** turn the phrase “AI agent” into an explicit system model that can be partitioned into testable surfaces.

## 1. Why architecture precedes test design

A test can only be as precise as the system boundary behind it. When an agent is treated as a black box, an observed failure is often misclassified: a model limitation may be blamed for a retrieval defect; a policy failure may be blamed on prompting; a stale account record may be interpreted as a conversational error.

The first engineering task is therefore **decomposition**.

A useful agent model contains at least eight cooperating subsystems:

1. **Instruction layer** — system and developer constraints.
2. **Reasoning/model layer** — the model that selects or generates actions.
3. **Context layer** — current user input, conversation state and relevant history.
4. **Memory layer** — information intentionally persisted between interactions.
5. **Retrieval layer** — external knowledge selected for the current task.
6. **Tool layer** — APIs, databases, search, calculators and other capabilities.
7. **Policy/orchestration layer** — routing, permissions, handovers, retries and sequencing.
8. **Environment layer** — the external systems whose state can change.

Observability sits across all of these layers because assurance depends on the ability to reconstruct what happened.

## 2. A reference architecture for testing

Represent one execution as a trace rather than a transcript alone:

\[
T = \{o_0, m_0, a_0, e_0, o_1, m_1, a_1, e_1, \dots, o_n\}
\]

Here, an observation may include user input or tool output; an action may be a natural-language response or tool call; and an environment transition captures externally visible state.

This distinction matters because a chat transcript is only one projection of the execution. Two identical transcripts can correspond to different backend states, while two different transcripts can produce an equivalent business outcome.

## 3. The instruction layer

Instructions establish behavioral constraints, but they are not equivalent to runtime enforcement. Test both:

- **Instruction effectiveness:** does the agent normally follow the requested policy?
- **Boundary enforcement:** what happens when a user, document or tool result attempts to override it?

An instruction such as “never reveal account details without verification” should not be considered assured merely because it appears in a system prompt. The release-quality evidence is a controlled execution showing the required behavior under valid and adversarial inputs.

OWASP's current AI-agent security guidance explicitly treats prompt override, privilege escalation and data exfiltration as testable abuse cases rather than only documentation concerns. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html

## 4. The model layer

The model introduces stochasticity and broad generalization. Its output is not generally a stable function of user input alone. Sampling configuration, provider changes, context ordering and upstream model updates can all alter behavior.

Testing therefore needs to distinguish:

- **model-sensitive measures**, such as semantic quality;
- **system-level contracts**, such as authorization and state correctness.

Do not replace a system contract with a model score. A high semantic score does not prove that a prohibited API call did not occur.

## 5. Context and memory

Memory creates temporal coupling. The correct result at turn 20 may depend on an event at turn 4.

Three memory questions should be tested separately:

**Retention:** was the intended fact persisted?

**Scope:** was the fact available only where it should be?

**Expiry/correction:** can stale or malicious information be removed or superseded?

A memory system also creates a new attack surface. OWASP identifies memory poisoning as a specific agent security concern and recommends testing whether malicious information can be sanitized, scoped, expired or rejected before persistence. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html

## 6. Retrieval as an executable dependency

Retrieval is not a static knowledge store. It is a selection mechanism. The evaluation surface includes:

- corpus version;
- indexing configuration;
- query construction;
- retrieval ranking;
- filters and permissions;
- selected evidence;
- answer synthesis.

A grounded answer requires more than lexical overlap with a source. The evidence must actually support the claim being made. NIST's current work on agentic evaluation probes similarly focuses on mapping factual claims to supporting document evidence and retaining the audit trail. urlNIST — Building Evaluation Probes into Agentic AIhttps://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai

## 7. Tools and the action boundary

Tools convert language into real-world effects. A test suite should therefore model at least four tool dimensions:

| Dimension | Example assertion |
|---|---|
| Selection | The booking tool is chosen for a booking request. |
| Arguments | The tool receives the verified customer and requested date. |
| Authorization | A privileged action is blocked without the required role. |
| Effect | The external record changes exactly once and to the intended state. |

The last dimension is often the strongest evidence. A correct-looking tool call can still fail because the downstream system rejects it, partially applies it, or applies it twice.

## 8. Orchestration and control flow

An orchestration layer may determine whether the agent asks for clarification, invokes a tool, transfers to a human, retries, or terminates. These are not implementation details from an assurance perspective; they are behavior.

A useful model separates:

\[
\text{intent} \rightarrow \text{policy decision} \rightarrow \text{action} \rightarrow \text{state transition} \rightarrow \text{next observation}
\]

Each edge creates a possible assertion point.

## 9. Environment and observability

The environment defines what can be observed and changed. Tests should record enough metadata to reproduce the interpretation of a result:

- agent version;
- model/provider configuration;
- tool versions;
- retrieval corpus/version;
- environment identifier;
- test data identity;
- trace/correlation identifier;
- timestamps and outcomes.

NIST describes machine-readable audit trails as an important part of evaluating agent actions and factual grounding. urlNIST — Building Evaluation Probes into Agentic AIhttps://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai

## 10. Build a test-surface map

Before writing cases, construct a map with one row per surface:

| Surface | Failure class | Evidence |
|---|---|---|
| Instructions | policy deviation | observed response + policy assertion |
| Model | semantic defect | calibrated rubric judgment |
| Memory | leakage/staleness | memory read/write evidence |
| Retrieval | unsupported claim | source-to-claim mapping |
| Tool | misuse/schema defect | tool trace + arguments |
| Orchestration | wrong route/termination | trajectory trace |
| Environment | incorrect side effect | backend state |
| Security | adversarial boundary break | attack + denial/containment evidence |

This becomes the foundation for the next guide: deciding which properties should be evaluated as deterministic facts and which require semantic judgment.

## Research basis

The decomposition reflects current agent-evaluation research that separates objectives such as capability, behavior, reliability and safety from the mechanisms used to measure them. urlEvaluation and Benchmarking of LLM Agents — arXivhttps://arxiv.org/abs/2507.21504 OWASP's 2026 material further emphasizes lifecycle-wide testing of agents with tools, memory and multiple trust boundaries. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html
