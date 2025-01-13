import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = await page.locator("//input[@id='user-message']");

await messageInput.scrollIntoViewIfNeeded();

    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")

    console.log('Before entering data: ' + await messageInput.inputValue());

    await messageInput.type("Hi,It's me");

    console.log('After entering data: ' + await messageInput.inputValue());

})

test("Sum",async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    const sum1input = page.locator("#sum1")
    const sum2input = page.locator("#sum2")

    const getValuesBtn = page.locator("#gettotal > .bg-lambda-900")

    let num1 = 121;
    let num2 = 546
    await sum1input.fill("" + num1);
    await sum2input.type("" + num2);
    await getValuesBtn.click()
    //await getValuesBtn.click({ timeout: 60000 }); // Wait 60 seconds

    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult)

})

test("Checkbox", async({ page }) => {
    await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F")
    const singleCheckbox = page.locator("//input[@type='checkbox' and @name='RememberMe']")
    expect(singleCheckbox).not.toBeChecked();
await singleCheckbox.check();
expect(singleCheckbox).toBeChecked();

}) 
