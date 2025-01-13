import { test, expect } from "@playwright/test"

test("Checkbox", async({ page }) => {
    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F")
    const singleCheckbox = page.locator("//input[@type='checkbox' and @name='RememberMe']")
    expect(singleCheckbox).not.toBeChecked();
await singleCheckbox.check();
expect(singleCheckbox).toBeChecked();

}) 
