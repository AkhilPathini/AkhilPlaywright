// commands for run the codegen test

//npx playwright codegen <URL> --output <filename> creates new codegenerate file 
//npx playwright codegen --target javascript  .. generate script in required langugae
//npx playwright codegen --browser chromium    ..record script in provided browser
//npx playwright codegen --device "iphone13"   ..generate script in supportive devices
//npx playwright codegen --viewport-size "1280,720"   ..generate script in provides screen size



import { test, expect } from '@playwright/test';
// ✅ Import 'test' and 'expect' from Playwright to define and validate automated tests.

test('GenerateCode', async ({ page }) => {
    // ✅ Defines a test named 'GenerateCode' with an async function using 'page' for browser control.

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // 👉 Opens the OrangeHRM login page.

    await page.getByRole('textbox', { name: 'Username' }).click();
    // 👉 Clicks the 'Username' textbox to focus.

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // 👉 Finds the textbox with the accessible name 'Username' and fills it with 'Admin'.

    await page.getByRole('textbox', { name: 'Password' }).click();
    // 👉 Clicks the 'Password' textbox to focus.

    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // 👉 Fills the 'Password' textbox with 'admin123'.

    await page.getByRole('button', { name: 'Login' }).click();
    // 👉 Clicks the 'Login' button to log in.

    await page.getByRole('link', { name: 'Admin' }).click();
    // 👉 Clicks on the 'Admin' menu link in the OrangeHRM dashboard.

    await page.getByText('Job', { exact: true }).click();
    // 👉 Clicks on the 'Job' section under the Admin module.

    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    // 👉 Clicks on the 'Job Titles' menu item under the Job section.

    await page.getByRole('button', { name: ' Add' }).click();
    // 👉 Clicks the 'Add' button to add a new job title.

    await page.getByRole('textbox').nth(1).click();
    // 👉 Clicks on the second textbox in the form to focus (Job Title field).

    await page.getByRole('textbox').nth(1).fill('CMD');
    // 👉 Fills the Job Title field with 'CMD'.

    await page.getByRole('button', { name: 'Save' }).click();
    // 👉 Clicks the 'Save' button to save the newly added job title.

});

// ✅ Test completes here. It automates logging in, navigating to Job Titles, and adding a new job title in OrangeHRM using Playwright.



