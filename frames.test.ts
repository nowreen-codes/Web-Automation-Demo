import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " +allframes.length);

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Nowreen");
    await frame.locator("input[name='lname']").fill("Islam");
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("nowreen@gmail.com")

    await frame.locator("input[name='fname']").fill("Valo_Lage_Na");
    await page.waitForTimeout(3000);
})
