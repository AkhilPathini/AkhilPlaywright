// Import Playwright and Faker
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

// -------------------[ STEP 1: Generate 3 Employees with Faker ]-------------------
const employees = [
  {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    empId: faker.string.numeric(4),
    email: faker.internet.email()
  },
  {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    empId: faker.string.numeric(4),
    email: faker.internet.email()
  },
  {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    empId: faker.string.numeric(4),
    email: faker.internet.email()
  }
];

// -------------------[ STEP 2: Create a test for each employee ]-------------------
for (const emp of employees) {
  test(`Add employee - ${emp.firstname} ${emp.lastname}`, async ({ page }) => {

    // -------------------[ Login ]-------------------
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    // -------------------[ Navigate to PIM ]-------------------
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();

    // -------------------[ Add Employee ]-------------------
    await page.locator("//a[normalize-space(text())='Add Employee']").click();
    await page.locator("//input[@placeholder='First Name']").fill(emp.firstname);
    await page.locator("//input[@placeholder='Last Name']").fill(emp.lastname);
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emp.empId);

    // -------------------[ Save Employee ]-------------------
    await page.locator("//button[@type='submit']").click();

    // ✅ Log generated test data
    console.log(`✅ Employee Added: ${emp.firstname} ${emp.lastname} | ID: ${emp.empId} | Email: ${emp.email}`);
  });
}
