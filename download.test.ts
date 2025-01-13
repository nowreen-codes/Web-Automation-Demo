import {  test } from "@playwright/test";

test("Download Files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "like, share");
    await page.click("id=create")

    const downLoad = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    const fileName = await downLoad[0].suggestedFilename();
    await downLoad[0].saveAs(fileName);
    //console.log(path);
})
