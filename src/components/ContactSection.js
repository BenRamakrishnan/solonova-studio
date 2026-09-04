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
          <p>Skip the agency runaround. Reach out directly on WhatsApp or submit your project scope below to review wireframes and lock in your kickoff date.</p>
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
                  <a href="https://wa.me/?text=Hi%20Solonova%20Studio,%20I'd%20like%20to%20discuss%20a%20website%20sprint" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg" style="justify-content: flex-start; background: #F0FDF4; border-color: #A7F3D0; color: #047857; white-space: normal; padding: clamp(0.75rem, 2vw, 1.1rem) clamp(1rem, 2vw, 1.5rem);">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" style="flex-shrink: 0;">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span style="overflow-wrap: break-word; line-height: 1.4;"><strong>Chat on WhatsApp</strong> (Instant Founder Reply)</span>
                  </a>

                  <!-- Email Direct -->
                  <a href="mailto:ben@solonova.ai" class="btn btn-secondary btn-lg" style="justify-content: flex-start; white-space: normal; padding: clamp(0.75rem, 2vw, 1.1rem) clamp(1rem, 2vw, 1.5rem);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2" style="flex-shrink: 0;">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span style="overflow-wrap: break-word;">ben@solonova.ai</span>
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
                    ACTIVE QUEUE · IST BENGALURU / MUMBAI
                  </span>
                </div>
                <p style="font-size: 0.96rem; color: #52525B; margin: 0; line-height: 1.65; overflow-wrap: break-word;">
                  Average response under 2 hours. Seamless settlement via UPI (Google Pay, PhonePe, Paytm), Razorpay, and direct IMPS/NEFT bank transfer.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Inquiry Form -->
          <div class="double-bezel">
            <div class="double-bezel-inner" style="padding: clamp(1.5rem, 3.5vw, 2.75rem);">
              <form id="inquiry-form">
                <div class="input-group">
                  <label class="input-label" for="contact-name">Your Name or Brand / Startup</label>
                  <input type="text" id="contact-name" class="input-field" placeholder="e.g. Vikram Sharma / Nexus Labs" autocomplete="name" required />
                </div>

                <div class="input-group">
                  <label class="input-label" for="contact-email">Email Address</label>
                  <input type="email" id="contact-email" class="input-field" placeholder="vikram@nexus.io" autocomplete="email" required />
                </div>

                <div class="form-row-2" style="gap: var(--space-4);">
                  <div class="input-group">
                    <label class="input-label" for="contact-timeline">Target Timeline</label>
                    <select id="contact-timeline" class="select-field" style="max-width: 100%; text-overflow: ellipsis;">
                      <option value="48h">48-Hour Rapid Sprint</option>
                      <option value="1week" selected>1 Week Sprint</option>
                      <option value="2weeks">2 - 3 Weeks</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div class="input-group">
                    <label class="input-label" for="contact-budget">Estimated Budget (₹ INR)</label>
                    <select id="contact-budget" class="select-field" style="max-width: 100%; text-overflow: ellipsis;">
                      <option value="15k-25k">₹15,000 - ₹25,000</option>
                      <option value="25k-50k" selected>₹25,000 - ₹50,000</option>
                      <option value="50k-80k">₹50,000 - ₹80,000</option>
                      <option value="80k+">₹80,000+</option>
                    </select>
                  </div>
                </div>

                <div class="input-group">
                  <label class="input-label" for="contact-message">Project Brief or Reference Sites</label>
                  <textarea id="contact-message" class="textarea-field" rows="4" placeholder="Tell us about your brand, goals, and any reference sites you love..." required></textarea>
                </div>

                <button type="submit" id="submit-inquiry-btn" class="btn btn-primary btn-lg" style="width: 100%; margin-top: var(--space-3); justify-content: center; padding: clamp(0.85rem, 2vw, 1.15rem) clamp(1rem, 2vw, 1.75rem); white-space: normal;">
                  <span>Send Project Inquiry</span>
                  <span class="btn-icon-circle" style="flex-shrink: 0;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                      <path d="M7 17l9.2-9.2M17 17V8H8"/>
                    </svg>
                  </span>
                </button>

                <div id="form-feedback" role="status" aria-live="polite" style="display: none; margin-top: var(--space-5); padding: var(--space-4); border-radius: var(--radius-md); font-size: 1rem; text-align: center;"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = document.getElementById('inquiry-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-inquiry-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Basic client-side validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !email || !message) {
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = '#FEF2F2';
          feedback.style.border = '1px solid #FECACA';
          feedback.style.color = '#991B1B';
          feedback.setAttribute('tabindex', '-1');
          feedback.innerHTML = `✕ <strong>Please complete all required fields</strong> before sending your inquiry.`;
          feedback.focus();
        }
        return;
      }

      if (!emailRegex.test(email)) {
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = '#FEF2F2';
          feedback.style.border = '1px solid #FECACA';
          feedback.style.color = '#991B1B';
          feedback.setAttribute('tabindex', '-1');
          feedback.innerHTML = `✕ <strong>Invalid email address.</strong> Please enter a valid email format (e.g. name@domain.com).`;
          feedback.focus();
        }
        if (emailInput) emailInput.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span>Transmitting Project Brief...</span>
          <span class="btn-icon-circle" style="animation: spin 1s linear infinite;">⟳</span>
        `;
      }

      // Simulate network request with defensive try/catch
      setTimeout(() => {
        try {
          if (feedback) {
            feedback.style.display = 'block';
            feedback.style.background = '#ECFDF5';
            feedback.style.border = '1px solid #A7F3D0';
            feedback.style.color = '#065F46';
            feedback.setAttribute('tabindex', '-1');
            feedback.innerHTML = `✔ <strong>Inquiry received, ${name}!</strong> We've queued your project spec and will reply with wireframe insights within 2 hours.`;
            feedback.focus();
          }
          form.reset();
        } catch (err) {
          if (feedback) {
            feedback.style.display = 'block';
            feedback.style.background = '#FEF2F2';
            feedback.style.border = '1px solid #FECACA';
            feedback.style.color = '#991B1B';
            feedback.setAttribute('tabindex', '-1');
            feedback.innerHTML = `✕ <strong>Transmission error.</strong> Please reach out directly on WhatsApp or email <a href="mailto:ben@solonova.ai" style="text-decoration: underline; color: inherit;">ben@solonova.ai</a>.`;
            feedback.focus();
          }
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
              <span>Send Another Inquiry</span>
              <span class="btn-icon-circle">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            `;
          }
        }
      }, 500);
    });
  }
}
