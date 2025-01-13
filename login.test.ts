import { chromium, test, expect } from "@playwright/test"

//lambda test capabilities
const capabilities = {
    browserName: "Chrome",
    browserVersion: "Latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Build",
        name: "Playwright Test",
        user: 'inowreenb1525',
        accessKey: '42sVE40zbIIggC9ANJBiMyPvyZcdQVfcguuPJzVkbcv1PD7iO7',
        network: true,
        video: true,
        console: true,
        tunnel: false,
        tunnelName: "",
        geoLocation: '',
    },
};
test("Login test demo", async() => {
    const browser = await chromium.connect(
        `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    );
    

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://test460.nop-station.com/en/")
    await page.hover("//a[contains (text(), 'Log in')] ")
    await page.click("//a[contains (text(), 'Log in')] ")

    await page.fill("//input[@name='Email']" , "snake123@gmail.com")
    await page.fill("//input[@name='Password'] " , "123")

    await page.click("//button[@type= 'submit' and @class= 'button-1 login-button'] ");

    await page.close();
    await context.close()
    await browser.close();
    });  
