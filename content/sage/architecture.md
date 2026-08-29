# SAGE architecture decision record

SAGE is implemented as a graph rather than a linear prompt chain.

### Parallel work

Research specialists run independently because technical, industry, competitor, and practitioner evidence can be gathered concurrently.

### Sequential gates

Evidence consolidation, outline approval, drafting, fact checking, SEO compliance, and publication remain ordered because each stage consumes a controlled artifact from the previous stage.

### Revision routing

A future provider adapter should route a failed review back to the smallest valid revision stage instead of regenerating the entire document. Technical failures return to research or outline; editorial failures return to drafting; evidence failures return to research; SEO failures return to SEO revision.

### Publication

The graph produces a publication manifest and PR payload. GitHub remains the source of truth. Vercel consumes the merged repository state.
