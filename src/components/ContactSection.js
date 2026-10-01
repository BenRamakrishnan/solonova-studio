import { whatsappUrl, inquiryUrl, studioContact } from '../utils/contact.js';

export function renderContactSection() {
  const container = document.getElementById('contact-root');
  if (!container) return;

  container.innerHTML = `
    <section id="contact" class="section">
      <div class="container">
        <!-- Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">DIRECT FOUNDER ACCESS</span>
          </div>
          <h2 style="color: #09090B;">Initiate Your Sprint with <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: #D4D4D8; text-underline-offset: 6px;">Solonova Studio</span></h2>
          <p>Speak directly with the founder. Share your goals and references, then review the scope and kickoff date together.</p>
        </div>

        <div class="grid-2" style="max-width: var(--container-narrow); margin-inline: auto; gap: var(--space-8); align-items: start;">
          <!-- Left: Direct Channels & Guarantee -->
          <div>
            <div class="double-bezel" style="margin-bottom: var(--space-8);">
              <div class="double-bezel-inner" style="padding: clamp(1.5rem, 3.5vw, 2.5rem);">
                <h3 style="font-size: 1.55rem; font-weight: 700; margin-bottom: var(--space-3); color: #09090B;">Instant Contact Channels</h3>
                <p style="font-size: 1.05rem; color: #52525B; margin-bottom: var(--space-6); line-height: 1.65;">
                  In a rush? WhatsApp is the fastest way to get wireframe feedback and lock in your sprint:
                </p>

                <div class="flex flex-col gap-3">
                  <!-- Direct WhatsApp Button -->
                  <a href="${inquiryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg" style="justify-content: flex-start; background: #F0FDF4; border-color: #A7F3D0; color: #047857; white-space: normal; padding: clamp(0.75rem, 2vw, 1.1rem) clamp(1rem, 2vw, 1.5rem);">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" style="flex-shrink: 0;">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <div style="display: flex; flex-direction: column; align-items: flex-start; text-align: left;">
                      <span style="overflow-wrap: break-word; line-height: 1.3;"><strong>WhatsApp Founder Direct</strong></span>
                      <span style="font-size: 0.88rem; color: #065F46;">Discuss your scope with the founder</span>
                    </div>
                  </a>

                  <!-- Direct Call / Mobile Line -->
                  <a href="tel:${studioContact.phone}" class="btn btn-secondary btn-lg" style="justify-content: flex-start; white-space: normal; padding: clamp(0.75rem, 2vw, 1.1rem) clamp(1rem, 2vw, 1.5rem);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2" style="flex-shrink: 0;">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div style="display: flex; flex-direction: column; align-items: flex-start; text-align: left;">
                      <span style="overflow-wrap: break-word; line-height: 1.3;"><strong>Direct Phone Line</strong></span>
                      <span style="font-size: 0.88rem; color: #52525B;">Priority Voice Line</span>
                    </div>
                  </a>

                  <!-- Email Direct -->
                  <a href="mailto:${studioContact.email}" class="btn btn-secondary btn-lg" style="justify-content: flex-start; white-space: normal; padding: clamp(0.75rem, 2vw, 1.1rem) clamp(1rem, 2vw, 1.5rem);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2" style="flex-shrink: 0;">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span style="overflow-wrap: break-word;">${studioContact.email}</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Indian Payment & SLA Badge -->
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: clamp(1.25rem, 3vw, 2rem); background: #FAFAFB;">
                <div class="flex items-center gap-3" style="margin-bottom: var(--space-3);">
                  <span class="radar-ping">
                    <span class="radar-ping-core"></span>
                  </span>
                  <span style="font-family: var(--font-mono); font-size: clamp(0.76rem, 1.5vw, 0.88rem); color: #09090B; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; overflow-wrap: break-word;">
                    INDIA & GLOBAL · IST
                  </span>
                </div>
                <p style="font-size: 0.96rem; color: #52525B; margin: 0; line-height: 1.65; overflow-wrap: break-word;">
                  Share your brief anytime. Project payments via UPI (Google Pay, PhonePe, Paytm), Razorpay, and direct IMPS/NEFT bank transfer.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Inquiry Form -->
          <div class="double-bezel">
            <div class="double-bezel-inner" style="padding: clamp(1.5rem, 3.5vw, 2.75rem);">
              <form id="inquiry-form" novalidate>
                <h3 style="font-size: 1.5rem; margin-bottom: var(--space-3);">Prepare Your Project Brief</h3>
                <p id="form-help" style="font-size: 0.94rem; margin-bottom: var(--space-6);">Create a WhatsApp draft below. You review and send it in WhatsApp; nothing is sent by this form.</p>
                <div class="input-group">
                  <label class="input-label" for="contact-name">Your Name or Brand / Startup</label>
                  <input type="text" id="contact-name" name="name" maxlength="150" aria-describedby="name-error" class="input-field" placeholder="e.g. Vikram Sharma / Nexus Labs" autocomplete="name" required />
                  <span id="name-error" class="field-error" hidden></span>
                </div>

                <div class="input-group">
                  <label class="input-label" for="contact-email">Email Address</label>
                  <input type="email" id="contact-email" name="email" maxlength="254" aria-describedby="email-error" class="input-field" placeholder="vikram@nexus.io" autocomplete="email" spellcheck="false" required />
                  <span id="email-error" class="field-error" hidden></span>
                </div>

                <div class="form-row-2" style="gap: var(--space-4);">
                  <div class="input-group">
                    <label class="input-label" for="contact-timeline">Target Timeline</label>
                    <select id="contact-timeline" name="timeline" class="select-field" style="max-width: 100%; text-overflow: ellipsis;">
                      <option value="48h">48-Hour Rapid Sprint</option>
                      <option value="1week" selected>1 Week Sprint</option>
                      <option value="2weeks">2 - 3 Weeks</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div class="input-group">
                    <label class="input-label" for="contact-budget">Estimated Budget (₹ INR)</label>
                    <select id="contact-budget" name="budget" class="select-field" style="max-width: 100%; text-overflow: ellipsis;">
                      <option value="15k-25k">₹15,000 - ₹25,000</option>
                      <option value="25k-50k" selected>₹25,000 - ₹50,000</option>
                      <option value="50k-80k">₹50,000 - ₹80,000</option>
                      <option value="80k+">₹80,000+</option>
                    </select>
                  </div>
                </div>

                <div class="input-group">
                  <label class="input-label" for="contact-message">Project Brief or Reference Sites</label>
                  <textarea id="contact-message" name="message" maxlength="8000" aria-describedby="message-error" class="textarea-field" rows="4" placeholder="Tell us about your brand, goals, and any reference sites you love..." required></textarea>
                  <span id="message-error" class="field-error" hidden></span>
                </div>

                <button type="submit" id="submit-inquiry-btn" class="btn btn-primary btn-lg" style="width: 100%; margin-top: var(--space-3); justify-content: center; padding: clamp(0.85rem, 2vw, 1.15rem) clamp(1rem, 2vw, 1.75rem); white-space: normal;">
                  <span>Prepare WhatsApp Draft</span>
                  <span class="btn-icon-circle" style="flex-shrink: 0;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                      <path d="M7 17l9.2-9.2M17 17V8H8"/>
                    </svg>
                  </span>
                </button>

                <div id="form-feedback" role="status" aria-atomic="true" aria-live="polite" style="display: none; margin-top: var(--space-5); padding: var(--space-4); border-radius: var(--radius-md); font-size: 1rem; text-align: center;"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = document.getElementById('inquiry-form');
  const feedback = document.getElementById('form-feedback');
  const fields = ['name', 'email', 'message'].map(name => ({
    name, input: document.getElementById(`contact-${name}`), error: document.getElementById(`${name}-error`)
  }));
  function clearError(field) {
    field.input.removeAttribute('aria-invalid');
    field.error.hidden = true;
    field.error.textContent = '';
  }
  fields.forEach(field => field.input.addEventListener('input', () => {
    clearError(field);
    feedback.style.display = 'none';
  }));
  form.addEventListener('input', () => { feedback.style.display = 'none'; });
  form.addEventListener('change', () => { feedback.style.display = 'none'; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    let firstError = null;
    for (const field of fields) {
      clearError(field);
      const value = field.input.value.trim();
      const error = !value ? `Enter your ${field.name === 'message' ? 'project brief' : field.name}.`
        : field.name === 'email' && field.input.validity.typeMismatch ? 'Enter a valid email address, such as name@example.com.' : '';
      if (error) {
        field.input.setAttribute('aria-invalid', 'true');
        field.error.textContent = error;
        field.error.hidden = false;
        firstError ||= field.input;
      }
    }
    feedback.style.display = 'block';
    feedback.className = firstError ? 'form-feedback-error' : 'form-feedback-success';
    if (firstError) {
      feedback.textContent = 'Please check the highlighted fields before preparing your draft.';
      firstError.focus();
      return;
    }
    const timeline = document.getElementById('contact-timeline').selectedOptions[0].textContent;
    const budget = document.getElementById('contact-budget').selectedOptions[0].textContent;
    const [name, email, message] = fields.map(field => field.input.value.trim());
    const brief = `Hi Solonova Studio, I'd like to discuss a project.\n\nName / Brand: ${name}\nEmail: ${email}\nTimeline: ${timeline}\nBudget: ${budget}\n\n${message}`;
    const note = document.createElement('p');
    note.textContent = `Your draft is ready, ${name}. Open WhatsApp to review and send it to the founder.`;
    const link = document.createElement('a');
    link.href = whatsappUrl(brief);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'btn btn-primary';
    link.textContent = 'Open Draft in WhatsApp';
    feedback.replaceChildren(note, link);
    link.focus({ preventScroll: true });
  });
}
