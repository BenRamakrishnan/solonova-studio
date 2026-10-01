import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml } from '../src/utils/html.js';

test('project text is safe in both HTML content and quoted attributes', () => {
  assert.equal(escapeHtml(`Brand "A" & <demo> 'study'`), 'Brand &quot;A&quot; &amp; &lt;demo&gt; &#39;study&#39;');
  assert.equal(escapeHtml(null), '');
  assert.equal(escapeHtml(0), '0');
});
