// Import 'test' and 'expect' from Playwright Test
// 'test' is used to define test cases
// 'expect' is used to write assertions (to validate test results)
import { test, expect } from '@playwright/test';

// ----------------------------------------------
// TEST CASE 1: Verify login with valid credentials
// ----------------------------------------------
test("verify login with valid credentials", async ({ page }) => {
    // Navigate to OrangeHRM login page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Fill the username field with "Admin"
    await page.locator("input[name='username']").fill("Admin");

    // Fill the password field with "admin123"
    await page.locator("input[type='password']").fill("admin123");

    // Click the login button
    await page.locator("button[type='submit']").click();

    // Assertion: Check if the URL changes to the dashboard page after successful login
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});

// ----------------------------------------------
// TEST CASE 2: Verify login with invalid username and valid password
// ----------------------------------------------
test("verify invalidlogin with valid credentials", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Invalid username: "dmin" (missing 'A')
    await page.locator("input[name='username']").fill("dmin");

    // Correct password: "admin123"
    await page.locator("input[type='password']").fill("admin123");

    await page.locator("button[type='submit']").click();

    // Assertion: Verify that "Invalid credentials" message is visible
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

// ----------------------------------------------
// TEST CASE 3: Verify login with valid username and invalid password
// ----------------------------------------------
test("verify login with invalidvalid credentials", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Correct username: "Admin"
    await page.locator("input[name='username']").fill("Admin");

    // Incorrect password: "min123"
    await page.locator("input[type='password']").fill("min123");

    await page.locator("button[type='submit']").click();

    // Assertion: Verify that "Invalid credentials" message is visible
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});

// ----------------------------------------------
// TEST CASE 4: Verify login with invalid username and invalid password
// ----------------------------------------------
test("verify inlogin with invalid credentials", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Invalid username: "dmin"
    await page.locator("input[name='username']").fill("dmin");

    // Invalid password: "min123"
    await page.locator("input[type='password']").fill("min123");

    await page.locator("button[type='submit']").click();

    // Assertion: Verify that "Invalid credentials" message is visible
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});



//  import {test,expect } from '@playwright/test';
//  test("verify login with valid credentials",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator("input[name='username']").fill("Admin")
//     await page.locator("input[type='password']").fill("admin123")
//     await page.locator("button[type='submit']").click()
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
//  })
//   test("verify invalidlogin with valid credentials",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator("input[name='username']").fill("dmin")
//     await page.locator("input[type='password']").fill("admin123")
//     await page.locator("button[type='submit']").click()
//     await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
//  })
//   test("verify login with invalidvalid credentials",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator("input[name='username']").fill("Admin")
//     await page.locator("input[type='password']").fill("min123")
//     await page.locator("button[type='submit']").click()
//     await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
//  })
//   test("verify inlogin with invalid credentials",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator("input[name='username']").fill("dmin")
//     await page.locator("input[type='password']").fill("min123")
//     await page.locator("button[type='submit']").click()
//     await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
//  })
 