import assert from "node:assert/strict";
import test from "node:test";
import { withSecurityHeaders } from "../src/lib/security-headers.ts";

test("adds security headers and keeps body, status and existing headers", async () => {
  const res = withSecurityHeaders(
    new Response("hi", {
      status: 201,
      headers: { "x-keep": "1", "x-frame-options": "SAMEORIGIN" },
    }),
  );
  assert.equal(res.status, 201);
  assert.equal(await res.text(), "hi");
  assert.equal(res.headers.get("x-keep"), "1");
  assert.equal(res.headers.get("x-content-type-options"), "nosniff");
  assert.equal(res.headers.get("x-frame-options"), "SAMEORIGIN");
  assert.match(res.headers.get("strict-transport-security") ?? "", /max-age=31536000/);
});
