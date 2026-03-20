import { test, expect } from "@playwright/test";

test.describe("Documentation", () => {
  test("docs hub page loads", async ({ page }) => {
    await page.goto("/docs");
    await expect(
      page.getByRole("heading", { name: /effectum docs/i }),
    ).toBeVisible();
  });

  test("docs hub has navigation links", async ({ page }) => {
    await page.goto("/docs");
    await expect(page.getByText("Getting Started").first()).toBeVisible();
    await expect(page.getByText("Commands").first()).toBeVisible();
  });

  test("navigates to getting started", async ({ page }) => {
    await page.goto("/docs/getting-started");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("navigates to commands page", async ({ page }) => {
    await page.goto("/docs/commands");
    await expect(
      page.getByRole("heading", { name: /commands/i }),
    ).toBeVisible();
  });

  test("commands page lists commands", async ({ page }) => {
    await page.goto("/docs/commands");
    const commands = ["/plan", "/tdd", "/verify", "/ralph-loop"];
    for (const cmd of commands) {
      await expect(
        page.locator("code", { hasText: cmd }).first(),
      ).toBeVisible();
    }
  });
});
