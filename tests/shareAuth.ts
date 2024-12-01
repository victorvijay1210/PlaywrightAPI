import { test as setup } from '@playwright/test';

const authFile = '.auth/user.json'

setup('Authentication', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('vijayvj1210@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Qwert$123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags');
  await page.context().storageState({ path: authFile });
})