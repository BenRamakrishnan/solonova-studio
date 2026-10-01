const money = new Intl.NumberFormat('en-IN');
export { whatsappUrl } from './contact.js';

export function estimateScope({ basePrice, baseDays, sections, type, addons = [] }) {
  const count = Math.max(1, Math.min(10, Number(sections) || 1));
  const extra = Math.max(0, count - 3);
  const standardDays = Number(baseDays) + Math.floor(extra / 2);
  const features = addons.filter(a => !a.priority || standardDays > 2);
  const priority = features.some(a => a.priority);
  return {
    type, sections: count,
    total: Number(basePrice) + extra * 1500 + features.reduce((sum, a) => sum + Number(a.price), 0),
    days: priority ? Math.max(2, standardDays - 2) : standardDays,
    standardDays, features: features.map(a => a.name), priority
  };
}

export function scopeBrief(spec) {
  return `Project scope\n- Build: ${spec.type}\n- Scope: ${spec.sections} ${spec.sections === 1 ? 'section' : 'sections'}\n- Features: ${spec.features.length ? spec.features.join('; ') : 'Standard inclusions'}\n- Estimated fee: ₹${money.format(spec.total)}\n- Estimated delivery: ${spec.days} business days${spec.priority ? ' (priority)' : ''}\nFinal scope and kickoff date to be confirmed before booking.`;
}

export function budgetBand(total) {
  return total <= 25000 ? '15k-25k' : total <= 50000 ? '25k-50k' : total <= 80000 ? '50k-80k' : '80k+';
}
