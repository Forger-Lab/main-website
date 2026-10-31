// Run against the local server with Playwright available in NODE_PATH.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');

const base = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:3000';
const routes = ['/', '/web-development', '/seo', '/lead-capture', '/crm', '/automation', '/builds', '/about', '/contact', '/privacy', '/terms'];
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const redirect = await page.request.get(`${base}/en_GB?source=test`, { maxRedirects: 0 });
  assert.equal(redirect.status(), 308);
  assert.equal(new URL(redirect.headers().location, base).pathname, '/');
  assert.equal(new URL(redirect.headers().location, base).searchParams.get('source'), 'test');
  const sitemap = await (await page.request.get(`${base}/sitemap.xml`)).text();
  assert(!sitemap.includes('/en_GB'), 'Retired route still in sitemap');
  const targets = new Set();
  const pageIds = new Map();
  for (const route of routes) {
    const response = await page.goto(base + route, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200, route);
    assert.equal(await page.locator('header.home-nav').count(), 1, route);
    assert.equal(await page.locator('footer.home-footer').count(), 1, route);
    assert.equal(await page.locator('header .home-nav-group').count(), 6, route);
    const footer = page.locator('footer');
    for (const href of routes) assert(await footer.locator(`a[href="${href}"]`).count(), `Missing footer link ${route} → ${href}`);
    assert.equal(await footer.getByRole('link', { name: 'Tools & Integrations' }).getAttribute('href'), '/#insights');
    assert.equal(await footer.getByRole('link', { name: 'Discuss pricing' }).getAttribute('href'), '/contact');
    assert.equal(await page.locator('header, footer').getByText(/^(Industries|Insights|Pricing)$/).count(), 0);
    for (const href of await page.locator('a[href^="/"]').evaluateAll(links => links.map(link => link.getAttribute('href')))) targets.add(href);
    pageIds.set(route, await page.locator('[id]').evaluateAll(nodes => nodes.map(node => node.id)));
    for (const width of [1440, 768, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.evaluate(() => scrollTo(0, 600));
      await page.waitForFunction(() => Math.abs(scrollY - Math.min(600, document.documentElement.scrollHeight - innerHeight)) < 2);
      assert.equal(await page.locator('header.home-nav').evaluate(el => Math.round(el.getBoundingClientRect().top)), 0, route + ': navbar must stay visible on scroll');
      await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
      const clipped = await page.locator('.site-shell').evaluateAll(shells => shells.flatMap(shell => [...shell.querySelectorAll('*')]).filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width && rect.height && (rect.right > innerWidth + 1 || rect.left < -1);
      }).map(el => el.className));
      assert.deepEqual(clipped, [], `${route}: navigation overflow at ${width}px`);
      if (route === '/contact') {
        const overflow = await page.locator('#book *').evaluateAll(nodes => nodes.filter(el => {
          const rect = el.getBoundingClientRect();
          return rect.width && rect.right > innerWidth + 1 && getComputedStyle(el).position !== 'absolute';
        }).map(el => el.className));
        assert.deepEqual(overflow, [], `Contact content clipped at ${width}px`);
      }
      assert.equal(await page.locator('.home-nav').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(247, 243, 238)');
      assert.equal(await footer.evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(20, 11, 30)');
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
  }
  for (const href of targets) {
    const url = new URL(href, base);
    assert(pageIds.has(url.pathname), `Unknown internal destination: ${href}`);
    if (url.hash) assert(pageIds.get(url.pathname).includes(url.hash.slice(1)), `Broken anchor: ${href}`);
  }

  await page.goto(`${base}/crm`, { waitUntil: 'networkidle' });
  const desktop = page.getByRole('navigation', { name: 'Main navigation', exact: true });
  const services = desktop.locator('details').first();
  for (const width of [1440, 1024]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const group of await desktop.locator('details').all()) {
      await group.locator('summary').hover();
      assert.equal(await group.evaluate(el => el.open), true, 'Hover should open dropdown');
      assert.equal(await desktop.locator('details[open]').count(), 1);
      const panel = group.locator('.home-nav-panel');
      assert.equal(await panel.evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').length), 4);
      const bounds = await panel.boundingBox();
      assert(bounds.x >= 0 && bounds.x + bounds.width <= width, 'Dropdown must fit viewport');
      const cards = await panel.getByRole('link').all();
      const positions = await Promise.all(cards.map(card => card.boundingBox()));
      assert.equal(new Set(positions.slice(0, 4).map(rect => rect.y)).size, 1);
      if (positions.length > 4) assert(positions[4].y > positions[0].y, 'Fifth card should start next row');
      await cards[0].hover();
      await page.waitForFunction(() => {
        const arrow = document.querySelector('.home-desktop-links .home-nav-panel a:hover .home-nav-card-arrow');
        return arrow && getComputedStyle(arrow).opacity === '1';
      });
      assert.equal(await group.evaluate(el => el.open), true, 'Menu should stay open when entering cards');
      await page.mouse.move(10, 600);
      assert.equal(await group.evaluate(el => el.open), false, 'Pointer exit should close dropdown');
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await services.locator('summary').focus();
  await page.keyboard.press('Enter');
  assert.equal(await services.evaluate(el => el.open), true);
  assert.equal(await services.getByRole('link', { name: 'CRM Command Center' }).getAttribute('aria-current'), 'page');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Escape');
  assert.equal(await services.evaluate(el => el.open), false);
  assert.equal(await services.locator('summary').evaluate(el => el === document.activeElement), true);
  await services.locator('summary').click();
  await page.mouse.click(10, 600);
  assert.equal(await services.evaluate(el => el.open), false);
  await services.locator('summary').click();
  await services.getByRole('link', { name: 'Services Overview' }).click();
  await page.waitForURL(`${base}/#services`);
  await page.locator('#services').waitFor();
  assert.equal(await page.locator('header details[open]').count(), 0);

  for (const width of [768, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.evaluate(() => scrollTo(0, 0));
    const menu = page.locator('.home-mobile-nav');
    const mobile = page.getByRole('navigation', { name: 'Mobile navigation' });
    assert.equal(await menu.locator(':scope > summary').innerText(), '');
    assert.equal(await menu.locator(':scope > summary').getAttribute('aria-label'), 'Toggle navigation');
    assert.equal(await menu.locator('.home-menu-icon').isVisible(), true);
    await menu.locator(':scope > summary').click();
    assert.equal(await menu.locator('.home-close-icon').isVisible(), true);
    await mobile.locator('details').first().locator('summary').click();
    await mobile.getByRole('link', { name: 'CRM Command Center' }).focus();
    await page.keyboard.press('Escape');
    assert.equal(await mobile.locator('details').first().evaluate(el => el.open), false);
    assert.equal(await menu.evaluate(el => el.open), true);
    await page.keyboard.press('Escape');
    assert.equal(await menu.evaluate(el => el.open), false);
    await menu.locator(':scope > summary').click();
    await mobile.locator('details').first().locator('summary').click();
    await mobile.getByRole('link', { name: 'CRM Command Center' }).click();
    await page.waitForURL(`${base}/crm`);
    assert.equal(await page.locator('header details[open]').count(), 0);
    await menu.locator(':scope > summary').click();
    await mobile.getByRole('link', { name: 'Tell us about your project' }).click();
    await page.waitForURL(`${base}/contact`);
  }
  fs.mkdirSync('.next/navigation-review', { recursive: true });
  await page.screenshot({ path: '.next/navigation-review/mobile-contact.png' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${base}/about`, { waitUntil: 'networkidle' });
  await desktop.locator('details').first().locator('summary').hover();
  await page.screenshot({ path: '.next/navigation-review/desktop-about.png' });
  await page.locator('footer').scrollIntoViewIfNeeded();
  await page.screenshot({ path: '.next/navigation-review/footer.png' });
  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log(JSON.stringify({ result: 'passed', routes: routes.length, internalDestinations: targets.size, checks: ['permanent redirect', 'sitemap', 'shared header/footer', 'cross-page anchors', 'active link', 'keyboard and mobile menus', 'responsive navigation', 'runtime errors'] }, null, 2));
} finally {
  await browser.close();
}
