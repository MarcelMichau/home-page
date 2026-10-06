import { test, expect } from '@playwright/test';

test.describe('Weekday theme', () => {
  test.use({ timezoneId: 'Europe/Berlin' });

  // Each instant is after local midnight but still the previous UTC weekday.
  const weekdays = [
    { theme: 'mon', time: '2026-07-05T22:30:00Z', background: 'rgb(30, 41, 59)' },
    { theme: 'tue', time: '2026-07-06T22:30:00Z', background: 'rgb(31, 41, 55)' },
    { theme: 'wed', time: '2026-07-07T22:30:00Z', background: 'rgb(23, 37, 84)' },
    { theme: 'thu', time: '2026-07-08T22:30:00Z', background: 'rgb(39, 39, 42)' },
    { theme: 'fri', time: '2026-07-09T22:30:00Z', background: 'rgb(49, 46, 129)' },
    { theme: 'sat', time: '2026-07-10T22:30:00Z', background: 'rgb(66, 32, 6)' },
    { theme: 'sun', time: '2026-07-11T22:30:00Z', background: 'rgb(19, 78, 74)' },
  ];

  for (const { theme, time, background } of weekdays) {
    test(`Applies the ${theme} palette using the local weekday`, async ({ page }) => {
      await page.clock.install({ time: new Date(time) });
      await page.clock.pauseAt(new Date(time));
      await page.goto('/');

      await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
      await expect(page.getByRole('banner')).toHaveCSS('background-color', background);
    });
  }

  test('Refreshes at successive ordinary local midnights', async ({ page }) => {
    await page.clock.install({ time: new Date('2026-07-05T21:59:59Z') });
    await page.clock.pauseAt(new Date('2026-07-05T21:59:59Z'));
    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'sun');
    await page.clock.runFor(1000);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'mon');
    await expect(page.getByRole('banner')).toHaveCSS('background-color', 'rgb(30, 41, 59)');

    await page.clock.runFor(24 * 60 * 60 * 1000 - 1000);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'mon');
    await page.clock.runFor(1000);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'tue');
    await expect(page.getByRole('banner')).toHaveCSS('background-color', 'rgb(31, 41, 55)');
  });

  test('Refreshes at local midnight after daylight-saving spring-forward', async ({ page }) => {
    await page.clock.install({ time: new Date('2026-03-28T22:59:59Z') });
    await page.clock.pauseAt(new Date('2026-03-28T22:59:59Z'));
    await page.goto('/');

    await test.step('Saturday changes to Sunday at local midnight', async () => {
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'sat');
      await page.clock.runFor(1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'sun');
    });

    await test.step('Sunday lasts 23 hours, then changes to Monday', async () => {
      await page.clock.runFor(23 * 60 * 60 * 1000 - 1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'sun');
      await page.clock.runFor(1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'mon');
      await expect(page.getByRole('banner')).toHaveCSS('background-color', 'rgb(30, 41, 59)');
    });
  });

  test('Refreshes at local midnight after daylight-saving fall-back', async ({ page }) => {
    await page.clock.install({ time: new Date('2026-10-24T21:59:59Z') });
    await page.clock.pauseAt(new Date('2026-10-24T21:59:59Z'));
    await page.goto('/');

    await test.step('Saturday changes to Sunday at local midnight', async () => {
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'sat');
      await page.clock.runFor(1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'sun');
    });

    await test.step('Sunday lasts 25 hours, then changes to Monday', async () => {
      await page.clock.runFor(25 * 60 * 60 * 1000 - 1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'sun');
      await page.clock.runFor(1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'mon');
      await expect(page.getByRole('banner')).toHaveCSS('background-color', 'rgb(30, 41, 59)');
    });

    await test.step('The next refresh remains aligned with local midnight', async () => {
      await page.clock.runFor(24 * 60 * 60 * 1000 - 1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'mon');
      await page.clock.runFor(1000);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'tue');
      await expect(page.getByRole('banner')).toHaveCSS('background-color', 'rgb(31, 41, 55)');
    });
  });

  test.describe('Without JavaScript', () => {
    test.use({ javaScriptEnabled: false });

    test('Keeps the Monday palette as the default', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('html')).not.toHaveAttribute('data-theme');
      await expect(page.getByRole('banner')).toHaveCSS('background-color', 'rgb(30, 41, 59)');
    });
  });
});
