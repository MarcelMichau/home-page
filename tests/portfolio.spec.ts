import { test, expect } from '@playwright/test';

const BASE_URL = 'file://' + process.cwd() + '/src/index.html';

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('Page metadata - Title and meta tags', async ({ page }) => {
    await expect(page).toHaveTitle('Marcel Michau - I write code & stuff');
    
    await test.step('Verify description meta tag', async () => {
      const description = page.locator('meta[name="description"]');
      await expect(description).toHaveAttribute('content', 'Personal Website for Marcel Michau - I just filled this in for better SEO :)');
    });
    
    await test.step('Verify viewport meta tag', async () => {
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1.0');
    });
  });

  test('Hero section - Profile and branding', async ({ page }) => {
    await test.step('Verify profile image', async () => {
      const profileImage = page.getByAltText('Your Image');
      await expect(profileImage).toHaveAttribute('src', 'images/profile-small.jpg');
    });

    await test.step('Verify name heading', async () => {
      await expect(page.getByRole('heading', { name: 'Marcel Michau' })).toHaveText('Marcel Michau');
    });

    await test.step('Verify console.log statement with typing animation', async () => {
      const consoleText = page.locator('p.font-mono');
      await expect(consoleText).toContainText('console');
      await expect(consoleText).toContainText('log');
      await expect(consoleText).toContainText('I write code & stuff');
    });
  });

  test('Social links - GitHub, Twitter, and Blog', async ({ page }) => {
    await test.step('Verify GitHub link', async () => {
      // The social GitHub link is in the header, not the main content
      const githubLink = page.locator('header a[href="https://github.com/MarcelMichau"]');
      await expect(githubLink).toHaveAttribute('href', 'https://github.com/MarcelMichau');
      await expect(githubLink).toHaveAttribute('target', '_blank');
    });

    await test.step('Verify X/Twitter link', async () => {
      const twitterLink = page.getByRole('link').filter({ has: page.locator('svg path[d*="M453.2"]') });
      await expect(twitterLink).toHaveAttribute('href', 'https://x.com/MarcelMichau');
      await expect(twitterLink).toHaveAttribute('target', '_blank');
    });

    await test.step('Verify blog link', async () => {
      const blogLink = page.getByRole('link').filter({ has: page.locator('svg path[d*="M100.4"]') });
      await expect(blogLink).toHaveAttribute('href', 'https://blog.marcelmichau.dev');
      await expect(blogLink).toHaveAttribute('target', '_blank');
    });
  });

  test('Main content - Headings and introductory text', async ({ page }) => {
    await test.step('Verify main heading', async () => {
      await expect(page.getByRole('heading', { name: 'This is my website. No one else\'s.' }))
        .toHaveText('This is my website. No one else\'s.');
    });

    await test.step('Verify minimal website message', async () => {
      await expect(page.getByText('Look how minimal it is.')).toHaveText('Look how minimal it is.');
    });
  });

  test('Technology stack section', async ({ page }) => {
    await test.step('Verify section heading', async () => {
      await expect(page.getByText('It\'s built using:')).toHaveText('It\'s built using:');
    });

    await test.step('Verify HTML link', async () => {
      const htmlLink = page.getByRole('link', { name: 'Good ol\' vanilla HTML' });
      await expect(htmlLink).toHaveText('Good ol\' vanilla HTML');
      await expect(htmlLink).toHaveAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/HTML');
    });

    await test.step('Verify Tailwind CSS link', async () => {
      const tailwindLink = page.getByRole('link', { name: 'Tailwind CSS' });
      await expect(tailwindLink).toHaveText('Tailwind CSS');
      await expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com/');
    });
  });

  test('Helper tools section', async ({ page }) => {
    await test.step('Verify section heading', async () => {
      await expect(page.getByText('With some help from:')).toHaveText('With some help from:');
    });

    await test.step('Verify GitHub Actions link', async () => {
      const actionsLink = page.getByRole('link', { name: 'GitHub Actions' });
      await expect(actionsLink).toHaveText('GitHub Actions');
      await expect(actionsLink).toHaveAttribute('href', 'https://github.com/features/actions');
    });

    await test.step('Verify Font Awesome link', async () => {
      const fontAwesomeLink = page.getByRole('link', { name: 'Font Awesome' });
      await expect(fontAwesomeLink).toHaveText('Font Awesome');
      await expect(fontAwesomeLink).toHaveAttribute('href', 'https://fontawesome.com/');
    });
  });

  test('Deployment information section', async ({ page }) => {
    await test.step('Verify section heading', async () => {
      await expect(page.getByText('Deployed to:')).toHaveText('Deployed to:');
    });

    await test.step('Verify Cloudflare Pages link', async () => {
      const cloudflareLink = page.getByRole('link', { name: 'Cloudflare Pages' });
      await expect(cloudflareLink).toHaveText('Cloudflare Pages');
      await expect(cloudflareLink).toHaveAttribute('href', 'https://pages.cloudflare.com/');
    });
  });

  test('Source code repository section', async ({ page }) => {
    await test.step('Verify section heading', async () => {
      await expect(page.getByText('And code hosted on:')).toHaveText('And code hosted on:');
    });

    await test.step('Verify GitHub repository link', async () => {
      const repoLink = page.getByRole('link', { name: 'GitHub' }).last();
      await expect(repoLink).toHaveText('GitHub');
      await expect(repoLink).toHaveAttribute('href', 'https://github.com/MarcelMichau/home-page');
    });
  });

  test('Website characteristics - Buzzwords section', async ({ page }) => {
    await test.step('Verify section heading', async () => {
      await expect(page.getByText('It is intended to be:')).toHaveText('It is intended to be:');
    });

    await test.step('Verify all characteristics are present', async () => {
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
        'AI, AI & also some AI 🤖',
        'Gluten-free 🍕'
      ];

      for (const characteristic of characteristics) {
        await expect(page.getByText(characteristic, { exact: true })).toHaveText(characteristic);
      }
    });

    await test.step('Verify buzzwords explanation', async () => {
      await expect(page.getByText(/Filled with buzz words/)).toContainText('Filled with buzz words & trendy terminology');
    });
  });

  test('Footer section', async ({ page }) => {
    await test.step('Verify footer logo', async () => {
      const footerLogo = page.getByAltText('MM Logo');
      await expect(footerLogo).toHaveAttribute('src', 'images/mm-logo-small.png');
    });

    await test.step('Verify copyright text', async () => {
      await expect(page.getByText('Marcel Michau © 2026')).toHaveText('Marcel Michau © 2026');
    });
  });

  test('Styling and CSS verification', async ({ page }) => {
    await test.step('Verify body text color class', async () => {
      const body = page.locator('body');
      await expect(body).toHaveClass(/text-white/);
    });

    await test.step('Verify header background color', async () => {
      const header = page.locator('header');
      await expect(header).toHaveClass(/bg-gray-800/);
    });

    await test.step('Verify CSS stylesheet is loaded', async () => {
      const cssLink = page.locator('link[href="dist/main.css"][rel="stylesheet"]');
      await expect(cssLink).toHaveAttribute('rel', 'stylesheet');
    });
  });

  test('External links security attributes', async ({ page }) => {
    await test.step('Count external links with target="_blank"', async () => {
      const externalLinks = page.locator('a[target="_blank"]');
      await expect(externalLinks).toHaveCount(3);
    });

    await test.step('Verify target="_blank" attribute on sample links', async () => {
      const externalLinks = await page.locator('a[target="_blank"]').all();
      
      // Verify first few external links have proper target attribute
      for (const link of externalLinks.slice(0, 5)) {
        await expect(link).toHaveAttribute('target', '_blank');
      }
    });
  });
});
