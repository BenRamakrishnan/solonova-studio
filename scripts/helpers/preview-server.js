import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';

const mime = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
  '.txt': 'text/plain', '.xml': 'application/xml'
};

export function createPreviewServer({ root = path.resolve('dist'), base = '/solonova-studio/' } = {}) {
  const directory = path.resolve(root);
  return http.createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      if (pathname === base.slice(0, -1)) {
        response.writeHead(301, { Location: base }); response.end(); return;
      }
      if (!pathname.startsWith(base)) {
        response.writeHead(404); response.end('Not found'); return;
      }
      const file = path.resolve(directory, pathname.slice(base.length) || 'index.html');
      if (!file.startsWith(directory + path.sep)) {
        response.writeHead(404); response.end('Not found'); return;
      }
      if (!(await stat(file)).isFile()) {
        response.writeHead(404); response.end('Not found'); return;
      }
      response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      createReadStream(file).on('error', () => response.destroy()).pipe(response);
    } catch (error) {
      response.writeHead(error instanceof URIError ? 400 : error.code === 'ENOENT' ? 404 : 500);
      response.end('Unable to serve resource');
    }
  });
}
