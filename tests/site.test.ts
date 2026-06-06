import assert from "node:assert/strict";
import test from "node:test";
import {
  founderProgramCta,
  founderProgramFields,
  founderProgramPath,
  navLinks,
} from "../src/lib/site";

test("primary CTA points to the founder program", () => {
  assert.equal(founderProgramCta, "Join Founder Program");
  assert.equal(founderProgramPath, "/founder-program");
});

test("navigation keeps public marketing routes available", () => {
  assert.deepEqual(
    navLinks.map((link) => link.href),
    ["/features", "/pricing", "/roadmap"],
  );
});

test("founder program form has the initial application fields", () => {
  assert.ok(founderProgramFields.includes("Full name"));
  assert.ok(founderProgramFields.includes("Email"));
  assert.ok(founderProgramFields.length >= 5);
});
