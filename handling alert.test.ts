import { expect, test } from "@playwright/test";

test("handling alerts", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) => {
       //const text = alert.message();

       const text = alert.defaultValue(); // input hishbe nibe popup theke
       console.log(text);
    //await alert.accept(); 
    //await alert.dismiss();
    await alert.accept("Nowreen");  // input hishbe nibe popup theke
    })
    //await page.locator("button:has-text('Click Me')").nth(0).click();
    //await page.locator("button:has-text('Click Me')").nth(1).click();
    await page.locator("button:has-text('Click Me')").nth(2).click();

   // expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
      expect(page.locator("id=prompt-demo")).toContainText("'Nowreen'")
})
