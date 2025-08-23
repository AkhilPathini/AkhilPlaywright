// Import 'test' and 'expect' from Playwright Test module
import { test, expect } from '@playwright/test';

// Define an Employee object containing three employee data sets
// Each has firstname, lastname, and id
const Employee = {
    emp1: { firstname: 'Pawan', lastname: 'Kalyan', id: '1001' },
    emp2: { firstname: 'Ram', lastname: 'Charan', id: '1002' },
    emp3: { firstname: 'Mahesh', lastname: 'Babu', id: '1003' },
};
// Loop over each key in Employee object to run a test for each employee
for (const emp in Employee) {

    // Get the current employee's details
    const key = Employee[emp];
    console.log(key)

    // Define a Playwright test for adding this employee
    test(`Adding employees - ${key.firstname}`, async ({ page }) => {

        // Step 1: Navigate to the OrangeHRM login page
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Step 2: Fill in the username field with 'Admin'
        await page.locator("//input[@placeholder='Username']").fill('Admin');

        // Step 3: Fill in the password field with 'admin123'
        await page.locator("input[placeholder='Password']").fill("admin123");

        // Step 4: Click the Login button
        await page.locator("//button[contains(.,'Login')]").click();

        // Step 5: Verify navigation to the dashboard page after login
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // Step 6: Navigate to the PIM (Employee Management) module
        await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();

        // Step 7: Click on the "Add Employee" button
        await page.locator("//a[normalize-space(text())='Add Employee']").click();

        // Step 8: Fill in the first name field using the current employee's first name
        await page.locator("//input[@placeholder='First Name']").fill(key.firstname);

        // Step 9: Fill in the last name field using the current employee's last name
        await page.locator("//input[@placeholder='Last Name']").fill(key.lastname);

        // Step 10: Fill in the employee ID field using the current employee's ID
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(key.id);

        // Step 11: Click the Submit button to add the employee
        await page.locator("//button[@type='submit']").click();

    });
}
