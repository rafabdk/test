import { expect, test } from '@playwright/test';

const LOGIN_URL =
  'https://corp-tst-outsystems.petrobras.com.br/S10865_AutonomiaCanalMotorista/NewLogin?_ts=638932628949242291';
const TEST_EMAIL = process.env.PLAYWRIGHT_EMAIL ?? 'domingosfit@gmail.com';
const TEST_PASSWORD = process.env.PLAYWRIGHT_PASSWORD ?? 'Teste@123';

test('realiza login no portal Autonomia Canal Motorista', async ({ page }) => {
  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded' });

  await page.getByRole('button', { name: /^entrar$/i }).first().click();

  await page.locator('#signInName').waitFor({ state: 'visible' });
  await page.locator('#signInName').fill(TEST_EMAIL);

  await page.locator('#password').fill(TEST_PASSWORD);

  await page.getByRole('button', { name: /^entrar$/i }).last().click();

  await expect(page).not.toHaveURL(/NewLogin/i);
});
