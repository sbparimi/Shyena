# Tool Use, State & Side Effects

> **Level: Practitioner** · **Purpose:** test the action boundary where an agent's reasoning becomes a real API call, state change or external side effect.

## 1. Tool invocation is behavior

For an agent with tools, the important unit is not only the response text. It is the decision to invoke a capability, the arguments supplied, the authorization context, the result received and the resulting state.

A tool execution can be modeled as:

\[
X_t=(tool, args, auth, result, \Delta S)
\]

Assurance should evaluate every component relevant to the business risk.

## 2. Selection correctness

Tool choice is part of the contract. If the agent has `lookup_order`, `cancel_order` and `refund_order`, a request for delivery status should not trigger a mutation merely because a mutation tool is available.

Test positive and negative affordances:

- required tool is selected when the goal needs it;
- irrelevant tools are not selected;
- privileged tools are inaccessible under insufficient authorization;
- the agent does not invent a capability that is not available.

OWASP's agent-security guidance specifically identifies tool misuse and privilege escalation as recurring abuse cases that should be tested systematically. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html

## 3. Argument correctness

A correct tool can still be used incorrectly. Validate arguments against both schema and business semantics.

For an update operation, test:

1. required fields exist;
2. types and formats are valid;
3. identifiers refer to the intended entity;
4. values satisfy domain constraints;
5. prohibited fields cannot be smuggled into the request;
6. the authorization context matches the requested operation.

Schema validation catches malformed data. Business assertions catch semantically wrong data.

## 4. Authorization before action

The ordering of checks matters. A privileged action should not execute first and then be rejected by a conversational policy layer.

The desired relation is:

\[
Authenticate \rightarrow Authorize \rightarrow Validate \rightarrow Execute
\]

The exact flow depends on the application, but protected effects need a precondition that can be independently inspected.

## 5. Side effects are the ground truth

Suppose the agent says “refund issued.” There are several possible realities:

- the refund API succeeded and the ledger changed;
- the API returned a failure and no refund occurred;
- the API timed out after committing;
- a retry created two refunds;
- the wrong transaction was refunded.

The final sentence does not distinguish these states. A reliable test observes the external state or an authoritative event ledger.

## 6. Idempotency and retries

Agents operate in environments with timeouts and transient failures. A robust system must have clear retry semantics.

For a mutation `M`, define whether repeated execution should satisfy:

\[
M(M(S)) = M(S)
\]

That is the idealized idempotent case. Where true idempotence is impossible, the system should use a transaction or idempotency key so that the business operation still occurs at most once.

Test the failure window between request transmission and response receipt. This is where naïve retry logic can create duplicate effects.

## 7. State-machine testing

Model important business entities as finite states:

\[
S_0 \xrightarrow{a_1} S_1 \xrightarrow{a_2} S_2
\]

Then define legal and illegal transitions.

Example:

```text
PENDING -> CONFIRMED -> DISPATCHED -> DELIVERED
             |               |
             v               v
          CANCELLED       RETURNED
```

A test should verify both allowed transitions and attempts to violate the state machine.

## 8. Tool-result handling

Agents need explicit tests for how they interpret tool results.

At minimum exercise:

- success;
- validation error;
- authorization failure;
- not found;
- timeout;
- partial response;
- malformed response;
- rate limit;
- downstream unavailable.

A particularly dangerous failure is **false success inference**: the agent receives incomplete evidence and generates a confident success message.

## 9. Multi-tool transactions

Many business journeys require several calls. Testing should establish ordering and dependency constraints.

For example:

\[
VerifyIdentity \rightarrow ReadAccount \rightarrow ValidateEligibility \rightarrow Mutate \rightarrow VerifyState
\]

The order can be essential. Executing the mutation before eligibility verification is a policy violation even if the final state happens to look correct.

## 10. Evidence capture

For important actions, preserve:

```json
{
  "tool": "refund",
  "arguments": {"transaction_id": "T-123", "amount": 42.00},
  "authorization": {"customer_verified": true},
  "request_id": "req-abc",
  "result": {"status": "success"},
  "state_before": {"balance": 42.00},
  "state_after": {"balance": 0.00}
}
```

This allows a reviewer to reconstruct the decision without relying on the model's narrative.

## 11. Risk-based prioritization

Not every tool call requires equal test depth. Prioritize by:

\[
Risk \approx Impact \times Likelihood \times Exposure
\]

High-impact mutations, privileged operations, financial transactions and irreversible actions should receive deeper negative-path, retry and authorization testing than read-only operations.

## Research basis

OWASP recommends abuse-case matrices that include unauthorized tool use, privilege escalation, recursive tool abuse and approval bypass, with evidence showing approvals, denials and circuit-breaker behavior. urlOWASP AI Agent Security Cheat Sheethttps://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html

Recent reliability research also explores controlled tool/API failures, schema drift, timeouts and rate limits as first-class agent reliability conditions. urlReliabilityBench — arXiv 2026https://arxiv.org/abs/2601.06112
