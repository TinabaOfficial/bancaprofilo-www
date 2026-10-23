import { expect, test } from '@playwright/test';

test('every published inner page has a complete breadcrumb with valid parent links', async ({ page, request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname)
    .filter((route) => route !== '/');
  routes.push('/404.html');
  const parents = new Set<string>();

  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(route === '/404.html' ? 404 : 200);
    const result = await page.evaluate((html) => {
      const document = new DOMParser().parseFromString(html, 'text/html');
      const breadcrumbs = document.querySelectorAll('nav[aria-label="Percorso di navigazione"]');
      const breadcrumb = breadcrumbs[0];
      const items = [...(breadcrumb?.querySelectorAll('ol > li') ?? [])];
      const current = breadcrumb?.querySelector('[aria-current="page"]');
      return {
        count: breadcrumbs.length,
        itemCount: items.length,
        currentCount: breadcrumb?.querySelectorAll('[aria-current="page"]').length,
        currentLabel: current?.textContent?.trim(),
        currentTag: current?.tagName,
        currentIsLast: items.at(-1)?.contains(current ?? null),
        links: [...(breadcrumb?.querySelectorAll('a') ?? [])]
          .map((link) => ({ label: link.textContent?.trim(), href: link.getAttribute('href') })),
      };
    }, await response.text());

    expect(result.count, route).toBe(1);
    expect(result.itemCount, route).toBeGreaterThanOrEqual(2);
    expect(result.currentCount, route).toBe(1);
    expect(result.currentLabel, route).toBeTruthy();
    expect(result.currentTag, route).toBe('SPAN');
    expect(result.currentIsLast, route).toBe(true);
    expect(result.links[0], route).toEqual({ label: 'Home', href: '/' });
    for (const link of result.links) {
      expect(link.label, route).toBeTruthy();
      expect(link.href, route).toMatch(/^\//);
      parents.add(link.href!);
    }
  }

  for (const parent of parents) expect((await request.get(parent)).status(), parent).toBe(200);
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: 'Percorso di navigazione' })).toHaveCount(0);
});

test('breadcrumb hierarchy, keyboard and reflow work on desktop and mobile', async ({ page }) => {
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/risparmio/conto-deposito/', '/community/charity/']) {
      await page.goto(route);
      const breadcrumb = page.getByRole('navigation', { name: 'Percorso di navigazione' });
      await expect(breadcrumb).toBeVisible();
      await expect(breadcrumb.getByRole('link')).toHaveText(route.startsWith('/risparmio')
        ? ['Home', 'Privati', 'Risparmi']
        : ['Home', 'Chi Siamo', 'Il nostro impegno']);
      const bounds = await breadcrumb.evaluate((element) => ({
        width: element.clientWidth,
        scrollWidth: element.scrollWidth,
        minLinkHeight: Math.min(...[...element.querySelectorAll('a')]
          .map((link) => link.getBoundingClientRect().height)),
      }));
      expect(bounds.scrollWidth).toBeLessThanOrEqual(bounds.width + 1);
      expect(bounds.minLinkHeight).toBeGreaterThanOrEqual(44);
      const parent = breadcrumb.getByRole('link').last();
      const target = await parent.getAttribute('href');
      await parent.focus();
      await expect(parent).toBeFocused();
      await parent.press('Enter');
      await expect(page).toHaveURL(new RegExp(`${target}$`));
    }
  }
});
