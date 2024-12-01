import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  
  await page.goto('https://conduit.bondaracademy.com/');
});
test('assertion 1', async ({ page }) => {
  // Go to the page
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
});


test('assertion 2', async ({ page }) => {
  // Go to the page
  await expect(page.locator('.nav-link active').first()).toHaveText(' Global Feed ');
});