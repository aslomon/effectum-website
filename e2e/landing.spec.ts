import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("loads with hero section", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /Describe what you want/i }),
    ).toBeVisible();
  });

  test("displays install command in hero", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("section").first().getByText("npx @aslomon/effectum"),
    ).toBeVisible();
  });

  test("shows feature section", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Everything you need to ship" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "PRD Workshop" }).first(),
    ).toBeVisible();
  });

  test("shows how it works section", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "How it works" }),
    ).toBeVisible();
  });

  test("shows story section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("2 years of testing methods.")).toBeVisible();
  });

  test("has GitHub link", async ({ page }) => {
    await page.goto("/");
    const githubLink = page.getByRole("link", { name: /GitHub/i }).first();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/aslomon/effectum",
    );
  });
});
