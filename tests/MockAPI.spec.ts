import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json'


test.beforeEach(async ({ page }) => {
 // Mock the api call before navigating
 await page.route('*/**/api/tags', async route => {
  await route.fulfill({body:JSON.stringify(tags) });
});


  // Go to the page
  await page.goto('https://conduit.bondaracademy.com/');
});

test('Mock API', async ({ page }) => {
  
await page.route('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', async route => {
  const response = await route.fetch();
  const responseBody = await response.json();
  responseBody.articles[0].title="This Test Article";
 
  await route.fulfill({body:JSON.stringify(responseBody) });
});
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');
  });