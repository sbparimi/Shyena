# Conversation Trajectories & Execution Integrity

> **Level: Practitioner** · **Purpose:** evaluate the entire interaction path rather than assuming that a plausible final message proves the task was correctly completed.

## 1. A conversation is a trajectory

An agent execution is a sequence of states and actions:

\[
\tau = (s_0,a_0,s_1,a_1,\ldots,s_n)
\]

The trajectory includes user turns, agent turns, tool calls, tool results, policy decisions, state changes, retries and termination. The final message is one observation within this sequence.

For deterministic applications, end-state assertions can often be sufficient. For agents, trajectory properties matter because a system can reach an acceptable-looking endpoint through an invalid intermediate path.

## 2. Outcome equivalence versus path equivalence

Two trajectories can be different yet equivalent for the business goal.

For example, an agent may obtain a delivery estimate from a cached service in one run and from a live service in another, while both yield the same valid customer-facing result.

Conversely, two trajectories can end with the same text but represent different risk:

- one used an authorized account lookup;
- the other exposed a sensitive record through an unintended tool;
- one completed the requested state transition;
- the other only claimed that it did.

The test contract should therefore define which path properties are invariant and which path variations are acceptable.

## 3. Execution integrity

Define an integrity predicate over the trajectory:

\[
I(\tau)=1 \iff \bigwedge_{k=1}^{m} i_k(\tau)=1
\]

Each `i_k` can represent a necessary property such as:

- required verification occurred before a protected action;
- a tool response was actually received before a completion claim;
- a handover occurred only after the defined trigger;
- retries did not create duplicate mutations;
- no forbidden capability was invoked;
- the turn budget remained within policy.

Execution integrity prevents a semantic judge from awarding a high score to an outcome achieved through an invalid trajectory.

## 4. False completion

One of the most important integrity failures is **premature completion**.

An agent can stop after a partial task:

> User: “Please change my address and confirm when done.”
>
> Agent: “I can help with address changes. Anything else?”

The conversation may be linguistically coherent while the goal is incomplete.

The test should require explicit completion evidence, not infer completion from conversational closure.

## 5. Handover is a state transition

A handover is not automatically a failure or success. Its correctness depends on the scenario policy.

Test at least:

1. **Trigger correctness** — was the handover condition actually met?
2. **Timing correctness** — did the handover happen neither too early nor too late?
3. **Destination correctness** — was the correct queue/agent/human path selected?
4. **Context preservation** — was relevant conversation state transferred?
5. **User disclosure** — was the user accurately told what would happen next?

A handover should be represented as an explicit transition in the trace.

## 6. Looping and retry behavior

Agent loops can appear superficially helpful while consuming unbounded time or causing repeated side effects.

Define a bounded execution policy:

\[
N_{turns} \leq N_{max}, \qquad N_{retries}(tool) \leq R_{max}
\]

The limits should be chosen from business and technical constraints rather than arbitrary convenience.

Repeated identical actions should also be detectable. A retry-safe agent may re-read state, but a non-idempotent mutation should not silently execute twice.

## 7. Counterfactual trajectory reasoning

A useful expert technique is to ask: *what evidence would distinguish this valid trajectory from the nearest plausible invalid trajectory?*

For example, suppose an agent says a booking was cancelled. The invalid counterfactual may be:

- cancellation tool called with wrong booking ID;
- cancellation rejected by backend;
- agent inferred success from the absence of an error;
- final response nevertheless stated success.

The required evidence then becomes clear: tool request, tool response and booking state after the action.

## 8. Partial observability

External APIs can fail, logs can be incomplete, and some system decisions may occur outside the visible transcript. Do not silently treat missing telemetry as proof of correct execution.

Use three result categories when necessary:

- **Pass:** evidence supports the claim.
- **Fail:** evidence contradicts the claim or an invariant is violated.
- **Inconclusive:** the required evidence is unavailable or ambiguous.

Collapsing “inconclusive” into “pass” is a serious assurance defect.

## 9. Trajectory coverage

Track more than intent coverage. Useful coverage dimensions include:

\[
Coverage(\tau)=f(path, state, tool, policy, failure, termination)
\]

Examples of structural cases include:

- direct completion;
- clarification branch;
- invalid-input recovery;
- tool timeout and retry;
- authorization failure;
- human handover;
- external state conflict;
- premature termination attempt.

This approach produces a smaller but more meaningful regression suite than unconstrained paraphrase generation.

## 10. Practitioner implementation pattern

Capture each event with a stable correlation ID and typed event class. A simplified representation is:

```json
{
  "turn": 7,
  "event": "tool_call",
  "tool": "update_address",
  "arguments": {"customer_id": "C123", "address": "..."},
  "authorization": "verified",
  "result": {"status": "success"},
  "state_after": {"address": "..."}
}
```

The evaluator can then distinguish a factual trace assertion from a semantic judgment about the quality of the user's explanation.

Reliability research is increasingly moving from single-run success toward repeated execution, perturbation and controlled fault conditions. urlReliabilityBench — arXiv 2026https://arxiv.org/abs/2601.06112

## Research basis

NIST's work on agentic evaluation emphasizes auditable traces and machine-readable evidence rather than relying solely on final natural-language outputs. urlNIST — Building Evaluation Probes into Agentic AIhttps://www.nist.gov/programs-projects/building-evaluation-probes-agentic-ai
