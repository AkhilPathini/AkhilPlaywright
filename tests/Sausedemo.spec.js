// Import 'test' and 'expect' from Playwright Test module
// 'test' => to define and execute tests
// 'expect' => for assertions to validate expected outcomes
import { test, expect } from '@playwright/test';

// ----------------------------------------------
// TEST CASE 1: Verify login with valid credentials
// ----------------------------------------------
test("saucedemo", async ({ page }) => {
    // Navigate to the saucedemo login page
    await page.goto("https://www.saucedemo.com/v1/");

    // Fill the Username field with valid username "standard_user"
    await page.locator("//input[@placeholder='Username']").fill("standard_user");

    // Fill the Password field with valid password "secret_sauce"
    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");

    // Click the Login button
    await page.locator("(//div[@class='login-box']//input)[3]").click();

    // Assertion: Check that the URL navigates to the inventory page after successful login
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});

// ----------------------------------------------
// TEST CASE 2: Verify login with INVALID username and VALID password
// ----------------------------------------------
test("verify invalidlogin with valid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/");

    // Fill Username with invalid value "stand_user" (typo, should be "standard_user")
    await page.locator("//input[@placeholder='Username']").fill("stand_user");

    // Fill Password with valid value "secret_sauce"
    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");

    // Click the Login button
    await page.locator("(//div[@class='login-box']//input)[3]").click();

    // Assertion: Verify that an error message is visible after invalid login
    await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible();
});

// ----------------------------------------------
// TEST CASE 3: Verify login with VALID username and INVALID password
// ----------------------------------------------
test("verify login with invalidvalid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/");

    // Fill Username with valid value "standard_user"
    await page.locator("//input[@placeholder='Username']").fill("standard_user");

    // Fill Password with invalid value "sret_sauce" (typo)
    await page.locator("//input[@placeholder='Password']").fill("sret_sauce");

    // Click the Login button
    await page.locator("(//div[@class='login-box']//input)[3]").click();

    // Assertion: Verify that an error message is visible after invalid login
    await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible();
});

// ----------------------------------------------
// TEST CASE 4: Verify login with INVALID username and INVALID password
// ----------------------------------------------
test("verify inlogin with invalid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/");

    // Fill Username with invalid value "stdard_user"
    await page.locator("//input[@placeholder='Username']").fill("stdard_user");

    // Fill Password with invalid value "cret_sauce"
    await page.locator("//input[@placeholder='Password']").fill("cret_sauce");

    // Click the Login button
    await page.locator("(//div[@class='login-box']//input)[3]").click();

    // Assertion: Verify that an error message is visible after invalid login
    await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible();
});



// import {test,expect } from '@playwright/test';
//   test("saucedemo",async({page})=>{
//      await page.goto("https://www.saucedemo.com/v1/")
//      await page.locator("//input[@placeholder='Username']").fill("standard_user")
//      await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
//      await page.locator("(//div[@class='login-box']//input)[3]").click()
//      await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
//   })
//    test("verify invalidlogin with valid credentials",async({page})=>{
//      await page.goto("https://www.saucedemo.com/v1/")
//      await page.locator("//input[@placeholder='Username']").fill("stand_user")
//      await page.locator("//input[@placeholder='Password']").fill("secret_sauce")
//      await page.locator("(//div[@class='login-box']//input)[3]").click()
//      await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible()
//   })
//    test("verify login with invalidvalid credentials",async({page})=>{
//      await page.goto("https://www.saucedemo.com/v1/")
//      await page.locator("//input[@placeholder='Username']").fill("standard_user")
//      await page.locator("//input[@placeholder='Password']").fill("sret_sauce")
//      await page.locator("(//div[@class='login-box']//input)[3]").click()
//      await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible()
//   })
//    test("verify inlogin with invalid credentials",async({page})=>{
//      await page.goto("https://www.saucedemo.com/v1/")
//      await page.locator("//input[@placeholder='Username']").fill("stdard_user")
//      await page.locator("//input[@placeholder='Password']").fill("cret_sauce")
//      await page.locator("(//div[@class='login-box']//input)[3]").click()
//      await expect(page.locator("//div[@class='login-box']//h3[1]")).toBeVisible()
//   })

  