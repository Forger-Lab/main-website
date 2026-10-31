// Run against the local dev server with Playwright available in NODE_PATH.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:3000';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('h1').count(), 1);
    assert.match(await page.title(), /Your Business Growth Partner/);
    for (const width of [1440, 1280, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Overflow at ${width}px`);
      const overflows = await page.locator('.home-page').evaluate(root => [...root.querySelectorAll('*')].filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width && getComputedStyle(el).position !== 'absolute' && (rect.right > innerWidth + 1 || rect.left < -1);
      }).map(el => el.className));
      assert.deepEqual(overflows, [], `Clipped content at ${width}px`);
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    for (let y = 0; y < await page.evaluate(() => document.body.scrollHeight); y += 900) {
      await page.evaluate(y => scrollTo(0, y), y);
    }
    await page.waitForFunction(() => [...document.images].every(img => img.complete && img.naturalWidth > 0));
    const assets = await page.locator('.home-page img').evaluateAll(images => images.map(img => ({ src: img.getAttribute('src'), naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight, width: img.getBoundingClientRect().width, height: img.getBoundingClientRect().height })));
    assert(assets.every(asset => asset.naturalWidth > 0), 'Missing image');
    for (const asset of assets.filter(asset => asset.src.endsWith('.svg') && asset.width > 0)) {
      assert(Math.abs(asset.width / asset.height - asset.naturalWidth / asset.naturalHeight) < 0.02, `Distorted SVG: ${asset.src}`);
    }
    for (const file of fs.readdirSync('public/home')) assert(fs.statSync(path.join('public/home', file)).size > 0, `Empty asset: ${file}`);
    const anchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href').slice(1)));
    for (const id of anchors) assert.equal(await page.locator(`[id="${id}"]`).count(), 1, `Broken anchor: ${id}`);
    const tabs = page.getByRole('tab');
    await tabs.nth(0).focus();
    await page.keyboard.press('ArrowRight');
    assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true');
    assert.match(await page.getByRole('tabpanel').innerText(), /60%/);
    await page.keyboard.press('ArrowRight');
    assert.match(await page.getByRole('tabpanel').innerText(), /instant certification/);
    await page.keyboard.press('End');
    assert.equal(await tabs.nth(3).getAttribute('aria-selected'), 'true');
    assert.match(await page.getByRole('tabpanel').innerText(), /student activity/);
    await page.keyboard.press('ArrowRight');
    assert.equal(await tabs.nth(0).getAttribute('aria-selected'), 'true');
    await page.keyboard.press('ArrowLeft');
    assert.equal(await tabs.nth(3).getAttribute('aria-selected'), 'true');
    await page.keyboard.press('Home');
    assert.match(await page.getByRole('tabpanel').innerText(), /100%/);
    const faq = page.locator('#faq details').nth(1);
    await faq.locator('summary').click();
    assert.equal(await faq.evaluate(el => el.open), true);
    await faq.locator('summary').click();
    const tool = page.locator('.home-integrations details').nth(1);
    await tool.locator('summary').click();
    assert.equal(await tool.evaluate(el => el.open), true);
    await tool.locator('summary').click();
    fs.mkdirSync('.next/dev/home-review', { recursive: true });
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: '.next/dev/home-review/desktop.png', fullPage: true });
    await page.screenshot({ path: '.next/dev/home-review/desktop-hero.png' });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator('.home-mobile-nav > summary').click();
    const mobile = page.getByRole('navigation', { name: 'Mobile navigation' });
    await mobile.locator('summary').filter({ hasText: 'Services' }).click();
    await mobile.getByRole('link', { name: 'Services Overview' }).click();
    assert.equal(await page.locator('.home-mobile-nav').evaluate(el => el.open), false);
    await page.locator('.home-mobile-nav > summary').click();
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('.home-mobile-nav').evaluate(el => el.open), false);
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: '.next/dev/home-review/mobile.png', fullPage: true });
    await page.screenshot({ path: '.next/dev/home-review/mobile-hero.png' });
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    assert.equal(schema['@graph'].find(item => item['@type'] === 'FAQPage').mainEntity.length, await page.locator('#faq details').count());
    assert.equal((await page.request.get(`${base}/contact`)).status(), 200);
    assert.deepEqual(errors, [], 'Browser runtime errors');
    console.log(JSON.stringify({ result: 'passed', widths: [1440, 1280, 768, 390, 320], assets: assets.length, checks: ['image loading', 'anchors', 'keyboard tabs', 'FAQ', 'integrations', 'mobile menu', 'schema', 'contact route', 'runtime errors'] }, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });


