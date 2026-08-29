export type ContentStage =
  | "strategy"
  | "research"
  | "evidence"
  | "outline"
  | "draft"
  | "review"
  | "fact-check"
  | "seo"
  | "quality-gate"
  | "publication";

export interface ContentRequest {
  topic: string;
  audience: string[];
  businessGoal: string;
  contentType: "blog" | "doc" | "guide" | "comparison";
  primaryKeyword?: string;
}

export interface ContentStrategy {
  thesis: string;
  searchIntent: string;
  funnelStage: "awareness" | "consideration" | "decision";
  uniqueAngle: string;
  targetConversion?: string;
}

export interface Source {
  id: string;
  title: string;
  url: string;
  publisher?: string;
  publishedAt?: string;
  authority: number;
  retrievedAt: string;
}

export interface EvidenceClaim {
  id: string;
  claim: string;
  sourceIds: string[];
  verified: boolean;
  confidence: number;
  citationRequired: boolean;
}

export interface ContentOutline {
  title: string;
  sections: Array<{ heading: string; purpose: string; evidenceIds: string[] }>;
}

export interface DraftArticle {
  title: string;
  slug: string;
  description: string;
  body: string;
  evidenceIds: string[];
}

export interface ReviewReport {
  reviewer: "technical" | "editorial" | "adversarial";
  score: number;
  passed: boolean;
  criticalFindings: string[];
  findings: string[];
}

export interface FactCheckReport {
  passed: boolean;
  unsupportedClaimIds: string[];
  citationErrors: string[];
}

export interface SEOReport {
  passed: boolean;
  compliance: Record<string, boolean>;
  score: number;
  missing: string[];
}

export interface QualityGateResult {
  passed: boolean;
  reasons: string[];
  score: number;
}

export interface PublicationManifest {
  path: string;
  slug: string;
  canonical: string;
  branch: string;
  requiresReview: boolean;
}

export interface SAGEState {
  request: ContentRequest;
  strategy?: ContentStrategy;
  sources?: Source[];
  evidence?: EvidenceClaim[];
  outline?: ContentOutline;
  draft?: DraftArticle;
  reviews?: ReviewReport[];
  factCheck?: FactCheckReport;
  seo?: SEOReport;
  qualityGate?: QualityGateResult;
  publication?: PublicationManifest;
  errors: string[];
}
