---
name: superpowers
description: Disciplined engineering methodology for agentic vibe coding - enforcing modular architecture, TDD-inspired verification, and no sloppy code.
---

# Superpowers: Engineering Discipline & Methodology

Superpowers provides the process layer that turns rapid AI vibe coding into production-grade engineering.

## Core Rules

1. **Architecture Before Code**:
   - Never write code into monolithic files.
   - Always decouple logic into standalone modules (`data/`, `components/`, `styles/`).
   - Every file must have a single, unambiguous responsibility.

2. **Red-Green Verification**:
   - Before implementing or modifying a feature, establish how it will be verified.
   - Test after each discrete change. Check browser console logs, DOM elements, and responsive breakpoints.
   - No feature is complete without verified interactive behavior.

3. **YAGNI (You Aren't Gonna Need It) & DRY (Don't Repeat Yourself)**:
   - Build exactly what fulfills the product vision with maximum impact.
   - Extract shared utilities and CSS tokens instead of duplicating inline styles or hardcoded values.

4. **Zero Silent Errors**:
   - Handle edge cases, null guards, empty states, and failed fetch/form operations gracefully with user-visible feedback.
