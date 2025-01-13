import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test460.nop-station.com/en/');
  await page.hover("//a[contains (text(), 'Log in')] ")

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').fill('snake123@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'My account' }).first().click();
  await page.locator('select[name="DateOfBirthMonth"]').selectOption('8');
  await page.waitForTimeout(5000);
  await page.locator('select[name="DateOfBirthDay"]').selectOption('25');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByTitle('Close').click();

  await page.hover("//a[contains (text(), 'Log out')] ")
  await page.getByRole('link', { name: 'Log in' }).click();
});
