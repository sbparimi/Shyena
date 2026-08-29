# SAGE state machine

```text
strategy
  -> parallel research
  -> evidence
  -> outline
  -> draft
  -> technical + editorial + adversarial review
  -> fact-check
  -> SEO/GEO
  -> quality-gate
      FAIL -> targeted revision
      PASS -> publication manifest -> PR -> CI -> merge
```

The runtime should checkpoint the state after each node. A failed node must retain its findings and route the next run to the smallest valid repair stage.
