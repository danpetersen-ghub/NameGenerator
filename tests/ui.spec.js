const { test, expect } = require('@playwright/test');

// Adjust this path if your index.html is elsewhere
const pagePath = 'file:///Users/danpetersen/Library/CloudStorage/OneDrive-Personal/Desktop/DevStuff/ProductivityTools/ProductivityTools/namegenerator/index.html';

test('UI: inputs produce output containing the provided values', async ({ page }) => {
    await page.goto(pagePath);

    // Fill fields

    // Set form values directly in the page to avoid visibility/interaction issues
    await page.evaluate(() => {
        const setIf = (id, value) => {
            const el = document.querySelector('[id="' + id + '"]');
            if (!el) return;
            el.value = value;
            // dispatch input/change to mimic user interaction
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        };
        setIf('0A', '2025');
        setIf('0B', '09');
        setIf('0H', '03');
        // select or text
        const sel = document.querySelector('[id="0C"]');
        if (sel) {
            if (sel.options && sel.options.length > 0) sel.selectedIndex = 0;
            else sel.value = 'ACME';
            sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
        setIf('0F', 'MyProject');
        setIf('0G', 'myfile.txt');

        if (typeof createName === 'function') createName();
    });

    const outputText = await page.locator('#output').innerText();

    expect(outputText).toContain('MyProject');
    expect(outputText).toContain('myfile.txt');
    // check numeric year/month/day pattern (e.g. 2025_09_03 or 2025-09-03) is present
    expect(outputText).toMatch(/\d{4}[_-]\d{2}[_-]\d{2}/);
});
