import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeSiteUrl, renderSiteMetadata, siteMetadata } from '../config/site.js';

test('deployment metadata preserves GitHub Pages subpaths and supports custom domains', () => {
  assert.equal(normalizeSiteUrl('https://example.com/studio'), 'https://example.com/studio/');
  assert.equal(renderSiteMetadata('__SITE_URL__|__SOCIAL_IMAGE_URL__', 'https://example.com/studio/'),
    'https://example.com/studio/|https://example.com/studio/og-image.jpg');
  assert.equal(renderSiteMetadata('__SOCIAL_IMAGE_URL__', 'https://custom.example/'), 'https://custom.example/og-image.jpg');
  assert.equal(renderSiteMetadata('__BUILD_REVISION__', 'https://custom.example/', 'a'.repeat(40)), 'a'.repeat(40));
  assert.throws(() => renderSiteMetadata('__BUILD_REVISION__', 'https://custom.example/', '<invalid>'));
});

test('invalid or credential-bearing site URLs fail before publishing', () => {
  for (const value of ['not-a-url', 'javascript:alert(1)', 'https://user:secret@example.com/', 'https://example.com/?token=x', 'https://example.com/#work']) {
    assert.throws(() => normalizeSiteUrl(value));
  }
});

test('HTML and emitted discovery files use the same deployment URL', () => {
  const plugin = siteMetadata('https://example.com/studio/');
  const files = [];
  plugin.generateBundle.call({ emitFile: file => files.push(file) });
  assert.deepEqual(files.map(file => file.fileName), ['robots.txt', 'sitemap.xml', 'llms.txt']);
  assert.match(files.find(file => file.fileName === 'robots.txt').source, /Sitemap: https:\/\/example.com\/studio\/sitemap.xml/);
  assert.match(files.find(file => file.fileName === 'sitemap.xml').source, /<loc>https:\/\/example.com\/studio\/<\/loc>/);
  assert.ok(files.every(file => !file.source.includes('__SITE_URL__') && !file.source.includes('https://solonova.ai/')));
  assert.equal(plugin.transformIndexHtml.handler('<link href="__SITE_URL__">'), '<link href="https://example.com/studio/">');
});
