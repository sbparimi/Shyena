# Goal-Based Test Design

> **Level: Practitioner** · **Purpose:** convert business outcomes into executable, evidence-backed assurance specifications.

## 1. Start from the outcome, not the transcript

A conventional scripted test often begins with clicks and expected strings. An agent test should begin with a claim about the outcome.

The core contract is:

\[
C = (P, G, I, E, T, R)
\]

where `P` is persona/context, `G` is the goal, `I` is the invariant set, `E` is required evidence, `T` is termination logic and `R` is the decision rule.

The specification should describe the behavioral boundary without over-prescribing a single natural-language path.

## 2. Persona is part of the state

A persona is more than a name. It defines the conditions under which the agent must operate: identity state, permissions, prior context, preferences, language, domain knowledge and relevant constraints.

Good persona design deliberately includes variation. If every test user asks perfect questions and supplies all required fields immediately, the suite measures the scripted happy path rather than the production interaction distribution.

Use personas that differ along controlled axes, such as:

- knowledge of the process;
- ambiguity of the request;
- emotional or urgency signals;
- authentication status;
- account or entitlement state;
- willingness to follow clarification prompts.

The goal is not random chaos. It is controlled coverage of meaningful behavioral regions.

## 3. Goal decomposition

Many business goals are compound. “Resolve a delivery problem” may imply identifying the parcel, understanding its status, selecting an eligible remedy, executing the remedy and communicating the result.

Decompose the goal into observable subclaims:

1. the correct customer/context is established;
2. the relevant object is identified;
3. required policy conditions are checked;
4. the permitted action is selected;
5. the external state transition succeeds;
6. the user receives a truthful explanation.

This decomposition creates precise assertion points without forcing a rigid conversation script.

## 4. Invariants are first-class requirements

A goal says what should eventually be true. An invariant says what must never become false during execution.

Examples:

- no privileged tool before authorization;
- no irreversible action before confirmation;
- no personal data disclosure to an unauthenticated party;
- no duplicate mutation on retry;
- no unsupported factual claim when the source corpus contains no evidence.

Formally, for state sequence \(S_0, S_1, \dots, S_n\), an invariant \(I\) requires:

\[
I(S_t)=true \quad \forall t \in [0,n]
\]

This is often a stronger safety property than checking only the final state.

## 5. Playbooks versus scripts

A playbook defines the behavioral intent while allowing multiple valid turns.

A script says:

> “Send exactly this sentence, then click this control.”

A playbook says:

> “Request identity verification when required; once verified, complete the address update and prove the resulting account state.”

The second form is more resilient to legitimate linguistic variation and can be exercised against agents that do not follow a predetermined surface path.

## 6. Evidence requirements

Every important claim should identify its strongest available evidence source.

| Claim | Weak evidence | Stronger evidence |
|---|---|---|
| Action occurred | Agent says it happened | Backend state or API result |
| Policy respected | Fluent refusal | Authorization/policy trace |
| Answer grounded | Similar wording | Claim-to-source support |
| Goal completed | “Anything else?” | Verified end state |
| Handover correct | Transfer message | Routing decision + handover event |

Evidence requirements prevent the evaluator from silently substituting a convenient proxy for the property actually under test.

## 7. Termination conditions

Agent conversations need explicit stopping rules. A test should terminate on one of several states:

- goal achieved;
- hard invariant violated;
- safety condition triggered;
- unrecoverable system error;
- controlled timeout or turn budget exceeded;
- evaluator declares the trajectory inconclusive.

Do not equate “the agent stopped talking” with success. Premature termination is a common false-positive mechanism.

## 8. Coverage should be structural

Coverage should be measured over risk-relevant behavior, not just number of tests.

Useful axes include:

\[
Coverage = f(Intent, State, Tool, Policy, Risk, Trajectory)
\]

A suite containing 1,000 paraphrases of one happy path can have less assurance value than 100 cases that span important policies, tool boundaries and state transitions.

## 9. Specification template

A production-grade specification can be expressed as:

```yaml
goal: complete_address_change
persona:
  authentication: verified
  customer_state: active
playbook:
  - identify_request
  - validate_constraints
  - execute_change
  - confirm_result
invariants:
  - no_change_before_verification
  - no_duplicate_mutation
  - no_sensitive_data_leak
termination:
  success: address_record_matches_target
  fail: any_invariant_violation
  timeout_turns: 12
evidence:
  - conversation_trace
  - tool_trace
  - backend_state
```

The exact schema can vary. The principle is stable: the test should be an executable assurance contract, not a collection of UI instructions.

## 10. Practitioner review questions

Before execution, ask whether another engineer could understand the claim without seeing the implementation. If the answer depends on internal node names or a fragile sequence of clicks, the specification is probably coupled to implementation rather than behavior.

The next guide focuses on a second source of false confidence: an agent can achieve a plausible local outcome while the overall conversation trajectory is invalid.

## Research basis

Recent agent-evaluation research emphasizes realistic interaction, dynamic environments, fine-grained objectives and scalable evaluation rather than simplistic single-turn benchmarks. urlSurvey on Evaluation of LLM-based Agents — arXivhttps://arxiv.org/abs/2503.16416
