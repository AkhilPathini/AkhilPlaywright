// Import 'test' and 'expect' from Playwright Test module
import { test, expect } from '@playwright/test';

test("Add multiple employees in one test without loop", async ({ page }) => {

  // Step 1: Navigate to the OrangeHRM login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Step 2: Login as Admin
  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("//button[contains(.,'Login')]").click();

  // Step 3: Verify dashboard page
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  //Employee 1
  await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
  await page.locator("//a[normalize-space(text())='Add Employee']").click();
  await page.locator("//input[@placeholder='First Name']").fill("Pawan");
  await page.locator("//input[@placeholder='Last Name']").fill("Kalyan");
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("1001");
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);

  //Employee 2
  await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
  await page.locator("//a[normalize-space(text())='Add Employee']").click();
  await page.locator("//input[@placeholder='First Name']").fill("Ram");
  await page.locator("//input[@placeholder='Last Name']").fill("Charan");
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("1002");
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);

  //Employee 3
  await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
  await page.locator("//a[normalize-space(text())='Add Employee']").click();
  await page.locator("//input[@placeholder='First Name']").fill("Mahesh");
  await page.locator("//input[@placeholder='Last Name']").fill("Babu");
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("1003");
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);

});


// // Import 'test' and 'expect' from Playwright Test module
// import { test, expect } from '@playwright/test';

// // Test case for Employee 1: Pawan Kalyan
// test("Add Employee - Pawan Kalyan", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//     // Login
//     await page.locator("//input[@placeholder='Username']").fill('Admin');
//     await page.locator("input[placeholder='Password']").fill("admin123");
//     await page.locator("//button[contains(.,'Login')]").click();
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//     // Navigate to PIM and Add Employee
//     await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
//     await page.locator("//a[normalize-space(text())='Add Employee']").click();
//     await page.locator("//input[@placeholder='First Name']").fill("Pawan");
//     await page.locator("//input[@placeholder='Last Name']").fill("Kalyan");
//     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("1001");
//     await page.locator("//button[@type='submit']").click();
// });

// // Test case for Employee 2: Ram Charan
// test("Add Employee - Ram Charan", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//     // Login
//     await page.locator("//input[@placeholder='Username']").fill('Admin');
//     await page.locator("input[placeholder='Password']").fill("admin123");
//     await page.locator("//button[contains(.,'Login')]").click();
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//     // Navigate to PIM and Add Employee
//     await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
//     await page.locator("//a[normalize-space(text())='Add Employee']").click();
//     await page.locator("//input[@placeholder='First Name']").fill("Ram");
//     await page.locator("//input[@placeholder='Last Name']").fill("Charan");
//     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("1002");
//     await page.locator("//button[@type='submit']").click();
// });

// // Test case for Employee 3: Mahesh Babu
// test("Add Employee - Mahesh Babu", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//     // Login
//     await page.locator("//input[@placeholder='Username']").fill('Admin');
//     await page.locator("input[placeholder='Password']").fill("admin123");
//     await page.locator("//button[contains(.,'Login')]").click();
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//     // Navigate to PIM and Add Employee
//     await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
//     await page.locator("//a[normalize-space(text())='Add Employee']").click();
//     await page.locator("//input[@placeholder='First Name']").fill("Mahesh");
//     await page.locator("//input[@placeholder='Last Name']").fill("Babu");
//     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("1003");
//     await page.locator("//button[@type='submit']").click();
// });

