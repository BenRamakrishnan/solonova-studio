import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import { projects } from '../src/data/projects.js';
import { previewImage, previewSources } from '../src/utils/images.js';
import { normalizeSiteUrl } from '../config/site.js';

const dist = path.resolve('dist');
const html = readFileSync(path.join(dist, 'index.html'), 'utf8');
const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
assert.equal(canonical, normalizeSiteUrl(process.env.SITE_URL || undefined), 'canonical matches the configured deployment');
assert.ok(!/__SITE_URL__|__SOCIAL_IMAGE_URL__|__BUILD_REVISION__/.test(html), 'metadata placeholders are resolved');
const site = new URL(canonical);
const structuredData = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/)[1]);
assert.equal(structuredData.url, canonical);
assert.equal(html.match(/<meta property="og:url" content="([^"]+)"/)?.[1], canonical);
assert.equal(html.match(/<meta property="og:image" content="([^"]+)"/)?.[1], new URL('og-image.jpg', site).href);
assert.equal(html.match(/<meta name="twitter:image" content="([^"]+)"/)?.[1], new URL('og-image.jpg', site).href);
if (process.env.GITHUB_SHA) assert.ok(html.includes(`name="build-revision" content="${process.env.GITHUB_SHA}"`));

let resources = 0;
function verifyResource(reference, base = site) {
  const url = new URL(reference, base);
  if (url.origin !== site.origin) return;
  assert.ok(url.pathname.startsWith(site.pathname), `asset stays inside the hosted project: ${reference}`);
  const file = path.resolve(dist, decodeURIComponent(url.pathname.slice(site.pathname.length)));
  assert.ok(file.startsWith(dist + path.sep), 'resource stays inside the build directory');
  assert.ok(statSync(file).isFile(), `resource exists: ${reference}`);
  resources++;
  if (file.endsWith('.css')) {
    const css = postcss.parse(readFileSync(file, 'utf8'), { from: file });
    css.walkDecls(declaration => {
      for (const match of declaration.value.matchAll(/url\((['"]?)([^)'"]+)\1\)/g)) verifyResource(match[2], url);
    });
  }
}
for (const tag of html.matchAll(/<(?:script|link)\b[^>]+>/g)) {
  if (tag[0].startsWith('<link') && !/rel="(?:icon|stylesheet|preload)"/.test(tag[0])) continue;
  const reference = tag[0].match(/(?:src|href)="([^"]+)"/)?.[1];
  if (reference) verifyResource(reference);
}
for (const project of projects) {
  for (const width of [320, 640, 960]) {
    const reference = previewImage(project.image, width);
    verifyResource(reference);
    const bytes = readFileSync(path.join(dist, reference));
    assert.equal(bytes.subarray(0, 4).toString(), 'RIFF');
    assert.equal(bytes.subarray(8, 12).toString(), 'WEBP');
  }
  assert.equal(previewSources(project.image).split(', ').length, 3);
}
const socialImage = readFileSync(path.join(dist, 'og-image.jpg'));
assert.equal(socialImage.subarray(0, 3).toString('hex'), 'ffd8ff', 'social image MIME matches its extension');
for (const name of ['robots.txt', 'sitemap.xml', 'llms.txt']) {
  const text = readFileSync(path.join(dist, name), 'utf8');
  assert.ok(text.includes(canonical), `${name} points to the live site`);
  assert.ok(!text.includes('__SITE_URL__'));
}
for (const name of readdirSync('src/styles').filter(name => name.endsWith('.css'))) {
  postcss.parse(readFileSync(path.join('src/styles', name), 'utf8'), { from: name });
}
console.log(`Production verification passed: ${resources} asset references, metadata, image signatures, discovery files, and CSS syntax.`);
