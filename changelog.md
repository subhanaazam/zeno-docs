---
title: Changelog
---

# Changelog

All notable changes to Zeno Chatbot, sourced from the [official WordPress.org plugin page](https://wordpress.org/plugins/zeno-chatbot-ai/#developers).

## 1.5.2 — June 18, 2026

**New Features**
- Added Business Domain and Contact Info fields in General Settings for more accurate replies
- AI now uses business information to provide on-brand responses

**Improvements**
- Saved Replies now guide AI answers for semantically similar questions
- Added Header Text Color and Send Button Icon Color controls
- Settings return validation errors instead of silently failing

**Bug Fixes**
- Chat Settings color and design options now sync to the public widget
- Agent avatar now displays correctly in live chat
- Agent name displays as configured instead of defaulting to "Support"
- Multi-line prompts and error messages retain formatting
- Email validation prevents saving empty or invalid addresses
- Reply-To field defaults to From address when blank
- Saved Replies keywords can be cleared with proper language defaults

## 1.5.1 — June 15, 2026

**Improvements**
- Removed unavailable Claude Fable 5 model
- Existing installations auto-remapped to Claude Opus 4.8

**Bug Fixes**
- Fixed two-way CSS styling conflicts between the chatbot widget and WordPress themes
- User message bubble padding corrected on right side

## 1.5.0 — June 13, 2026

**New Features**
- Added Anthropic Claude integration supporting Opus 4.8, Sonnet 4.6, and Haiku 4.5

**Improvements**
- PHP requirement lowered from 8.0 to 7.4
- Dashboard performance enhanced with optimized queries
- Chat widget assets load only when enabled
- Content index rebuilds process in batches

**Bug Fixes**
- Fatal PHP 7.4 error resolved
- Admin page rendering improved

**Security**
- Chat session integrity strengthened
- Enhanced markdown sanitization
- Reduced error leakage

## 1.4.0 — April 26, 2026

**New Features**
- Support for OpenAI GPT-5.5 through GPT-5 Nano models
- Google Gemini 2.5 Pro support added

**Improvements**
- Default model updated to GPT-5 Mini
- Older models labeled as deprecated
- PHP 8.4 compatibility improved

**Bug Fixes**
- Database initialization errors on fresh installations resolved
- Activation warnings eliminated

## 1.3.2 — February 24, 2026

**Bug Fixes**
- Action Scheduler database errors prevented
- Scheduler re-entrancy issue resolved

## 1.3.0 — February 17, 2026

**New Features**
- Sitemap, Product Index, and Knowledge Notes data sources
- Conversation lifecycle controls with auto-close and auto-summary

**Improvements**
- Service-driven architecture for indexing workflows
- Scheduler usage enforcement

**Security**
- Session payload verification strengthened
- Rate limiting improved

## 1.2.0 — January 25, 2026

**New Features**
- File resource uploads for images and PDFs
- Markdown Response Rendering with rich formatting
- Enhanced dashboard analytics
- Timezone-aware date display

**Security**
- DOMPurify implemented for HTML sanitization

## 1.1.0 — December 25, 2025

- Saved Replies feature
- Semantic Matching Algorithm
- Advanced Analytics Dashboard
- Language support added
- Gemini API empty response fixed

## 1.0.0 — December 1, 2025

- Initial launch
