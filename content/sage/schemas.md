# SAGE artifact contracts

The production implementation should persist these typed artifacts in the graph state:

- `ContentRequest`
- `ContentStrategy`
- `SEOResearch`
- `Source[]`
- `EvidenceClaim[]`
- `ContentOutline`
- `DraftArticle`
- `ReviewReport`
- `FactCheckReport`
- `SEOReport`
- `QualityGateResult`
- `PublicationManifest`

Each artifact should contain an owner, timestamp, source/provenance references, and schema version. Review agents may reject or annotate artifacts; they must not silently rewrite evidence.
