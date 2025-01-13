import {  test } from "@playwright/test";

test("Upload Files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles("input[type='file']",["uploadFiles/sky1.jpg", "uploadFiles/sky2.jpg"] );
 await page.waitForTimeout(3000);
}) 
