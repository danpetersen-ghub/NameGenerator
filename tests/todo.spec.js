const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

// dynamic file URL to ToDoApp index.html
const pagePath = pathToFileURL(path.resolve(__dirname, '..', 'ToDoApp', 'index.html')).href;

test('ToDoApp: basic smoke test (stub)', async ({ page }) => {
  await page.goto(pagePath);

  // simple smoke: ensure page loads and has a title or known element
  const bodyText = await page.locator('body').innerText();
  expect(bodyText.length).toBeGreaterThan(10);
});
