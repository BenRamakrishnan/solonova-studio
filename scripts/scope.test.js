import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateScope, scopeBrief, budgetBand, whatsappUrl } from '../src/utils/scope.js';

test('default scope matches displayed price and estimated delivery', () => {
  const spec = estimateScope({ basePrice: 28500, baseDays: 5, sections: 5, type: 'Brand site' });
  assert.equal(spec.total, 31500);
  assert.equal(spec.days, 6);
});
test('priority improves an app estimate without claiming a 48-hour guarantee', () => {
  const spec = estimateScope({ basePrice: 54000, baseDays: 7, sections: 5, type: 'App', addons: [{ price: 4000, name: 'Priority delivery', priority: true }] });
  assert.equal(spec.total, 61000);
  assert.equal(spec.days, 6);
  assert.match(scopeBrief(spec), /6 business days \(priority\)/);
});
test('already-fast launchpad does not charge for ineffective priority', () => {
  const spec = estimateScope({ basePrice: 14999, baseDays: 2, sections: 3, type: 'Launchpad', addons: [{ price: 4000, name: 'Priority delivery', priority: true }] });
  assert.equal(spec.total, 14999);
  assert.equal(spec.days, 2);
  assert.deepEqual(spec.features, []);
});
test('handoff includes every selected feature and preserves special characters', () => {
  const spec = estimateScope({ basePrice: 38000, baseDays: 6, sections: 10, type: 'Shop', addons: [{ price: 5000, name: 'UPI & Razorpay' }, { price: 4500, name: 'Motion' }] });
  const brief = scopeBrief(spec) + '\nName: <Test & Co>\nReference: https://example.com/?a=1&b=2';
  assert.equal(spec.total, 58000);
  assert.match(brief, /UPI & Razorpay; Motion/);
  assert.equal(new URL(whatsappUrl(brief)).searchParams.get('text'), brief);
  assert.equal(budgetBand(spec.total), '50k-80k');
});
test('budget boundaries map to the appropriate inquiry option', () => {
  assert.equal(budgetBand(25000), '15k-25k');
  assert.equal(budgetBand(50000), '25k-50k');
  assert.equal(budgetBand(80000), '50k-80k');
  assert.equal(budgetBand(80001), '80k+');
});
