(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Ml(){const i=document.getElementById("navbar-root");if(!i)return;i.innerHTML=`
    <nav class="atelier-navbar" aria-label="Main Navigation">
      <div class="atelier-navbar-inner">
        <!-- 1. Left: Architectural Brand & Live Studio Status -->
        <div class="nav-brand-group">
          <a href="/" class="brand-logo" aria-label="Solonova Studio Home">
            <div class="brand-logo-mark">
              <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#09090B"/>
                <path d="M23 11.5C23 11.5 20.5 9.5 18 9.5C13.5 9.5 11 12 11 15C11 19.5 18 18.5 18 22C18 24.5 15.5 25.5 13.5 25.5C10 25.5 7.5 23 7.5 23" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="25" cy="24" r="3" fill="#C5A059"/>
              </svg>
            </div>
            <span class="brand-name">SOLONOVA<span class="brand-dot" style="color: var(--accent-gold);">.</span></span>
          </a>

          <!-- Live Atelier Telemetry Pill -->
          <div class="atelier-telemetry-badge" title="Real-time studio capacity">
            <span class="telemetry-beacon"></span>
            <span class="telemetry-label">ATELIER</span>
            <span class="telemetry-divider">/</span>
            <span class="telemetry-slots">2 SLOTS OPEN</span>
          </div>
        </div>

        <!-- 2. Center: Segmented Editorial Index Track -->
        <div class="nav-index-track" id="nav-menu">
          <a href="#work" class="nav-track-item">
            <span class="track-idx">01</span>
            <span class="track-label">Works</span>
          </a>
          <a href="#process" class="nav-track-item">
            <span class="track-idx">02</span>
            <span class="track-label">Method</span>
          </a>
          <a href="#comparison" class="nav-track-item">
            <span class="track-idx">03</span>
            <span class="track-label">Vs Agency</span>
          </a>
          <a href="#calculator" class="nav-track-item">
            <span class="track-idx">04</span>
            <span class="track-label">Pricing</span>
          </a>
        </div>

        <!-- 3. Right: Tactile Actions (Sprint Booking & Mobile Toggle) -->
        <div class="nav-actions-group">
          <!-- Book Sprint Pitch Black Button -->
          <a href="#calculator" class="nav-book-btn">
            <span>Book Sprint</span>
            <span class="nav-book-arrow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V8H8"/>
              </svg>
            </span>
          </a>

          <!-- Mobile Nav Toggle -->
          <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="nav-menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  `;const e=document.getElementById("mobile-toggle"),t=document.getElementById("nav-menu");function n(){if(t&&t.classList.contains("mobile-open")&&(t.classList.remove("mobile-open"),e)){e.setAttribute("aria-expanded","false");const a=e.querySelectorAll("span");a[0].style.transform="none",a[1].style.opacity="1",a[2].style.transform="none"}}function r(){if(t&&(t.classList.add("mobile-open"),e)){e.setAttribute("aria-expanded","true");const a=e.querySelectorAll("span");a[0].style.transform="translateY(8px) rotate(45deg)",a[1].style.opacity="0",a[2].style.transform="translateY(-8px) rotate(-45deg)"}}e&&t&&(e.addEventListener("click",a=>{a.stopPropagation(),t.classList.contains("mobile-open")?n():r()}),t.querySelectorAll(".nav-track-item").forEach(a=>{a.addEventListener("click",n)}),document.addEventListener("click",a=>{!t.contains(a.target)&&!e.contains(a.target)&&n()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&n()}))}function yl(){const i=document.getElementById("hero-root");if(!i)return;i.innerHTML=`
    <div class="section hero-section" style="padding-top: clamp(2.5rem, 5vh + 1.5rem, 6rem); padding-bottom: clamp(2.5rem, 5vh + 1.5rem, 5.5rem);">
      <div class="container flex flex-col items-center text-center">
        <!-- Hero Typographic Readability Sanctuary -->
        <div class="hero-readability-sanctuary flex flex-col items-center text-center">
          <!-- Architectural Masthead: SOLONOVA STUDIO with Gold Rule Accents -->
          <div class="flex items-center justify-center gap-3" style="margin-bottom: var(--space-4); max-width: 100%;">
            <span style="height: 1px; width: clamp(16px, 4vw, 45px); background: var(--accent-gold); opacity: 0.75; flex-shrink: 0;" aria-hidden="true"></span>
            <span style="font-family: var(--font-mono); font-size: clamp(0.76rem, 2vw, 0.98rem); font-weight: 800; letter-spacing: clamp(0.12em, 0.5vw, 0.32em); text-transform: uppercase; color: #09090B;">
              SOLONOVA STUDIO
            </span>
            <span style="height: 1px; width: clamp(16px, 4vw, 45px); background: var(--accent-gold); opacity: 0.75; flex-shrink: 0;" aria-hidden="true"></span>
          </div>

          <!-- Eyebrow Status Pill with Luminous Live Beacon -->
          <div class="status-pill hero-status-pill" style="margin-bottom: var(--space-6); padding: 0.5rem 1.25rem; border-color: var(--accent-gold-border); background: #FFFFFF; max-width: 100%;">
            <span class="radar-ping">
              <span class="radar-ping-core" style="background-color: var(--status-live);"></span>
            </span>
            <span class="hero-status-pill-text" style="font-family: var(--font-mono); font-size: clamp(0.74rem, 1.4vw, 0.85rem); font-weight: 700; color: #09090B; letter-spacing: 0.08em; overflow-wrap: break-word;">
              SOLO VIBE ATELIER // INDIA & GLOBAL // <span style="color: var(--accent-amber);">10X SHIP VELOCITY</span>
            </span>
          </div>

          <!-- Grand Hero Headline -->
          <h1 style="max-width: var(--container-narrow); margin-bottom: var(--space-6); line-height: 1.05; color: #09090B;">
            Websites Handcrafted at <br />
            <span class="text-italic" style="font-style: italic; color: #09090B; text-decoration: underline; text-decoration-color: var(--accent-gold); text-underline-offset: 8px;">Lightning Velocity.</span>
          </h1>

          <!-- Expanded Lead Subheading -->
          <p class="lead-text text-center" style="margin-bottom: var(--space-8); max-width: 860px; color: #52525B;">
            We bypass traditional agency bureaucracy, inflated retainers, and recycled templates. Solonova Studio pairs bespoke editorial design with AI-assisted vibe coding to ship high-converting web applications in <strong style="color: #09090B; border-bottom: 1.5px solid var(--accent-gold);">48 hours to 7 business days</strong>.
          </p>

          <!-- Hero Action CTAs -->
          <div class="flex flex-wrap items-center justify-center gap-4 hero-cta-group" style="margin-bottom: var(--space-10);">
            <a href="#work" class="btn btn-primary btn-lg hero-cta-btn" style="box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(197, 160, 89, 0.3);">
              <span>Explore Curated Works</span>
              <span class="btn-icon-circle" style="background: var(--accent-gold);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            </a>

            <a href="#calculator" class="btn btn-secondary btn-lg hero-cta-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="8" y1="6" x2="16" y2="6"></line>
                <line x1="16" y1="14" x2="16" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
              <span>Scope & Pricing (₹ INR)</span>
            </a>

            <!-- WhatsApp Chat Direct Button -->
            <a href="https://wa.me/?text=Hi%20Solonova%20Studio,%20I'd%20like%20to%20discuss%20a%20website%20sprint" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg hero-cta-btn" style="border-color: #BBF7D0; background: #F0FDF4; color: #047857;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>

        <!-- Interactive Benchmark & Live Telemetry Card -->
        <div class="double-bezel" style="width: 100%; max-width: var(--container-narrow); margin-inline: auto; text-align: left;">
          <div class="double-bezel-inner" style="padding: clamp(1.5rem, 3.5vw, 2.5rem);">
            <!-- Switcher Header -->
            <div class="flex flex-wrap items-center justify-between gap-4" style="border-bottom: 1px solid #E4E4E7; padding-bottom: var(--space-5); margin-bottom: var(--space-5); min-width: 0; max-width: 100%;">
              <div class="flex items-center gap-3">
                <span class="status-dot-gold"></span>
                <span style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 800; color: #09090B; letter-spacing: 0.12em; text-transform: uppercase;">
                  SOLONOVA STUDIO BENCHMARKS
                </span>
              </div>

              <!-- Interactive Tabs -->
              <div class="flex flex-wrap gap-2" id="hero-interactive-tabs" role="tablist" aria-label="Solonova Studio Benchmarks">
                <button id="tab-perf" class="preview-tab-btn active" data-tab="perf" role="tab" aria-selected="true" aria-controls="tab-content-perf" style="padding: 0.5rem 1.25rem; font-size: 0.9rem; border-radius: 9999px; cursor: pointer; background: #09090B; color: #FFFFFF; font-weight: 700; border: none;">Performance</button>
                <button id="tab-speed" class="preview-tab-btn" data-tab="speed" role="tab" aria-selected="false" aria-controls="tab-content-speed" style="padding: 0.5rem 1.25rem; font-size: 0.9rem; border-radius: 9999px; cursor: pointer; background: transparent; color: #52525B; font-weight: 600; border: none;">Ship Speed</button>
                <button id="tab-pricing" class="preview-tab-btn" data-tab="pricing" role="tab" aria-selected="false" aria-controls="tab-content-pricing" style="padding: 0.5rem 1.25rem; font-size: 0.9rem; border-radius: 9999px; cursor: pointer; background: transparent; color: #52525B; font-weight: 600; border: none;">Pricing & UPI</button>
              </div>
            </div>

            <!-- Tab 1: Performance -->
            <div id="tab-content-perf" class="hero-tab-content" role="tabpanel" aria-labelledby="tab-perf">
              <div class="grid-3" style="gap: var(--space-5);">
                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid var(--accent-gold); background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Lighthouse Score</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">100 / 100</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Zero layout shift, instant 4G/5G mobile edge load</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #09090B; background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Average LCP</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">0.38 Seconds</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Sub-second edge CDN rendering globally</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #059669; background: #F0FDF4; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #059669; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Code Discipline</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #065F46; margin-block: 4px; line-height: 1.1;">100% Modular</div>
                  <div style="font-size: 0.9rem; color: #047857; line-height: 1.5; overflow-wrap: break-word;">Pure clean JS & CSS. Zero WP plugin bloat</div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Ship Speed -->
            <div id="tab-content-speed" class="hero-tab-content" role="tabpanel" aria-labelledby="tab-speed" style="display: none;">
              <div class="grid-3" style="gap: var(--space-5);">
                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid var(--accent-gold); background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Rapid Launchpad</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">48 Hours</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">From concept kickoff to production live link</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #09090B; background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Full Brand Atelier</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">5 to 7 Days</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Multi-page custom experience with case studies</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #059669; background: #F0FDF4; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #059669; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Sprint Guarantee</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #065F46; margin-block: 4px; line-height: 1.1;">100% Refundable</div>
                  <div style="font-size: 0.9rem; color: #047857; line-height: 1.5; overflow-wrap: break-word;">Deposit back if deadline missed. Zero risk.</div>
                </div>
              </div>
            </div>

            <!-- Tab 3: Pricing & UPI -->
            <div id="tab-content-pricing" class="hero-tab-content" role="tabpanel" aria-labelledby="tab-pricing" style="display: none;">
              <div class="grid-3" style="gap: var(--space-5);">
                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid var(--accent-gold); background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Entry Sprint</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">₹14,999</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">Complete 48h landing page with WhatsApp capture</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #09090B; background: #FAFAFB; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Payment Terms</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #09090B; margin-block: 4px; line-height: 1.1;">50 / 50 Split</div>
                  <div style="font-size: 0.9rem; color: #52525B; line-height: 1.5; overflow-wrap: break-word;">50% kickoff deposit, 50% post-launch approval</div>
                </div>

                <div class="hero-benchmark-bar" style="padding: clamp(0.9rem, 2.5vw, 1.25rem); border-left: 3px solid #059669; background: #F0FDF4; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #059669; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">Payment Rails</div>
                  <div style="font-family: var(--font-display); font-size: clamp(1.75rem, 3.5vw, 2.2rem); font-weight: 800; color: #065F46; margin-block: 4px; line-height: 1.1;">UPI & Razorpay</div>
                  <div style="font-size: 0.9rem; color: #047857; line-height: 1.5; overflow-wrap: break-word;">GPay, PhonePe, Paytm, NEFT & Credit Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;const e=Array.from(i.querySelectorAll(".preview-tab-btn"));function t(n,r=!0){e.forEach(o=>{o.style.background="transparent",o.style.color="#52525B",o.style.fontWeight="600",o.classList.remove("active"),o.setAttribute("aria-selected","false"),o.setAttribute("tabindex","-1")}),n.classList.add("active"),n.style.background="#09090B",n.style.color="#FFFFFF",n.style.fontWeight="700",n.setAttribute("aria-selected","true"),n.setAttribute("tabindex","0"),r&&n.focus();const a=n.getAttribute("data-tab");i.querySelectorAll(".hero-tab-content").forEach(o=>{o.style.display="none"});const s=document.getElementById(`tab-content-${a}`);s&&(s.style.display="block")}e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("click",()=>t(n,!1)),n.addEventListener("keydown",a=>{let s=null;a.key==="ArrowRight"?s=(r+1)%e.length:a.key==="ArrowLeft"?s=(r-1+e.length)%e.length:a.key==="Home"?s=0:a.key==="End"&&(s=e.length-1),s!==null&&(a.preventDefault(),t(e[s],!0))})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="185",bl=0,ws=1,El=2,rr=1,Tl=2,Mi=3,An=0,Rt=1,Jt=2,un=0,ri=1,As=2,Rs=3,Cs=4,wl=5,Un=100,Al=101,Rl=102,Cl=103,Pl=104,Dl=200,Ll=201,Il=202,Fl=203,na=204,ia=205,Ul=206,Nl=207,Bl=208,Ol=209,kl=210,zl=211,Gl=212,Hl=213,Vl=214,ra=0,aa=1,sa=2,oi=3,oa=4,la=5,ca=6,da=7,Io=0,Wl=1,Xl=2,en=0,Fo=1,Uo=2,No=3,Ja=4,Bo=5,Oo=6,ko=7,zo=300,kn=301,li=302,yr=303,br=304,gr=306,ua=1e3,dn=1001,fa=1002,xt=1003,ql=1004,Li=1005,Et=1006,Er=1007,Bn=1008,It=1009,Go=1010,Ho=1011,bi=1012,Qa=1013,nn=1014,Qt=1015,pn=1016,ja=1017,es=1018,Ei=1020,Vo=35902,Wo=35899,Xo=1021,qo=1022,Vt=1023,mn=1026,On=1027,Yo=1028,ts=1029,zn=1030,ns=1031,is=1033,ar=33776,sr=33777,or=33778,lr=33779,ha=35840,pa=35841,ma=35842,ga=35843,va=36196,_a=37492,xa=37496,Sa=37488,Ma=37489,dr=37490,ya=37491,ba=37808,Ea=37809,Ta=37810,wa=37811,Aa=37812,Ra=37813,Ca=37814,Pa=37815,Da=37816,La=37817,Ia=37818,Fa=37819,Ua=37820,Na=37821,Ba=36492,Oa=36494,ka=36495,za=36283,Ga=36284,ur=36285,Ha=36286,Yl=3200,Va=0,$l=1,Tn="",Nt="srgb",fr="srgb-linear",hr="linear",$e="srgb",Wn=7680,Ps=519,Kl=512,Zl=513,Jl=514,rs=515,Ql=516,jl=517,as=518,ec=519,Ds=35044,Ls="300 es",jt=2e3,Ti=2001;function tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nc(){const i=pr("canvas");return i.style.display="block",i}const Is={};function Fs(...i){const e="THREE."+i.shift();console.log(e,...i)}function $o(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=$o(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=$o(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ai(...i){const e=i.join(" ");e in Is||(Is[e]=!0,Ce(...i))}function ic(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const rc={[ra]:aa,[sa]:ca,[oa]:da,[oi]:la,[aa]:ra,[ca]:sa,[da]:oa,[la]:oi};class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tr=Math.PI/180,Wa=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function ac(i,e){return(i%e+e)%e}function wr(i,e,t){return(1-t)*i+t*e}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fs=class fs{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fs.prototype.isVector2=!0;let Ve=fs;class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],u=n[r+2],p=n[r+3],d=a[s+0],g=a[s+1],x=a[s+2],y=a[s+3];if(p!==y||c!==d||l!==g||u!==x){let m=c*d+l*g+u*x+p*y;m<0&&(d=-d,g=-g,x=-x,y=-y,m=-m);let f=1-o;if(m<.9995){const w=Math.acos(m),C=Math.sin(w);f=Math.sin(f*w)/C,o=Math.sin(o*w)/C,c=c*f+d*o,l=l*f+g*o,u=u*f+x*o,p=p*f+y*o}else{c=c*f+d*o,l=l*f+g*o,u=u*f+x*o,p=p*f+y*o;const w=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=w,l*=w,u*=w,p*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],p=a[s],d=a[s+1],g=a[s+2],x=a[s+3];return e[t]=o*x+u*p+c*g-l*d,e[t+1]=c*x+u*d+l*p-o*g,e[t+2]=l*x+u*g+o*d-c*p,e[t+3]=u*x-o*p-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),p=o(a/2),d=c(n/2),g=c(r/2),x=c(a/2);switch(s){case"XYZ":this._x=d*u*p+l*g*x,this._y=l*g*p-d*u*x,this._z=l*u*x+d*g*p,this._w=l*u*p-d*g*x;break;case"YXZ":this._x=d*u*p+l*g*x,this._y=l*g*p-d*u*x,this._z=l*u*x-d*g*p,this._w=l*u*p+d*g*x;break;case"ZXY":this._x=d*u*p-l*g*x,this._y=l*g*p+d*u*x,this._z=l*u*x+d*g*p,this._w=l*u*p-d*g*x;break;case"ZYX":this._x=d*u*p-l*g*x,this._y=l*g*p+d*u*x,this._z=l*u*x-d*g*p,this._w=l*u*p+d*g*x;break;case"YZX":this._x=d*u*p+l*g*x,this._y=l*g*p+d*u*x,this._z=l*u*x-d*g*p,this._w=l*u*p-d*g*x;break;case"XZY":this._x=d*u*p-l*g*x,this._y=l*g*p-d*u*x,this._z=l*u*x+d*g*p,this._w=l*u*p+d*g*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],d=n+o+p;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(a-l)*g,this._z=(s-r)*g}else if(n>o&&n>p){const g=2*Math.sqrt(1+n-o-p);this._w=(u-c)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+l)/g}else if(o>p){const g=2*Math.sqrt(1+o-n-p);this._w=(a-l)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+p-n-o);this._w=(s-r)/g,this._x=(a+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-n*l,this._z=a*u+s*l+n*c-r*o,this._w=s*u-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hs=class hs{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Us.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Us.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),u=2*(o*t-a*r),p=2*(a*n-s*t);return this.x=t+c*l+s*p-o*u,this.y=n+c*u+o*l-a*p,this.z=r+c*p+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hs.prototype.isVector3=!0;let z=hs;const Ar=new z,Us=new ui,ps=class ps{constructor(e,t,n,r,a,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],d=n[2],g=n[5],x=n[8],y=r[0],m=r[3],f=r[6],w=r[1],C=r[4],S=r[7],T=r[2],E=r[5],R=r[8];return a[0]=s*y+o*w+c*T,a[3]=s*m+o*C+c*E,a[6]=s*f+o*S+c*R,a[1]=l*y+u*w+p*T,a[4]=l*m+u*C+p*E,a[7]=l*f+u*S+p*R,a[2]=d*y+g*w+x*T,a[5]=d*m+g*C+x*E,a[8]=d*f+g*S+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*a*u+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*s-o*l,d=o*c-u*a,g=l*a-s*c,x=t*p+n*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=p*y,e[1]=(r*l-u*n)*y,e[2]=(o*n-r*s)*y,e[3]=d*y,e[4]=(u*t-r*c)*y,e[5]=(r*a-o*t)*y,e[6]=g*y,e[7]=(n*c-l*t)*y,e[8]=(s*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rr.makeScale(e,t)),this}rotate(e){return ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rr.makeRotation(-e)),this}translate(e,t){return ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ps.prototype.isMatrix3=!0;let Le=ps;const Rr=new Le,Ns=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bs=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sc(){const i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===$e&&(r.r=fn(r.r),r.g=fn(r.g),r.b=fn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===$e&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tn?hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:Ns,fromXYZ:Bs,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:Ns,fromXYZ:Bs,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const Ge=sc();function fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class oc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xn===void 0&&(Xn=pr("canvas")),Xn.width=e.width,Xn.height=e.height;const r=Xn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=fn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lc=0;class ss{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Cr(r[s].image)):a.push(Cr(r[s]))}else a=Cr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let cc=0;const Pr=new z;class Tt extends Gn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=dn,r=dn,a=Et,s=Bn,o=Vt,c=It,l=Tt.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=wi(),this.name="",this.source=new ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=zo;Tt.DEFAULT_ANISOTROPY=1;const ms=class ms{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],p=c[8],d=c[1],g=c[5],x=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,S=(g+1)/2,T=(f+1)/2,E=(u+d)/4,R=(p+y)/4,v=(x+m)/4;return C>S&&C>T?C<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(C),r=E/n,a=R/n):S>T?S<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),n=E/r,a=v/r):T<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),n=R/a,r=v/a),this.set(n,r,a,t),this}let w=Math.sqrt((m-x)*(m-x)+(p-y)*(p-y)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(p-y)/w,this.z=(d-u)/w,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ms.prototype.isVector4=!0;let st=ms;class dc extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Tt(r),s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ss(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ko extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uc extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mr=class mr{constructor(e,t,n,r,a,s,o,c,l,u,p,d,g,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,u,p,d,g,x,y,m)}set(e,t,n,r,a,s,o,c,l,u,p,d,g,x,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=d,f[3]=g,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),a=1/qn.setFromMatrixColumn(e,1).length(),s=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const d=s*u,g=s*p,x=o*u,y=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=g+x*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=x+g*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,g=c*p,x=l*u,y=l*p;t[0]=d+y*o,t[4]=x*o-g,t[8]=s*l,t[1]=s*p,t[5]=s*u,t[9]=-o,t[2]=g*o-x,t[6]=y+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,g=c*p,x=l*u,y=l*p;t[0]=d-y*o,t[4]=-s*p,t[8]=x+g*o,t[1]=g+x*o,t[5]=s*u,t[9]=y-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,g=s*p,x=o*u,y=o*p;t[0]=c*u,t[4]=x*l-g,t[8]=d*l+y,t[1]=c*p,t[5]=y*l+d,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,g=s*l,x=o*c,y=o*l;t[0]=c*u,t[4]=y-d*p,t[8]=x*p+g,t[1]=p,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=g*p+x,t[10]=d-y*p}else if(e.order==="XZY"){const d=s*c,g=s*l,x=o*c,y=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=d*p+y,t[5]=s*u,t[9]=g*p-x,t[2]=x*p-g,t[6]=o*u,t[10]=y*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fc,e,hc)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),xn.crossVectors(n,Pt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),xn.crossVectors(n,Pt)),xn.normalize(),Ii.crossVectors(Pt,xn),r[0]=xn.x,r[4]=Ii.x,r[8]=Pt.x,r[1]=xn.y,r[5]=Ii.y,r[9]=Pt.y,r[2]=xn.z,r[6]=Ii.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],d=n[9],g=n[13],x=n[2],y=n[6],m=n[10],f=n[14],w=n[3],C=n[7],S=n[11],T=n[15],E=r[0],R=r[4],v=r[8],b=r[12],U=r[1],D=r[5],N=r[9],Y=r[13],J=r[2],B=r[6],q=r[10],G=r[14],Z=r[3],j=r[7],de=r[11],he=r[15];return a[0]=s*E+o*U+c*J+l*Z,a[4]=s*R+o*D+c*B+l*j,a[8]=s*v+o*N+c*q+l*de,a[12]=s*b+o*Y+c*G+l*he,a[1]=u*E+p*U+d*J+g*Z,a[5]=u*R+p*D+d*B+g*j,a[9]=u*v+p*N+d*q+g*de,a[13]=u*b+p*Y+d*G+g*he,a[2]=x*E+y*U+m*J+f*Z,a[6]=x*R+y*D+m*B+f*j,a[10]=x*v+y*N+m*q+f*de,a[14]=x*b+y*Y+m*G+f*he,a[3]=w*E+C*U+S*J+T*Z,a[7]=w*R+C*D+S*B+T*j,a[11]=w*v+C*N+S*q+T*de,a[15]=w*b+C*Y+S*G+T*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],d=e[10],g=e[14],x=e[3],y=e[7],m=e[11],f=e[15],w=c*g-l*d,C=o*g-l*p,S=o*d-c*p,T=s*g-l*u,E=s*d-c*u,R=s*p-o*u;return t*(y*w-m*C+f*S)-n*(x*w-m*T+f*E)+r*(x*C-y*T+f*R)-a*(x*S-y*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],s=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(s*u-o*l)-n*(a*u-o*c)+r*(a*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],d=e[10],g=e[11],x=e[12],y=e[13],m=e[14],f=e[15],w=t*o-n*s,C=t*c-r*s,S=t*l-a*s,T=n*c-r*o,E=n*l-a*o,R=r*l-a*c,v=u*y-p*x,b=u*m-d*x,U=u*f-g*x,D=p*m-d*y,N=p*f-g*y,Y=d*f-g*m,J=w*Y-C*N+S*D+T*U-E*b+R*v;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/J;return e[0]=(o*Y-c*N+l*D)*B,e[1]=(r*N-n*Y-a*D)*B,e[2]=(y*R-m*E+f*T)*B,e[3]=(d*E-p*R-g*T)*B,e[4]=(c*U-s*Y-l*b)*B,e[5]=(t*Y-r*U+a*b)*B,e[6]=(m*S-x*R-f*C)*B,e[7]=(u*R-d*S+g*C)*B,e[8]=(s*N-o*U+l*v)*B,e[9]=(n*U-t*N-a*v)*B,e[10]=(x*E-y*S+f*w)*B,e[11]=(p*S-u*E-g*w)*B,e[12]=(o*b-s*D-c*v)*B,e[13]=(t*D-n*b+r*v)*B,e[14]=(y*C-x*T-m*w)*B,e[15]=(u*T-p*C+d*w)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,p=o+o,d=a*l,g=a*u,x=a*p,y=s*u,m=s*p,f=o*p,w=c*l,C=c*u,S=c*p,T=n.x,E=n.y,R=n.z;return r[0]=(1-(y+f))*T,r[1]=(g+S)*T,r[2]=(x-C)*T,r[3]=0,r[4]=(g-S)*E,r[5]=(1-(d+f))*E,r[6]=(m+w)*E,r[7]=0,r[8]=(x+C)*R,r[9]=(m-w)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let s=qn.set(r[0],r[1],r[2]).length();const o=qn.set(r[4],r[5],r[6]).length(),c=qn.set(r[8],r[9],r[10]).length();a<0&&(s=-s),kt.copy(this);const l=1/s,u=1/o,p=1/c;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=p,kt.elements[9]*=p,kt.elements[10]*=p,t.setFromRotationMatrix(kt),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,r,a,s,o=jt,c=!1){const l=this.elements,u=2*a/(t-e),p=2*a/(n-r),d=(t+e)/(t-e),g=(n+r)/(n-r);let x,y;if(c)x=a/(s-a),y=s*a/(s-a);else if(o===jt)x=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Ti)x=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=jt,c=!1){const l=this.elements,u=2/(t-e),p=2/(n-r),d=-(t+e)/(t-e),g=-(n+r)/(n-r);let x,y;if(c)x=1/(s-a),y=s/(s-a);else if(o===jt)x=-2/(s-a),y=-(s+a)/(s-a);else if(o===Ti)x=-1/(s-a),y=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};mr.prototype.isMatrix4=!0;let ot=mr;const qn=new z,kt=new ot,fc=new z(0,0,0),hc=new z(1,1,1),xn=new z,Ii=new z,Pt=new z,Os=new ot,ks=new ui;class Rn{constructor(e=0,t=0,n=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],p=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-He(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-He(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Os.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Os,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ks.setFromEuler(this),this.setFromQuaternion(ks,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pc=0;const zs=new z,Yn=new ui,an=new ot,Fi=new z,mi=new z,mc=new z,gc=new ui,Gs=new z(1,0,0),Hs=new z(0,1,0),Vs=new z(0,0,1),Ws={type:"added"},vc={type:"removed"},$n={type:"childadded",child:null},Dr={type:"childremoved",child:null};class St extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new z,t=new Rn,n=new ui,r=new z(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Le}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(Gs,e)}rotateY(e){return this.rotateOnAxis(Hs,e)}rotateZ(e){return this.rotateOnAxis(Vs,e)}translateOnAxis(e,t){return zs.copy(e).applyQuaternion(this.quaternion),this.position.add(zs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gs,e)}translateY(e){return this.translateOnAxis(Hs,e)}translateZ(e){return this.translateOnAxis(Vs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fi.copy(e):Fi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(mi,Fi,this.up):an.lookAt(Fi,mi,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(an),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ws),$n.child=e,this.dispatchEvent($n),$n.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vc),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ws),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,mc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,gc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];a(e.shapes,p)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),p=s(e.shapes),d=s(e.skeletons),g=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new z(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ui extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _c={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=u.position.distanceTo(p.position),g=.02,x=.005;l.inputState.pinching&&d>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_c)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function Ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ge.workingColorSpace){if(e=ac(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ir(s,a,e+1/3),this.g=Ir(s,a,e),this.b=Ir(s,a,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(a){a!==void 0&&parseFloat(a)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ge.workingToColorSpace(bt.copy(this),e),Math.round(He(bt.r*255,0,255))*65536+Math.round(He(bt.g*255,0,255))*256+Math.round(He(bt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,a=bt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const p=s-o;switch(l=u<=.5?p/(s+o):p/(2-s-o),s){case n:c=(r-a)/p+(r<a?6:0);break;case r:c=(a-n)/p+2;break;case a:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Nt){Ge.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Ni);const n=wr(Sn.h,Ni.h,t),r=wr(Sn.s,Ni.s,t),a=wr(Sn.l,Ni.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new ze;ze.NAMES=Jo;class os{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new os(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zt=new z,sn=new z,Fr=new z,on=new z,Kn=new z,Zn=new z,Xs=new z,Ur=new z,Nr=new z,Br=new z,Or=new st,kr=new st,zr=new st;class Ht{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zt.subVectors(e,t),r.cross(zt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){zt.subVectors(r,t),sn.subVectors(n,t),Fr.subVectors(e,t);const s=zt.dot(zt),o=zt.dot(sn),c=zt.dot(Fr),l=sn.dot(sn),u=sn.dot(Fr),p=s*l-o*o;if(p===0)return a.set(0,0,0),null;const d=1/p,g=(l*c-o*u)*d,x=(s*u-o*c)*d;return a.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,on.x),c.addScaledVector(s,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return Or.setScalar(0),kr.setScalar(0),zr.setScalar(0),Or.fromBufferAttribute(e,t),kr.fromBufferAttribute(e,n),zr.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Or,a.x),s.addScaledVector(kr,a.y),s.addScaledVector(zr,a.z),s}static isFrontFacing(e,t,n,r){return zt.subVectors(n,t),sn.subVectors(e,t),zt.cross(sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),zt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Kn.subVectors(r,n),Zn.subVectors(a,n),Ur.subVectors(e,n);const c=Kn.dot(Ur),l=Zn.dot(Ur);if(c<=0&&l<=0)return t.copy(n);Nr.subVectors(e,r);const u=Kn.dot(Nr),p=Zn.dot(Nr);if(u>=0&&p<=u)return t.copy(r);const d=c*p-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(Kn,s);Br.subVectors(e,a);const g=Kn.dot(Br),x=Zn.dot(Br);if(x>=0&&g<=x)return t.copy(a);const y=g*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Zn,o);const m=u*x-g*p;if(m<=0&&p-u>=0&&g-x>=0)return Xs.subVectors(a,r),o=(p-u)/(p-u+(g-x)),t.copy(r).addScaledVector(Xs,o);const f=1/(m+y+d);return s=y*f,o=d*f,t.copy(n).addScaledVector(Kn,s).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ai{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Gt):Gt.fromBufferAttribute(a,s),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Oi.subVectors(this.max,gi),Jn.subVectors(e.a,gi),Qn.subVectors(e.b,gi),jn.subVectors(e.c,gi),Mn.subVectors(Qn,Jn),yn.subVectors(jn,Qn),Pn.subVectors(Jn,jn);let t=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Pn.z,Pn.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Pn.z,0,-Pn.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Pn.y,Pn.x,0];return!Gr(t,Jn,Qn,jn,Oi)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,Jn,Qn,jn,Oi))?!1:(ki.crossVectors(Mn,yn),t=[ki.x,ki.y,ki.z],Gr(t,Jn,Qn,jn,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new z,new z,new z,new z,new z,new z,new z,new z],Gt=new z,Bi=new Ai,Jn=new z,Qn=new z,jn=new z,Mn=new z,yn=new z,Pn=new z,gi=new z,Oi=new z,ki=new z,Dn=new z;function Gr(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Dn.fromArray(i,a);const o=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),c=e.dot(Dn),l=t.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ht=new z,zi=new Ve;let Sc=0;class Bt extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ds,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),a=At(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ds&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qo extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jo extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Mc=new Ai,vi=new z,Hr=new z;class vr{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mc.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Hr)),this.expandByPoint(vi.copy(e.center).sub(Hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yc=0;const Ut=new ot,Vr=new St,ei=new z,Dt=new Ai,_i=new Ai,_t=new z;class Ot extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?jo:Qo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Le().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Vr.lookAt(e),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new hn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Dt.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];_i.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Dt.min,_i.min),Dt.expandByPoint(_t),_t.addVectors(Dt.max,_i.max),Dt.expandByPoint(_t)):(Dt.expandByPoint(_i.min),Dt.expandByPoint(_i.max))}Dt.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)_t.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(ei.fromBufferAttribute(e,l),_t.add(ei)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new z,c[v]=new z;const l=new z,u=new z,p=new z,d=new Ve,g=new Ve,x=new Ve,y=new z,m=new z;function f(v,b,U){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),p.fromBufferAttribute(n,U),d.fromBufferAttribute(a,v),g.fromBufferAttribute(a,b),x.fromBufferAttribute(a,U),u.sub(l),p.sub(l),g.sub(d),x.sub(d);const D=1/(g.x*x.y-x.x*g.y);isFinite(D)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(D),m.copy(p).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(D),o[v].add(y),o[b].add(y),o[U].add(y),c[v].add(m),c[b].add(m),c[U].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,b=w.length;v<b;++v){const U=w[v],D=U.start,N=U.count;for(let Y=D,J=D+N;Y<J;Y+=3)f(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const C=new z,S=new z,T=new z,E=new z;function R(v){T.fromBufferAttribute(r,v),E.copy(T);const b=o[v];C.copy(b),C.sub(T.multiplyScalar(T.dot(b))).normalize(),S.crossVectors(E,b);const D=S.dot(c[v])<0?-1:1;s.setXYZW(v,C.x,C.y,C.z,D)}for(let v=0,b=w.length;v<b;++v){const U=w[v],D=U.start,N=U.count;for(let Y=D,J=D+N;Y<J;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new z,a=new z,s=new z,o=new z,c=new z,l=new z,u=new z,p=new z;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),u.subVectors(s,a),p.subVectors(r,a),u.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),p.subVectors(r,a),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,d=new l.constructor(c.length*u);let g=0,x=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?g=c[y]*o.data.stride+o.offset:g=c[y]*u;for(let f=0;f<u;f++)d[x++]=l[g++]}return new Bt(d,u,p)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,p=l.length;u<p;u++){const d=l[u],g=e(d,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,d=l.length;p<d;p++){const g=l[p];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],p=a[l];for(let d=0,g=p.length;d<g;d++)u.push(p[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const p=s[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bc=0;class fi extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ri,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ps,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ps&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cn=new z,Wr=new z,Gi=new z,bn=new z,Xr=new z,Hi=new z,qr=new z;class el{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wr.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Wr);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Gi),o=bn.dot(this.direction),c=-bn.dot(Gi),l=bn.lengthSq(),u=Math.abs(1-s*s);let p,d,g,x;if(u>0)if(p=s*c-o,d=s*o-c,x=a*u,p>=0)if(d>=-x)if(d<=x){const y=1/u;p*=y,d*=y,g=p*(p+s*d+2*o)+d*(s*p+d+2*c)+l}else d=a,p=Math.max(0,-(s*d+o)),g=-p*p+d*(d+2*c)+l;else d=-a,p=Math.max(0,-(s*d+o)),g=-p*p+d*(d+2*c)+l;else d<=-x?(p=Math.max(0,-(-s*a+o)),d=p>0?-a:Math.min(Math.max(-a,-c),a),g=-p*p+d*(d+2*c)+l):d<=x?(p=0,d=Math.min(Math.max(-a,-c),a),g=d*(d+2*c)+l):(p=Math.max(0,-(s*a+o)),d=p>0?a:Math.min(Math.max(-a,-c),a),g=-p*p+d*(d+2*c)+l);else d=s>0?-a:a,p=Math.max(0,-(s*d+o)),g=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Wr).addScaledVector(Gi,d),g}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,a){Xr.subVectors(t,e),Hi.subVectors(n,e),qr.crossVectors(Xr,Hi);let s=this.direction.dot(qr),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;bn.subVectors(this.origin,e);const c=o*this.direction.dot(Hi.crossVectors(bn,Hi));if(c<0)return null;const l=o*this.direction.dot(Xr.cross(bn));if(l<0||c+l>s)return null;const u=-o*bn.dot(qr);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ls extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qs=new ot,Ln=new el,Vi=new vr,Ys=new z,Wi=new z,Xi=new z,qi=new z,Yr=new z,Yi=new z,$s=new z,$i=new z;class Wt extends St{constructor(e=new Ot,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Yi.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],p=a[c];u!==0&&(Yr.fromBufferAttribute(p,e),s?Yi.addScaledVector(Yr,u):Yi.addScaledVector(Yr.sub(t),u))}t.add(Yi)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(a),Ln.copy(e.ray).recast(e.near),!(Vi.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Vi,Ys)===null||Ln.origin.distanceToSquared(Ys)>(e.far-e.near)**2))&&(qs.copy(a).invert(),Ln.copy(e.ray).applyMatrix4(qs),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,p=a.attributes.normal,d=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,y=d.length;x<y;x++){const m=d[x],f=s[m.materialIndex],w=Math.max(m.start,g.start),C=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,T=C;S<T;S+=3){const E=o.getX(S),R=o.getX(S+1),v=o.getX(S+2);r=Ki(this,f,e,n,l,u,p,E,R,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=x,f=y;m<f;m+=3){const w=o.getX(m),C=o.getX(m+1),S=o.getX(m+2);r=Ki(this,s,e,n,l,u,p,w,C,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let x=0,y=d.length;x<y;x++){const m=d[x],f=s[m.materialIndex],w=Math.max(m.start,g.start),C=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,T=C;S<T;S+=3){const E=S,R=S+1,v=S+2;r=Ki(this,f,e,n,l,u,p,E,R,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let m=x,f=y;m<f;m+=3){const w=m,C=m+1,S=m+2;r=Ki(this,s,e,n,l,u,p,w,C,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ec(i,e,t,n,r,a,s,o){let c;if(e.side===Rt?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===An,o),c===null)return null;$i.copy(o),$i.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($i);return l<t.near||l>t.far?null:{distance:l,point:$i.clone(),object:i}}function Ki(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,qi);const u=Ec(i,e,t,n,Wi,Xi,qi,$s);if(u){const p=new z;Ht.getBarycoord($s,Wi,Xi,qi,p),r&&(u.uv=Ht.getInterpolatedAttribute(r,o,c,l,p,new Ve)),a&&(u.uv1=Ht.getInterpolatedAttribute(a,o,c,l,p,new Ve)),s&&(u.normal=Ht.getInterpolatedAttribute(s,o,c,l,p,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};Ht.getNormal(Wi,Xi,qi,d.normal),u.face=d,u.barycoord=p}return u}class Tc extends Tt{constructor(e=null,t=1,n=1,r,a,s,o,c,l=xt,u=xt,p,d){super(null,s,o,c,l,u,r,a,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $r=new z,wc=new z,Ac=new Le;class Fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=$r.subVectors(n,t).cross(wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta($r),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ac.getNormalMatrix(e),r=this.coplanarPoint($r).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new vr,Rc=new Ve(.5,.5),Zi=new z;class cs{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,a=new Fn,s=new Fn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],p=a[5],d=a[6],g=a[7],x=a[8],y=a[9],m=a[10],f=a[11],w=a[12],C=a[13],S=a[14],T=a[15];if(r[0].setComponents(l-s,g-u,f-x,T-w).normalize(),r[1].setComponents(l+s,g+u,f+x,T+w).normalize(),r[2].setComponents(l+o,g+p,f+y,T+C).normalize(),r[3].setComponents(l-o,g-p,f-y,T-C).normalize(),n)r[4].setComponents(c,d,m,S).normalize(),r[5].setComponents(l-c,g-d,f-m,T-S).normalize();else if(r[4].setComponents(l-c,g-d,f-m,T-S).normalize(),t===jt)r[5].setComponents(l+c,g+d,f+m,T+S).normalize();else if(t===Ti)r[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);const t=Rc.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Zi.x=r.normal.x>0?e.max.x:e.min.x,Zi.y=r.normal.y>0?e.max.y:e.min.y,Zi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xa extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ks=new ot,qa=new el,Ji=new vr,Qi=new z;class Zs extends St{constructor(e=new Ot,t=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Ji.radius+=a,e.ray.intersectsSphere(Ji)===!1)return;Ks.copy(r).invert(),qa.copy(e.ray).applyMatrix4(Ks);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const d=Math.max(0,s.start),g=Math.min(l.count,s.start+s.count);for(let x=d,y=g;x<y;x++){const m=l.getX(x);Qi.fromBufferAttribute(p,m),Js(Qi,m,c,r,e,t,this)}}else{const d=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let x=d,y=g;x<y;x++)Qi.fromBufferAttribute(p,x),Js(Qi,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Js(i,e,t,n,r,a,s){const o=qa.distanceSqToPoint(i);if(o<t){const c=new z;qa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class tl extends Tt{constructor(e=[],t=kn,n,r,a,s,o,c,l,u){super(e,t,n,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qs extends Tt{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci extends Tt{constructor(e,t,n=nn,r,a,s,o=xt,c=xt,l,u=mn,p=1){if(u!==mn&&u!==On)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,r,a,s,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cc extends ci{constructor(e,t=nn,n=kn,r,a,s=xt,o=xt,c,l=mn){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,r,a,s,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nl extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ri extends Ot{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],p=[];let d=0,g=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(p,2));function x(y,m,f,w,C,S,T,E,R,v,b){const U=S/R,D=T/v,N=S/2,Y=T/2,J=E/2,B=R+1,q=v+1;let G=0,Z=0;const j=new z;for(let de=0;de<q;de++){const he=de*D-Y;for(let xe=0;xe<B;xe++){const Be=xe*U-N;j[y]=Be*w,j[m]=he*C,j[f]=J,l.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[f]=E>0?1:-1,u.push(j.x,j.y,j.z),p.push(xe/R),p.push(1-de/v),G+=1}}for(let de=0;de<v;de++)for(let he=0;he<R;he++){const xe=d+he+B*de,Be=d+he+B*(de+1),Ke=d+(he+1)+B*(de+1),Oe=d+(he+1)+B*de;c.push(xe,Be,Oe),c.push(Be,Ke,Oe),Z+=6}o.addGroup(g,Z,b),g+=Z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ci extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,p=e/o,d=t/c,g=[],x=[],y=[],m=[];for(let f=0;f<u;f++){const w=f*d-s;for(let C=0;C<l;C++){const S=C*p-a;x.push(S,-w,0),y.push(0,0,1),m.push(C/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){const C=w+l*f,S=w+l*(f+1),T=w+1+l*(f+1),E=w+1+l*f;g.push(C,S,E),g.push(S,T,E)}this.setIndex(g),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(y,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.widthSegments,e.heightSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(js(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(js(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function js(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Dc={clone:di,merge:wt};var Lc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lc,this.fragmentShader=Ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Pc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new st().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fc extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uc extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nc extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bc extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ds extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kr=new ot,eo=new z,to=new z;class rl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=It,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;eo.setFromMatrixPosition(e.matrixWorld),t.position.copy(eo),to.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(to),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ti||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ji=new z,er=new ui,$t=new z;class al extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ji,er,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ji,er,$t.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ji,er,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ji,er,$t.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const En=new z,no=new Ve,io=new Ve;class Lt extends al{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,no,io),t.subVectors(io,no)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Oc extends rl{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}}class kc extends ds{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class us extends al{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zc extends rl{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ro extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gc extends ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ti=-90,ni=1;class Hc extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Lt(ti,ni,e,t);r.layers=this.layers,this.add(r);const a=new Lt(ti,ni,e,t);a.layers=this.layers,this.add(a);const s=new Lt(ti,ni,e,t);s.layers=this.layers,this.add(s);const o=new Lt(ti,ni,e,t);o.layers=this.layers,this.add(o);const c=new Lt(ti,ni,e,t);c.layers=this.layers,this.add(c);const l=new Lt(ti,ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===jt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ti)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Vc extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const gs=class gs{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};gs.prototype.isMatrix2=!0;let ao=gs;function so(i,e,t,n){const r=Xc(n);switch(t){case Xo:return i*e;case Yo:return i*e/r.components*r.byteLength;case ts:return i*e/r.components*r.byteLength;case zn:return i*e*2/r.components*r.byteLength;case ns:return i*e*2/r.components*r.byteLength;case qo:return i*e*3/r.components*r.byteLength;case Vt:return i*e*4/r.components*r.byteLength;case is:return i*e*4/r.components*r.byteLength;case ar:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case ha:case ma:return Math.max(i,8)*Math.max(e,8)/2;case va:case _a:case Sa:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case dr:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ba:case Oa:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case za:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ur:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xc(i){switch(i){case It:case Go:return{byteLength:1,components:1};case bi:case Ho:case pn:return{byteLength:2,components:1};case ja:case es:return{byteLength:2,components:4};case nn:case Qa:case Qt:return{byteLength:4,components:1};case Vo:case Wo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sl(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function qc(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<p.length;g++){const x=p[d],y=p[g];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,p[d]=y)}p.length=d+1;for(let g=0,x=p.length;g<x;g++){const y=p[g];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var Yc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_d=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,su=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Su=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Yc,alphahash_pars_fragment:$c,alphamap_fragment:Kc,alphamap_pars_fragment:Zc,alphatest_fragment:Jc,alphatest_pars_fragment:Qc,aomap_fragment:jc,aomap_pars_fragment:ed,batching_pars_vertex:td,batching_vertex:nd,begin_vertex:id,beginnormal_vertex:rd,bsdfs:ad,iridescence_fragment:sd,bumpmap_pars_fragment:od,clipping_planes_fragment:ld,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:ud,color_fragment:fd,color_pars_fragment:hd,color_pars_vertex:pd,color_vertex:md,common:gd,cube_uv_reflection_fragment:vd,defaultnormal_vertex:_d,displacementmap_pars_vertex:xd,displacementmap_vertex:Sd,emissivemap_fragment:Md,emissivemap_pars_fragment:yd,colorspace_fragment:bd,colorspace_pars_fragment:Ed,envmap_fragment:Td,envmap_common_pars_fragment:wd,envmap_pars_fragment:Ad,envmap_pars_vertex:Rd,envmap_physical_pars_fragment:kd,envmap_vertex:Cd,fog_vertex:Pd,fog_pars_vertex:Dd,fog_fragment:Ld,fog_pars_fragment:Id,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Bd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Vd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:qd,lights_fragment_maps:Yd,lights_fragment_end:$d,lightprobes_pars_fragment:Kd,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:jd,map_fragment:eu,map_pars_fragment:tu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:ru,metalnessmap_pars_fragment:au,morphinstance_vertex:su,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:du,normal_fragment_begin:uu,normal_fragment_maps:fu,normal_pars_fragment:hu,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:vu,clearcoat_normal_fragment_maps:_u,clearcoat_pars_fragment:xu,iridescence_pars_fragment:Su,opaque_fragment:Mu,packing:yu,premultiplied_alpha_fragment:bu,project_vertex:Eu,dithering_fragment:Tu,dithering_pars_fragment:wu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:Ru,shadowmap_pars_fragment:Cu,shadowmap_pars_vertex:Pu,shadowmap_vertex:Du,shadowmask_pars_fragment:Lu,skinbase_vertex:Iu,skinning_pars_vertex:Fu,skinning_vertex:Uu,skinnormal_vertex:Nu,specularmap_fragment:Bu,specularmap_pars_fragment:Ou,tonemapping_fragment:ku,tonemapping_pars_fragment:zu,transmission_fragment:Gu,transmission_pars_fragment:Hu,uv_pars_fragment:Vu,uv_pars_vertex:Wu,uv_vertex:Xu,worldpos_vertex:qu,background_vert:Yu,background_frag:$u,backgroundCube_vert:Ku,backgroundCube_frag:Zu,cube_vert:Ju,cube_frag:Qu,depth_vert:ju,depth_frag:ef,distance_vert:tf,distance_frag:nf,equirect_vert:rf,equirect_frag:af,linedashed_vert:sf,linedashed_frag:of,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:df,meshlambert_frag:uf,meshmatcap_vert:ff,meshmatcap_frag:hf,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:vf,meshphysical_vert:_f,meshphysical_frag:xf,meshtoon_vert:Sf,meshtoon_frag:Mf,points_vert:yf,points_frag:bf,shadow_vert:Ef,shadow_frag:Tf,sprite_vert:wf,sprite_frag:Af},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Zt={basic:{uniforms:wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:wt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:wt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:wt([fe.points,fe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:wt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:wt([fe.common,fe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:wt([fe.sprite,fe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:wt([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:wt([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Zt.physical={uniforms:wt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const tr={r:0,b:0,g:0},Rf=new ot,ol=new Le;ol.set(-1,0,0,0,1,0,0,0,1);function Cf(i,e,t,n,r,a){const s=new ze(0);let o=r===!0?0:1,c,l,u=null,p=0,d=null;function g(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){const S=w.backgroundBlurriness>0;C=e.get(C,S)}return C}function x(w){let C=!1;const S=g(w);S===null?m(s,o):S&&S.isColor&&(m(S,1),C=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(w,C){const S=g(C);S&&(S.isCubeTexture||S.mapping===gr)?(l===void 0&&(l=new Wt(new Ri(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:di(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rf.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ol),l.material.toneMapped=Ge.getTransfer(S.colorSpace)!==$e,(u!==S||p!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Wt(new Ci(2,2),new rn({name:"BackgroundMaterial",uniforms:di(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(S.colorSpace)!==$e,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,C){w.getRGB(tr,il(i)),t.buffers.color.setClear(tr.r,tr.g,tr.b,C,a)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,C=1){s.set(w),o=C,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(s,o)},render:x,addToRenderList:y,dispose:f}}function Pf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(D,N,Y,J,B){let q=!1;const G=p(D,J,Y,N);a!==G&&(a=G,l(a.object)),q=g(D,J,Y,B),q&&x(D,J,Y,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,S(D,N,Y,J),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function p(D,N,Y,J){const B=J.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const G=D.isInstancedMesh===!0?D.id:0;let Z=q[G];Z===void 0&&(Z={},q[G]=Z);let j=Z[Y.id];j===void 0&&(j={},Z[Y.id]=j);let de=j[B];return de===void 0&&(de=d(c()),j[B]=de),de}function d(D){const N=[],Y=[],J=[];for(let B=0;B<t;B++)N[B]=0,Y[B]=0,J[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:J,object:D,attributes:{},index:null}}function g(D,N,Y,J){const B=a.attributes,q=N.attributes;let G=0;const Z=Y.getAttributes();for(const j in Z)if(Z[j].location>=0){const he=B[j];let xe=q[j];if(xe===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;G++}return a.attributesNum!==G||a.index!==J}function x(D,N,Y,J){const B={},q=N.attributes;let G=0;const Z=Y.getAttributes();for(const j in Z)if(Z[j].location>=0){let he=q[j];he===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(he=D.instanceColor));const xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),B[j]=xe,G++}a.attributes=B,a.attributesNum=G,a.index=J}function y(){const D=a.newAttributes;for(let N=0,Y=D.length;N<Y;N++)D[N]=0}function m(D){f(D,0)}function f(D,N){const Y=a.newAttributes,J=a.enabledAttributes,B=a.attributeDivisors;Y[D]=1,J[D]===0&&(i.enableVertexAttribArray(D),J[D]=1),B[D]!==N&&(i.vertexAttribDivisor(D,N),B[D]=N)}function w(){const D=a.newAttributes,N=a.enabledAttributes;for(let Y=0,J=N.length;Y<J;Y++)N[Y]!==D[Y]&&(i.disableVertexAttribArray(Y),N[Y]=0)}function C(D,N,Y,J,B,q,G){G===!0?i.vertexAttribIPointer(D,N,Y,B,q):i.vertexAttribPointer(D,N,Y,J,B,q)}function S(D,N,Y,J){y();const B=J.attributes,q=Y.getAttributes(),G=N.defaultAttributeValues;for(const Z in q){const j=q[Z];if(j.location>=0){let de=B[Z];if(de===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),de!==void 0){const he=de.normalized,xe=de.itemSize,Be=e.get(de);if(Be===void 0)continue;const Ke=Be.buffer,Oe=Be.type,K=Be.bytesPerElement,re=Oe===i.INT||Oe===i.UNSIGNED_INT||de.gpuType===Qa;if(de.isInterleavedBufferAttribute){const te=de.data,Re=te.stride,Pe=de.offset;if(te.isInstancedInterleavedBuffer){for(let Ae=0;Ae<j.locationSize;Ae++)f(j.location+Ae,te.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)m(j.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Ae=0;Ae<j.locationSize;Ae++)C(j.location+Ae,xe/j.locationSize,Oe,he,Re*K,(Pe+xe/j.locationSize*Ae)*K,re)}else{if(de.isInstancedBufferAttribute){for(let te=0;te<j.locationSize;te++)f(j.location+te,de.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let te=0;te<j.locationSize;te++)m(j.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let te=0;te<j.locationSize;te++)C(j.location+te,xe/j.locationSize,Oe,he,xe*K,xe/j.locationSize*te*K,re)}}else if(G!==void 0){const he=G[Z];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(j.location,he);break;case 3:i.vertexAttrib3fv(j.location,he);break;case 4:i.vertexAttrib4fv(j.location,he);break;default:i.vertexAttrib1fv(j.location,he)}}}}w()}function T(){b();for(const D in n){const N=n[D];for(const Y in N){const J=N[Y];for(const B in J){const q=J[B];for(const G in q)u(q[G].object),delete q[G];delete J[B]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const N=n[D.id];for(const Y in N){const J=N[Y];for(const B in J){const q=J[B];for(const G in q)u(q[G].object),delete q[G];delete J[B]}}delete n[D.id]}function R(D){for(const N in n){const Y=n[N];for(const J in Y){const B=Y[J];if(B[D.id]===void 0)continue;const q=B[D.id];for(const G in q)u(q[G].object),delete q[G];delete B[D.id]}}}function v(D){for(const N in n){const Y=n[N],J=D.isInstancedMesh===!0?D.id:0,B=Y[J];if(B!==void 0){for(const q in B){const G=B[q];for(const Z in G)u(G[Z].object),delete G[Z];delete B[q]}delete Y[J],Object.keys(Y).length===0&&delete n[N]}}}function b(){U(),s=!0,a!==r&&(a=r,l(a.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function Df(i,e,t){let n;function r(c){n=c}function a(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];t.update(d,n,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Lf(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==Vt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==It&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qt&&!v)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ce("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:S,maxSamples:T,samples:E}}function If(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Fn,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const g=p.length!==0||d||n!==0||r;return r=d,n=p.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,g){const x=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!r||x===null||x.length===0||a&&!m)a?u(null):l();else{const w=a?0:n,C=w*4;let S=f.clippingState||null;c.value=S,S=u(x,d,C,g);for(let T=0;T!==C;++T)S[T]=t[T];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,d,g,x){const y=p!==null?p.length:0;let m=null;if(y!==0){if(m=c.value,x!==!0||m===null){const f=g+y*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,S=g;C!==y;++C,S+=4)s.copy(p[C]).applyMatrix4(w,o),s.normal.toArray(m,S),m[S+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const wn=4,oo=[.125,.215,.35,.446,.526,.582],Nn=20,Ff=256,xi=new us,lo=new ze;let Zr=null,Jr=0,Qr=0,jr=!1;const Uf=new z;class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=Uf}=a;Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr,Jr,Qr),this._renderer.xr.enabled=jr,e.scissorTest=!1,ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kn||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:pn,format:Vt,colorSpace:fr,depthBuffer:!1},r=uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nf(a)),this._blurMaterial=Of(a,e,t),this._ggxMaterial=Bf(a,e,t)}return r}_compileMaterial(e){const t=new Wt(new Ot,e);this._renderer.compile(t,xi)}_sceneToCubeUV(e,t,n,r,a){const c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,g=p.toneMapping;p.getClearColor(lo),p.toneMapping=en,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Ri,new ls({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,f=!0):(m.color.copy(lo),f=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(c.up.set(0,l[C],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[C],a.y,a.z)):S===1?(c.up.set(0,0,l[C]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[C],a.z)):(c.up.set(0,l[C],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[C]));const T=this._cubeSize;ii(r,S*T,C>2?T:0,T,T),p.setRenderTarget(r),f&&p.render(y,c),p.render(e,c)}p.toneMapping=g,p.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===kn||e.mapping===li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ii(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,xi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),d=0+l*1.25,g=p*d,{_lodMax:x}=this,y=this._sizeLods[n],m=3*y*(n>x-wn?n-x+wn:0),f=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=x-t,ii(a,m,f,3*y,2*y),r.setRenderTarget(a),r.render(o,xi),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=x-n,ii(e,m,f,3*y,2*y),r.setRenderTarget(e),r.render(o,xi)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,p=this._lodMeshes[r];p.material=l;const d=l.uniforms,g=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Nn-1),y=a/x,m=isFinite(a)?1+Math.floor(u*y):Nn;m>Nn&&Ce(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const f=[];let w=0;for(let R=0;R<Nn;++R){const v=R/y,b=Math.exp(-v*v/2);f.push(b),R===0?w+=b:R<m&&(w+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=x,d.mipInt.value=C-n;const S=this._sizeLods[r],T=3*S*(r>C-wn?r-C+wn:0),E=4*(this._cubeSize-S);ii(t,T,E,3*S,2*S),c.setRenderTarget(t),c.render(p,xi)}}function Nf(i){const e=[],t=[],n=[];let r=i;const a=i-wn+1+oo.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let c=1/o;s>i-wn?c=oo[s-i+wn-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,p=1+l,d=[u,u,p,u,p,p,u,u,p,p,u,p],g=6,x=6,y=3,m=2,f=1,w=new Float32Array(y*x*g),C=new Float32Array(m*x*g),S=new Float32Array(f*x*g);for(let E=0;E<g;E++){const R=E%3*2/3-1,v=E>2?0:-1,b=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];w.set(b,y*x*E),C.set(d,m*x*E);const U=[E,E,E,E,E,E];S.set(U,f*x*E)}const T=new Ot;T.setAttribute("position",new Bt(w,y)),T.setAttribute("uv",new Bt(C,m)),T.setAttribute("faceIndex",new Bt(S,f)),n.push(new Wt(T,null)),r>wn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function uo(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ii(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Bf(i,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ff,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_r(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Of(i,e,t){const n=new Float32Array(Nn),r=new z(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function fo(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function ho(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function _r(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ll extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ri(5,5,5),a=new rn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:un});a.uniforms.tEquirect.value=t;const s=new Wt(r,a),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Et),new Hc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}function kf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,g=!1){return d==null?null:g?s(d):a(d)}function a(d){if(d&&d.isTexture){const g=d.mapping;if(g===yr||g===br)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const y=new ll(x.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const g=d.mapping,x=g===yr||g===br,y=g===kn||g===li;if(x||y){let m=t.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new co(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const w=d.image;return x&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new co(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,g){return g===yr?d.mapping=kn:g===br&&(d.mapping=li),d}function c(d){let g=0;const x=6;for(let y=0;y<x;y++)d[y]!==void 0&&g++;return g===x}function l(d){const g=d.target;g.removeEventListener("dispose",l);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function u(d){const g=d.target;g.removeEventListener("dispose",u);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function zf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ai("WebGLRenderer: "+n+" extension not supported."),r}}}function Gf(i,e,t,n){const r={},a=new WeakMap;function s(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",s),delete r[d.id];const g=a.get(d);g&&(e.remove(g),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(p){const d=p.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER)}function l(p){const d=[],g=p.index,x=p.attributes.position;let y=0;if(x===void 0)return;if(g!==null){const w=g.array;y=g.version;for(let C=0,S=w.length;C<S;C+=3){const T=w[C+0],E=w[C+1],R=w[C+2];d.push(T,E,E,R,R,T)}}else{const w=x.array;y=x.version;for(let C=0,S=w.length/3-1;C<S;C+=3){const T=C+0,E=C+1,R=C+2;d.push(T,E,E,R,R,T)}}const m=new(x.count>=65535?jo:Qo)(d,1);m.version=y;const f=a.get(p);f&&e.remove(f),a.set(p,m)}function u(p){const d=a.get(p);if(d){const g=p.index;g!==null&&d.version<g.version&&l(p)}else l(p);return a.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function Hf(i,e,t){let n;function r(p){n=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function c(p,d){i.drawElements(n,d,a,p*s),t.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,a,p*s,g),t.update(d,n,g))}function u(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,p,0,g);let y=0;for(let m=0;m<g;m++)y+=d[m];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Vf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Ye("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wf(i,e,t){const n=new WeakMap,r=new st;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let U=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",U)};var g=U;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*E*4*p),v=new Ko(R,T,E,p);v.type=Qt,v.needsUpdate=!0;const b=S*4;for(let D=0;D<p;D++){const N=f[D],Y=w[D],J=C[D],B=T*E*4*D;for(let q=0;q<N.count;q++){const G=q*b;x===!0&&(r.fromBufferAttribute(N,q),R[B+G+0]=r.x,R[B+G+1]=r.y,R[B+G+2]=r.z,R[B+G+3]=0),y===!0&&(r.fromBufferAttribute(Y,q),R[B+G+4]=r.x,R[B+G+5]=r.y,R[B+G+6]=r.z,R[B+G+7]=0),m===!0&&(r.fromBufferAttribute(J,q),R[B+G+8]=r.x,R[B+G+9]=r.y,R[B+G+10]=r.z,R[B+G+11]=J.itemSize===4?r.w:1)}}d={count:p,texture:v,size:new Ve(T,E)},n.set(o,d),o.addEventListener("dispose",U)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const y=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Xf(i,e,t,n,r){let a=new WeakMap;function s(l){const u=r.render.frame,p=l.geometry,d=e.get(l,p);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const g=l.skeleton;a.get(g)!==u&&(g.update(),a.set(g,u))}return d}function o(){a=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const qf={[Fo]:"LINEAR_TONE_MAPPING",[Uo]:"REINHARD_TONE_MAPPING",[No]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[Oo]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[Bo]:"CUSTOM_TONE_MAPPING"};function Yf(i,e,t,n,r,a){const s=new tn(e,t,{type:i,depthBuffer:r,stencilBuffer:a,samples:n?4:0,depthTexture:r?new ci(e,t):void 0}),o=new tn(e,t,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Ot;c.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new hn([0,2,0,0,2,0],2));const l=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Wt(c,l),p=new us(-1,1,1,-1,0,1);let d=null,g=null,x=!1,y,m=null,f=[],w=!1;this.setSize=function(C,S){s.setSize(C,S),o.setSize(C,S);for(let T=0;T<f.length;T++){const E=f[T];E.setSize&&E.setSize(C,S)}},this.setEffects=function(C){f=C,w=f.length>0&&f[0].isRenderPass===!0;const S=s.width,T=s.height;for(let E=0;E<f.length;E++){const R=f[E];R.setSize&&R.setSize(S,T)}},this.begin=function(C,S){if(x||C.toneMapping===en&&f.length===0)return!1;if(m=S,S!==null){const T=S.width,E=S.height;(s.width!==T||s.height!==E)&&this.setSize(T,E)}return w===!1&&C.setRenderTarget(s),y=C.toneMapping,C.toneMapping=en,!0},this.hasRenderPass=function(){return w},this.end=function(C,S){C.toneMapping=y,x=!0;let T=s,E=o;for(let R=0;R<f.length;R++){const v=f[R];if(v.enabled!==!1&&(v.render(C,E,T,S),v.needsSwap!==!1)){const b=T;T=E,E=b}}if(d!==C.outputColorSpace||g!==C.toneMapping){d=C.outputColorSpace,g=C.toneMapping,l.defines={},Ge.getTransfer(d)===$e&&(l.defines.SRGB_TRANSFER="");const R=qf[g];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,C.setRenderTarget(m),C.render(u,p),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),c.dispose(),l.dispose()}}const cl=new Tt,Ya=new ci(1,1),dl=new Ko,ul=new uc,fl=new tl,po=[],mo=[],go=new Float32Array(16),vo=new Float32Array(9),_o=new Float32Array(4);function hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=po[r];if(a===void 0&&(a=new Float32Array(r),po[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xr(i,e){let t=mo[e];t===void 0&&(t=new Int32Array(e),mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;_o.set(n),i.uniformMatrix2fv(this.addr,!1,_o),gt(t,n)}}function jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),gt(t,n)}}function eh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;go.set(n),i.uniformMatrix4fv(this.addr,!1,go),gt(t,n)}}function th(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function ih(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function rh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function ah(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function lh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function ch(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Ya.compareFunction=t.isReversedDepthBuffer()?as:rs,a=Ya):a=cl,t.setTexture2D(e||a,r)}function dh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ul,r)}function uh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fl,r)}function fh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||dl,r)}function hh(i){switch(i){case 5126:return $f;case 35664:return Kf;case 35665:return Zf;case 35666:return Jf;case 35674:return Qf;case 35675:return jf;case 35676:return eh;case 5124:case 35670:return th;case 35667:case 35671:return nh;case 35668:case 35672:return ih;case 35669:case 35673:return rh;case 5125:return ah;case 36294:return sh;case 36295:return oh;case 36296:return lh;case 35678:case 36198:case 36298:case 36306:case 35682:return ch;case 35679:case 36299:case 36307:return dh;case 35680:case 36300:case 36308:case 36293:return uh;case 36289:case 36303:case 36311:case 36292:return fh}}function ph(i,e){i.uniform1fv(this.addr,e)}function mh(i,e){const t=hi(e,this.size,2);i.uniform2fv(this.addr,t)}function gh(i,e){const t=hi(e,this.size,3);i.uniform3fv(this.addr,t)}function vh(i,e){const t=hi(e,this.size,4);i.uniform4fv(this.addr,t)}function _h(i,e){const t=hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xh(i,e){const t=hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sh(i,e){const t=hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mh(i,e){i.uniform1iv(this.addr,e)}function yh(i,e){i.uniform2iv(this.addr,e)}function bh(i,e){i.uniform3iv(this.addr,e)}function Eh(i,e){i.uniform4iv(this.addr,e)}function Th(i,e){i.uniform1uiv(this.addr,e)}function wh(i,e){i.uniform2uiv(this.addr,e)}function Ah(i,e){i.uniform3uiv(this.addr,e)}function Rh(i,e){i.uniform4uiv(this.addr,e)}function Ch(i,e,t){const n=this.cache,r=e.length,a=xr(t,r);mt(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=Ya:s=cl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function Ph(i,e,t){const n=this.cache,r=e.length,a=xr(t,r);mt(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||ul,a[s])}function Dh(i,e,t){const n=this.cache,r=e.length,a=xr(t,r);mt(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||fl,a[s])}function Lh(i,e,t){const n=this.cache,r=e.length,a=xr(t,r);mt(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||dl,a[s])}function Ih(i){switch(i){case 5126:return ph;case 35664:return mh;case 35665:return gh;case 35666:return vh;case 35674:return _h;case 35675:return xh;case 35676:return Sh;case 5124:case 35670:return Mh;case 35667:case 35671:return yh;case 35668:case 35672:return bh;case 35669:case 35673:return Eh;case 5125:return Th;case 36294:return wh;case 36295:return Ah;case 36296:return Rh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ch;case 35679:case 36299:case 36307:return Ph;case 35680:case 36300:case 36308:case 36293:return Dh;case 36289:case 36303:case 36311:case 36292:return Lh}}class Fh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hh(t.type)}}class Uh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ih(t.type)}}class Nh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function xo(i,e){i.seq.push(e),i.map[e.id]=e}function Bh(i,e,t){const n=i.name,r=n.length;for(ea.lastIndex=0;;){const a=ea.exec(n),s=ea.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){xo(t,l===void 0?new Fh(o,i,e):new Uh(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Nh(o),xo(t,p)),t=p}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);Bh(o,c,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function So(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Oh=37297;let kh=0;function zh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Mo=new Le;function Gh(i){Ge._getMatrix(Mo,Ge.workingColorSpace,i);const e=`mat3( ${Mo.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case hr:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+zh(i.getShaderSource(e),o)}else return a}function Hh(i,e){const t=Gh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Vh={[Fo]:"Linear",[Uo]:"Reinhard",[No]:"Cineon",[Ja]:"ACESFilmic",[Oo]:"AgX",[ko]:"Neutral",[Bo]:"Custom"};function Wh(i,e){const t=Vh[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new z;function Xh(){Ge.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function Yh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $h(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function yi(i){return i!==""}function bo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kh=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Kh,Jh)}const Zh=new Map;function Jh(i,e){let t=Fe[e];if(t===void 0){const n=Zh.get(e);if(n!==void 0)t=Fe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $a(t)}const Qh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(i){return i.replace(Qh,jh)}function jh(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function wo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ep={[rr]:"SHADOWMAP_TYPE_PCF",[Mi]:"SHADOWMAP_TYPE_VSM"};function tp(i){return ep[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const np={[kn]:"ENVMAP_TYPE_CUBE",[li]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE_UV"};function ip(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":np[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rp={[li]:"ENVMAP_MODE_REFRACTION"};function ap(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sp={[Io]:"ENVMAP_BLENDING_MULTIPLY",[Wl]:"ENVMAP_BLENDING_MIX",[Xl]:"ENVMAP_BLENDING_ADD"};function op(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sp[i.combine]||"ENVMAP_BLENDING_NONE"}function lp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cp(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=tp(t),l=ip(t),u=ap(t),p=op(t),d=lp(t),g=qh(t),x=Yh(a),y=r.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(yi).join(`
`),f.length>0&&(f+=`
`)):(m=[wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),f=[wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?Fe.tonemapping_pars_fragment:"",t.toneMapping!==en?Wh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Hh("linearToOutputTexel",t.outputColorSpace),Xh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),s=$a(s),s=bo(s,t),s=Eo(s,t),o=$a(o),o=bo(o,t),o=Eo(o,t),s=To(s),o=To(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ls?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ls?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=w+m+s,S=w+f+o,T=So(r,r.VERTEX_SHADER,C),E=So(r,r.FRAGMENT_SHADER,S);r.attachShader(y,T),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(y)||"",Y=r.getShaderInfoLog(T)||"",J=r.getShaderInfoLog(E)||"",B=N.trim(),q=Y.trim(),G=J.trim();let Z=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,T,E);else{const de=yo(r,T,"vertex"),he=yo(r,E,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+de+`
`+he)}else B!==""?Ce("WebGLProgram: Program Info Log:",B):(q===""||G==="")&&(j=!1);j&&(D.diagnostics={runnable:Z,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(T),r.deleteShader(E),v=new cr(r,y),b=$h(r,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(y,Oh)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kh++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}let dp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fp(e),t.set(e,n)),n}}class fp{constructor(e){this.id=dp++,this.code=e,this.usedTimes=0}}function hp(i){return i===zn||i===dr||i===ur}function pp(i,e,t,n,r,a){const s=new Zo,o=new up,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,b,U,D,N,Y){const J=D.fog,B=N.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||q,G),j=Z&&Z.mapping===gr?Z.image.height:null,de=g[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=he!==void 0?he.length:0;let Be=0;B.morphAttributes.position!==void 0&&(Be=1),B.morphAttributes.normal!==void 0&&(Be=2),B.morphAttributes.color!==void 0&&(Be=3);let Ke,Oe,K,re;if(de){const Se=Zt[de];Ke=Se.vertexShader,Oe=Se.fragmentShader}else{Ke=v.vertexShader,Oe=v.fragmentShader;const Se=o.getVertexShaderStage(v),ct=o.getFragmentShaderStage(v);o.update(v,Se,ct),K=Se.id,re=ct.id}const te=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,nt=!!v.map,ge=!!v.matcap,Ne=!!Z,We=!!v.aoMap,ke=!!v.lightMap,it=!!v.bumpMap&&v.wireframe===!1,rt=!!v.normalMap,lt=!!v.displacementMap,pt=!!v.emissiveMap,Ze=!!v.metalnessMap,at=!!v.roughnessMap,L=v.anisotropy>0,vt=v.clearcoat>0,Xe=v.dispersion>0,M=v.iridescence>0,h=v.sheen>0,A=v.transmission>0,F=L&&!!v.anisotropyMap,V=vt&&!!v.clearcoatMap,ne=vt&&!!v.clearcoatNormalMap,le=vt&&!!v.clearcoatRoughnessMap,W=M&&!!v.iridescenceMap,$=M&&!!v.iridescenceThicknessMap,ae=h&&!!v.sheenColorMap,ue=h&&!!v.sheenRoughnessMap,ee=!!v.specularMap,oe=!!v.specularColorMap,Ee=!!v.specularIntensityMap,we=A&&!!v.transmissionMap,De=A&&!!v.thicknessMap,P=!!v.gradientMap,se=!!v.alphaMap,X=v.alphaTest>0,ie=!!v.alphaHash,ce=!!v.extensions;let Q=en;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Q=i.toneMapping);const Me={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:Ke,fragmentShader:Oe,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:nt,matcap:ge,envMap:Ne,envMapMode:Ne&&Z.mapping,envMapCubeUVHeight:j,aoMap:We,lightMap:ke,bumpMap:it,normalMap:rt,displacementMap:lt,emissiveMap:pt,normalMapObjectSpace:rt&&v.normalMapType===$l,normalMapTangentSpace:rt&&v.normalMapType===Va,packedNormalMap:rt&&v.normalMapType===Va&&hp(v.normalMap.format),metalnessMap:Ze,roughnessMap:at,anisotropy:L,anisotropyMap:F,clearcoat:vt,clearcoatMap:V,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,dispersion:Xe,iridescence:M,iridescenceMap:W,iridescenceThicknessMap:$,sheen:h,sheenColorMap:ae,sheenRoughnessMap:ue,specularMap:ee,specularColorMap:oe,specularIntensityMap:Ee,transmission:A,transmissionMap:we,thicknessMap:De,gradientMap:P,opaque:v.transparent===!1&&v.blending===ri&&v.alphaToCoverage===!1,alphaMap:se,alphaTest:X,alphaHash:ie,combine:v.combine,mapUv:nt&&x(v.map.channel),aoMapUv:We&&x(v.aoMap.channel),lightMapUv:ke&&x(v.lightMap.channel),bumpMapUv:it&&x(v.bumpMap.channel),normalMapUv:rt&&x(v.normalMap.channel),displacementMapUv:lt&&x(v.displacementMap.channel),emissiveMapUv:pt&&x(v.emissiveMap.channel),metalnessMapUv:Ze&&x(v.metalnessMap.channel),roughnessMapUv:at&&x(v.roughnessMap.channel),anisotropyMapUv:F&&x(v.anisotropyMap.channel),clearcoatMapUv:V&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&x(v.sheenRoughnessMap.channel),specularMapUv:ee&&x(v.specularMap.channel),specularColorMapUv:oe&&x(v.specularColorMap.channel),specularIntensityMapUv:Ee&&x(v.specularIntensityMap.channel),transmissionMapUv:we&&x(v.transmissionMap.channel),thicknessMapUv:De&&x(v.thicknessMap.channel),alphaMapUv:se&&x(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(rt||L),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(nt||se),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&rt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Re,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:nt&&v.map.isVideoTexture===!0&&Ge.getTransfer(v.map.colorSpace)===$e,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(v.emissiveMap.colorSpace)===$e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jt,flipSided:v.side===Rt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)b.push(U),b.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(f(b,v),w(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function f(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function w(v,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),v.push(s.mask)}function C(v){const b=g[v.type];let U;if(b){const D=Zt[b];U=Dc.clone(D.uniforms)}else U=v.uniforms;return U}function S(v,b){let U=u.get(b);return U!==void 0?++U.usedTimes:(U=new cp(i,b,v,r),l.push(U),u.set(b,U)),U}function T(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:R}}function mp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ao(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ro(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,y,m,f){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:g,material:x,materialVariant:s(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:f},i[e]=w):(w.id=d.id,w.object=d,w.geometry=g,w.material=x,w.materialVariant=s(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=m,w.group=f),e++,w}function c(d,g,x,y,m,f){const w=o(d,g,x,y,m,f);x.transmission>0?n.push(w):x.transparent===!0?r.push(w):t.push(w)}function l(d,g,x,y,m,f){const w=o(d,g,x,y,m,f);x.transmission>0?n.unshift(w):x.transparent===!0?r.unshift(w):t.unshift(w)}function u(d,g,x){t.length>1&&t.sort(d||gp),n.length>1&&n.sort(g||Ao),r.length>1&&r.sort(g||Ao),x&&(t.reverse(),n.reverse(),r.reverse())}function p(){for(let d=e,g=i.length;d<g;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:l,finish:p,sort:u}}function vp(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Ro,i.set(n,[s])):r>=a.length?(s=new Ro,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function _p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function xp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sp=0;function Mp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yp(i){const e=new _p,t=xp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,a=new ot,s=new ot;function o(l){let u=0,p=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,x=0,y=0,m=0,f=0,w=0,C=0,S=0,T=0,E=0,R=0;l.sort(Mp);for(let b=0,U=l.length;b<U;b++){const D=l[b],N=D.color,Y=D.intensity,J=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zn?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*Y,p+=N.g*Y,d+=N.b*Y;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],Y);R++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,Z=t.get(D);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=q,g++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(N).multiplyScalar(Y),q.distance=J,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[y]=q;const G=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=G.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=B,S++}y++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(N).multiplyScalar(Y),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=q,m++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const G=D.shadow,Z=t.get(D);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=D.shadow.matrix,C++}n.point[x]=q,x++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(Y),q.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==g||v.pointLength!==x||v.spotLength!==y||v.rectAreaLength!==m||v.hemiLength!==f||v.numDirectionalShadows!==w||v.numPointShadows!==C||v.numSpotShadows!==S||v.numSpotMaps!==T||v.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=S+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,v.directionalLength=g,v.pointLength=x,v.spotLength=y,v.rectAreaLength=m,v.hemiLength=f,v.numDirectionalShadows=w,v.numPointShadows=C,v.numSpotShadows=S,v.numSpotMaps=T,v.numLightProbes=R,n.version=Sp++)}function c(l,u){let p=0,d=0,g=0,x=0,y=0;const m=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const C=l[f];if(C.isDirectionalLight){const S=n.directional[p];S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(C.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(C.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),s.identity(),a.copy(C.matrixWorld),a.premultiply(m),s.extractRotation(a),S.halfWidth.set(C.width*.5,0,0),S.halfHeight.set(0,C.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(C.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(C.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function Co(i){const e=new yp(i),t=[],n=[],r=[];function a(d){p.camera=d,t.length=0,n.length=0,r.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function bp(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Co(i),e.set(r,[o])):a>=s.length?(o=new Co(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Ap=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Po=new ot,Si=new z,ta=new z;function Rp(i,e,t){let n=new cs;const r=new Ve,a=new Ve,s=new st,o=new Nc,c=new Bc,l={},u=t.maxTextureSize,p={[An]:Rt,[Rt]:An,[Jt]:Jt},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Ep,fragmentShader:Tp}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Ot;x.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let f=this.type;this.render=function(E,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Tl&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rr);const b=i.getRenderTarget(),U=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(un),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Y=f!==this.type;Y&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(B=>B.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,B=E.length;J<B;J++){const q=E[J],G=q.shadow;if(G===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Z=G.getFrameExtents();r.multiply(Z),a.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/Z.x),r.x=a.x*Z.x,G.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/Z.y),r.y=a.y*Z.y,G.mapSize.y=a.y));const j=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=j,G.map===null||Y===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Mi){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new tn(r.x,r.y,{format:zn,type:pn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new ci(r.x,r.y,Qt),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=mn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xt,G.map.depthTexture.magFilter=xt}else q.isPointLight?(G.map=new ll(r.x),G.map.depthTexture=new Cc(r.x,nn)):(G.map=new tn(r.x,r.y),G.map.depthTexture=new ci(r.x,r.y,nn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=mn,this.type===rr?(G.map.depthTexture.compareFunction=j?as:rs,G.map.depthTexture.minFilter=Et,G.map.depthTexture.magFilter=Et):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xt,G.map.depthTexture.magFilter=xt);G.camera.updateProjectionMatrix()}const de=G.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<de;he++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,he),i.clear();else{he===0&&(i.setRenderTarget(G.map),i.clear());const xe=G.getViewport(he);s.set(a.x*xe.x,a.y*xe.y,a.x*xe.z,a.y*xe.w),N.viewport(s)}if(q.isPointLight){const xe=G.camera,Be=G.matrix,Ke=q.distance||xe.far;Ke!==xe.far&&(xe.far=Ke,xe.updateProjectionMatrix()),Si.setFromMatrixPosition(q.matrixWorld),xe.position.copy(Si),ta.copy(xe.position),ta.add(wp[he]),xe.up.copy(Ap[he]),xe.lookAt(ta),xe.updateMatrixWorld(),Be.makeTranslation(-Si.x,-Si.y,-Si.z),Po.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Po,xe.coordinateSystem,xe.reversedDepth)}else G.updateMatrices(q);n=G.getFrustum(),S(R,v,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Mi&&w(G,v),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,U,D)};function w(E,R){const v=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new tn(r.x,r.y,{format:zn,type:pn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,v,d,y,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,v,g,y,null)}function C(E,R,v,b){let U=null;const D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)U=D;else if(U=v.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=U.uuid,Y=R.uuid;let J=l[N];J===void 0&&(J={},l[N]=J);let B=J[Y];B===void 0&&(B=U.clone(),J[Y]=B,R.addEventListener("dispose",T)),U=B}if(U.visible=R.visible,U.wireframe=R.wireframe,b===Mi?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:p[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const N=i.properties.get(U);N.light=v}return U}function S(E,R,v,b,U){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===Mi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const Y=e.update(E),J=E.material;if(Array.isArray(J)){const B=Y.groups;for(let q=0,G=B.length;q<G;q++){const Z=B[q],j=J[Z.materialIndex];if(j&&j.visible){const de=C(E,j,b,U);E.onBeforeShadow(i,E,R,v,Y,de,Z),i.renderBufferDirect(v,null,Y,de,E,Z),E.onAfterShadow(i,E,R,v,Y,de,Z)}}}else if(J.visible){const B=C(E,J,b,U);E.onBeforeShadow(i,E,R,v,Y,B,null),i.renderBufferDirect(v,null,Y,B,E,null),E.onAfterShadow(i,E,R,v,Y,B,null)}}const N=E.children;for(let Y=0,J=N.length;Y<J;Y++)S(N[Y],R,v,b,U)}function T(E){E.target.removeEventListener("dispose",T);for(const v in l){const b=l[v],U=E.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}function Cp(i,e){function t(){let P=!1;const se=new st;let X=null;const ie=new st(0,0,0,0);return{setMask:function(ce){X!==ce&&!P&&(i.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Q,Me,Se,ct){ct===!0&&(ce*=Se,Q*=Se,Me*=Se),se.set(ce,Q,Me,Se),ie.equals(se)===!1&&(i.clearColor(ce,Q,Me,Se),ie.copy(se))},reset:function(){P=!1,X=null,ie.set(-1,0,0,0)}}}function n(){let P=!1,se=!1,X=null,ie=null,ce=null;return{setReversed:function(Q){if(se!==Q){const Me=e.get("EXT_clip_control");Q?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),se=Q;const Se=ce;ce=null,this.setClear(Se)}},getReversed:function(){return se},setTest:function(Q){Q?te(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Q){X!==Q&&!P&&(i.depthMask(Q),X=Q)},setFunc:function(Q){if(se&&(Q=rc[Q]),ie!==Q){switch(Q){case ra:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Q}},setLocked:function(Q){P=Q},setClear:function(Q){ce!==Q&&(ce=Q,se&&(Q=1-Q),i.clearDepth(Q))},reset:function(){P=!1,X=null,ie=null,ce=null,se=!1}}}function r(){let P=!1,se=null,X=null,ie=null,ce=null,Q=null,Me=null,Se=null,ct=null;return{setTest:function(et){P||(et?te(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(et){se!==et&&!P&&(i.stencilMask(et),se=et)},setFunc:function(et,Xt,qt){(X!==et||ie!==Xt||ce!==qt)&&(i.stencilFunc(et,Xt,qt),X=et,ie=Xt,ce=qt)},setOp:function(et,Xt,qt){(Q!==et||Me!==Xt||Se!==qt)&&(i.stencilOp(et,Xt,qt),Q=et,Me=Xt,Se=qt)},setLocked:function(et){P=et},setClear:function(et){ct!==et&&(i.clearStencil(et),ct=et)},reset:function(){P=!1,se=null,X=null,ie=null,ce=null,Q=null,Me=null,Se=null,ct=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},p={},d={},g=new WeakMap,x=[],y=null,m=!1,f=null,w=null,C=null,S=null,T=null,E=null,R=null,v=new ze(0,0,0),b=0,U=!1,D=null,N=null,Y=null,J=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=Z>=2);let de=null,he={};const xe=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ke=new st().fromArray(xe),Oe=new st().fromArray(Be);function K(P,se,X,ie){const ce=new Uint8Array(4),Q=i.createTexture();i.bindTexture(P,Q),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<X;Me++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(se+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return Q}const re={};re[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(i.DEPTH_TEST),s.setFunc(oi),it(!1),rt(ws),te(i.CULL_FACE),We(un);function te(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Re(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Pe(P,se){return d[P]!==se?(i.bindFramebuffer(P,se),d[P]=se,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(P,se){let X=x,ie=!1;if(P){X=g.get(se),X===void 0&&(X=[],g.set(se,X));const ce=P.textures;if(X.length!==ce.length||X[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Me=ce.length;Q<Me;Q++)X[Q]=i.COLOR_ATTACHMENT0+Q;X.length=ce.length,ie=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ie=!0);ie&&i.drawBuffers(X)}function nt(P){return y!==P?(i.useProgram(P),y=P,!0):!1}const ge={[Un]:i.FUNC_ADD,[Al]:i.FUNC_SUBTRACT,[Rl]:i.FUNC_REVERSE_SUBTRACT};ge[Cl]=i.MIN,ge[Pl]=i.MAX;const Ne={[Dl]:i.ZERO,[Ll]:i.ONE,[Il]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[kl]:i.SRC_ALPHA_SATURATE,[Bl]:i.DST_COLOR,[Ul]:i.DST_ALPHA,[Fl]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[Ol]:i.ONE_MINUS_DST_COLOR,[Nl]:i.ONE_MINUS_DST_ALPHA,[zl]:i.CONSTANT_COLOR,[Gl]:i.ONE_MINUS_CONSTANT_COLOR,[Hl]:i.CONSTANT_ALPHA,[Vl]:i.ONE_MINUS_CONSTANT_ALPHA};function We(P,se,X,ie,ce,Q,Me,Se,ct,et){if(P===un){m===!0&&(Re(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),P!==wl){if(P!==f||et!==U){if((w!==Un||T!==Un)&&(i.blendEquation(i.FUNC_ADD),w=Un,T=Un),et)switch(P){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.ONE,i.ONE);break;case Rs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",P);break}else switch(P){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rs:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cs:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",P);break}C=null,S=null,E=null,R=null,v.set(0,0,0),b=0,f=P,U=et}return}ce=ce||se,Q=Q||X,Me=Me||ie,(se!==w||ce!==T)&&(i.blendEquationSeparate(ge[se],ge[ce]),w=se,T=ce),(X!==C||ie!==S||Q!==E||Me!==R)&&(i.blendFuncSeparate(Ne[X],Ne[ie],Ne[Q],Ne[Me]),C=X,S=ie,E=Q,R=Me),(Se.equals(v)===!1||ct!==b)&&(i.blendColor(Se.r,Se.g,Se.b,ct),v.copy(Se),b=ct),f=P,U=!1}function ke(P,se){P.side===Jt?Re(i.CULL_FACE):te(i.CULL_FACE);let X=P.side===Rt;se&&(X=!X),it(X),P.blending===ri&&P.transparent===!1?We(un):We(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),a.setMask(P.colorWrite);const ie=P.stencilWrite;o.setTest(ie),ie&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),pt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(P){D!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),D=P)}function rt(P){P!==bl?(te(i.CULL_FACE),P!==N&&(P===ws?i.cullFace(i.BACK):P===El?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),N=P}function lt(P){P!==Y&&(G&&i.lineWidth(P),Y=P)}function pt(P,se,X){P?(te(i.POLYGON_OFFSET_FILL),(J!==se||B!==X)&&(J=se,B=X,s.getReversed()&&(se=-se),i.polygonOffset(se,X))):Re(i.POLYGON_OFFSET_FILL)}function Ze(P){P?te(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function at(P){P===void 0&&(P=i.TEXTURE0+q-1),de!==P&&(i.activeTexture(P),de=P)}function L(P,se,X){X===void 0&&(de===null?X=i.TEXTURE0+q-1:X=de);let ie=he[X];ie===void 0&&(ie={type:void 0,texture:void 0},he[X]=ie),(ie.type!==P||ie.texture!==se)&&(de!==X&&(i.activeTexture(X),de=X),i.bindTexture(P,se||re[P]),ie.type=P,ie.texture=se)}function vt(){const P=he[de];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function h(){try{i.texSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function A(){try{i.texSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function le(){try{i.texStorage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function W(){try{i.texImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function $(){try{i.texImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function ae(P){return p[P]!==void 0?p[P]:i.getParameter(P)}function ue(P,se){p[P]!==se&&(i.pixelStorei(P,se),p[P]=se)}function ee(P){Ke.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ke.copy(P))}function oe(P){Oe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Oe.copy(P))}function Ee(P,se){let X=l.get(se);X===void 0&&(X=new WeakMap,l.set(se,X));let ie=X.get(P);ie===void 0&&(ie=i.getUniformBlockIndex(se,P.name),X.set(P,ie))}function we(P,se){const ie=l.get(se).get(P);c.get(se)!==ie&&(i.uniformBlockBinding(se,ie,P.__bindingPointIndex),c.set(se,ie))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},de=null,he={},d={},g=new WeakMap,x=[],y=null,m=!1,f=null,w=null,C=null,S=null,T=null,E=null,R=null,v=new ze(0,0,0),b=0,U=!1,D=null,N=null,Y=null,J=null,B=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:te,disable:Re,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:nt,setBlending:We,setMaterial:ke,setFlipSided:it,setCullFace:rt,setLineWidth:lt,setPolygonOffset:pt,setScissorTest:Ze,activeTexture:at,bindTexture:L,unbindTexture:vt,compressedTexImage2D:Xe,compressedTexImage3D:M,texImage2D:W,texImage3D:$,pixelStorei:ue,getParameter:ae,updateUBOMapping:Ee,uniformBlockBinding:we,texStorage2D:ne,texStorage3D:le,texSubImage2D:h,texSubImage3D:A,compressedTexSubImage2D:F,compressedTexSubImage3D:V,scissor:ee,viewport:oe,reset:De}}function Pp(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,u=new WeakMap,p=new Set;let d;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,h){return x?new OffscreenCanvas(M,h):pr("canvas")}function m(M,h,A){let F=1;const V=Xe(M);if((V.width>A||V.height>A)&&(F=A/Math.max(V.width,V.height)),F<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ne=Math.floor(F*V.width),le=Math.floor(F*V.height);d===void 0&&(d=y(ne,le));const W=h?y(ne,le):d;return W.width=ne,W.height=le,W.getContext("2d").drawImage(M,0,0,ne,le),Ce("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+ne+"x"+le+")."),W}else return"data"in M&&Ce("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),M;return M}function f(M){return M.generateMipmaps}function w(M){i.generateMipmap(M)}function C(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(M,h,A,F,V,ne=!1){if(M!==null){if(i[M]!==void 0)return i[M];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let le;F&&(le=e.get("EXT_texture_norm16"),le||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=h;if(h===i.RED&&(A===i.FLOAT&&(W=i.R32F),A===i.HALF_FLOAT&&(W=i.R16F),A===i.UNSIGNED_BYTE&&(W=i.R8),A===i.UNSIGNED_SHORT&&le&&(W=le.R16_EXT),A===i.SHORT&&le&&(W=le.R16_SNORM_EXT)),h===i.RED_INTEGER&&(A===i.UNSIGNED_BYTE&&(W=i.R8UI),A===i.UNSIGNED_SHORT&&(W=i.R16UI),A===i.UNSIGNED_INT&&(W=i.R32UI),A===i.BYTE&&(W=i.R8I),A===i.SHORT&&(W=i.R16I),A===i.INT&&(W=i.R32I)),h===i.RG&&(A===i.FLOAT&&(W=i.RG32F),A===i.HALF_FLOAT&&(W=i.RG16F),A===i.UNSIGNED_BYTE&&(W=i.RG8),A===i.UNSIGNED_SHORT&&le&&(W=le.RG16_EXT),A===i.SHORT&&le&&(W=le.RG16_SNORM_EXT)),h===i.RG_INTEGER&&(A===i.UNSIGNED_BYTE&&(W=i.RG8UI),A===i.UNSIGNED_SHORT&&(W=i.RG16UI),A===i.UNSIGNED_INT&&(W=i.RG32UI),A===i.BYTE&&(W=i.RG8I),A===i.SHORT&&(W=i.RG16I),A===i.INT&&(W=i.RG32I)),h===i.RGB_INTEGER&&(A===i.UNSIGNED_BYTE&&(W=i.RGB8UI),A===i.UNSIGNED_SHORT&&(W=i.RGB16UI),A===i.UNSIGNED_INT&&(W=i.RGB32UI),A===i.BYTE&&(W=i.RGB8I),A===i.SHORT&&(W=i.RGB16I),A===i.INT&&(W=i.RGB32I)),h===i.RGBA_INTEGER&&(A===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),A===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),A===i.UNSIGNED_INT&&(W=i.RGBA32UI),A===i.BYTE&&(W=i.RGBA8I),A===i.SHORT&&(W=i.RGBA16I),A===i.INT&&(W=i.RGBA32I)),h===i.RGB&&(A===i.UNSIGNED_SHORT&&le&&(W=le.RGB16_EXT),A===i.SHORT&&le&&(W=le.RGB16_SNORM_EXT),A===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),A===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),h===i.RGBA){const $=ne?hr:Ge.getTransfer(V);A===i.FLOAT&&(W=i.RGBA32F),A===i.HALF_FLOAT&&(W=i.RGBA16F),A===i.UNSIGNED_BYTE&&(W=$===$e?i.SRGB8_ALPHA8:i.RGBA8),A===i.UNSIGNED_SHORT&&le&&(W=le.RGBA16_EXT),A===i.SHORT&&le&&(W=le.RGBA16_SNORM_EXT),A===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),A===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function T(M,h){let A;return M?h===null||h===nn||h===Ei?A=i.DEPTH24_STENCIL8:h===Qt?A=i.DEPTH32F_STENCIL8:h===bi&&(A=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===nn||h===Ei?A=i.DEPTH_COMPONENT24:h===Qt?A=i.DEPTH_COMPONENT32F:h===bi&&(A=i.DEPTH_COMPONENT16),A}function E(M,h){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==xt&&M.minFilter!==Et?Math.log2(Math.max(h.width,h.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?h.mipmaps.length:1}function R(M){const h=M.target;h.removeEventListener("dispose",R),b(h),h.isVideoTexture&&u.delete(h),h.isHTMLTexture&&p.delete(h)}function v(M){const h=M.target;h.removeEventListener("dispose",v),D(h)}function b(M){const h=n.get(M);if(h.__webglInit===void 0)return;const A=M.source,F=g.get(A);if(F){const V=F[h.__cacheKey];V.usedTimes--,V.usedTimes===0&&U(M),Object.keys(F).length===0&&g.delete(A)}n.remove(M)}function U(M){const h=n.get(M);i.deleteTexture(h.__webglTexture);const A=M.source,F=g.get(A);delete F[h.__cacheKey],s.memory.textures--}function D(M){const h=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(h.__webglFramebuffer[F]))for(let V=0;V<h.__webglFramebuffer[F].length;V++)i.deleteFramebuffer(h.__webglFramebuffer[F][V]);else i.deleteFramebuffer(h.__webglFramebuffer[F]);h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer[F])}else{if(Array.isArray(h.__webglFramebuffer))for(let F=0;F<h.__webglFramebuffer.length;F++)i.deleteFramebuffer(h.__webglFramebuffer[F]);else i.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&i.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let F=0;F<h.__webglColorRenderbuffer.length;F++)h.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(h.__webglColorRenderbuffer[F]);h.__webglDepthRenderbuffer&&i.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const A=M.textures;for(let F=0,V=A.length;F<V;F++){const ne=n.get(A[F]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),s.memory.textures--),n.remove(A[F])}n.remove(M)}let N=0;function Y(){N=0}function J(){return N}function B(M){N=M}function q(){const M=N;return M>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),N+=1,M}function G(M){const h=[];return h.push(M.wrapS),h.push(M.wrapT),h.push(M.wrapR||0),h.push(M.magFilter),h.push(M.minFilter),h.push(M.anisotropy),h.push(M.internalFormat),h.push(M.format),h.push(M.type),h.push(M.generateMipmaps),h.push(M.premultiplyAlpha),h.push(M.flipY),h.push(M.unpackAlignment),h.push(M.colorSpace),h.join()}function Z(M,h){const A=n.get(M);if(M.isVideoTexture&&L(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&A.__version!==M.version){const F=M.image;if(F===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(A,M,h);return}}else M.isExternalTexture&&(A.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,A.__webglTexture,i.TEXTURE0+h)}function j(M,h){const A=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&A.__version!==M.version){Re(A,M,h);return}else M.isExternalTexture&&(A.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,A.__webglTexture,i.TEXTURE0+h)}function de(M,h){const A=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&A.__version!==M.version){Re(A,M,h);return}t.bindTexture(i.TEXTURE_3D,A.__webglTexture,i.TEXTURE0+h)}function he(M,h){const A=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&A.__version!==M.version){Pe(A,M,h);return}t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+h)}const xe={[ua]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},Be={[xt]:i.NEAREST,[ql]:i.NEAREST_MIPMAP_NEAREST,[Li]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[Er]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Ke={[Kl]:i.NEVER,[ec]:i.ALWAYS,[Zl]:i.LESS,[rs]:i.LEQUAL,[Jl]:i.EQUAL,[as]:i.GEQUAL,[Ql]:i.GREATER,[jl]:i.NOTEQUAL};function Oe(M,h){if(h.type===Qt&&e.has("OES_texture_float_linear")===!1&&(h.magFilter===Et||h.magFilter===Er||h.magFilter===Li||h.magFilter===Bn||h.minFilter===Et||h.minFilter===Er||h.minFilter===Li||h.minFilter===Bn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,xe[h.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,xe[h.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,xe[h.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,Be[h.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,Be[h.minFilter]),h.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Ke[h.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===xt||h.minFilter!==Li&&h.minFilter!==Bn||h.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||n.get(h).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),n.get(h).__currentAnisotropy=h.anisotropy}}}function K(M,h){let A=!1;M.__webglInit===void 0&&(M.__webglInit=!0,h.addEventListener("dispose",R));const F=h.source;let V=g.get(F);V===void 0&&(V={},g.set(F,V));const ne=G(h);if(ne!==M.__cacheKey){V[ne]===void 0&&(V[ne]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,A=!0),V[ne].usedTimes++;const le=V[M.__cacheKey];le!==void 0&&(V[M.__cacheKey].usedTimes--,le.usedTimes===0&&U(h)),M.__cacheKey=ne,M.__webglTexture=V[ne].texture}return A}function re(M,h,A){return Math.floor(Math.floor(M/A)/h)}function te(M,h,A,F){const ne=M.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,h.width,h.height,A,F,h.data);else{ne.sort((ue,ee)=>ue.start-ee.start);let le=0;for(let ue=1;ue<ne.length;ue++){const ee=ne[le],oe=ne[ue],Ee=ee.start+ee.count,we=re(oe.start,h.width,4),De=re(ee.start,h.width,4);oe.start<=Ee+1&&we===De&&re(oe.start+oe.count-1,h.width,4)===we?ee.count=Math.max(ee.count,oe.start+oe.count-ee.start):(++le,ne[le]=oe)}ne.length=le+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,h.width);for(let ue=0,ee=ne.length;ue<ee;ue++){const oe=ne[ue],Ee=Math.floor(oe.start/4),we=Math.ceil(oe.count/4),De=Ee%h.width,P=Math.floor(Ee/h.width),se=we,X=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,De),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,De,P,se,X,A,F,h.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function Re(M,h,A){let F=i.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),h.isData3DTexture&&(F=i.TEXTURE_3D);const V=K(M,h),ne=h.source;t.bindTexture(F,M.__webglTexture,i.TEXTURE0+A);const le=n.get(ne);if(ne.version!==le.__version||V===!0){if(t.activeTexture(i.TEXTURE0+A),(typeof ImageBitmap<"u"&&h.image instanceof ImageBitmap)===!1){const X=Ge.getPrimaries(Ge.workingColorSpace),ie=h.colorSpace===Tn?null:Ge.getPrimaries(h.colorSpace),ce=h.colorSpace===Tn||X===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment);let $=m(h.image,!1,r.maxTextureSize);$=vt(h,$);const ae=a.convert(h.format,h.colorSpace),ue=a.convert(h.type);let ee=S(h.internalFormat,ae,ue,h.normalized,h.colorSpace,h.isVideoTexture);Oe(F,h);let oe;const Ee=h.mipmaps,we=h.isVideoTexture!==!0,De=le.__version===void 0||V===!0,P=ne.dataReady,se=E(h,$);if(h.isDepthTexture)ee=T(h.format===On,h.type),De&&(we?t.texStorage2D(i.TEXTURE_2D,1,ee,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ee,$.width,$.height,0,ae,ue,null));else if(h.isDataTexture)if(Ee.length>0){we&&De&&t.texStorage2D(i.TEXTURE_2D,se,ee,Ee[0].width,Ee[0].height);for(let X=0,ie=Ee.length;X<ie;X++)oe=Ee[X],we?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,oe.width,oe.height,ae,ue,oe.data):t.texImage2D(i.TEXTURE_2D,X,ee,oe.width,oe.height,0,ae,ue,oe.data);h.generateMipmaps=!1}else we?(De&&t.texStorage2D(i.TEXTURE_2D,se,ee,$.width,$.height),P&&te(h,$,ae,ue)):t.texImage2D(i.TEXTURE_2D,0,ee,$.width,$.height,0,ae,ue,$.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){we&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ee,Ee[0].width,Ee[0].height,$.depth);for(let X=0,ie=Ee.length;X<ie;X++)if(oe=Ee[X],h.format!==Vt)if(ae!==null)if(we){if(P)if(h.layerUpdates.size>0){const ce=so(oe.width,oe.height,h.format,h.type);for(const Q of h.layerUpdates){const Me=oe.data.subarray(Q*ce/oe.data.BYTES_PER_ELEMENT,(Q+1)*ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Q,oe.width,oe.height,1,ae,Me)}h.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,oe.width,oe.height,$.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ee,oe.width,oe.height,$.depth,0,oe.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,oe.width,oe.height,$.depth,ae,ue,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ee,oe.width,oe.height,$.depth,0,ae,ue,oe.data)}else{we&&De&&t.texStorage2D(i.TEXTURE_2D,se,ee,Ee[0].width,Ee[0].height);for(let X=0,ie=Ee.length;X<ie;X++)oe=Ee[X],h.format!==Vt?ae!==null?we?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ee,oe.width,oe.height,0,oe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,oe.width,oe.height,ae,ue,oe.data):t.texImage2D(i.TEXTURE_2D,X,ee,oe.width,oe.height,0,ae,ue,oe.data)}else if(h.isDataArrayTexture)if(we){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ee,$.width,$.height,$.depth),P)if(h.layerUpdates.size>0){const X=so($.width,$.height,h.format,h.type);for(const ie of h.layerUpdates){const ce=$.data.subarray(ie*X/$.data.BYTES_PER_ELEMENT,(ie+1)*X/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,$.width,$.height,1,ae,ue,ce)}h.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,ue,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,$.width,$.height,$.depth,0,ae,ue,$.data);else if(h.isData3DTexture)we?(De&&t.texStorage3D(i.TEXTURE_3D,se,ee,$.width,$.height,$.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,ue,$.data)):t.texImage3D(i.TEXTURE_3D,0,ee,$.width,$.height,$.depth,0,ae,ue,$.data);else if(h.isFramebufferTexture){if(De)if(we)t.texStorage2D(i.TEXTURE_2D,se,ee,$.width,$.height);else{let X=$.width,ie=$.height;for(let ce=0;ce<se;ce++)t.texImage2D(i.TEXTURE_2D,ce,ee,X,ie,0,ae,ue,null),X>>=1,ie>>=1}}else if(h.isHTMLTexture){if("texElementImage2D"in i){const X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),$.parentNode!==X){X.appendChild($),p.add(h),X.onpaint=ie=>{const ce=ie.changedElements;for(const Q of p)ce.includes(Q.image)&&(Q.needsUpdate=!0)},X.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{const ce=i.RGBA,Q=i.RGBA,Me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ce,Q,Me,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(we&&De){const X=Xe(Ee[0]);t.texStorage2D(i.TEXTURE_2D,se,ee,X.width,X.height)}for(let X=0,ie=Ee.length;X<ie;X++)oe=Ee[X],we?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ae,ue,oe):t.texImage2D(i.TEXTURE_2D,X,ee,ae,ue,oe);h.generateMipmaps=!1}else if(we){if(De){const X=Xe($);t.texStorage2D(i.TEXTURE_2D,se,ee,X.width,X.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ue,$)}else t.texImage2D(i.TEXTURE_2D,0,ee,ae,ue,$);f(h)&&w(F),le.__version=ne.version,h.onUpdate&&h.onUpdate(h)}M.__version=h.version}function Pe(M,h,A){if(h.image.length!==6)return;const F=K(M,h),V=h.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+A);const ne=n.get(V);if(V.version!==ne.__version||F===!0){t.activeTexture(i.TEXTURE0+A);const le=Ge.getPrimaries(Ge.workingColorSpace),W=h.colorSpace===Tn?null:Ge.getPrimaries(h.colorSpace),$=h.colorSpace===Tn||le===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ae=h.isCompressedTexture||h.image[0].isCompressedTexture,ue=h.image[0]&&h.image[0].isDataTexture,ee=[];for(let Q=0;Q<6;Q++)!ae&&!ue?ee[Q]=m(h.image[Q],!0,r.maxCubemapSize):ee[Q]=ue?h.image[Q].image:h.image[Q],ee[Q]=vt(h,ee[Q]);const oe=ee[0],Ee=a.convert(h.format,h.colorSpace),we=a.convert(h.type),De=S(h.internalFormat,Ee,we,h.normalized,h.colorSpace),P=h.isVideoTexture!==!0,se=ne.__version===void 0||F===!0,X=V.dataReady;let ie=E(h,oe);Oe(i.TEXTURE_CUBE_MAP,h);let ce;if(ae){P&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,De,oe.width,oe.height);for(let Q=0;Q<6;Q++){ce=ee[Q].mipmaps;for(let Me=0;Me<ce.length;Me++){const Se=ce[Me];h.format!==Vt?Ee!==null?P?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,De,Se.width,Se.height,0,Se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Se.width,Se.height,Ee,we,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,De,Se.width,Se.height,0,Ee,we,Se.data)}}}else{if(ce=h.mipmaps,P&&se){ce.length>0&&ie++;const Q=Xe(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,De,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ue){P?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ee[Q].width,ee[Q].height,Ee,we,ee[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,ee[Q].width,ee[Q].height,0,Ee,we,ee[Q].data);for(let Me=0;Me<ce.length;Me++){const ct=ce[Me].image[Q].image;P?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,ct.width,ct.height,Ee,we,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,De,ct.width,ct.height,0,Ee,we,ct.data)}}else{P?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee,we,ee[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,De,Ee,we,ee[Q]);for(let Me=0;Me<ce.length;Me++){const Se=ce[Me];P?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,Ee,we,Se.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,De,Ee,we,Se.image[Q])}}}f(h)&&w(i.TEXTURE_CUBE_MAP),ne.__version=V.version,h.onUpdate&&h.onUpdate(h)}M.__version=h.version}function Ae(M,h,A,F,V,ne){const le=a.convert(A.format,A.colorSpace),W=a.convert(A.type),$=S(A.internalFormat,le,W,A.normalized,A.colorSpace),ae=n.get(h),ue=n.get(A);if(ue.__renderTarget=h,!ae.__hasExternalTextures){const ee=Math.max(1,h.width>>ne),oe=Math.max(1,h.height>>ne);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,ne,$,ee,oe,h.depth,0,le,W,null):t.texImage2D(V,ne,$,ee,oe,0,le,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),at(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,V,ue.__webglTexture,0,Ze(h)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,V,ue.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(M,h,A){if(i.bindRenderbuffer(i.RENDERBUFFER,M),h.depthBuffer){const F=h.depthTexture,V=F&&F.isDepthTexture?F.type:null,ne=T(h.stencilBuffer,V),le=h.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(h),ne,h.width,h.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(h),ne,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,ne,h.width,h.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,M)}else{const F=h.textures;for(let V=0;V<F.length;V++){const ne=F[V],le=a.convert(ne.format,ne.colorSpace),W=a.convert(ne.type),$=S(ne.internalFormat,le,W,ne.normalized,ne.colorSpace);at(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(h),$,h.width,h.height):A?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(h),$,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,$,h.width,h.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(M,h,A){const F=h.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=n.get(h.depthTexture);if(V.__renderTarget=h,(!V.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),F){if(V.__webglInit===void 0&&(V.__webglInit=!0,h.depthTexture.addEventListener("dispose",R)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,h.depthTexture);const ae=a.convert(h.depthTexture.format),ue=a.convert(h.depthTexture.type);let ee;h.depthTexture.format===mn?ee=i.DEPTH_COMPONENT24:h.depthTexture.format===On&&(ee=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ee,h.width,h.height,0,ae,ue,null)}}else Z(h.depthTexture,0);const ne=V.__webglTexture,le=Ze(h),W=F?i.TEXTURE_CUBE_MAP_POSITIVE_X+A:i.TEXTURE_2D,$=h.depthTexture.format===On?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(h.depthTexture.format===mn)at(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,ne,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,ne,0);else if(h.depthTexture.format===On)at(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,ne,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(M){const h=n.get(M),A=M.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==M.depthTexture){const F=M.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),F){const V=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,F.removeEventListener("dispose",V)};F.addEventListener("dispose",V),h.__depthDisposeCallback=V}h.__boundDepthTexture=F}if(M.depthTexture&&!h.__autoAllocateDepthBuffer)if(A)for(let F=0;F<6;F++)ge(h.__webglFramebuffer[F],M,F);else{const F=M.texture.mipmaps;F&&F.length>0?ge(h.__webglFramebuffer[0],M,0):ge(h.__webglFramebuffer,M,0)}else if(A){h.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[F]),h.__webglDepthbuffer[F]===void 0)h.__webglDepthbuffer[F]=i.createRenderbuffer(),nt(h.__webglDepthbuffer[F],M,!1);else{const V=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=h.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,ne)}}else{const F=M.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=i.createRenderbuffer(),nt(h.__webglDepthbuffer,M,!1);else{const V=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=h.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(M,h,A){const F=n.get(M);h!==void 0&&Ae(F.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),A!==void 0&&Ne(M)}function ke(M){const h=M.texture,A=n.get(M),F=n.get(h);M.addEventListener("dispose",v);const V=M.textures,ne=M.isWebGLCubeRenderTarget===!0,le=V.length>1;if(le||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=h.version,s.memory.textures++),ne){A.__webglFramebuffer=[];for(let W=0;W<6;W++)if(h.mipmaps&&h.mipmaps.length>0){A.__webglFramebuffer[W]=[];for(let $=0;$<h.mipmaps.length;$++)A.__webglFramebuffer[W][$]=i.createFramebuffer()}else A.__webglFramebuffer[W]=i.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){A.__webglFramebuffer=[];for(let W=0;W<h.mipmaps.length;W++)A.__webglFramebuffer[W]=i.createFramebuffer()}else A.__webglFramebuffer=i.createFramebuffer();if(le)for(let W=0,$=V.length;W<$;W++){const ae=n.get(V[W]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),s.memory.textures++)}if(M.samples>0&&at(M)===!1){A.__webglMultisampledFramebuffer=i.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let W=0;W<V.length;W++){const $=V[W];A.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,A.__webglColorRenderbuffer[W]);const ae=a.convert($.format,$.colorSpace),ue=a.convert($.type),ee=S($.internalFormat,ae,ue,$.normalized,$.colorSpace,M.isXRRenderTarget===!0),oe=Ze(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ee,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,A.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(A.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(A.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,h);for(let W=0;W<6;W++)if(h.mipmaps&&h.mipmaps.length>0)for(let $=0;$<h.mipmaps.length;$++)Ae(A.__webglFramebuffer[W][$],M,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,$);else Ae(A.__webglFramebuffer[W],M,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(h)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let W=0,$=V.length;W<$;W++){const ae=V[W],ue=n.get(ae);let ee=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ee=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,ue.__webglTexture),Oe(ee,ae),Ae(A.__webglFramebuffer,M,ae,i.COLOR_ATTACHMENT0+W,ee,0),f(ae)&&w(ee)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(W=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,F.__webglTexture),Oe(W,h),h.mipmaps&&h.mipmaps.length>0)for(let $=0;$<h.mipmaps.length;$++)Ae(A.__webglFramebuffer[$],M,h,i.COLOR_ATTACHMENT0,W,$);else Ae(A.__webglFramebuffer,M,h,i.COLOR_ATTACHMENT0,W,0);f(h)&&w(W),t.unbindTexture()}M.depthBuffer&&Ne(M)}function it(M){const h=M.textures;for(let A=0,F=h.length;A<F;A++){const V=h[A];if(f(V)){const ne=C(M),le=n.get(V).__webglTexture;t.bindTexture(ne,le),w(ne),t.unbindTexture()}}}const rt=[],lt=[];function pt(M){if(M.samples>0){if(at(M)===!1){const h=M.textures,A=M.width,F=M.height;let V=i.COLOR_BUFFER_BIT;const ne=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(M),W=h.length>1;if(W)for(let ae=0;ae<h.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const $=M.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ae=0;ae<h.length;ae++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const ue=n.get(h[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,A,F,0,0,A,F,V,i.NEAREST),c===!0&&(rt.length=0,lt.length=0,rt.push(i.COLOR_ATTACHMENT0+ae),M.depthBuffer&&M.resolveDepthBuffer===!1&&(rt.push(ne),lt.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ae=0;ae<h.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const ue=n.get(h[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const h=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[h])}}}function Ze(M){return Math.min(r.maxSamples,M.samples)}function at(M){const h=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function L(M){const h=s.render.frame;u.get(M)!==h&&(u.set(M,h),M.update())}function vt(M,h){const A=M.colorSpace,F=M.format,V=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||A!==fr&&A!==Tn&&(Ge.getTransfer(A)===$e?(F!==Vt||V!==It)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",A)),h}function Xe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.getTextureUnits=J,this.setTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=de,this.setTextureCube=he,this.rebindTextures=We,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dp(i,e){function t(n,r=Tn){let a;const s=Ge.getTransfer(r);if(n===It)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===es)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Go)return i.BYTE;if(n===Ho)return i.SHORT;if(n===bi)return i.UNSIGNED_SHORT;if(n===Qa)return i.INT;if(n===nn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Xo)return i.ALPHA;if(n===qo)return i.RGB;if(n===Vt)return i.RGBA;if(n===mn)return i.DEPTH_COMPONENT;if(n===On)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===ts)return i.RED_INTEGER;if(n===zn)return i.RG;if(n===ns)return i.RG_INTEGER;if(n===is)return i.RGBA_INTEGER;if(n===ar||n===sr||n===or||n===lr)if(s===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===pa||n===ma||n===ga)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ha)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===_a||n===xa||n===Sa||n===Ma||n===dr||n===ya)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===va||n===_a)return s===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===xa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sa)return a.COMPRESSED_R11_EAC;if(n===Ma)return a.COMPRESSED_SIGNED_R11_EAC;if(n===dr)return a.COMPRESSED_RG11_EAC;if(n===ya)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Fa||n===Ua||n===Na)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ba)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return s===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Oa||n===ka)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ba)return s===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Ga||n===ur||n===Ha)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===za)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ur)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ip=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:Lp,fragmentShader:Ip,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Up extends Gn{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,p=null,d=null,g=null,x=null;const y=typeof XRWebGLBinding<"u",m=new Fp,f={},w=t.getContextAttributes();let C=null,S=null;const T=[],E=[],R=new Ve;let v=null;const b=new Lt;b.viewport=new st;const U=new Lt;U.viewport=new st;const D=[b,U],N=new Vc;let Y=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=T[K];return re===void 0&&(re=new Lr,T[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=T[K];return re===void 0&&(re=new Lr,T[K]=re),re.getGripSpace()},this.getHand=function(K){let re=T[K];return re===void 0&&(re=new Lr,T[K]=re),re.getHandSpace()};function B(K){const re=E.indexOf(K.inputSource);if(re===-1)return;const te=T[re];te!==void 0&&(te.update(K.inputSource,K.frame,l||s),te.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",G);for(let K=0;K<T.length;K++){const re=E[K];re!==null&&(E[K]=null,T[K].disconnect(re))}Y=null,J=null,m.reset();for(const K in f)delete f[K];e.setRenderTarget(C),g=null,d=null,p=null,r=null,S=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Re=null,Pe=null;w.depth&&(Pe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=w.stencil?On:mn,Re=w.stencil?Ei:nn);const Ae={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};p=this.getBinding(),d=p.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new tn(d.textureWidth,d.textureHeight,{format:Vt,type:It,depthTexture:new ci(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new tn(g.framebufferWidth,g.framebufferHeight,{format:Vt,type:It,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let re=0;re<K.removed.length;re++){const te=K.removed[re],Re=E.indexOf(te);Re>=0&&(E[Re]=null,T[Re].disconnect(te))}for(let re=0;re<K.added.length;re++){const te=K.added[re];let Re=E.indexOf(te);if(Re===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=E.length){E.push(te),Re=Ae;break}else if(E[Ae]===null){E[Ae]=te,Re=Ae;break}if(Re===-1)break}const Pe=T[Re];Pe&&Pe.connect(te)}}const Z=new z,j=new z;function de(K,re,te){Z.setFromMatrixPosition(re.matrixWorld),j.setFromMatrixPosition(te.matrixWorld);const Re=Z.distanceTo(j),Pe=re.projectionMatrix.elements,Ae=te.projectionMatrix.elements,nt=Pe[14]/(Pe[10]-1),ge=Pe[14]/(Pe[10]+1),Ne=(Pe[9]+1)/Pe[5],We=(Pe[9]-1)/Pe[5],ke=(Pe[8]-1)/Pe[0],it=(Ae[8]+1)/Ae[0],rt=nt*ke,lt=nt*it,pt=Re/(-ke+it),Ze=pt*-ke;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const at=nt+pt,L=ge+pt,vt=rt-Ze,Xe=lt+(Re-Ze),M=Ne*ge/L*at,h=We*ge/L*at;K.projectionMatrix.makePerspective(vt,Xe,M,h,at,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function he(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let re=K.near,te=K.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(te=m.depthFar)),N.near=U.near=b.near=re,N.far=U.far=b.far=te,(Y!==N.near||J!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),Y=N.near,J=N.far),N.layers.mask=K.layers.mask|6,b.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;const Re=K.parent,Pe=N.cameras;he(N,Re);for(let Ae=0;Ae<Pe.length;Ae++)he(Pe[Ae],Re);Pe.length===2?de(N,b,U):N.projectionMatrix.copy(b.projectionMatrix),xe(K,N,Re)};function xe(K,re,te){te===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(te.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Wa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return f[K]};let Be=null;function Ke(K,re){if(u=re.getViewerPose(l||s),x=re,u!==null){const te=u.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Re=!1;te.length!==N.cameras.length&&(N.cameras.length=0,Re=!0);for(let ge=0;ge<te.length;ge++){const Ne=te[ge];let We=null;if(g!==null)We=g.getViewport(Ne);else{const it=p.getViewSubImage(d,Ne);We=it.viewport,ge===0&&(e.setRenderTargetTextures(S,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(S))}let ke=D[ge];ke===void 0&&(ke=new Lt,ke.layers.enable(ge),ke.viewport=new st,D[ge]=ke),ke.matrix.fromArray(Ne.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ne.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(We.x,We.y,We.width,We.height),ge===0&&(N.matrix.copy(ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Re===!0&&N.cameras.push(ke)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){p=n.getBinding();const ge=p.getDepthInformation(te[0]);ge&&ge.isValid&&ge.texture&&m.init(ge,r.renderState)}if(Pe&&Pe.includes("camera-access")&&y){e.state.unbindTexture(),p=n.getBinding();for(let ge=0;ge<te.length;ge++){const Ne=te[ge].camera;if(Ne){let We=f[Ne];We||(We=new nl,f[Ne]=We);const ke=p.getCameraImage(Ne);We.sourceTexture=ke}}}}for(let te=0;te<T.length;te++){const Re=E[te],Pe=T[te];Re!==null&&Pe!==void 0&&Pe.update(Re,re,l||s)}Be&&Be(K,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}const Oe=new sl;Oe.setAnimationLoop(Ke),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}}const Np=new ot,hl=new Le;hl.set(-1,0,0,0,1,0,0,0,1);function Bp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,il(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,C,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),p(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,S)):f.isMeshMatcapMaterial?(a(m,f),x(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),y(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,w,C):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),C=w.envMap,S=w.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Np.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hl),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Op(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const E=T.program;n.uniformBlockBinding(S,E)}function l(S,T){let E=r[S.id];E===void 0&&(m(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",w));const R=T.program;n.updateUBOMapping(S,R);const v=e.render.frame;a[S.id]!==v&&(d(S),a[S.id]=v)}function u(S){const T=p();S.__bindingPointIndex=T;const E=i.createBuffer(),R=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function p(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=r[S.id],E=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let v=0,b=E.length;v<b;v++){const U=E[v];if(Array.isArray(U))for(let D=0,N=U.length;D<N;D++)g(U[D],v,D,R);else g(U,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,T,E,R){if(y(S,T,E,R)===!0){const v=S.__offset,b=S.value;if(Array.isArray(b)){let U=0;for(let D=0;D<b.length;D++){const N=b[D],Y=f(N);x(N,S.__data,U),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function x(S,T,E){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,E)}function y(S,T,E,R){const v=S.value,b=T+"_"+E;if(R[b]===void 0)return typeof v=="number"||typeof v=="boolean"?R[b]=v:ArrayBuffer.isView(v)?R[b]=v.slice():R[b]=v.clone(),!0;{const U=R[b];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return R[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(U.equals(v)===!1)return U.copy(v),!0}}return!1}function m(S){const T=S.uniforms;let E=0;const R=16;for(let b=0,U=T.length;b<U;b++){const D=Array.isArray(T[b])?T[b]:[T[b]];for(let N=0,Y=D.length;N<Y;N++){const J=D[N],B=Array.isArray(J.value)?J.value:[J.value];for(let q=0,G=B.length;q<G;q++){const Z=B[q],j=f(Z),de=E%R,he=de%j.boundary,xe=de+he;E+=he,xe!==0&&R-xe<j.storage&&(E+=R-xe),J.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=E,E+=j.storage}}}const v=E%R;return v>0&&(E+=R-v),S.__size=E,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",S),T}function w(S){const T=S.target;T.removeEventListener("dispose",w);const E=s.indexOf(T.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete a[T.id]}function C(){for(const S in r)i.deleteBuffer(r[S]);s=[],r={},a={}}return{bind:c,update:l,dispose:C}}const kp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kt=null;function zp(){return Kt===null&&(Kt=new Tc(kp,16,16,zn,pn),Kt.name="DFG_LUT",Kt.minFilter=Et,Kt.magFilter=Et,Kt.wrapS=dn,Kt.wrapT=dn,Kt.generateMipmaps=!1,Kt.needsUpdate=!0),Kt}class Gp{constructor(e={}){const{canvas:t=nc(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=It}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;const y=g,m=new Set([is,ns,ts]),f=new Set([It,nn,bi,Ei,ja,es]),w=new Uint32Array(4),C=new Int32Array(4),S=new z;let T=null,E=null;const R=[],v=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let D=!1,N=null,Y=null,J=null,B=null;this._outputColorSpace=Nt;let q=0,G=0,Z=null,j=-1,de=null;const he=new st,xe=new st;let Be=null;const Ke=new ze(0);let Oe=0,K=t.width,re=t.height,te=1,Re=null,Pe=null;const Ae=new st(0,0,K,re),nt=new st(0,0,K,re);let ge=!1;const Ne=new cs;let We=!1,ke=!1;const it=new ot,rt=new z,lt=new st,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function at(){return Z===null?te:1}let L=n;function vt(_,I){return t.getContext(_,I)}try{const _={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),L===null){const I="webgl2";if(L=vt(I,_),L===null)throw vt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(_){throw Ye("WebGLRenderer: "+_.message),_}let Xe,M,h,A,F,V,ne,le,W,$,ae,ue,ee,oe,Ee,we,De,P,se,X,ie,ce,Q;function Me(){Xe=new zf(L),Xe.init(),ie=new Dp(L,Xe),M=new Lf(L,Xe,e,ie),h=new Cp(L,Xe),M.reversedDepthBuffer&&d&&h.buffers.depth.setReversed(!0),Y=L.createFramebuffer(),J=L.createFramebuffer(),B=L.createFramebuffer(),A=new Vf(L),F=new mp,V=new Pp(L,Xe,h,F,M,ie,A),ne=new kf(U),le=new qc(L),ce=new Pf(L,le),W=new Gf(L,le,A,ce),$=new Xf(L,W,le,ce,A),P=new Wf(L,M,V),Ee=new If(F),ae=new pp(U,ne,Xe,M,ce,Ee),ue=new Bp(U,F),ee=new vp,oe=new bp(Xe),De=new Cf(U,ne,h,$,x,c),we=new Rp(U,$,M),Q=new Op(L,A,M,h),se=new Df(L,Xe,A),X=new Hf(L,Xe,A),A.programs=ae.programs,U.capabilities=M,U.extensions=Xe,U.properties=F,U.renderLists=ee,U.shadowMap=we,U.state=h,U.info=A}Me(),y!==It&&(b=new Yf(y,t.width,t.height,o,r,a));const Se=new Up(U,L);this.xr=Se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const _=Xe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Xe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(_){_!==void 0&&(te=_,this.setSize(K,re,!1))},this.getSize=function(_){return _.set(K,re)},this.setSize=function(_,I,H=!0){if(Se.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}K=_,re=I,t.width=Math.floor(_*te),t.height=Math.floor(I*te),H===!0&&(t.style.width=_+"px",t.style.height=I+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(K*te,re*te).floor()},this.setDrawingBufferSize=function(_,I,H){K=_,re=I,te=H,t.width=Math.floor(_*H),t.height=Math.floor(I*H),this.setViewport(0,0,_,I)},this.setEffects=function(_){if(y===It){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let I=0;I<_.length;I++)if(_[I].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(he)},this.getViewport=function(_){return _.copy(Ae)},this.setViewport=function(_,I,H,O){_.isVector4?Ae.set(_.x,_.y,_.z,_.w):Ae.set(_,I,H,O),h.viewport(he.copy(Ae).multiplyScalar(te).round())},this.getScissor=function(_){return _.copy(nt)},this.setScissor=function(_,I,H,O){_.isVector4?nt.set(_.x,_.y,_.z,_.w):nt.set(_,I,H,O),h.scissor(xe.copy(nt).multiplyScalar(te).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(_){h.setScissorTest(ge=_)},this.setOpaqueSort=function(_){Re=_},this.setTransparentSort=function(_){Pe=_},this.getClearColor=function(_){return _.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,H=!0){let O=0;if(_){let k=!1;if(Z!==null){const me=Z.texture.format;k=m.has(me)}if(k){const me=Z.texture.type,_e=f.has(me),pe=De.getClearColor(),ye=De.getClearAlpha(),be=pe.r,Ie=pe.g,Ue=pe.b;_e?(w[0]=be,w[1]=Ie,w[2]=Ue,w[3]=ye,L.clearBufferuiv(L.COLOR,0,w)):(C[0]=be,C[1]=Ie,C[2]=Ue,C[3]=ye,L.clearBufferiv(L.COLOR,0,C))}else O|=L.COLOR_BUFFER_BIT}I&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),N=_},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),De.dispose(),ee.dispose(),oe.dispose(),F.dispose(),ne.dispose(),$.dispose(),ce.dispose(),Q.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",_s),Se.removeEventListener("sessionend",xs),Cn.stop()};function ct(_){_.preventDefault(),Fs("WebGLRenderer: Context Lost."),D=!0}function et(){Fs("WebGLRenderer: Context Restored."),D=!1;const _=A.autoReset,I=we.enabled,H=we.autoUpdate,O=we.needsUpdate,k=we.type;Me(),A.autoReset=_,we.enabled=I,we.autoUpdate=H,we.needsUpdate=O,we.type=k}function Xt(_){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function qt(_){const I=_.target;I.removeEventListener("dispose",qt),pl(I)}function pl(_){ml(_),F.remove(_)}function ml(_){const I=F.get(_).programs;I!==void 0&&(I.forEach(function(H){ae.releaseProgram(H)}),_.isShaderMaterial&&ae.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,H,O,k,me){I===null&&(I=pt);const _e=k.isMesh&&k.matrixWorld.determinantAffine()<0,pe=_l(_,I,H,O,k);h.setMaterial(O,_e);let ye=H.index,be=1;if(O.wireframe===!0){if(ye=W.getWireframeAttribute(H),ye===void 0)return;be=2}const Ie=H.drawRange,Ue=H.attributes.position;let Te=Ie.start*be,Je=(Ie.start+Ie.count)*be;me!==null&&(Te=Math.max(Te,me.start*be),Je=Math.min(Je,(me.start+me.count)*be)),ye!==null?(Te=Math.max(Te,0),Je=Math.min(Je,ye.count)):Ue!=null&&(Te=Math.max(Te,0),Je=Math.min(Je,Ue.count));const ut=Je-Te;if(ut<0||ut===1/0)return;ce.setup(k,O,pe,H,ye);let dt,Qe=se;if(ye!==null&&(dt=le.get(ye),Qe=X,Qe.setIndex(dt)),k.isMesh)O.wireframe===!0?(h.setLineWidth(O.wireframeLinewidth*at()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(k.isLine){let Mt=O.linewidth;Mt===void 0&&(Mt=1),h.setLineWidth(Mt*at()),k.isLineSegments?Qe.setMode(L.LINES):k.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else k.isPoints?Qe.setMode(L.POINTS):k.isSprite&&Qe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Mt=k._multiDrawStarts,ve=k._multiDrawCounts,Ct=k._multiDrawCount,qe=ye?le.get(ye).bytesPerElement:1,Ft=F.get(O).currentProgram.getUniforms();for(let Yt=0;Yt<Ct;Yt++)Ft.setValue(L,"_gl_DrawID",Yt),Qe.render(Mt[Yt]/qe,ve[Yt])}else if(k.isInstancedMesh)Qe.renderInstances(Te,ut,k.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ve=Math.min(H.instanceCount,Mt);Qe.renderInstances(Te,ut,ve)}else Qe.render(Te,ut)};function vs(_,I,H){_.transparent===!0&&_.side===Jt&&_.forceSinglePass===!1?(_.side=Rt,_.needsUpdate=!0,Di(_,I,H),_.side=An,_.needsUpdate=!0,Di(_,I,H),_.side=Jt):Di(_,I,H)}this.compile=function(_,I,H=null){H===null&&(H=_),E=oe.get(H),E.init(I),v.push(E),H.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),_!==H&&_.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();const O=new Set;return _.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let _e=0;_e<me.length;_e++){const pe=me[_e];vs(pe,H,k),O.add(pe)}else vs(me,H,k),O.add(me)}),E=v.pop(),O},this.compileAsync=function(_,I,H=null){const O=this.compile(_,I,H);return new Promise(k=>{function me(){if(O.forEach(function(_e){F.get(_e).currentProgram.isReady()&&O.delete(_e)}),O.size===0){k(_);return}setTimeout(me,10)}Xe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Sr=null;function gl(_){Sr&&Sr(_)}function _s(){Cn.stop()}function xs(){Cn.start()}const Cn=new sl;Cn.setAnimationLoop(gl),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(_){Sr=_,Se.setAnimationLoop(_),_===null?Cn.stop():Cn.start()},Se.addEventListener("sessionstart",_s),Se.addEventListener("sessionend",xs),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(_,I);const H=Se.enabled===!0&&Se.isPresenting===!0,O=b!==null&&(Z===null||H)&&b.begin(U,Z);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(I),I=Se.getCamera()),_.isScene===!0&&_.onBeforeRender(U,_,I,Z),E=oe.get(_,v.length),E.init(I),E.state.textureUnits=V.getTextureUnits(),v.push(E),it.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ne.setFromProjectionMatrix(it,jt,I.reversedDepth),ke=this.localClippingEnabled,We=Ee.init(this.clippingPlanes,ke),T=ee.get(_,R.length),T.init(),R.push(T),Se.enabled===!0&&Se.isPresenting===!0){const _e=U.xr.getDepthSensingMesh();_e!==null&&Mr(_e,I,-1/0,U.sortObjects)}Mr(_,I,0,U.sortObjects),T.finish(),U.sortObjects===!0&&T.sort(Re,Pe,I.reversedDepth),Ze=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ze&&De.addToRenderList(T,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Ee.beginShadows();const k=E.state.shadowsArray;if(we.render(k,_,I),We===!0&&Ee.endShadows(),(O&&b.hasRenderPass())===!1){const _e=T.opaque,pe=T.transmissive;if(E.setupLights(),I.isArrayCamera){const ye=I.cameras;if(pe.length>0)for(let be=0,Ie=ye.length;be<Ie;be++){const Ue=ye[be];Ms(_e,pe,_,Ue)}Ze&&De.render(_);for(let be=0,Ie=ye.length;be<Ie;be++){const Ue=ye[be];Ss(T,_,Ue,Ue.viewport)}}else pe.length>0&&Ms(_e,pe,_,I),Ze&&De.render(_),Ss(T,_,I)}Z!==null&&G===0&&(V.updateMultisampleRenderTarget(Z),V.updateRenderTargetMipmap(Z)),O&&b.end(U),_.isScene===!0&&_.onAfterRender(U,_,I),ce.resetDefaultState(),j=-1,de=null,v.pop(),v.length>0?(E=v[v.length-1],V.setTextureUnits(E.state.textureUnits),We===!0&&Ee.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,N!==null&&N.renderEnd()};function Mr(_,I,H,O){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)H=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLightProbeGrid)E.pushLightProbeGrid(_);else if(_.isLight)E.pushLight(_),_.castShadow&&E.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ne.intersectsSprite(_)){O&&lt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const _e=$.update(_),pe=_.material;pe.visible&&T.push(_,_e,pe,H,lt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ne.intersectsObject(_))){const _e=$.update(_),pe=_.material;if(O&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),lt.copy(_.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),lt.copy(_e.boundingSphere.center)),lt.applyMatrix4(_.matrixWorld).applyMatrix4(it)),Array.isArray(pe)){const ye=_e.groups;for(let be=0,Ie=ye.length;be<Ie;be++){const Ue=ye[be],Te=pe[Ue.materialIndex];Te&&Te.visible&&T.push(_,_e,Te,H,lt.z,Ue)}}else pe.visible&&T.push(_,_e,pe,H,lt.z,null)}}const me=_.children;for(let _e=0,pe=me.length;_e<pe;_e++)Mr(me[_e],I,H,O)}function Ss(_,I,H,O){const{opaque:k,transmissive:me,transparent:_e}=_;E.setupLightsView(H),We===!0&&Ee.setGlobalState(U.clippingPlanes,H),O&&h.viewport(he.copy(O)),k.length>0&&Pi(k,I,H),me.length>0&&Pi(me,I,H),_e.length>0&&Pi(_e,I,H),h.buffers.depth.setTest(!0),h.buffers.depth.setMask(!0),h.buffers.color.setMask(!0),h.setPolygonOffset(!1)}function Ms(_,I,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){const Te=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new tn(1,1,{generateMipmaps:!0,type:Te?pn:It,minFilter:Bn,samples:Math.max(4,M.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const me=E.state.transmissionRenderTarget[O.id],_e=O.viewport||he;me.setSize(_e.z*U.transmissionResolutionScale,_e.w*U.transmissionResolutionScale);const pe=U.getRenderTarget(),ye=U.getActiveCubeFace(),be=U.getActiveMipmapLevel();U.setRenderTarget(me),U.getClearColor(Ke),Oe=U.getClearAlpha(),Oe<1&&U.setClearColor(16777215,.5),U.clear(),Ze&&De.render(H);const Ie=U.toneMapping;U.toneMapping=en;const Ue=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),We===!0&&Ee.setGlobalState(U.clippingPlanes,O),Pi(_,H,O),V.updateMultisampleRenderTarget(me),V.updateRenderTargetMipmap(me),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Je=0,ut=I.length;Je<ut;Je++){const dt=I[Je],{object:Qe,geometry:Mt,material:ve,group:Ct}=dt;if(ve.side===Jt&&Qe.layers.test(O.layers)){const qe=ve.side;ve.side=Rt,ve.needsUpdate=!0,ys(Qe,H,O,Mt,ve,Ct),ve.side=qe,ve.needsUpdate=!0,Te=!0}}Te===!0&&(V.updateMultisampleRenderTarget(me),V.updateRenderTargetMipmap(me))}U.setRenderTarget(pe,ye,be),U.setClearColor(Ke,Oe),Ue!==void 0&&(O.viewport=Ue),U.toneMapping=Ie}function Pi(_,I,H){const O=I.isScene===!0?I.overrideMaterial:null;for(let k=0,me=_.length;k<me;k++){const _e=_[k],{object:pe,geometry:ye,group:be}=_e;let Ie=_e.material;Ie.allowOverride===!0&&O!==null&&(Ie=O),pe.layers.test(H.layers)&&ys(pe,I,H,ye,Ie,be)}}function ys(_,I,H,O,k,me){_.onBeforeRender(U,I,H,O,k,me),_.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),k.onBeforeRender(U,I,H,O,_,me),k.transparent===!0&&k.side===Jt&&k.forceSinglePass===!1?(k.side=Rt,k.needsUpdate=!0,U.renderBufferDirect(H,I,O,k,_,me),k.side=An,k.needsUpdate=!0,U.renderBufferDirect(H,I,O,k,_,me),k.side=Jt):U.renderBufferDirect(H,I,O,k,_,me),_.onAfterRender(U,I,H,O,k,me)}function Di(_,I,H){I.isScene!==!0&&(I=pt);const O=F.get(_),k=E.state.lights,me=E.state.shadowsArray,_e=k.state.version,pe=ae.getParameters(_,k.state,me,I,H,E.state.lightProbeGridArray),ye=ae.getProgramCacheKey(pe);let be=O.programs;O.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;O.envMap=ne.get(_.envMap||O.environment,Ie),O.envMapRotation=O.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,be===void 0&&(_.addEventListener("dispose",qt),be=new Map,O.programs=be);let Ue=be.get(ye);if(Ue!==void 0){if(O.currentProgram===Ue&&O.lightsStateVersion===_e)return Es(_,pe),Ue}else pe.uniforms=ae.getUniforms(_),N!==null&&_.isNodeMaterial&&N.build(_,H,pe),_.onBeforeCompile(pe,U),Ue=ae.acquireProgram(pe,ye),be.set(ye,Ue),O.uniforms=pe.uniforms;const Te=O.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Te.clippingPlanes=Ee.uniform),Es(_,pe),O.needsLights=Sl(_),O.lightsStateVersion=_e,O.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),O.lightProbeGrid=E.state.lightProbeGridArray.length>0,O.currentProgram=Ue,O.uniformsList=null,Ue}function bs(_){if(_.uniformsList===null){const I=_.currentProgram.getUniforms();_.uniformsList=cr.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function Es(_,I){const H=F.get(_);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function vl(_,I){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let H=0,O=_.length;H<O;H++){const k=_[H];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function _l(_,I,H,O,k){I.isScene!==!0&&(I=pt),V.resetTextureUnits();const me=I.fog,_e=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,pe=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ge.workingColorSpace,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,be=ne.get(O.envMap||_e,ye),Ie=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color;let dt=en;O.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(dt=U.toneMapping);const Qe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Mt=Qe!==void 0?Qe.length:0,ve=F.get(O),Ct=E.state.lights;if(We===!0&&(ke===!0||_!==de)){const tt=_===de&&O.id===j;Ee.setState(O,_,tt)}let qe=!1;O.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ct.state.version||ve.outputColorSpace!==pe||k.isBatchedMesh&&ve.batching===!1||!k.isBatchedMesh&&ve.batching===!0||k.isBatchedMesh&&ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ve.instancing===!1||!k.isInstancedMesh&&ve.instancing===!0||k.isSkinnedMesh&&ve.skinning===!1||!k.isSkinnedMesh&&ve.skinning===!0||k.isInstancedMesh&&ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ve.instancingMorph===!1&&k.morphTexture!==null||ve.envMap!==be||O.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ee.numPlanes||ve.numIntersection!==Ee.numIntersection)||ve.vertexAlphas!==Ie||ve.vertexTangents!==Ue||ve.morphTargets!==Te||ve.morphNormals!==Je||ve.morphColors!==ut||ve.toneMapping!==dt||ve.morphTargetsCount!==Mt||!!ve.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ve.__version=O.version);let Ft=ve.currentProgram;qe===!0&&(Ft=Di(O,I,k),N&&O.isNodeMaterial&&N.onUpdateProgram(O,Ft,ve));let Yt=!1,gn=!1,Hn=!1;const je=Ft.getUniforms(),ft=ve.uniforms;if(h.useProgram(Ft.program)&&(Yt=!0,gn=!0,Hn=!0),O.id!==j&&(j=O.id,gn=!0),ve.needsLights){const tt=vl(E.state.lightProbeGridArray,k);ve.lightProbeGrid!==tt&&(ve.lightProbeGrid=tt,gn=!0)}if(Yt||de!==_){h.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),je.setValue(L,"projectionMatrix",_.projectionMatrix),je.setValue(L,"viewMatrix",_.matrixWorldInverse);const _n=je.map.cameraPosition;_n!==void 0&&_n.setValue(L,rt.setFromMatrixPosition(_.matrixWorld)),M.logarithmicDepthBuffer&&je.setValue(L,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue(L,"isOrthographic",_.isOrthographicCamera===!0),de!==_&&(de=_,gn=!0,Hn=!0)}if(ve.needsLights&&(Ct.state.directionalShadowMap.length>0&&je.setValue(L,"directionalShadowMap",Ct.state.directionalShadowMap,V),Ct.state.spotShadowMap.length>0&&je.setValue(L,"spotShadowMap",Ct.state.spotShadowMap,V),Ct.state.pointShadowMap.length>0&&je.setValue(L,"pointShadowMap",Ct.state.pointShadowMap,V)),k.isSkinnedMesh){je.setOptional(L,k,"bindMatrix"),je.setOptional(L,k,"bindMatrixInverse");const tt=k.skeleton;tt&&(tt.boneTexture===null&&tt.computeBoneTexture(),je.setValue(L,"boneTexture",tt.boneTexture,V))}k.isBatchedMesh&&(je.setOptional(L,k,"batchingTexture"),je.setValue(L,"batchingTexture",k._matricesTexture,V),je.setOptional(L,k,"batchingIdTexture"),je.setValue(L,"batchingIdTexture",k._indirectTexture,V),je.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&je.setValue(L,"batchingColorTexture",k._colorsTexture,V));const vn=H.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&P.update(k,H,Ft),(gn||ve.receiveShadow!==k.receiveShadow)&&(ve.receiveShadow=k.receiveShadow,je.setValue(L,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(ft.envMapIntensity.value=I.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=zp()),gn){if(je.setValue(L,"toneMappingExposure",U.toneMappingExposure),ve.needsLights&&xl(ft,Hn),me&&O.fog===!0&&ue.refreshFogUniforms(ft,me),ue.refreshMaterialUniforms(ft,O,te,re,E.state.transmissionRenderTarget[_.id]),ve.needsLights&&ve.lightProbeGrid){const tt=ve.lightProbeGrid;ft.probesSH.value=tt.texture,ft.probesMin.value.copy(tt.boundingBox.min),ft.probesMax.value.copy(tt.boundingBox.max),ft.probesResolution.value.copy(tt.resolution)}cr.upload(L,bs(ve),ft,V)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(cr.upload(L,bs(ve),ft,V),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue(L,"center",k.center),je.setValue(L,"modelViewMatrix",k.modelViewMatrix),je.setValue(L,"normalMatrix",k.normalMatrix),je.setValue(L,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){const tt=O.uniformsGroups;for(let _n=0,Vn=tt.length;_n<Vn;_n++){const Ts=tt[_n];Q.update(Ts,Ft),Q.bind(Ts,Ft)}}return Ft}function xl(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function Sl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(_,I,H){const O=F.get(_);O.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),F.get(_.texture).__webglTexture=I,F.get(_.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,I){const H=F.get(_);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(_,I=0,H=0){Z=_,q=I,G=H;let O=null,k=!1,me=!1;if(_){const pe=F.get(_);if(pe.__useDefaultFramebuffer!==void 0){h.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),he.copy(_.viewport),xe.copy(_.scissor),Be=_.scissorTest,h.viewport(he),h.scissor(xe),h.setScissorTest(Be),j=-1;return}else if(pe.__webglFramebuffer===void 0)V.setupRenderTarget(_);else if(pe.__hasExternalTextures)V.rebindTextures(_,F.get(_.texture).__webglTexture,F.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Ie=_.depthTexture;if(pe.__boundDepthTexture!==Ie){if(Ie!==null&&F.has(Ie)&&(_.width!==Ie.image.width||_.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(_)}}const ye=_.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(me=!0);const be=F.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(be[I])?O=be[I][H]:O=be[I],k=!0):_.samples>0&&V.useMultisampledRTT(_)===!1?O=F.get(_).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[H]:O=be,he.copy(_.viewport),xe.copy(_.scissor),Be=_.scissorTest}else he.copy(Ae).multiplyScalar(te).floor(),xe.copy(nt).multiplyScalar(te).floor(),Be=ge;if(H!==0&&(O=Y),h.bindFramebuffer(L.FRAMEBUFFER,O)&&h.drawBuffers(_,O),h.viewport(he),h.scissor(xe),h.setScissorTest(Be),k){const pe=F.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,H)}else if(me){const pe=I;for(let ye=0;ye<_.textures.length;ye++){const be=F.get(_.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,be.__webglTexture,H,pe)}}else if(_!==null&&H!==0){const pe=F.get(_.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,H)}j=-1},this.readRenderTargetPixels=function(_,I,H,O,k,me,_e,pe=0){if(!(_&&_.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=F.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){h.bindFramebuffer(L.FRAMEBUFFER,ye);try{const be=_.textures[pe],Ie=be.format,Ue=be.type;if(_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!M.textureFormatReadable(Ie)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable(Ue)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-O&&H>=0&&H<=_.height-k&&L.readPixels(I,H,O,k,ie.convert(Ie),ie.convert(Ue),me)}finally{const be=Z!==null?F.get(Z).__webglFramebuffer:null;h.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(_,I,H,O,k,me,_e,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=F.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye)if(I>=0&&I<=_.width-O&&H>=0&&H<=_.height-k){h.bindFramebuffer(L.FRAMEBUFFER,ye);const be=_.textures[pe],Ie=be.format,Ue=be.type;if(_.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!M.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(I,H,O,k,ie.convert(Ie),ie.convert(Ue),0);const Je=Z!==null?F.get(Z).__webglFramebuffer:null;h.bindFramebuffer(L.FRAMEBUFFER,Je);const ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ic(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(Te),L.deleteSync(ut),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,I=null,H=0){const O=Math.pow(2,-H),k=Math.floor(_.image.width*O),me=Math.floor(_.image.height*O),_e=I!==null?I.x:0,pe=I!==null?I.y:0;V.setTexture2D(_,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,_e,pe,k,me),h.unbindTexture()},this.copyTextureToTexture=function(_,I,H=null,O=null,k=0,me=0){let _e,pe,ye,be,Ie,Ue,Te,Je,ut;const dt=_.isCompressedTexture?_.mipmaps[me]:_.image;if(H!==null)_e=H.max.x-H.min.x,pe=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,be=H.min.x,Ie=H.min.y,Ue=H.isBox3?H.min.z:0;else{const ft=Math.pow(2,-k);_e=Math.floor(dt.width*ft),pe=Math.floor(dt.height*ft),_.isDataArrayTexture?ye=dt.depth:_.isData3DTexture?ye=Math.floor(dt.depth*ft):ye=1,be=0,Ie=0,Ue=0}O!==null?(Te=O.x,Je=O.y,ut=O.z):(Te=0,Je=0,ut=0);const Qe=ie.convert(I.format),Mt=ie.convert(I.type);let ve;I.isData3DTexture?(V.setTexture3D(I,0),ve=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(V.setTexture2DArray(I,0),ve=L.TEXTURE_2D_ARRAY):(V.setTexture2D(I,0),ve=L.TEXTURE_2D),h.activeTexture(L.TEXTURE0),h.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),h.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),h.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Ct=h.getParameter(L.UNPACK_ROW_LENGTH),qe=h.getParameter(L.UNPACK_IMAGE_HEIGHT),Ft=h.getParameter(L.UNPACK_SKIP_PIXELS),Yt=h.getParameter(L.UNPACK_SKIP_ROWS),gn=h.getParameter(L.UNPACK_SKIP_IMAGES);h.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),h.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),h.pixelStorei(L.UNPACK_SKIP_PIXELS,be),h.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),h.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);const Hn=_.isDataArrayTexture||_.isData3DTexture,je=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){const ft=F.get(_),vn=F.get(I),tt=F.get(ft.__renderTarget),_n=F.get(vn.__renderTarget);h.bindFramebuffer(L.READ_FRAMEBUFFER,tt.__webglFramebuffer),h.bindFramebuffer(L.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let Vn=0;Vn<ye;Vn++)Hn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,F.get(_).__webglTexture,k,Ue+Vn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,F.get(I).__webglTexture,me,ut+Vn)),L.blitFramebuffer(be,Ie,_e,pe,Te,Je,_e,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);h.bindFramebuffer(L.READ_FRAMEBUFFER,null),h.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||_.isRenderTargetTexture||F.has(_)){const ft=F.get(_),vn=F.get(I);h.bindFramebuffer(L.READ_FRAMEBUFFER,J),h.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let tt=0;tt<ye;tt++)Hn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.__webglTexture,k,Ue+tt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,k),je?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,me,ut+tt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,me),k!==0?L.blitFramebuffer(be,Ie,_e,pe,Te,Je,_e,pe,L.COLOR_BUFFER_BIT,L.NEAREST):je?L.copyTexSubImage3D(ve,me,Te,Je,ut+tt,be,Ie,_e,pe):L.copyTexSubImage2D(ve,me,Te,Je,be,Ie,_e,pe);h.bindFramebuffer(L.READ_FRAMEBUFFER,null),h.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else je?_.isDataTexture||_.isData3DTexture?L.texSubImage3D(ve,me,Te,Je,ut,_e,pe,ye,Qe,Mt,dt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,me,Te,Je,ut,_e,pe,ye,Qe,dt.data):L.texSubImage3D(ve,me,Te,Je,ut,_e,pe,ye,Qe,Mt,dt):_.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,Te,Je,_e,pe,Qe,Mt,dt.data):_.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,Te,Je,dt.width,dt.height,Qe,dt.data):L.texSubImage2D(L.TEXTURE_2D,me,Te,Je,_e,pe,Qe,Mt,dt);h.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),h.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),h.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),h.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),h.pixelStorei(L.UNPACK_SKIP_IMAGES,gn),me===0&&I.generateMipmaps&&L.generateMipmap(ve),h.unbindTexture()},this.initRenderTarget=function(_){F.get(_).__webglFramebuffer===void 0&&V.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?V.setTextureCube(_,0):_.isData3DTexture?V.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?V.setTexture2DArray(_,0):V.setTexture2D(_,0),h.unbindTexture()},this.resetState=function(){q=0,G=0,Z=null,h.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}function Hp(){const i=document.getElementById("bg-canvas-3d");if(!i)return;try{if(!(i.getContext("webgl2")||i.getContext("webgl")||i.getContext("experimental-webgl")))return console.info("✦ WebGL unavailable. Preserving pure luxury CSS aesthetic without 3D canvas."),i.style.display="none",()=>{}}catch{return i.style.display="none",()=>{}}let e=()=>{};try{let Y=function(){const A=document.createElement("canvas");A.width=64,A.height=64;const F=A.getContext("2d");return F.clearRect(0,0,64,64),F.strokeStyle="#09090B",F.lineWidth=6,F.lineCap="round",F.beginPath(),F.moveTo(32,10),F.lineTo(32,54),F.stroke(),F.beginPath(),F.moveTo(10,32),F.lineTo(54,32),F.stroke(),new Qs(A)},ke=function(A,F){Ne.length>=We&&Ne.shift(),Ne.push({x:A,z:F,radius:0,maxRadius:32,intensity:2.8,decay:.94})},it=function(A){ge.targetX=A.clientX/window.innerWidth*2-1,ge.targetY=-(A.clientY/window.innerHeight)*2+1},rt=function(A){const F=(A.clientX/window.innerWidth*2-1)*32,V=-(A.clientY/window.innerHeight*2-1)*18;ke(F,V)},lt=function(A){if(A.touches.length>0){const F=A.touches[0];ge.targetX=F.clientX/window.innerWidth*2-1,ge.targetY=-(F.clientY/window.innerHeight)*2+1}},L=function(){Ze=requestAnimationFrame(L),at++;const A=pt.getElapsedTime();ge.x+=(ge.targetX-ge.x)*.06,ge.y+=(ge.targetY-ge.y)*.06,ge.prevWorldX=ge.worldX,ge.prevWorldZ=ge.worldZ,ge.worldX=ge.x*34,ge.worldZ=-ge.y*20;const F=ge.worldX-ge.prevWorldX,V=ge.worldZ-ge.prevWorldZ;ge.speed=Math.min(Math.sqrt(F*F+V*V),3.5),y.position.x=ge.worldX,y.position.z=ge.worldZ+10,y.position.y=7+ge.y*3.5,u.position.x=ge.x*3.5,u.position.y=18+ge.y*2.5,u.lookAt(0,-2,0);for(let ue=Ne.length-1;ue>=0;ue--){const ee=Ne[ue];ee.radius+=.8,ee.intensity*=ee.decay,(ee.intensity<.05||ee.radius>ee.maxRadius)&&Ne.splice(ue,1)}const ne=T.attributes.position,le=ne.array,W=Ne.length>0;for(let ue=0;ue<R;ue++){const ee=ue*3,oe=v[ee],Ee=v[ee+1],we=v[ee+2],De=Math.sin(oe*.11+A*1)*Math.cos(we*.13+A*.85)*2,P=Math.sin(oe*.2-A*1.3+we*.16)*1.2;let se=De+P;const X=(oe-ge.worldX)**2+(we-ge.worldZ)**2;if(X<280){const ie=Math.sqrt(X),ce=Math.max(0,1-ie/16.5);se+=Math.sin(ie*.5-A*3.8)*ce*(2.4+ge.speed*1)}if(W)for(let ie=0;ie<Ne.length;ie++){const ce=Ne[ie],Q=Math.hypot(oe-ce.x,we-ce.z),Me=Math.abs(Q-ce.radius);if(Me<5.5){const Se=(1-Me/5.5)*ce.intensity;se+=Math.sin(Me*1.2)*Se*1.4}}le[ee+1]=Ee+se}ne.needsUpdate=!0;const $=j.attributes.position.array;for(let ue=0;ue<Z;ue++){const ee=q[ue];$[ue*3+1]=le[ee*3+1]+.08}j.attributes.position.needsUpdate=!0,at%2===0&&T.computeVertexNormals();const ae=Ke.attributes.position.array;for(let ue=0;ue<Be;ue++){const ee=ue*3;ae[ee+1]+=K[ue],ae[ee+1]>26&&(ae[ee+1]=-4,ae[ee]=(Math.random()-.5)*80,ae[ee+2]=(Math.random()-.5)*55)}Ke.attributes.position.needsUpdate=!0,nt.rotation.y=A*.015,p.render(l,u)},Xe=function(){const A=window.innerWidth,F=window.innerHeight;u.aspect=A/F,u.updateProjectionMatrix(),p.setSize(A,F),p.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),vt&&p.render(l,u)};var t=Y,n=ke,r=it,a=rt,s=lt,o=L,c=Xe;const l=new xc;l.background=new ze(16777215),l.fog=new os(16777215,.016);const u=new Lt(52,window.innerWidth/window.innerHeight,.1,1e3);u.position.set(0,18,38),u.lookAt(0,-2,0);const p=new Gp({canvas:i,antialias:window.devicePixelRatio<=1.5,alpha:!1,powerPreference:"high-performance"});p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),p.toneMapping=Ja,p.toneMappingExposure=1.05;const d=new Gc(16119287,2);l.add(d);const g=new ro(16775148,2.5);g.position.set(25,40,20),l.add(g);const x=new ro(14211296,1.6);x.position.set(-30,-10,-20),l.add(x);const y=new kc(16771276,4,85,1.5);y.position.set(0,10,15),l.add(y);const m=window.innerWidth<768,f=92,w=68,C=m?45:75,S=m?32:50,T=new Ci(f,w,C,S);T.rotateX(-Math.PI/2.25),T.translate(0,-5,0);const E=T.attributes.position,R=E.count,v=new Float32Array(R*3);for(let A=0;A<R*3;A++)v[A]=E.array[A];const b=new Uc({color:16250872,metalness:.12,roughness:.38,wireframe:!1,side:Jt}),U=new Wt(T,b);l.add(U);const D=new ls({color:592139,wireframe:!0,transparent:!0,opacity:.28}),N=new Wt(T,D);N.position.y+=.04,l.add(N);const J=3,B=3,q=[],G=[];for(let A=1;A<S;A+=B)for(let F=1;F<C;F+=J){const V=A*(C+1)+F;q.push(V),G.push(v[V*3],v[V*3+1]+.08,v[V*3+2])}const Z=q.length,j=new Ot;j.setAttribute("position",new Bt(new Float32Array(G),3));const de=Y(),he=new Xa({size:1.5,map:de,transparent:!0,opacity:.65,depthWrite:!1}),xe=new Zs(j,he);l.add(xe);const Be=110,Ke=new Ot,Oe=new Float32Array(Be*3),K=new Float32Array(Be);for(let A=0;A<Be;A++)Oe[A*3]=(Math.random()-.5)*80,Oe[A*3+1]=Math.random()*26-4,Oe[A*3+2]=(Math.random()-.5)*55,K[A]=Math.random()*.012+.004;Ke.setAttribute("position",new Bt(Oe,3));const re=document.createElement("canvas");re.width=32,re.height=32;const te=re.getContext("2d"),Re=te.createRadialGradient(16,16,0,16,16,16);Re.addColorStop(0,"rgba(197, 160, 89, 0.8)"),Re.addColorStop(.5,"rgba(9, 9, 11, 0.25)"),Re.addColorStop(1,"rgba(255, 255, 255, 0)"),te.fillStyle=Re,te.fillRect(0,0,32,32);const Pe=new Qs(re),Ae=new Xa({size:.85,map:Pe,transparent:!0,opacity:.55,depthWrite:!1}),nt=new Zs(Ke,Ae);l.add(nt);const ge={x:0,y:0,targetX:0,targetY:0,worldX:0,worldZ:0,prevWorldX:0,prevWorldZ:0,speed:0},Ne=[],We=3;window.addEventListener("pointermove",it,{passive:!0}),window.addEventListener("pointerdown",rt,{passive:!0}),window.addEventListener("touchmove",lt,{passive:!0});let pt=new Wc,Ze=null,at=0;const vt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;vt?p.render(l,u):L(),window.addEventListener("resize",Xe);const M=A=>{A.preventDefault(),Ze&&cancelAnimationFrame(Ze),console.warn("WebGL context lost. Pausing 3D animation loop.")};i.addEventListener("webglcontextlost",M,!1);const h=()=>{console.info("✦ WebGL context restored. Resuming 3D background."),vt?p.render(l,u):L()};return i.addEventListener("webglcontextrestored",h,!1),e=function(){Ze&&cancelAnimationFrame(Ze),window.removeEventListener("pointermove",it),window.removeEventListener("pointerdown",rt),window.removeEventListener("touchmove",lt),window.removeEventListener("resize",Xe),i.removeEventListener("webglcontextlost",M),i.removeEventListener("webglcontextrestored",h),T.dispose(),b.dispose(),D.dispose(),j.dispose(),he.dispose(),de.dispose(),Ke.dispose(),Ae.dispose(),Pe.dispose(),p.dispose()},e}catch(l){return console.warn("WebGL render pipeline failed gracefully:",l),i&&(i.style.display="none"),()=>{}}}function Vp(){const i=document.getElementById("metrics-root");if(!i)return;const e=[{value:"10x",label:"Faster Than Agencies",sub:"Days, not months of bureaucracy",color:"var(--accent-amber)"},{value:"100",label:"Lighthouse Performance",sub:"Zero CLS, sub-second LCP speed",color:"var(--status-live)"},{value:"48h",label:"Rapid Prototype Window",sub:"Working software in 2 days",color:"var(--accent-gold)"},{value:"100%",label:"Full Source Ownership",sub:"Clean git repository, no lock-in",color:"#09090B"}],t=["Flagship Digital Storefronts","AI SaaS Platforms","Bespoke Portfolio Ateliers","High-Conversion Landing Pages","FinTech Terminals","100/100 Lighthouse Performance","Sub-Second LCP Speed"];i.innerHTML=`
    <div style="border-block: 1px solid #E4E4E7; background: #FAFAFB; padding-block: var(--space-12);">
      <div class="container" style="margin-bottom: var(--space-10);">
        <div class="grid-4 text-center">
          ${e.map(n=>`
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: clamp(1.25rem, 3vw, 2.25rem) clamp(0.75rem, 2vw, 1.5rem);">
                <div style="font-family: var(--font-display); font-size: clamp(2.2rem, 3.8vw, 3.8rem); font-weight: 800; color: ${n.color}; line-height: 1.05; margin-bottom: var(--space-3);">
                  ${n.value}
                </div>
                <div style="font-weight: 700; color: #09090B; font-size: clamp(1.02rem, 1.6vw, 1.18rem); margin-bottom: var(--space-2); letter-spacing: -0.01em; overflow-wrap: break-word;">
                  ${n.label}
                </div>
                <div style="font-size: clamp(0.85rem, 1.2vw, 0.95rem); color: #52525B; font-family: var(--font-body); line-height: 1.5; overflow-wrap: break-word;">
                  ${n.sub}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Kinetic Marquee Ticker -->
      <div class="marquee-container" aria-hidden="true" style="opacity: 0.9; padding-block: var(--space-3); border-top: 1px solid #E4E4E7;">
        <div class="marquee-content">
          ${t.concat(t).map(n=>`
            <span style="font-family: var(--font-mono); font-size: clamp(0.88rem, 1.4vw, 1.02rem); font-weight: 600; color: #52525B; display: inline-flex; align-items: center; gap: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">
              ${n}
              <span style="color: var(--accent-gold); font-size: 1.15rem;">✦</span>
            </span>
          `).join("")}
        </div>
      </div>
    </div>
  `}const ir=[{id:"lumina-ai",title:"Lumina Engine — Autonomous Agent Orchestrator",client:"Lumina Tech (Indiranagar, Bengaluru)",category:"saas",tag:"AI SaaS Platform",deliveryTime:"5 Days",budget:"₹48,000",summary:"High-conversion interactive SaaS console and launch platform for an autonomous multi-agent startup.",fullDescription:"Lumina needed to replace a sluggish overseas agency build before pitching Indian and global venture funds. In a 5-day vibe coding sprint, we designed and shipped an ultra-fast console with kinetic node workflows, zero layout shift, and sub-second load times.",metrics:[{label:"Lighthouse Performance",value:"100/100"},{label:"Demo Signups",value:"+310%"},{label:"Delivery Sprint",value:"5 Days"}],techStack:["Vite","Vanilla ES6","Custom Canvas Shader","Tailored CSS Tokens"],features:["Interactive visual agent workflow simulator","Instant dark/light theme tokens with zero reflow","Sub-50ms interaction response times","Full semantic SEO & dynamic social preview cards"],image:"/showcase/lumina.jpg",accentColor:"#06B6D4",badgeColor:"#0891B2"},{id:"velour-atelier",title:"Velour Fine Jewelry — Luxury D2C Digital Boutique",client:"Velour Jewels (Bandra, Mumbai)",category:"ecom",tag:"Luxury Commerce",deliveryTime:"4 Days",budget:"₹38,000",summary:"Editorial high-jewelry digital boutique featuring 1-click UPI checkout and silky 60fps lookbooks.",fullDescription:"A Bandra-based bespoke diamond & jewelry house wanted to break away from cookie-cutter Shopify themes. We engineered an editorial luxury experience featuring custom jewelry lookbooks, fluid magnification zooms, and Razorpay/UPI instant checkout that boosted conversion rates by 42%.",metrics:[{label:"LCP Page Load",value:"0.38s"},{label:"UPI Checkout Conversion",value:"+42%"},{label:"Turnaround",value:"4 Days"}],techStack:["ES6 Modules","Custom Spring Motion","Razorpay Webhooks","CSS Grid"],features:["Kinetic lookbook video scrubbers","1-Click WhatsApp Concierge booking button","Instant UPI QR and NetBanking checkout integration","Fluid typographic scaling across all screen sizes"],image:"/showcase/velour.jpg",accentColor:"#C5A059",badgeColor:"#B38E46"},{id:"apex-vault",title:"Apex Terminal — FinTech Settlement & Capital Engine",client:"Apex Financial Technologies (BKC, Mumbai)",category:"saas",tag:"FinTech Terminal",deliveryTime:"6 Days",budget:"₹62,000",summary:"Institutional-grade asset terminal with real-time reactive charting, KYC onboarding, and multi-bank rails.",fullDescription:"Apex needed an uncompromising financial terminal that felt as fast as a Bloomberg terminal yet as clean as Apple. Built with pure modular JavaScript and GPU-accelerated CSS animations, delivering real-time telemetry with zero frame drops.",metrics:[{label:"Render Speed",value:"16ms 60fps"},{label:"Active Users",value:"18,500+"},{label:"Shipped In",value:"6 Days"}],techStack:["Canvas 2D API","WebSockets","Modular CSS","RBI KYC Standards"],features:["High-density financial data tables with live filtering","Zero-dependency reactive balance calculator","One-click instant payment verification","Strict security isolation and sanitization"],image:"/showcase/apex.jpg",accentColor:"#10B981",badgeColor:"#059669"},{id:"strata-collective",title:"Strata Architects — Spatial Design Monograph",client:"Strata Studio (Mehrauli, New Delhi)",category:"web",tag:"Architectural Monograph",deliveryTime:"3 Days",budget:"₹28,000",summary:"Minimalist editorial portfolio showcasing architectural monoliths with smooth horizontal galleries.",fullDescription:"A New Delhi luxury architectural practice wanted their website to embody concrete, stone, and negative space. We built an unconventional horizontal gallery with blueprint overlays, custom cursor physics, and ultra-high-resolution progressive WebP image loading.",metrics:[{label:"Bounce Rate",value:"19% (Ultra Low)"},{label:"HNW Client Inquiries",value:"3.8x"},{label:"Sprint Duration",value:"72 Hours"}],techStack:["IntersectionObserver API","Fluid Typography","Custom Cursor","CSS Variables"],features:["Magnetic interactive project pins","Blueprint architectural drawer mode","Zero-CLS responsive image art direction","Direct WhatsApp inquiry drawer"],image:"/showcase/strata.jpg",accentColor:"#D97706",badgeColor:"#B45309"},{id:"kroma-labs",title:"Kroma Labs — Generative AI Video Launchpad",client:"Kroma Labs (HSR Layout, Bengaluru)",category:"landing",tag:"High-Conversion Launch",deliveryTime:"48 Hours",budget:"₹18,500",summary:"Viral waitlist launchpad that captured 34,000 pre-launch registrations in 48 hours.",fullDescription:"Kroma was preparing for a viral Product Hunt and Twitter/X launch and needed a landing page that converted cold traffic into early access users. We engineered an interactive video synthesis simulator with live prompt typing, social proof badges, and instant magic link registration.",metrics:[{label:"Waitlist Captured",value:"34,200+"},{label:"Conversion Rate",value:"39.4%"},{label:"Turnaround",value:"48 Hours"}],techStack:["Vite","Vanilla JS","Local Storage Persistence","Responsive CSS"],features:["Interactive typewriter prompt simulator","Live waitlist queue position calculator","Social share card generator","Sub-300ms global CDN response"],image:"/showcase/kroma.jpg",accentColor:"#8B5CF6",badgeColor:"#7C3AED"},{id:"carepulse-health",title:"CarePulse — Diagnostic Booking & Patient Portal",client:"CarePulse Health (Cyber City, Gurgaon)",category:"web",tag:"Healthcare Web App",deliveryTime:"6 Days",budget:"₹52,000",summary:"Frictionless patient onboarding, doctor discovery directory, and instant appointment booking portal.",fullDescription:"A Gurgaon medical group required a welcoming, hyper-responsive patient booking experience. We eliminated cumbersome multi-page forms in favor of an intelligent, multi-step conversational booking interface with calendar slot syncing and instant WhatsApp appointment reminders.",metrics:[{label:"Booking Dropoff",value:"-68%"},{label:"Patient CSAT",value:"99.1%"},{label:"Turnaround",value:"6 Days"}],techStack:["Vanilla JS","Accessible ARIA Dialogs","Cal API Webhooks","CSS Grid"],features:["Smart date & time slot selection with real-time availability","Interactive symptom triage questionnaire","Strict WCAG 2.1 AAA accessibility compliance","Instant WhatsApp & SMS confirmation integration"],image:"/showcase/carepulse.jpg",accentColor:"#059669",badgeColor:"#047857"}];function Ka(i="all"){const e=document.getElementById("showcase-root");if(!e)return;const t=[{id:"all",label:"All Curated Works"},{id:"saas",label:"AI SaaS & Tech"},{id:"ecom",label:"Luxury E-Commerce"},{id:"web",label:"Custom Web Apps"},{id:"landing",label:"Landing Pages"}],n=i==="all"?ir:ir.filter(o=>o.category===i);e.innerHTML=`
    <section id="work" class="section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">CURATED PORTFOLIO</span>
          </div>
          <h2 style="color: #09090B;">Selected Works & <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: #D4D4D8; text-underline-offset: 6px;">Case Studies</span></h2>
          <p>Every digital product is handcrafted with intentional hierarchy, tailored typography, and sub-second performance. Select a project to inspect the engineering brief.</p>

          <!-- Filter Pills -->
          <div class="filter-tabs" style="margin-top: var(--space-6);" role="tablist" aria-label="Filter Showcase by Category">
            ${t.map(o=>`
              <button 
                class="filter-btn ${o.id===i?"active":""}" 
                data-category="${o.id}"
                role="tab"
                aria-selected="${o.id===i?"true":"false"}"
              >
                ${o.label}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Project Cards Bento Grid with Double-Bezel -->
        <div class="grid-3" id="projects-grid">
          ${n.map(o=>`
            <article class="double-bezel project-card" data-project-id="${o.id}">
              <div class="double-bezel-inner" style="display: flex; flex-direction: column; overflow: hidden;">
                <!-- Real Bespoke Showcase Image Header -->
                <div class="project-card-image-box">
                  <img src="${o.image}" alt="${o.title} interface preview" class="project-card-image" loading="lazy" />
                  <div class="project-card-image-overlay">
                    <div class="flex items-center justify-between">
                      <span class="status-pill" style="font-size: 0.78rem; background: rgba(255, 255, 255, 0.92); border-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px);">
                        <span style="width: 6px; height: 6px; border-radius: 50%; background-color: ${o.accentColor||"#09090B"}; display: inline-block;"></span>
                        ${o.tag}
                      </span>
                      <span class="status-pill" style="font-size: 0.78rem; color: #09090B; border-color: rgba(255, 255, 255, 0.8); background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(8px);">
                        ⏱ ${o.deliveryTime}
                      </span>
                    </div>

                    <!-- Client Badge with Subtle Hue Indicator -->
                    <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: var(--radius-md); padding: var(--space-2) var(--space-4); border: 1px solid rgba(255, 255, 255, 0.8); box-shadow: var(--shadow-subtle);">
                      <div style="font-family: var(--font-mono); font-size: 0.74rem; color: #71717A; letter-spacing: 0.08em; font-weight: 700;">CLIENT SPEC</div>
                      <div style="font-family: var(--font-body); font-weight: 700; font-size: 0.92rem; color: #09090B;">${o.client}</div>
                    </div>
                  </div>
                </div>

                <!-- Card Body -->
                <div style="padding: var(--card-padding); display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                  <div>
                    <h3 style="font-size: 1.45rem; font-weight: 700; margin-bottom: var(--space-3); line-height: 1.25; color: #09090B;">${o.title}</h3>
                    <p style="font-size: 1.02rem; margin-bottom: var(--space-6); line-height: 1.65; color: #52525B;">${o.summary}</p>

                    <!-- Metrics Badges with Subdued Chromatic Accents -->
                    <div class="flex flex-wrap gap-2" style="margin-bottom: var(--space-8); min-width: 0; max-width: 100%;">
                      ${o.metrics.map(c=>`
                        <span class="project-metric-badge" style="font-family: var(--font-mono); font-size: clamp(0.74rem, 1.2vw, 0.82rem); background: #F4F4F6; border: 1px solid #E4E4E7; padding: 0.3rem clamp(0.45rem, 1.2vw, 0.75rem); border-radius: var(--radius-sm); color: #09090B; max-width: 100%; overflow-wrap: break-word;">
                          <span style="color: #71717A;">${c.label}:</span> <strong style="color: ${o.accentColor||"#09090B"};">${c.value}</strong>
                        </span>
                      `).join("")}
                    </div>
                  </div>

                  <!-- Action Link -->
                  <div style="border-top: 1px solid #E4E4E7; padding-top: var(--space-5);">
                    <button class="btn btn-secondary open-case-study-btn" data-project-id="${o.id}" style="width: 100%; justify-content: center; font-size: 0.98rem; padding: 0.85rem 1.5rem;">
                      <span>Inspect Case Study</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;const r=Array.from(e.querySelectorAll(".filter-btn"));r.forEach((o,c)=>{o.setAttribute("tabindex",o.classList.contains("active")?"0":"-1"),o.addEventListener("click",()=>{const l=o.getAttribute("data-category");Ka(l)}),o.addEventListener("keydown",l=>{let u=null;if(l.key==="ArrowRight"?u=(c+1)%r.length:l.key==="ArrowLeft"&&(u=(c-1+r.length)%r.length),u!==null){l.preventDefault(),r[u].focus();const p=r[u].getAttribute("data-category");Ka(p)}})}),e.querySelectorAll(".open-case-study-btn").forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();const l=o.getAttribute("data-project-id"),u=ir.find(p=>p.id===l);u&&window.openSolonovaProjectModal&&window.openSolonovaProjectModal(u)})}),e.querySelectorAll("article.project-card").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-project-id"),l=ir.find(u=>u.id===c);l&&window.openSolonovaProjectModal&&window.openSolonovaProjectModal(l)}),o.style.cursor="pointer"})}function Wp(){const i=document.getElementById("process-root");if(!i)return;const e=[{num:"01",title:"Discovery & Creative Spec",timeline:"Day 1",description:"A focused 30-minute kickoff to define your exact brand identity, conversion metrics, and architecture requirements — with zero corporate bloat.",deliverable:"Product Blueprint & Style Moodboard"},{num:"02",title:"Agentic Vibe Coding",timeline:"Day 2 - 3",description:"Leveraging modular front-end architecture and agentic AI tools, we build production-ready components, responsive layouts, and state at 10x velocity.",deliverable:"Live Interactive Staging URL"},{num:"03",title:"Impeccable Polish & TDD",timeline:"Day 4",description:"Auditing every breakpoint against strict design standards: tailored typography, fluid spring transitions, zero CLS shifts, and 100/100 Lighthouse speed.",deliverable:"100/100 Lighthouse & Cross-Device Audit"},{num:"04",title:"Global Edge Launch",timeline:"Day 5",description:"Zero-downtime deployment to global Edge CDNs (Vercel / Cloudflare). You receive 100% source code ownership and clean Git version history.",deliverable:"Production Domain Live + Clean Git Repo"}];i.innerHTML=`
    <section id="process" class="section" style="background: #FAFAFB; border-block: 1px solid #E4E4E7;">
      <div class="container">
        <!-- Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">THE DELIVERY METHODOLOGY</span>
          </div>
          <h2 style="color: #09090B;">From Thought to Shipped in <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: var(--accent-gold); text-underline-offset: 6px;">Days, Not Months</span></h2>
          <p>Traditional agencies treat web design like construction in concrete. Solonova treats it like music: high-frequency improvisation anchored by disciplined engineering.</p>
        </div>

        <!-- Steps Grid -->
        <div class="grid-4">
          ${e.map(t=>`
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: clamp(1.25rem, 3vw, 2.25rem); display: flex; flex-direction: column; justify-content: space-between; position: relative;">
                <div style="font-family: var(--font-display); font-size: clamp(2.4rem, 4vw, 3.4rem); font-weight: 800; color: rgba(197, 160, 89, 0.15); position: absolute; top: clamp(0.75rem, 2vw, 1.25rem); right: clamp(0.75rem, 2vw, 1.25rem); line-height: 1; user-select: none; pointer-events: none;">
                  ${t.num}
                </div>

                <div>
                  <span class="status-pill" style="margin-bottom: var(--space-4); font-size: 0.8rem; background: #F4F4F6; color: #09090B; border-color: #D4D4D8;">
                    ${t.timeline}
                  </span>
                  <h3 style="font-size: clamp(1.2rem, 1.8vw, 1.45rem); font-weight: 700; margin-bottom: var(--space-3); line-height: 1.25; color: #09090B; overflow-wrap: break-word;">${t.title}</h3>
                  <p style="font-size: clamp(0.92rem, 1.2vw, 1.02rem); line-height: 1.6; margin-bottom: var(--space-5); color: #52525B; overflow-wrap: break-word;">${t.description}</p>
                </div>

                <div style="border-top: 1px solid #E4E4E7; padding-top: var(--space-4); font-size: clamp(0.84rem, 1.1vw, 0.92rem); font-family: var(--font-mono); color: #09090B; overflow-wrap: break-word;">
                  <strong style="color: var(--accent-amber);">Deliverable:</strong> ${t.deliverable}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}const Do=[{factor:"Delivery Timeline",traditional:"6 to 12 Weeks (Endless committee meetings and delayed review cycles)",solonova:"48 Hours to 7 Business Days (Shipped at 10x velocity through focused vibe coding)",winner:"solonova"},{factor:"Direct Communication",traditional:"Account managers & junior coordinators playing telephone on WhatsApp groups",solonova:"Direct 1-on-1 access to the founder and lead engineer",winner:"solonova"},{factor:"Pricing & Transparency",traditional:"₹1.5 Lakhs - ₹5 Lakhs+ (Inflated agency retainers, hidden hosting markups)",solonova:"Transparent milestone pricing from ₹14,999. 50% deposit, 50% on verified launch.",winner:"solonova"},{factor:"Design Quality & Aesthetics",traditional:"Recycled WordPress/Elementor templates passed between junior interns",solonova:"Bespoke Double-Bezel luxury craft, high-contrast serif typography & spring physics",winner:"solonova"},{factor:"Performance & Speed",traditional:"Heavy plugin bloat, 35-50 Lighthouse score, 3s+ mobile load times on 4G/5G",solonova:"Sub-second LCP, zero CLS shifts, 100/100 Lighthouse benchmark guaranteed",winner:"solonova"},{factor:"Payment & Code Ownership",traditional:"Proprietary CMS lock-in, recurring maintenance fees, withheld credentials",solonova:"Instant UPI/Razorpay payment rails & 100% full GitHub repository ownership",winner:"solonova"}];function Xp(){const i=document.getElementById("comparison-root");i&&(i.innerHTML=`
    <section id="comparison" class="section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">WHY SOLONOVA PREVAILS</span>
          </div>
          <h2 style="color: #09090B;">Traditional Agency vs. <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: var(--accent-gold); text-underline-offset: 6px;">Solo Digital Atelier</span></h2>
          <p>Why fund agency office leases, account coordinators, and bloated weekly meetings when you can collaborate directly with a high-velocity master craftsman?</p>
        </div>

        <!-- Comparison Matrix: Responsive Desktop Table & Mobile Stacked Bars -->
        <div class="double-bezel">
          <div class="double-bezel-inner" style="padding: clamp(1.25rem, 3.5vw, 2.5rem);">
            
            <!-- Desktop / Laptop Matrix View (Visible >= 768px) -->
            <div class="comparison-desktop-matrix">
              <table style="width: 100%; border-collapse: collapse; table-layout: fixed; text-align: left;" aria-label="Traditional Agency vs Solonova Studio Comparison Matrix">
                <thead>
                  <tr style="border-bottom: 2px solid #E4E4E7;">
                    <th scope="col" style="padding: var(--space-4) var(--space-3); font-family: var(--font-mono); font-size: 0.85rem; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; width: 24%;">Dimension</th>
                    <th scope="col" style="padding: var(--space-4) var(--space-4); font-family: var(--font-display); font-size: 1.35rem; color: #DC2626; width: 38%;">Traditional Agency</th>
                    <th scope="col" style="padding: var(--space-4) var(--space-4); font-family: var(--font-display); font-size: 1.35rem; color: #09090B; width: 38%; background: rgba(197, 160, 89, 0.04); border-left: 2px solid var(--accent-gold);">Solonova Studio</th>
                  </tr>
                </thead>
                <tbody>
                  ${Do.map((e,t)=>`
                    <tr style="border-bottom: 1px solid #F4F4F6; background: ${t%2===0?"transparent":"#FAFAFB"};">
                      <th scope="row" style="padding: var(--space-5) var(--space-3); font-weight: 700; color: #09090B; font-size: 1rem; text-align: left; vertical-align: top; overflow-wrap: break-word;">
                        ${e.factor}
                      </th>
                      <td style="padding: var(--space-5) var(--space-4); color: #52525B; font-size: 0.98rem; line-height: 1.6; vertical-align: top; overflow-wrap: break-word;">
                        <span style="color: #DC2626; margin-right: 6px; font-weight: bold; font-size: 1.1rem;">✕</span>
                        ${e.traditional}
                      </td>
                      <td style="padding: var(--space-5) var(--space-4); color: #09090B; font-size: 1rem; line-height: 1.6; font-weight: 600; background: rgba(197, 160, 89, 0.03); border-left: 2px solid var(--accent-gold); vertical-align: top; overflow-wrap: break-word;">
                        <span style="color: var(--status-live); margin-right: 6px; font-weight: bold; font-size: 1.1rem;">✔</span>
                        ${e.solonova}
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            <!-- Mobile & Small Tablet View: Stacked Comparison Div Bars (Visible < 768px) -->
            <div class="comparison-mobile-stack">
              ${Do.map(e=>`
                <div class="comparison-mobile-card" style="background: #FFFFFF; border: 1px solid #E4E4E7; border-radius: var(--radius-md); padding: 1.15rem; margin-bottom: 1.15rem; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                  <div style="font-family: var(--font-mono); font-size: 0.84rem; font-weight: 800; color: #09090B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 8px;">
                    <span class="status-dot-gold" style="width: 7px; height: 7px; flex-shrink: 0;"></span>
                    <span>${e.factor}</span>
                  </div>
                  
                  <!-- Traditional Agency Bar -->
                  <div style="background: #FAFAFB; border: 1px solid #F4F4F6; border-left: 3px solid #DC2626; border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 0.65rem;">
                    <div style="font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: #DC2626; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                      <span>✕</span> Traditional Web Agency
                    </div>
                    <p style="font-size: 0.92rem; color: #52525B; line-height: 1.55; margin: 0; overflow-wrap: break-word;">
                      ${e.traditional}
                    </p>
                  </div>

                  <!-- Solonova Studio Bar -->
                  <div style="background: rgba(197, 160, 89, 0.05); border: 1px solid rgba(197, 160, 89, 0.25); border-left: 3px solid var(--accent-gold); border-radius: var(--radius-sm); padding: 0.85rem 1rem;">
                    <div style="font-family: var(--font-display); font-size: 1.02rem; font-weight: 700; color: #09090B; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                      <span style="color: var(--status-live);">✔</span> Solonova Studio
                    </div>
                    <p style="font-size: 0.94rem; color: #09090B; font-weight: 600; line-height: 1.55; margin: 0; overflow-wrap: break-word;">
                      ${e.solonova}
                    </p>
                  </div>
                </div>
              `).join("")}
            </div>

          </div>
        </div>

        <!-- Founder Guarantee Box — Pitch Black Statement Card with Gold Accent -->
        <div class="double-bezel" style="margin-top: var(--space-10); background: #09090B; border: 1px solid rgba(197, 160, 89, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
          <div class="double-bezel-inner guarantee-card-inner" style="padding: clamp(1.5rem, 3.5vw, 2.5rem); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--space-5); background: #09090B; border-color: #27272A;">
            <div style="max-width: 760px;">
              <h4 style="color: #FFFFFF; margin-bottom: var(--space-2); font-size: clamp(1.2rem, 2.5vw, 1.45rem); font-weight: 700;">
                <span style="color: var(--accent-gold);">✦</span> The Solonova 100% Sprint Delivery Guarantee
              </h4>
              <p style="font-size: clamp(0.95rem, 1.5vw, 1.05rem); margin-bottom: 0; color: #A1A1AA; line-height: 1.65;">If your staging review link is not shipped within the agreed sprint window, or fails to meet the agreed spec, you receive a full refund. Zero financial risk.</p>
            </div>
            <a href="#contact" class="btn btn-secondary btn-lg guarantee-cta-btn" style="background: #FFFFFF; color: #09090B; border-color: #FFFFFF;">
              <span>Claim Sprint Slot</span>
              <span class="btn-icon-circle" style="background: rgba(0, 0, 0, 0.1);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2.6">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `)}function qp(){const i=document.getElementById("calculator-root");if(!i)return;i.innerHTML=`
    <section id="calculator" class="section" style="background: #FAFAFB; border-block: 1px solid #E4E4E7;">
      <div class="container">
        <!-- Header -->
        <div class="section-header text-center">
          <div class="eyebrow">
            <span class="status-dot status-dot-gold"></span>
            <span style="color: #09090B;">TRANSPARENT PRICING // ZERO AGENCY MARKUPS</span>
          </div>
          <h2 style="color: #09090B;">Configure Your Build & <span class="text-italic" style="font-style: italic; text-decoration: underline; text-decoration-color: #D4D4D8; text-underline-offset: 6px;">Instant INR Estimate</span></h2>
          <p>Transparent estimation tailored for Indian startups and businesses. Select your architecture and capabilities below to calculate real-time delivery turnaround and investment in ₹ (INR).</p>
        </div>

        <!-- Calculator Double-Bezel Card -->
        <div class="double-bezel" style="max-width: var(--container-narrow); margin-inline: auto;">
          <div class="double-bezel-inner" style="padding: clamp(1.75rem, 4vw, 3.5rem);">
            <div class="grid-2" style="gap: var(--space-8); align-items: start;">
              <!-- Left: Options Column -->
              <div>
                <!-- 1. Project Base Type -->
                <div class="input-group">
                  <label class="input-label" for="calc-type">1. Select Project Architecture</label>
                  <select id="calc-type" class="select-field" style="font-size: clamp(0.92rem, 1.5vw, 1.05rem); padding: 0.95rem 1.15rem; width: 100%; max-width: 100%; text-overflow: ellipsis;">
                    <option value="14999" data-days="2" data-name="High-Converting 48h Launchpad">High-Converting 48h Launchpad (₹14,999 · 48h Sprint)</option>
                    <option value="28500" data-days="5" data-name="Bespoke Multi-Page Brand Experience" selected>Bespoke Multi-Page Brand Experience (₹28,500 · 5 Days)</option>
                    <option value="54000" data-days="7" data-name="SaaS MVP / Interactive Web App">SaaS MVP / Interactive Web App (₹54,000 · 7 Days)</option>
                    <option value="38000" data-days="6" data-name="Luxury D2C E-Commerce Digital Boutique">Luxury D2C Digital Boutique (₹38,000 · 6 Days)</option>
                  </select>
                </div>

                <!-- 2. Section/Page Count Slider -->
                <div class="input-group" style="margin-top: var(--space-6);">
                  <div class="flex justify-between items-center" style="margin-bottom: var(--space-3);">
                    <label class="input-label" style="margin-bottom: 0;">2. Scope / Sections Count</label>
                    <span id="page-count-val" style="font-family: var(--font-mono); font-weight: 800; color: #09090B; font-size: 1.05rem;">5 Sections</span>
                  </div>
                  <input type="range" id="calc-pages" class="custom-range" min="1" max="10" value="5" step="1" aria-label="Scope or sections count" aria-valuemin="1" aria-valuemax="10" aria-valuenow="5" />
                  <div class="flex justify-between" style="font-size: 0.85rem; color: #71717A; margin-top: 6px; font-family: var(--font-mono);">
                    <span>1 Section (Focused)</span>
                    <span>10 Sections (Expansive)</span>
                  </div>
                </div>

                <!-- 3. Add-on Features -->
                <div class="input-group" style="margin-top: var(--space-6);">
                  <label class="input-label">3. Specialized Capabilities</label>
                  <div class="flex flex-col gap-4" style="margin-top: var(--space-3);">
                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="4500" data-feature="Kinetic Motion & Spring Physics" style="accent-color: #09090B; width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="line-height: 1.45; overflow-wrap: break-word;">Kinetic Motion & Awwwards Physics (+ ₹4,500)</span>
                    </label>

                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="3500" data-feature="Custom Interactive Calculator / Lead Tool" style="accent-color: #09090B; width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="line-height: 1.45; overflow-wrap: break-word;">Custom Interactive Calculator / Scoring Tool (+ ₹3,500)</span>
                    </label>

                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="5000" data-feature="UPI & Razorpay Checkout Rails" style="accent-color: #09090B; width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="line-height: 1.45; overflow-wrap: break-word;">Razorpay & UPI 1-Click Payment Gateway (+ ₹5,000)</span>
                    </label>

                    <label class="flex items-start gap-3" style="cursor: pointer; font-size: 0.98rem; color: #09090B;">
                      <input type="checkbox" class="calc-addon" value="4000" data-feature="Ultra-Rush 48h Sprint Priority" style="accent-color: var(--accent-amber); width: 18px; height: 18px; flex-shrink: 0; margin-top: 3px;" />
                      <span style="color: #09090B; font-weight: 700; line-height: 1.45; overflow-wrap: break-word;"><span style="color: var(--accent-amber);">✦</span> Ultra-Rush 48-Hour Priority Guarantee (+ ₹4,000)</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Right: Output Column — High-Contrast Pitch Black Panel with Gold Glow -->
              <div style="background: #09090B; color: #FFFFFF; padding: clamp(1.25rem, 3.5vw, var(--space-8)); border-radius: var(--radius-xl); border: 1px solid #27272A; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div class="status-pill" style="margin-bottom: var(--space-5); background: #18181B; border-color: #27272A; color: #FFFFFF;">
                    <span class="status-dot" style="background-color: var(--status-live);"></span>
                    <span style="letter-spacing: 0.06em;">ESTIMATED SPRINT FEE</span>
                  </div>

                  <div style="margin-bottom: var(--space-5);">
                    <div style="font-family: var(--font-display); font-size: clamp(2.3rem, 5vw, 4rem); font-weight: 800; line-height: 1; background: linear-gradient(135deg, #FFFFFF 50%, var(--accent-gold) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                      <span id="calc-total-price" class="price-counter-anim">₹28,500</span>
                    </div>
                    <div style="font-size: 0.92rem; color: #A1A1AA; margin-top: 8px; line-height: 1.5; overflow-wrap: break-word;">
                      Flat sprint fee. 50% deposit via UPI/Bank, 50% upon verified launch.
                    </div>
                  </div>

                  <!-- Timeline estimate -->
                  <div style="padding: clamp(0.85rem, 2vw, var(--space-5)); background: #18181B; border-radius: var(--radius-md); margin-bottom: var(--space-5); border: 1px solid #27272A;">
                    <div class="flex justify-between items-center" style="margin-bottom: 8px; gap: 8px;">
                      <span style="font-size: 0.92rem; color: #A1A1AA;">Estimated Delivery:</span>
                      <strong id="calc-total-days" style="color: #FFFFFF; font-family: var(--font-mono); font-size: clamp(0.95rem, 1.5vw, 1.05rem);">5 Business Days</strong>
                    </div>
                    <div class="flex justify-between items-center" style="gap: 8px;">
                      <span style="font-size: 0.92rem; color: #A1A1AA;">Performance Guarantee:</span>
                      <strong style="color: #34D399; font-family: var(--font-mono); font-size: clamp(0.95rem, 1.5vw, 1.05rem);">100/100 Lighthouse</strong>
                    </div>
                  </div>

                  <!-- Inclusions list -->
                  <ul style="font-size: 0.92rem; color: #D4D4D8; display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-6);">
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">100% full source code & GitHub repo ownership</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">Direct 1-on-1 access to founder on WhatsApp</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">UPI, GPay, PhonePe, Razorpay & NEFT ready</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span style="color: #34D399; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✔</span> <span style="line-height: 1.45; overflow-wrap: break-word;">14 days post-launch warranty and revisions</span>
                    </li>
                  </ul>
                </div>

                <!-- Lock-in Buttons -->
                <div class="flex flex-col gap-3">
                  <button id="calc-lock-in-btn" class="btn btn-secondary btn-lg" style="width: 100%; background: #FFFFFF; color: #09090B; border-color: #FFFFFF; justify-content: center; padding: clamp(0.85rem, 2vw, 1.15rem) clamp(1rem, 2vw, 1.75rem); white-space: normal;">
                    <span>Lock In Scope & Book Sprint</span>
                    <span class="btn-icon-circle" style="background: rgba(0, 0, 0, 0.08); flex-shrink: 0;">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#09090B" stroke-width="2.6">
                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                      </svg>
                    </span>
                  </button>

                  <a id="calc-whatsapp-btn" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg" style="width: 100%; border-color: #065F46; background: #064E3B; color: #34D399; justify-content: center; padding: clamp(0.85rem, 2vw, 1.15rem) clamp(1rem, 2vw, 1.75rem); white-space: normal;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2.2" style="flex-shrink: 0;">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Chat on WhatsApp with This Scope</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;const e=document.getElementById("calc-type"),t=document.getElementById("calc-pages"),n=document.getElementById("page-count-val"),r=document.querySelectorAll(".calc-addon"),a=document.getElementById("calc-total-price"),s=document.getElementById("calc-total-days"),o=document.getElementById("calc-lock-in-btn"),c=document.getElementById("calc-whatsapp-btn");function l(){let u=parseInt(e.value,10)||14999;const p=e.options[e.selectedIndex];let d=parseInt(p.getAttribute("data-days"),10)||3;const g=parseInt(t.value,10);n.textContent=`${g} Sections`,t.setAttribute("aria-valuenow",g);const x=Math.max(0,g-3),y=x*1500;let m=0,f=!1;r.forEach(T=>{T.checked&&(m+=parseInt(T.value,10),T.getAttribute("data-feature").includes("Rush")&&(f=!0))});let w=u+y+m,C=d+Math.floor(x/2);f&&(C=Math.max(2,C-2)),a&&(a.textContent=`₹${w.toLocaleString("en-IN")}`),s.textContent=`${C} Business Days`;const S={type:p.getAttribute("data-name"),pages:g,total:w,days:C};if(c){const T=encodeURIComponent(`Hi Solonova Studio, I configured this project scope:
- Architecture: ${S.type}
- Scope: ${S.pages} Sections
- Estimated Budget: ₹${S.total.toLocaleString("en-IN")}
- Target Timeline: ${S.days} Days

Let's schedule a pitch call to review wireframes.`);c.href=`https://wa.me/?text=${T}`}return S}e.addEventListener("change",l),t.addEventListener("input",l),r.forEach(u=>u.addEventListener("change",l)),l(),o&&o.addEventListener("click",()=>{const u=l(),p=document.getElementById("contact-message");p&&(p.value=`Hi Solonova Studio, I configured this project scope:
- Architecture: ${u.type}
- Scope: ${u.pages} Sections
- Estimated Budget: ₹${u.total.toLocaleString("en-IN")}
- Target Timeline: ${u.days} Days

Let's schedule a pitch call to review wireframes and lock in the sprint slot.`);const d=document.getElementById("contact");d&&d.scrollIntoView({behavior:"smooth"})})}function Yp(){const i=document.getElementById("modal-root");if(!i)return;i.innerHTML=`
    <div id="project-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
      <div class="modal-content" id="modal-inner">
        <!-- Injected dynamically on open -->
      </div>
    </div>
  `;const e=document.getElementById("project-modal"),t=document.getElementById("modal-inner");let n=null;function r(s){if(!e||!t)return;t.innerHTML=`
      <!-- Header Banner with Full Visual Preview -->
      <div style="position: relative; background: #09090B; border-bottom: 1px solid #E4E4E7; overflow: hidden;">
        <div style="height: clamp(140px, 25vh, 260px); width: 100%; position: relative; overflow: hidden;">
          <img src="${s.image}" alt="${s.title} live interface preview" style="width: 100%; height: 100%; object-fit: cover; object-position: top center; filter: brightness(0.9);" />
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(9, 9, 11, 0.4) 0%, rgba(9, 9, 11, 0.75) 100%);"></div>
        </div>

        <div style="position: absolute; inset: 0; padding: clamp(1rem, 3vw, 2.25rem); display: flex; flex-direction: column; justify-content: space-between; z-index: 2;">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="status-pill" style="background: rgba(255, 255, 255, 0.95); border-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px);">
                <span style="width: 7px; height: 7px; border-radius: 50%; background-color: ${s.accentColor||"#09090B"}; display: inline-block;"></span>
                ${s.tag}
              </span>
              <span class="status-pill" style="color: #09090B; border-color: rgba(255, 255, 255, 0.9); background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px);">
                ⏱ ${s.deliveryTime} Sprint
              </span>
            </div>
            <button id="close-modal-btn" class="btn btn-secondary btn-sm" aria-label="Close Case Study" style="border-radius: 50%; width: 40px; height: 40px; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 1.1rem; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px);">
              ✕
            </button>
          </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #E4E4E7; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px; font-weight: 700;">
                ${s.client}
              </div>
              <h2 id="modal-title" style="font-size: clamp(1.8rem, 3.2vw, 2.4rem); line-height: 1.15; color: #FFFFFF; font-weight: 800; text-shadow: 0 2px 12px rgba(0,0,0,0.5);">
                ${s.title}
              </h2>
            </div>
        </div>
      </div>

      <!-- Content Details -->
      <div style="padding: clamp(1.25rem, 3.5vw, 2.5rem); display: flex; flex-direction: column; gap: clamp(1.25rem, 3vw, 2rem); background: #FFFFFF;">
        <!-- Summary & Challenge -->
        <div>
          <h4 style="font-size: 0.92rem; color: #09090B; margin-bottom: var(--space-3); text-transform: uppercase; font-family: var(--font-mono); letter-spacing: 0.12em; font-weight: 800;">
            ✦ ENGINEERING BRIEF
          </h4>
          <p style="font-size: 1.08rem; line-height: 1.8; color: #52525B;">
            ${s.fullDescription}
          </p>
        </div>

        <!-- Metrics Grid -->
        <div class="grid-3" style="gap: var(--space-5);">
          ${s.metrics.map(u=>`
            <div class="double-bezel">
              <div class="double-bezel-inner" style="padding: var(--space-5); text-align: center; background: #FAFAFB;">
                <div style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #09090B; line-height: 1; margin-bottom: 6px;">
                  ${u.value}
                </div>
                <div style="font-size: 0.85rem; font-family: var(--font-mono); color: #71717A; font-weight: 600;">
                  ${u.label}
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Key Features List -->
        <div>
          <h4 style="font-size: 0.92rem; font-family: var(--font-mono); color: #09090B; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: var(--space-4); font-weight: 800;">
            ✦ TECHNICAL CAPABILITIES
          </h4>
          <div class="grid-2" style="gap: var(--space-4);">
            ${s.features.map(u=>`
              <div class="flex items-center gap-3" style="font-size: 1.02rem; color: #09090B;">
                <span style="color: #059669; font-weight: bold; font-size: 1.1rem;">✔</span>
                <span>${u}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Tech Stack Badges -->
        <div>
          <h4 style="font-size: 0.92rem; font-family: var(--font-mono); color: #09090B; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: var(--space-3); font-weight: 800;">
            ✦ ARCHITECTURE & TECH STACK
          </h4>
          <div class="flex flex-wrap gap-2">
            ${s.techStack.map(u=>`
              <span class="status-pill" style="font-size: 0.88rem; background: #F4F4F6; border-color: #D4D4D8; color: #09090B;">
                ${u}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Modal Bottom Actions -->
        <div class="flex flex-wrap items-center justify-between gap-4" style="border-top: 1px solid #E4E4E7; padding-top: var(--space-6); margin-top: var(--space-2);">
          <div style="font-size: 0.95rem; color: #52525B;">
            Want an equivalent build for your brand?
          </div>
          <div class="flex flex-wrap items-center gap-3" style="width: 100%; max-width: 440px;">
            <button id="modal-scope-btn" class="btn btn-secondary" style="flex: 1 1 180px; justify-content: center; padding: 0.75rem 1.25rem;">
              <span>Calculate Scope</span>
            </button>
            <a href="#contact" id="modal-pitch-btn" class="btn btn-primary" style="flex: 1 1 200px; justify-content: center; padding: 0.75rem 1.25rem;">
              <span>Book Sprint Kickoff</span>
              <span class="btn-icon-circle" style="flex-shrink: 0;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    `,n=document.activeElement,e.classList.add("open"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";const o=document.getElementById("close-modal-btn");o&&(o.addEventListener("click",a),setTimeout(()=>o.focus(),50));const c=document.getElementById("modal-scope-btn");c&&c.addEventListener("click",()=>{a();const u=document.getElementById("calculator");u&&u.scrollIntoView({behavior:"smooth"})});const l=document.getElementById("modal-pitch-btn");l&&l.addEventListener("click",()=>{a()})}function a(){e&&(e.classList.remove("open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="",n&&n.focus&&n.focus())}e.addEventListener("click",s=>{s.target===e&&a()}),document.addEventListener("open-project-modal",s=>{s.detail&&r(s.detail)}),window.openSolonovaProjectModal=r,window.addEventListener("keydown",s=>{if(e&&e.classList.contains("open")){if(s.key==="Escape"){s.preventDefault(),a();return}if(s.key==="Tab"){const o=e.querySelector(".modal-content");if(!o)return;const c=Array.from(o.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));if(c.length===0)return;const l=c[0],u=c[c.length-1];s.shiftKey?(document.activeElement===l||!o.contains(document.activeElement))&&(s.preventDefault(),u.focus()):(document.activeElement===u||!o.contains(document.activeElement))&&(s.preventDefault(),l.focus())}}})}function $p(){const i=document.getElementById("contact-root");if(!i)return;i.innerHTML=`
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
  `;const e=document.getElementById("inquiry-form"),t=document.getElementById("form-feedback"),n=document.getElementById("submit-inquiry-btn");e&&e.addEventListener("submit",r=>{r.preventDefault();const a=document.getElementById("contact-name"),s=document.getElementById("contact-email"),o=document.getElementById("contact-message"),c=a?a.value.trim():"",l=s?s.value.trim():"",u=o?o.value.trim():"",p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!c||!l||!u){t&&(t.style.display="block",t.style.background="#FEF2F2",t.style.border="1px solid #FECACA",t.style.color="#991B1B",t.setAttribute("tabindex","-1"),t.innerHTML="✕ <strong>Please complete all required fields</strong> before sending your inquiry.",t.focus());return}if(!p.test(l)){t&&(t.style.display="block",t.style.background="#FEF2F2",t.style.border="1px solid #FECACA",t.style.color="#991B1B",t.setAttribute("tabindex","-1"),t.innerHTML="✕ <strong>Invalid email address.</strong> Please enter a valid email format (e.g. name@domain.com).",t.focus()),s&&s.focus();return}n&&(n.disabled=!0,n.innerHTML=`
          <span>Transmitting Project Brief...</span>
          <span class="btn-icon-circle" style="animation: spin 1s linear infinite;">⟳</span>
        `),setTimeout(()=>{try{t&&(t.style.display="block",t.style.background="#ECFDF5",t.style.border="1px solid #A7F3D0",t.style.color="#065F46",t.setAttribute("tabindex","-1"),t.innerHTML=`✔ <strong>Inquiry received, ${c}!</strong> We've queued your project spec and will reply with wireframe insights within 2 hours.`,t.focus()),e.reset()}catch{t&&(t.style.display="block",t.style.background="#FEF2F2",t.style.border="1px solid #FECACA",t.style.color="#991B1B",t.setAttribute("tabindex","-1"),t.innerHTML='✕ <strong>Transmission error.</strong> Please reach out directly on WhatsApp or email <a href="mailto:ben@solonova.ai" style="text-decoration: underline; color: inherit;">ben@solonova.ai</a>.',t.focus())}finally{n&&(n.disabled=!1,n.innerHTML=`
              <span>Send Another Inquiry</span>
              <span class="btn-icon-circle">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.6" aria-hidden="true">
                  <path d="M7 17l9.2-9.2M17 17V8H8"/>
                </svg>
              </span>
            `)}},500)})}function Kp(){const i=document.getElementById("footer-root");i&&(i.innerHTML=`
    <footer style="border-top: 1px solid #27272A; background: #09090B; color: #FFFFFF; padding-block: clamp(4.5rem, 8vw, 7rem); position: relative; z-index: 10;">
      <div class="container">
        <div class="footer-columns-grid" style="margin-bottom: var(--space-10);">
          <!-- Left: Brand Info -->
          <div>
            <div class="brand-logo" style="margin-bottom: var(--space-4);">
              <svg class="brand-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 44px; height: 44px;">
                <rect width="40" height="40" rx="10" fill="#18181B" stroke="#3F3F46"/>
                <path d="M26 13C26 13 23 10.5 20 10.5C15 10.5 12.5 13.5 12.5 17C12.5 22 20 20.8 20 24.5C20 27 17.5 28.5 15 28.5C11 28.5 8.5 25.5 8.5 25.5" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="28" cy="27" r="3.5" fill="#C5A059"/>
              </svg>
              <div class="brand-title-text">
                <span class="brand-title-main" style="font-size: 1.45rem; color: #FFFFFF;">SOLONOVA</span>
                <span class="brand-studio-badge" style="font-size: 0.72rem; background: #27272A; color: #FAFAFA; border: 1px solid #3F3F46;">STUDIO</span>
              </div>
            </div>

            <p style="font-size: 1.02rem; color: #A1A1AA; line-height: 1.7; margin-bottom: var(--space-5); overflow-wrap: break-word;">
              The solo digital atelier redefining web craft through high-velocity vibe coding. Bespoke web apps, MVPs, and flagship brand experiences engineered for ambitious Indian and global founders.
            </p>

            <div class="status-pill" style="font-size: clamp(0.74rem, 1.4vw, 0.84rem); padding: 0.45rem 1rem; background: #18181B; border-color: #27272A; color: #FFFFFF; overflow-wrap: break-word;">
              <span class="radar-ping">
                <span class="radar-ping-core"></span>
              </span>
              <span>BENGALURU · MUMBAI · NCR // ACTIVE QUEUE</span>
            </div>
          </div>

          <!-- Middle: Navigation Links -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.9rem; color: #FFFFFF; text-transform: uppercase; margin-bottom: var(--space-4); font-weight: 800; letter-spacing: 0.12em;">
              <span style="color: var(--accent-gold);">✦</span> NAVIGATION
            </div>
            <ul style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 1.02rem; color: #D4D4D8;">
              <li><a href="#work" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Curated Work</a></li>
              <li><a href="#process" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Methodology</a></li>
              <li><a href="#comparison" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Agency vs. Solonova</a></li>
              <li><a href="#calculator" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Pricing & Scope (₹ INR)</a></li>
              <li><a href="#contact" class="nav-link" style="transition: color 0.2s; color: #D4D4D8;">Start a Project</a></li>
            </ul>
          </div>

          <!-- Right: Atelier Craft & Architectural Standards -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.9rem; color: #FFFFFF; text-transform: uppercase; margin-bottom: var(--space-4); font-weight: 800; letter-spacing: 0.12em;">
              <span style="color: var(--accent-gold);">✦</span> ATELIER DISCIPLINES
            </div>
            <ul style="display: flex; flex-direction: column; gap: var(--space-3); font-size: 0.94rem; color: #A1A1AA; font-family: var(--font-mono);">
              <li>✦ Editorial Luxury Direction</li>
              <li>✦ Fluid Bento Grids & Micro-Interactions</li>
              <li>✦ 100/100 Core Web Vitals & Sub-Second LCP</li>
              <li>✦ WCAG 2.1 AA Visual Architecture</li>
              <li>✦ Direct WhatsApp & UPI Sprint Enablement</li>
              <li>✦ Zero WordPress/Template Bloat</li>
            </ul>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="flex flex-wrap justify-between items-center gap-4" style="border-top: 1px solid #27272A; padding-top: var(--space-6); font-size: 0.88rem; color: #71717A; font-family: var(--font-mono);">
          <div style="overflow-wrap: break-word;">
            © ${new Date().getFullYear()} Solonova Studio. All Rights Reserved. UPI, Razorpay & IMPS Enabled.
          </div>
          <div class="footer-bottom-links" style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 1.25rem;">
            <a href="#comparison" class="nav-link" style="color: #71717A;">Sprint Guarantee</a>
            <a href="#calculator" class="nav-link" style="color: #71717A;">Scope & Pricing</a>
            <a href="#contact" class="nav-link" style="color: #71717A;">Book Sprint</a>
          </div>
        </div>
      </div>
    </footer>
  `)}function Lo(){console.log("⚡ Solonova Vibe Core Initializing...");const i=(e,t)=>{try{t()}catch(n){console.error(`Error mounting component [${e}]:`,n)}};i("Background3D",Hp),i("Navbar",Ml),i("Hero",yl),i("Metrics",Vp),i("Showcase",Ka),i("VibeProcess",Wp),i("AgencyVsSolo",Xp),i("ScopeCalculator",qp),i("ContactSection",$p),i("Footer",Kp),i("ProjectModal",Yp),i("ScrollReveal",Zp),console.log("✔ Solonova Studio ready!")}function Zp(){if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver"in window))return;const i={threshold:.05,rootMargin:"0px 0px -30px 0px"},e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("revealed"),e.unobserve(n.target))})},i);document.querySelectorAll("main section:not(#hero-root) .double-bezel").forEach(t=>{t.classList.add("reveal-on-scroll"),e.observe(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Lo):Lo();
