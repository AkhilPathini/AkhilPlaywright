import { test, expect } from '@playwright/test';
// ✅ Import 'test' and 'expect' from Playwright to create and validate automated tests.

test('Addemployee', async ({ page }) => {
    // ✅ Define a test case named 'Addemployee' with an async function using 'page' for browser control.

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // 👉 Opens the OrangeHRM login page in the browser.

    await page.locator("input[name='username']").fill("Admin");
    // 👉 Finds the username input field (by name attribute) and fills it with "Admin".

    await page.locator("input[type='password']").fill("admin123");
    // 👉 Finds the password input field (by type attribute) and fills it with "admin123".

    await page.locator("button[type='submit']").click();
    // 👉 Finds the login button (by type attribute) and clicks it to log in.

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    // ✅ Verifies that the URL has changed to the dashboard URL after successful login.

    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
    // 👉 Clicks on the second item in the main menu (usually "PIM" in OrangeHRM).

    await page.locator("//a[normalize-space(text())='Add Employee']").click();
    // 👉 Clicks on the "Add Employee" link under the PIM module.

    await page.locator("//input[@placeholder='First Name']").fill("Pawan");
    // 👉 Fills the "First Name" input with "Pawan".

    await page.locator("//input[@placeholder='Last Name']").fill("kalyan");
    // 👉 Fills the "Last Name" input with "kalyan".

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("8458");
    // 👉 Fills the "Employee ID" input with "8458".

    await page.locator("//button[@type='submit']").click();
    // 👉 Clicks the "Save" button to add the employee.

});


