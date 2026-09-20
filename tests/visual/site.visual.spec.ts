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

  test('skip link and reduced-motion preferences remain usable', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
    await expect(page.locator('.skip-link')).toBeVisible();

    const reducedMotion = await page.evaluate(() => ({
      matches: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    }));
    expect(reducedMotion.matches).toBe(true);
    expect(reducedMotion.scrollBehavior).toBe('auto');
  });

  test('mobile navigation can be opened with the keyboard', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const menu = page.locator('.mobile-menu');
    const summary = menu.locator('summary');
    const navigation = menu.locator('nav');

    await expect(summary).toBeVisible();
    await summary.focus();
    await summary.press('Enter');
    await expect(menu).toHaveAttribute('open', '');
    await expect(navigation.getByRole('link', { name: 'Soluzioni' })).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Assistenza' })).toBeVisible();
  });

  test('key text and action color pairs meet contrast targets', async ({ page }) => {
    await page.goto('/');
    const contrasts = await page.evaluate(() => {
      const parse = (value: string) => value.match(/\d+(?:\.\d+)?/g)?.map(Number) ?? [];
      const luminance = (value: string) => {
        const [red, green, blue] = parse(value).slice(0, 3).map((channel) => channel / 255);
        const linear = (channel: number) => channel <= 0.03928
          ? channel / 12.92
          : ((channel + 0.055) / 1.055) ** 2.4;
        return 0.2126 * linear(red) + 0.7152 * linear(green) + 0.0722 * linear(blue);
      };
      const ratio = (foreground: string, background: string) => {
        const light = luminance(foreground);
        const dark = luminance(background);
        return (Math.max(light, dark) + 0.05) / (Math.min(light, dark) + 0.05);
      };
      const styles = (selector: string, backgroundSelector = selector) => {
        const foreground = getComputedStyle(document.querySelector(selector)!).color;
        const background = getComputedStyle(document.querySelector(backgroundSelector)!).backgroundColor;
        return ratio(foreground, background);
      };

      return {
        button: styles('.button'),
        bodyText: styles('.lead', 'html'),
        footerHeading: styles('.site-footer h2', '.site-footer'),
      };
    });

    expect(contrasts.button).toBeGreaterThanOrEqual(4.5);
    expect(contrasts.bodyText).toBeGreaterThanOrEqual(4.5);
    expect(contrasts.footerHeading).toBeGreaterThanOrEqual(4.5);
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
