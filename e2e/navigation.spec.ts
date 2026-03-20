import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("header is visible on all pages", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible();

    await page.goto("/docs");
    await expect(page.locator("header")).toBeVisible();
  });

  test("footer is visible on all pages", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer")).toBeVisible();
    await expect(
      page.locator("footer").getByText("Jason Salomon-Rinnert"),
    ).toBeVisible();
  });

  test("mobile menu toggle works", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const menuBtn = page.getByLabel("Open menu");
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    await expect(page.getByLabel("Close menu")).toBeVisible();
  });

  test("404 page renders", async ({ page }) => {
    await page.goto("/nonexistent-page");
    await expect(page.getByText("Page not found")).toBeVisible();
    await expect(page.getByText("Go home")).toBeVisible();
  });
});
