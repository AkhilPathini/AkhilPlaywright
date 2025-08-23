const { test, expect } = require('@playwright/test');

const LoginCredentials={
    PageURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    Username: 'Admin',
    Password: 'admin123'
}

const MessagesList={
    Message1 : "Hello Everyone, Good Morning!",
    Message2 : "My name is Raju!",
    Message3 : "Welcome to Playwright with JavaScript!"
}

test("DataDriven Testing in Post message in Buzz module of OrangeHRM", async ({ page }) => {

    // Go to OrangeHRM Login page
    await page.goto(LoginCredentials.PageURL);

    // Login
    await page.locator('input[placeholder="Username"]').fill(LoginCredentials.Username);
    await page.locator('input[placeholder="Password"]').fill(LoginCredentials.Password);
    await page.locator('button[type="submit"]').click();

    // Wait for dashboard
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    // Navigate to Buzz
    await page.locator('//span[text()="Buzz"]').click();

    // --- Message 1 ---
    await page.locator('.oxd-buzz-post-input').fill(MessagesList.Message1);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator(`//p[text()=${MessagesList.Message1}]`).first())
      .toHaveText(MessagesList.Message1);
    await page.waitForTimeout(3000)

    // --- Message 2 ---
    await page.locator('.oxd-buzz-post-input').fill(MessagesList.Message2);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator(`//p[text()=${MessagesList.Message2}]`).first())
      .toHaveText(MessagesList.Message2);
    await page.waitForTimeout(3000)

    // --- Message 3 ---
    await page.locator('.oxd-buzz-post-input').fill(MessagesList.Message3);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator(`//p[text()=${MessagesList.Message2}]`).first())
      .toHaveText(MessagesList.Message3);
    await page.waitForTimeout(3000)

});
