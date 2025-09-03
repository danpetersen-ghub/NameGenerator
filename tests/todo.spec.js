const { test, expect } = require('@playwright/test');

// TODO: adjust path if ToDoApp index.html is moved
const pagePath = 'file:///Users/danpetersen/Library/CloudStorage/OneDrive-Personal/Desktop/DevStuff/ProductivityTools/ProductivityTools/ToDoApp/index.html';

test('ToDoApp: basic smoke test (stub)', async ({ page }) => {
  await page.goto(pagePath);

  // simple smoke: ensure page loads and has a title or known element
  const bodyText = await page.locator('body').innerText();
  expect(bodyText.length).toBeGreaterThan(10);
});
