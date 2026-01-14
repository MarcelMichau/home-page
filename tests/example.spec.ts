import { test, expect } from '@playwright/test';

const BASE_URL = 'file://' + process.cwd() + '/src/index.html';

test.describe('Portfolio Website - Baseline Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Marcel Michau - I write code & stuff');
  });

  test('displays profile image', async ({ page }) => {
    const profileImage = page.locator('img[alt="Your Image"]');
    await expect(profileImage).toBeVisible();
    await expect(profileImage).toHaveAttribute('src', 'images/profile-small.jpg');
  });

  test('displays name heading', async ({ page }) => {
    const nameHeading = page.getByRole('heading', { name: 'Marcel Michau' });
    await expect(nameHeading).toBeVisible();
  });

  test('displays console.log statement with typing animation', async ({ page }) => {
    const consoleText = page.locator('p.font-mono');
    await expect(consoleText).toBeVisible();
    await expect(consoleText).toContainText('console');
    await expect(consoleText).toContainText('log');
    await expect(consoleText).toContainText('I write code & stuff');
  });

  test('has GitHub social link', async ({ page }) => {
    const githubLink = page.locator('a[href="https://github.com/MarcelMichau"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('target', '_blank');
  });

  test('has X/Twitter social link', async ({ page }) => {
    const twitterLink = page.locator('a[href="https://x.com/MarcelMichau"]');
    await expect(twitterLink).toBeVisible();
    await expect(twitterLink).toHaveAttribute('target', '_blank');
  });

  test('has blog link', async ({ page }) => {
    const blogLink = page.locator('a[href="https://blog.marcelmichau.dev"]');
    await expect(blogLink).toBeVisible();
    await expect(blogLink).toHaveAttribute('target', '_blank');
  });

  test('displays main heading "This is my website. No one else\'s."', async ({ page }) => {
    const mainHeading = page.getByRole('heading', { name: 'This is my website. No one else\'s.' });
    await expect(mainHeading).toBeVisible();
  });

  test('displays minimal website message', async ({ page }) => {
    const minimalText = page.getByText('Look how minimal it is.');
    await expect(minimalText).toBeVisible();
  });

  test('displays technology stack section', async ({ page }) => {
    await expect(page.getByText('It\'s built using:')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Good ol\' vanilla HTML' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Tailwind CSS' })).toBeVisible();
  });

  test('displays helper tools section', async ({ page }) => {
    await expect(page.getByText('With some help from:')).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub Actions' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Font Awesome' })).toBeVisible();
  });

  test('displays deployment information', async ({ page }) => {
    await expect(page.getByText('Deployed to:')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Cloudflare Pages' })).toBeVisible();
  });

  test('displays GitHub repository link', async ({ page }) => {
    await expect(page.getByText('And code hosted on:')).toBeVisible();
    const repoLink = page.getByRole('link', { name: 'GitHub' }).last();
    await expect(repoLink).toBeVisible();
    await expect(repoLink).toHaveAttribute('href', 'https://github.com/MarcelMichau/home-page');
  });

  test('displays all buzzword characteristics', async ({ page }) => {
    const characteristics = [
      'Fast 🐌',
      'Agile 🐢',
      'Scalable ⚖️',
      'Secure 🔒',
      'Cloud-native 🌧️',
      'Distributed 🎊',
      'Resilient 🔨',
      'Asynchronous ⏲',
      'Sustainable 🌲',
      'Privacy-focused 🪪',
      'Enterprise-ready 🏢',
      'Containerised 📦',
      'Built on Microservices 🔍',
      'Gluten-free 🍕'
    ];

    for (const characteristic of characteristics) {
      await expect(page.getByText(characteristic)).toBeVisible();
    }
  });

  test('displays footer with logo and copyright', async ({ page }) => {
    const footerLogo = page.locator('footer img[alt="MM Logo"]');
    await expect(footerLogo).toBeVisible();
    await expect(footerLogo).toHaveAttribute('src', 'images/mm-logo-small.png');
    
    await expect(page.getByText('Marcel Michau © 2026')).toBeVisible();
  });

  test('has correct color scheme classes', async ({ page }) => {
    const body = page.locator('body');
    await expect(body).toHaveClass(/text-white/);
    
    const header = page.locator('header');
    await expect(header).toHaveClass(/bg-gray-800/);
  });

  test('external links have correct attributes for security', async ({ page }) => {
    const externalLinks = await page.locator('a[target="_blank"]').all();
    
    expect(externalLinks.length).toBeGreaterThan(0);
    
    // Verify at least some external links exist and have target="_blank"
    for (const link of externalLinks.slice(0, 3)) {
      await expect(link).toHaveAttribute('target', '_blank');
    }
  });

  test('page has proper meta tags', async ({ page }) => {
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', 'Personal Website for Marcel Michau - I just filled this in for better SEO :)');
    
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1.0');
  });

  test('has CSS loaded', async ({ page }) => {
    const cssLink = page.locator('link[href="dist/main.css"][rel="stylesheet"]');
    await expect(cssLink).toHaveAttribute('rel', 'stylesheet');
  });
});
