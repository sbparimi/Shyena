import type { FactCheckReport, ReviewReport, SEOReport, QualityGateResult } from "./types";

export function evaluateQualityGate(input: {
  reviews: ReviewReport[];
  factCheck?: FactCheckReport;
  seo?: SEOReport;
}): QualityGateResult {
  const reasons: string[] = [];
  const critical = input.reviews.flatMap((review) => review.criticalFindings);

  if (critical.length > 0) reasons.push(`${critical.length} critical review finding(s)`);
  if (input.reviews.some((review) => !review.passed)) reasons.push("independent review did not pass");
  if (!input.factCheck?.passed) reasons.push("fact check did not pass");
  if (!input.seo?.passed) reasons.push("SEO contract did not pass");

  const reviewScores = input.reviews.map((review) => review.score);
  const averageReview = reviewScores.length
    ? reviewScores.reduce((sum, score) => sum + score, 0) / reviewScores.length
    : 0;
  const score = Math.round(averageReview * 100) / 100;

  return { passed: reasons.length === 0, reasons, score };
}
