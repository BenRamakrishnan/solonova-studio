import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createPreviewServer } from './helpers/preview-server.js';

test('project preview serves the correct MIME types and rejects paths outside its root', async t => {
  const root = await mkdtemp(path.join(tmpdir(), 'solonova-preview-test-'));
  await writeFile(path.join(root, 'index.html'), '<h1>Fixture</h1>');
  await writeFile(path.join(root, 'preview.webp'), 'fixture');
  const server = createPreviewServer({ root });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise(resolve => server.close(resolve));
    // Validate the resolved cleanup target remains inside the intended temp directory.
    const relative = path.relative(path.resolve(tmpdir()), path.resolve(root));
    assert.ok(!path.isAbsolute(relative) && !relative.startsWith('..') && relative.startsWith('solonova-preview-test-'));
    await rm(root, { recursive: true, force: true });
  });
  const host = `http://127.0.0.1:${server.address().port}`;
  const homepage = await fetch(host + '/solonova-studio/');
  assert.equal(homepage.status, 200);
  assert.equal(await homepage.text(), '<h1>Fixture</h1>');
  const image = await fetch(host + '/solonova-studio/preview.webp');
  assert.equal(image.headers.get('content-type'), 'image/webp');
  await image.text();
  const redirect = await fetch(host + '/solonova-studio', { redirect: 'manual' });
  assert.equal(redirect.status, 301);
  assert.equal(redirect.headers.get('location'), '/solonova-studio/');
  assert.equal((await fetch(host + '/solonova-studio/missing')).status, 404);
  assert.equal((await fetch(host + '/solonova-studio/..%2Foutside')).status, 404);
  assert.equal((await fetch(host + '/outside')).status, 404);
  assert.equal((await fetch(host + '/solonova-studio/%E0%A4%A')).status, 400);
});
