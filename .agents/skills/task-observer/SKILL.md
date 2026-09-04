---
name: task-observer
description: Meta-skill for session quality control, observing implementation, detecting friction, and verifying cross-viewport and interactive standards.
---

# Task Observer: Session Quality Control & Inspection

Inspired by `one-skill-to-rule-them-all`, the Task Observer monitors execution quality, enforces verification steps, and catches edge cases during development.

## Observation Checklist for Every Milestone

1. **DOM & Structure**:
   - Are semantic elements used (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)?
   - Are all interactive elements accessible with descriptive `aria-label`, keyboard focus rings, and proper roles?

2. **Responsiveness & Fluidity**:
   - Mobile: 375px - 428px (Check hamburgers, full-width touch targets, readable font clamps).
   - Tablet: 768px - 1024px (Check grid column wrapping and header spacing).
   - Desktop: 1280px - 1920px (Check max-container constraints and whitespace balance).

3. **Interactive Validation**:
   - Does every button click result in tangible visual feedback or state transition?
   - Do modals trap focus, handle Escape key, and close smoothly?
   - Do forms validate input, prevent submission without required fields, and show realistic feedback?
