import assert from "node:assert/strict";
import test from "node:test";
import { clientKey, createRateLimiter } from "../src/lib/rate-limit.ts";

test("allows up to the limit then blocks", () => {
  const limited = createRateLimiter(1000, 3);
  assert.equal(limited("a", 0), false);
  assert.equal(limited("a", 1), false);
  assert.equal(limited("a", 2), false);
  assert.equal(limited("a", 3), true);
  assert.equal(limited("b", 3), false);
});

test("window expires", () => {
  const limited = createRateLimiter(1000, 1);
  limited("a", 0);
  assert.equal(limited("a", 10), true);
  assert.equal(limited("a", 5000), false);
});

test("clientKey prefers cf-connecting-ip and ignores a spoofed first x-forwarded-for entry", () => {
  assert.equal(clientKey(new Headers({ "cf-connecting-ip": "1.1.1.1" })), "1.1.1.1");
  assert.equal(clientKey(new Headers({ "x-forwarded-for": "9.9.9.9, 2.2.2.2" })), "2.2.2.2");
  assert.equal(clientKey(new Headers()), "unknown");
});
