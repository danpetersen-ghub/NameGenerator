// Playwright config - minimal for running file:// tests
/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
    timeout: 30000,
    use: {
        headless: true,
    },
    testDir: './tests'
};
