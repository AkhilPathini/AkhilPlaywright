// Import Playwright and Faker
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Add employee with Faker data', async ({ page }) => {
    //Generate random employee test data using Faker
    const firstname = faker.person.firstName();              // e.g. "Ravi"
    const lastname = faker.person.lastName();                // e.g. "Sharma"
    const empId = faker.string.numeric(4);                   // e.g. "4821"
    const email = faker.internet.email({ firstName: firstname, lastName: lastname }); // e.g. "ravi.sharma@gmail.com"

    // STEP 1: Login
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    // STEP 2: Navigate to PIM
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();

    // STEP 3: Add Employee
    await page.locator("//a[normalize-space(text())='Add Employee']").click();
    await page.locator("//input[@placeholder='First Name']").fill(firstname);
    await page.locator("//input[@placeholder='Last Name']").fill(lastname);
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(empId);

    // STEP 4: Save Employee
    await page.locator("//button[@type='submit']").click();

    // Log the generated test data in console
    console.log(`Employee Added: ${firstname} ${lastname} | ID: ${empId} | Email: ${email}`);
});

