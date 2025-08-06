// ✅ Import required modules
import { test, expect } from '@playwright/test'; // Import Playwright test and assertion utilities
// import dotenv from 'dotenv';                     // Import dotenv to load environment variables
// dotenv.config();                                 // Load environment variables from .env file

test('GenerateCode (Data from .env)', async ({ page }) => {

    // 👉 Step 1: Navigate to the OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 👉 Step 2: Enter login credentials from .env
    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.USER_NAME); // Fill username
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASS_WORD); // Fill password

    // 👉 Step 3: Click on the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // 👉 Step 4: Navigate to "Admin" section on the dashboard
    await page.getByRole('link', { name: 'Admin' }).click(); // Click 'Admin' menu item

    // 👉 Step 5: Expand "Job" submenu
    await page.getByText('Job', { exact: true }).click();    // Click 'Job' under Admin

    // 👉 Step 6: Click on "Job Titles" under the Job menu
    await page.getByRole('menuitem', { name: 'Job Titles' }).click(); // Open Job Titles page

    // 👉 Step 7: Click the "Add" button to add a new job title
    await page.getByRole('button', { name: ' Add' }).click();

    // 👉 Step 8: Fill in job title using value from .env
    await page.getByRole('textbox').nth(1).fill(process.env.JOB_TITLE); // Fill Job Title field

    // 👉 Step 9: Click "Save" to submit the new job title
    await page.getByRole('button', { name: 'Save' }).click();
});

