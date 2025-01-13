import { test } from "@playwright/test";

test("Dropdown Handling", async ({ page }) => {
    await page.goto("https://test460.nop-station.com/en/");
    
    //Hover over "Log in" and click it
    await page.hover("//a[contains(text(), 'Log in')]");
    await page.click("//a[contains(text(), 'Log in')]");
    
    
    await page.fill("//input[@name='Email']", "snake123@gmail.com");
    await page.fill("//input[@name='Password']", "123");
    await page.click("//button[@type='submit' and contains(@class, 'login-button')]");
    
    await page.waitForTimeout(5000);
    
    await page.goto("https://test460.nop-station.com/en/checkout/billingaddress");
    
    //Select "Bangladesh" in the dropdown
    await page.waitForSelector("select[name='BillingNewAddress.CountryId']", { state: "visible" });
    await page.selectOption("select[name='BillingNewAddress.CountryId']", {
       value: "19"
    });
    await page.waitForTimeout(3000);

// For Multiple Selector Option:
await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
await page.selectOption("#multi-select", [{
    label: "Texas"
}, {
    index: 2
}, {
    value: "Washington"
}

])
});
