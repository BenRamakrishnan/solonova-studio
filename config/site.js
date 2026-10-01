import { readFileSync } from 'node:fs';

export const defaultSiteUrl = 'https://benramakrishnan.github.io/solonova-studio/';

export function normalizeSiteUrl(value = defaultSiteUrl) {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTP(S) website URL without credentials, query, or fragment.');
  }
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.href;
}

export function renderSiteMetadata(template, siteUrl, revision = 'local') {
  if (revision !== 'local' && !/^[a-f0-9]{40}$/i.test(revision)) throw new Error('Invalid build revision.');
  const canonical = normalizeSiteUrl(siteUrl);
  return template.replaceAll('__SITE_URL__', canonical)
    .replaceAll('__BUILD_REVISION__', revision)
    .replaceAll('__SOCIAL_IMAGE_URL__', new URL('og-image.jpg', canonical).href);
}

// One deployment URL drives HTML, social previews, and discovery files.
export function siteMetadata(siteUrl, revision = process.env.GITHUB_SHA || 'local') {
  const discovery = Object.fromEntries(['robots.txt', 'sitemap.xml', 'llms.txt'].map(name => [
    name, renderSiteMetadata(readFileSync(new URL(`../content/seo/${name}`, import.meta.url), 'utf8'), siteUrl)
  ]));
  return {
    name: 'solonova-site-metadata',
    transformIndexHtml: { order: 'pre', handler: html => renderSiteMetadata(html, siteUrl, revision) },
    generateBundle() {
      for (const [fileName, source] of Object.entries(discovery)) {
        this.emitFile({ type: 'asset', fileName, source });
      }
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const name = request.url?.split('?')[0].slice(1);
        if (!Object.hasOwn(discovery, name)) return next();
        response.setHeader('Content-Type', name === 'sitemap.xml' ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8');
        response.end(discovery[name]);
      });
    }
  };
}
