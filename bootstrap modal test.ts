import { expect, test } from "@playwright/test";

test("Modal alerts", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("//button[@data-target='#myModal']")
    await page.click("//button[text()='Save Changes'][1]");
})
