import { expect, test } from '@playwright/test';

test.describe('visual smoke checks', () => {
  test('homepage remains stable on desktop and mobile', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.addStyleTag({ content: 'dev-toolbar-root { display: none !important; }' });
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page).toHaveScreenshot('homepage-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.02,
    });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();
    await page.addStyleTag({ content: 'dev-toolbar-root { display: none !important; }' });
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.02,
    });
  });

  test('art-directed Chi siamo image exposes responsive sources', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/chi-siamo/');
    await page.addStyleTag({ content: 'dev-toolbar-root { display: none !important; }' });
    const picture = page.locator('.hero-art');
    await expect(picture).toBeVisible();
    await expect(picture.locator('source[media="(max-width: 760px)"]')).toHaveAttribute('srcset', /\/(?:_astro|_image)\//);
    await expect(picture.locator('img')).toHaveAttribute('srcset', /\/(?:_astro|_image)\//);
    await expect(page).toHaveScreenshot('chi-siamo-mobile.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.02,
    });
  });

  test('representative pages do not overflow horizontally', async ({ page }) => {
    for (const route of ['/carta/', '/piani/', '/news/', '/assistenza/']) {
      await page.goto(route);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(1);
    }

    await page.goto('/carta/');
    await expect(page.locator('.content-grid')).toHaveCSS('display', 'grid');
    await expect(page.locator('.content-grid .summary')).toBeVisible();
  });

  test('specialized editorial sections retain their visual system', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    for (const route of ['/piani/', '/investimenti/', '/community/', '/assistenza/', '/pagamenti/alipay-plus/']) {
      await page.goto(route);
      await page.addStyleTag({ content: 'dev-toolbar-root { display: none !important; }' });
      await expect(page.locator('.page-hero')).toHaveCSS('background-color', 'rgb(16, 45, 67)');
      await expect(page).toHaveScreenshot(`specialized-${route.slice(1, -1).replaceAll('/', '-')}.png`, {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02,
      });
    }
  });
});
