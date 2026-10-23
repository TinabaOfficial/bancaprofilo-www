import { expect, test } from '@playwright/test';

for (const width of [1440, 768, 390, 320]) {
  test(`navigation is usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.locator('header').getByRole('link', { name: 'Accedi', exact: true }))
      .toHaveCount(0);
    const mobile = width <= 960;
    const menu = page.locator('.mobile-menu');
    if (mobile) {
      const trigger = menu.locator(':scope > summary');
      await trigger.focus();
      await trigger.press('Enter');
      await expect(menu).toHaveAttribute('open', '');
    }

    const navigation = page.getByRole('navigation', {
      name: mobile ? 'Navigazione mobile' : 'Navigazione principale', exact: true,
    });
    const sections = navigation.locator(':scope > details');
    await expect(sections.locator(':scope > summary')).toHaveText([
      'Privati', 'Business', 'Chi Siamo', 'Assistenza',
    ]);

    for (const label of ['Privati', 'Business', 'Chi Siamo', 'Assistenza']) {
      const section = sections.filter({ has: page.locator('summary', { hasText: label }) });
      const trigger = section.locator(':scope > summary');
      await trigger.focus();
      await trigger.press('Enter');
      await expect(section).toHaveAttribute('open', '');
      await expect(sections.locator('[open]')).toHaveCount(0);
      await expect(navigation.locator(':scope > details[open]')).toHaveCount(1);

      if (label === 'Privati') {
        await expect(section.getByRole('link', { name: 'Tutto per i privati', exact: true }))
          .toHaveAttribute('href', '/privati/');
        await expect(section.getByRole('link', { name: 'Confronta i profili' })).toBeVisible();
        await expect(section.locator('.navigation-feature')).toContainText('Più valore per te');
        await expect(section.getByRole('link', { name: 'Tutte le promozioni' }))
          .toHaveAttribute('href', '/promozioni/');
        await expect(section.getByRole('link', { name: 'Scopri le iniziative' })).toHaveCount(0);
        await expect(section.locator('[data-pending-link]')).toContainText('Promo SDD');
        await expect(section.locator('[data-pending-link]')).toHaveText('Promo SDD');
        await expect(section.locator('[data-pending-link] small')).toHaveCount(0);
      }

      if (label === 'Business') {
        await expect(section.getByRole('link', { name: 'Business', exact: true }))
          .toHaveAttribute('href', '/business/');
        await expect(section.getByRole('link', { name: 'Servizi per Community' }))
          .toHaveAttribute('href', '/community/');
      }

      await trigger.press('Escape');
      await expect(section).not.toHaveAttribute('open');
      await expect(trigger).toBeFocused();
    }

    const headerTargets = await page.locator('.site-header > a').evaluateAll((links) =>
      links.map((link) => {
        const rect = link.getBoundingClientRect();
        return { left: rect.left, right: rect.right, height: rect.height };
      }).filter((rect) => rect.height > 0),
    );
    for (const target of headerTargets) {
      expect(target.left).toBeGreaterThanOrEqual(0);
      expect(target.right).toBeLessThanOrEqual(width);
      expect(target.height).toBeGreaterThanOrEqual(44);
    }
  });
}

test('footer links and navigation anchors resolve', async ({ page, request }) => {
  await page.goto('/');
  const footer = page.locator('.site-footer');
  await expect(footer.locator('.footer-group h2')).toHaveText([
    'Assistenza', 'Sicurezza', 'Trasparenza', 'Privacy e cookie',
  ]);
  await expect(footer.locator('.store-list a')).toHaveCount(3);
  await expect(footer.getByRole('heading', { name: 'Scarica l’App' })).toBeVisible();
  await expect(footer.locator('.footer-engagement .stores')).toHaveCount(1);
  await expect(footer.locator('.institutional-band')).toHaveCount(0);
  for (const name of ['Banca Profilo', 'Investiamo', 'Linee guida del brand', 'News']) {
    await expect(footer.getByRole('link', { name, exact: true })).toHaveCount(0);
  }
  expect((await request.get('/brand-guidelines/')).ok()).toBe(true);
  expect((await request.get('/news/')).status()).toBe(404);
  await expect(footer.getByRole('link', { name: 'Area riservata' }))
    .toHaveAttribute('href', 'https://homebanking.tinaba.it/');
  await expect(footer.getByRole('navigation', { name: 'Canali social Tinaba' }).locator('a'))
    .toHaveCount(5);

  const hrefs = await page.locator('header a, footer a').evaluateAll((links) =>
    [...new Set(links.map((link) => link.getAttribute('href')!))]
      .filter((href) => href.startsWith('/') && !href.startsWith('//')),
  );
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.ok(), href).toBe(true);
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      expect(await response.text(), href).toContain(`id="${hash}"`);
    }
  }
});

test('the highlighted menu links directly to initiatives on desktop and mobile', async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const mobile = width <= 960;
    if (mobile) await page.locator('.mobile-menu > summary').click();
    await page.locator(mobile ? '.mobile-section > summary' : '.desktop-nav summary')
      .first().click();
    const feature = page.locator(mobile ? '#mobile-privati-panel' : '#desktop-privati-panel')
      .locator('.navigation-feature');
    await expect(feature.getByRole('link', { name: 'Tutte le promozioni' }))
      .toHaveAttribute('href', '/promozioni/');
    await expect(feature.getByRole('link', { name: 'Altri vantaggi' }))
      .toHaveAttribute('href', '/privati/vantaggi/');
    await expect(feature.getByRole('link', { name: 'Promo SDD' })).toHaveCount(0);
    await feature.getByRole('link', { name: 'Promo Scuola' }).click();
    await expect(page).toHaveURL(/\/promozioni\/scuola\/$/);
  }
});

test('cookie preferences use the information page or the available consent manager', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-cookie-preferences]').click();
  await expect(page).toHaveURL(/\/cookie\/#preferenze$/);
  await expect(page.locator('#preferenze')).toBeVisible();

  await page.goto('/');
  await page.evaluate(() => {
    Object.assign(window, {
      consentRenewed: false,
      Cookiebot: { renew: () => Object.assign(window, { consentRenewed: true }) },
    });
  });
  await page.locator('[data-cookie-preferences]').click();
  expect(await page.evaluate(() => Reflect.get(window, 'consentRenewed'))).toBe(true);
  await expect(page).toHaveURL(/\/$/);
});

test('business retains both original product sections', async ({ page }) => {
  await page.goto('/business/');
  await expect(page.locator('main h1')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Incassa senza POS' })).toBeVisible();
  await expect(page.locator('#business-commerce-title'))
    .toHaveText('Soluzioni per ricevere pagamenti sul tuo e-commerce.');
});
