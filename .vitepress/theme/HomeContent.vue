<template>
  <div class="zc-home">
    <div class="zc-accent-bar"></div>

    <section class="zc-hero">
      <h1 class="zc-h1">
        Zeno <span class="zc-blue">Chatbot</span><br>Documentation
      </h1>
      <p class="zc-tagline">
        Choose your version and get started in minutes.
      </p>
    </section>

    <div class="zc-divider"></div>

    <section class="zc-cards" aria-label="Choose your version">
      <div class="zc-card zc-card-pro">
        <p class="zc-vtag">Pro Version</p>
        <h2>Full Feature Set</h2>
        <p>Everything in Free, plus Channels, Web Search, Mailing List, and Live Chat.</p>
        <ul>
          <li>Channels integration</li>
          <li>Web Search in chat</li>
          <li>Mailing List capture</li>
          <li>Live Chat handoff</li>
        </ul>
        <a :href="withBase('/getting-started')" class="zc-btn zc-btn-pro">
          Pro Documentation →
        </a>
      </div>

      <div class="zc-card zc-card-free">
        <p class="zc-vtag">Free Version</p>
        <h2>Core Engine</h2>
        <p>AI chatbot with Dashboard, all Settings panels, and full Data Source management.</p>
        <ul>
          <li>GPT, Gemini, and Claude support</li>
          <li>Full chat widget customization</li>
          <li>Saved Replies + Semantic Match</li>
          <li>Internal, External, PDF data sources</li>
        </ul>
        <a :href="withBase('/free/getting-started')" class="zc-btn zc-btn-free">
          Free Documentation →
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<style scoped>
.zc-home {
  background: #fff;
  font-family: 'Figtree', -apple-system, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Blue accent bar — sits right below the VitePress navbar */
.zc-accent-bar {
  height: 3px;
  background: #2563eb;
}

/* Hero ---------------------------------------------------------------- */
.zc-hero {
  text-align: center;
  padding: 72px 24px 44px;
  max-width: 860px;
  margin: 0 auto;
}

.zc-h1 {
  font-family: 'Bricolage Grotesque', -apple-system, system-ui, sans-serif;
  font-size: clamp(38px, 6vw, 62px);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.03em;
  color: #0f172a;
  margin: 0 0 18px;
  text-wrap: balance;
  border: none;
}

.zc-blue {
  color: #2563eb;
}

.zc-tagline {
  font-size: 17px;
  line-height: 1.65;
  color: #64748b;
  margin: 0;
}

/* Divider ------------------------------------------------------------- */
.zc-divider {
  width: 36px;
  height: 1px;
  background: #e2e8f0;
  margin: 40px auto;
}

/* Cards --------------------------------------------------------------- */
.zc-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px 96px;
}

@media (max-width: 600px) {
  .zc-cards {
    grid-template-columns: 1fr;
  }

  .zc-hero {
    padding-top: 48px;
    padding-bottom: 32px;
  }
}

.zc-card {
  border-radius: 12px;
  padding: 28px;
}

/* Pro card — blue background */
.zc-card-pro {
  background: #2563eb;
}

/* Free card — white + border */
.zc-card-free {
  background: #fff;
  border: 1px solid #e2e8f0;
}

/* Version tag */
.zc-vtag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.zc-card-pro .zc-vtag {
  color: rgba(255, 255, 255, 0.58);
}

.zc-card-free .zc-vtag {
  color: #94a3b8;
}

/* Card heading */
.zc-card h2 {
  font-family: 'Bricolage Grotesque', -apple-system, system-ui, sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0 0 8px;
  border: none;
  padding: 0;
}

.zc-card-pro h2 {
  color: #fff;
}

.zc-card-free h2 {
  color: #0f172a;
}

/* Card description */
.zc-card p:not(.zc-vtag) {
  font-size: 13.5px;
  line-height: 1.6;
  margin: 0 0 18px;
}

.zc-card-pro p:not(.zc-vtag) {
  color: rgba(255, 255, 255, 0.7);
}

.zc-card-free p:not(.zc-vtag) {
  color: #64748b;
}

/* Feature list */
.zc-card ul {
  list-style: none;
  margin: 0 0 26px;
  padding: 0;
}

.zc-card ul li {
  font-size: 13px;
  padding: 3.5px 0 3.5px 16px;
  position: relative;
}

.zc-card-pro ul li {
  color: rgba(255, 255, 255, 0.84);
}

.zc-card-pro ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  font-size: 10px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.36);
}

.zc-card-free ul li {
  color: #374151;
}

.zc-card-free ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  font-size: 10px;
  line-height: 1.8;
  color: #9ca3af;
}

/* CTA button */
.zc-btn {
  display: inline-block;
  font-size: 13.5px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none !important;
  transition: opacity 0.15s ease;
}

.zc-btn:hover {
  opacity: 0.82;
  text-decoration: none !important;
}

.zc-btn-pro {
  background: rgba(255, 255, 255, 0.18);
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.28);
}

.zc-btn-free {
  background: #0f172a;
  color: #fff !important;
}
</style>
