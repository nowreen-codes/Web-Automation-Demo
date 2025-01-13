import { test } from "@playwright/test";

test("Bootstrap_Dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
//By using Function:
 await selectCountry("Bangladesh");
 await selectCountry("Denmark");
     
     async function selectCountry(countryName) {
     await page.click("#country+span");
     await page.locator("ul#select2-country-results")
     .locator("li", {
     hasText: countryName
 }).click();

 }

})
