// ✅ Import test and expect functions from Playwright test runner
import { test, expect } from '@playwright/test';

// ✅ Import employee details from an external JSON file for data-driven testing
import employeeData from '../test-data/employeedata.json';

// ✅ Define a test case named "Add Employee"
test('Add Employee', async ({ page }) => {
  
  // 👉 Step 1: Open the OrangeHRM login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // 👉 Step 2: Fill in the username field using data from the JSON file
  await page.locator("input[name='username']").fill(employeeData.username);

  // 👉 Step 3: Fill in the password field using data from the JSON file
  await page.locator("input[type='password']").fill(employeeData.password);

  // 👉 Step 4: Click on the login button to log into the application
  await page.locator("button[type='submit']").click();

  // ✅ Step 5: Verify that the URL changes to the dashboard after successful login
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  // 👉 Step 6: Navigate to the "PIM" module (usually the second item in the left menu)
  await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();

  // 👉 Step 7: Click on the "Add Employee" option inside the PIM module
  await page.locator("//a[normalize-space(text())='Add Employee']").click();

  // 👉 Step 8: Wait for the "First Name" field to be visible to ensure the form has loaded
  await page.locator('input[placeholder="First Name"]').waitFor({ state: 'visible' });

  // 👉 Step 9: Fill in the first name using the value from the JSON file
  await page.locator('input[placeholder="First Name"]').fill(employeeData.firstName);

  // 👉 Step 10: Fill in the last name using the value from the JSON file
  await page.locator('input[placeholder="Last Name"]').fill(employeeData.lastName);

  // 👉 Step 11: Fill in the employee ID using the value from the JSON file
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(employeeData.employeeId);

  // 👉 Step 12: Click on the "Save" button to submit the form and add the employee
  await page.locator("//button[@type='submit']").click();
});
