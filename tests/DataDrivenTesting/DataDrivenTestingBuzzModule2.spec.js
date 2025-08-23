const { test, expect } = require('@playwright/test');

//Login credentials stored in an object for reusability
const LoginCredentials = {
    PageURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    Username: 'Admin',
    Password: 'admin123'
};

//Messages to post in the Buzz module
const MessagesList = {
    Message1: "Hello Everyone, Good Morning!",
    Message2: "My name is Raju!",
    Message3: "Welcome to Playwright with JavaScript!"
};

//Loop through each message in MessagesList
for (let key in MessagesList) {
    const message = MessagesList[key]; // get actual text (value of the key)
    console.log(message)

    //Create a separate test for each message
    test(`DataDriven: Post message in Buzz module of OrangeHRM - ${message}`, async ({ page }) => {

        //Go to OrangeHRM Login page
        await page.goto(LoginCredentials.PageURL);

        //Enter username
        await page.locator('input[placeholder="Username"]').fill(LoginCredentials.Username);

        //Enter password
        await page.locator('input[placeholder="Password"]').fill(LoginCredentials.Password);

        //Click Login button
        await page.locator('button[type="submit"]').click();

        //Verify successful login (URL should be dashboard)
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        //Click on "Buzz" from the sidebar menu
        await page.locator('//span[text()="Buzz"]').click();

        //Type the current message into Buzz post input
        await page.locator('.oxd-buzz-post-input').fill(message);

        //Click the Post button
        await page.locator('button[type="submit"]').click();

        //Verify that the newly posted message appears in the Buzz feed
        await expect(page.locator(`//p[text()='${message}']`).first())
            .toHaveText(message);

        //Wait for 2 seconds (optional, just to observe the post before test ends)
        await page.waitForTimeout(2000);
    });
}
