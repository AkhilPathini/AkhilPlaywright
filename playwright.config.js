// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// ✅ Load environment variables from .env file
// Possible use: store credentials, URLs, API keys, etc.
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  // ⏱ Global timeout for each test (in ms)
  // Possible: 60000 (1 min), 120000 (2 min), etc.
  timeout: 80000,

  // ⏱ Timeout for "expect" assertions (in ms)
  // Example: expect(locator).toBeVisible() waits max 30s
  expect: {
    timeout: 30000,
  },

  // 📂 Directory containing your test files
  // Possible: './tests', './e2e', './specs'
  testDir: './tests',

  // ⚡ Run test files in parallel (true = parallel, false = sequential)
  fullyParallel: true,

  // 🚫 Prevent committing test.only into CI (fails build if found)
  forbidOnly: !!process.env.CI,

  // 🔁 Retry failed tests
  // Possible: 0 (default), 1 (retry once), 2 (retry twice)
  retries: process.env.CI ? 2 : 0,

  // 👷 Number of workers (parallel processes for tests)
  // Possible: 1 (sequential), 2, 4, or undefined (auto-detect CPU cores)
  workers: process.env.CI ? 1 : undefined,

  // 📊 Test reporters (where results go)
  // Options:
  //   ['list'] → default list output
  //   ['dot'] → minimal dot per test
  //   ['line'] → one line per test
  //   ['html'] → HTML report
  //   ['json', { outputFile: 'report.json' }]
  //   ['allure-playwright', { outputFolder: 'allure-results' }]
  reporter: [
    ['html'], // ✅ Generates Playwright HTML report
    // ['line'], // Uncomment for line reporter
    // ['json', { outputFile: 'results.json' }], // Uncomment for JSON report
    // ['allure-playwright', { outputFolder: 'allure-results' }], // For Allure
  ],

  // ⚙️ Shared settings for all tests
  use: {
    // 🌍 Base URL for relative navigation (await page.goto('/login'))
    // Example: "https://opensource-demo.orangehrmlive.com"
    // baseURL: process.env.BASE_URL || "http://localhost:3000",

    // 📸 Screenshot settings
    // Options: 'off' | 'on' | 'only-on-failure'
    screenshot: 'on',

    // 🎥 Video recording
    // Options: 'off' | 'on' | 'retain-on-failure' | 'only-on-failure'
    video: 'on',

    // 🖥 Viewport size (also sets video resolution)
    // Possible: { width: 1280, height: 720 }, { width: 1920, height: 1080 }
    viewport: { width: 1280, height: 720 },

    // 🖥 Headless mode
    // Possible: true (no UI, faster) | false (shows browser, for debugging)
    headless: false,

    // 🔍 Collect trace (used for debugging failed tests)
    // Options: 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'
    trace: 'on',
  },

  // 🌐 Projects = run same tests in multiple browsers/devices
  projects: [
    {
      // Chromium browser (Google Chrome)
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      // Firefox browser
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // {
    //   // Safari browser (WebKit engine)
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // {
    //   // Mobile emulation: Pixel 5
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   // Mobile emulation: iPhone 12
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],

  // 🌍 Web server (start dev server before running tests)
  // Useful if testing a local app (React, Angular, etc.)
  // webServer: {
  //   command: 'npm run start',     // command to start app
  //   url: 'http://localhost:3000', // wait for this URL before tests run
  //   reuseExistingServer: !process.env.CI, // reuse server if already running
  // },
});
