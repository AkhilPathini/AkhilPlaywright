const { test, expect } = require('@playwright/test');

test("Post message in Buzz module of OrangeHRM", async ({ page }) => {

    // Go to OrangeHRM Login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Login
    await page.locator('input[placeholder="Username"]').fill("Admin");
    await page.locator('input[placeholder="Password"]').fill("admin123");
    await page.locator('button[type="submit"]').click();

    // Wait for dashboard
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    // Navigate to Buzz
    await page.locator('//span[text()="Buzz"]').click();

    // --- Message 1 ---
    await page.locator('.oxd-buzz-post-input').fill("Hello Everyone, Good Morning!");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("//p[text()='Hello Everyone, Good Morning!']").first())
      .toHaveText("Hello Everyone, Good Morning!");
    await page.waitForTimeout(3000)

    // --- Message 2 ---
    await page.locator('.oxd-buzz-post-input').fill("My name is Raju!");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("//p[text()='My name is Raju!']").first())
      .toHaveText("My name is Raju!");
    await page.waitForTimeout(3000)

    // --- Message 3 ---
    await page.locator('.oxd-buzz-post-input').fill("Welcome to Playwright with JavaScript!");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("//p[text()='Welcome to Playwright with JavaScript!']").first())
      .toHaveText("Welcome to Playwright with JavaScript!");
    await page.waitForTimeout(3000)

});
