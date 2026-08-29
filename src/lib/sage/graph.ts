import type { SAGEState } from "./types";

export type SageNode = (state: SAGEState) => Promise<Partial<SAGEState>>;

export interface SageGraph {
  run(initial: SAGEState): Promise<SAGEState>;
}

/**
 * Dependency-light graph harness. Provider-specific LLM/search adapters are
 * intentionally injected, keeping orchestration deterministic and testable.
 */
export function createSageGraph(nodes: Record<string, SageNode>): SageGraph {
  return {
    async run(initial) {
      let state = initial;
      const apply = async (name: string) => {
        const node = nodes[name];
        if (!node) throw new Error(`SAGE node not configured: ${name}`);
        state = { ...state, ...(await node(state)) };
      };

      await apply("strategy");

      const research = await Promise.all([
        nodes.researchTechnical?.(state),
        nodes.researchIndustry?.(state),
        nodes.researchCompetitors?.(state),
        nodes.researchPractitioners?.(state),
      ].filter(Boolean) as Array<Promise<Partial<SAGEState>>>);
      state = research.reduce((acc, patch) => ({ ...acc, ...patch }), state);

      await apply("evidence");
      await apply("outline");
      await apply("draft");

      const reviews = await Promise.all([
        nodes.reviewTechnical?.(state),
        nodes.reviewEditorial?.(state),
        nodes.reviewAdversarial?.(state),
      ].filter(Boolean) as Array<Promise<Partial<SAGEState>>>);
      state = reviews.reduce((acc, patch) => ({ ...acc, ...patch }), state);

      await apply("factCheck");
      await apply("seo");
      await apply("qualityGate");

      if (!state.qualityGate?.passed) {
        return state;
      }

      await apply("publication");
      return state;
    },
  };
}
