---
name: memory-keeper
description: Project memory and context persistence - tracks architectural decisions, design tokens, and pitch playbooks in durable markdown records.
---

# Memory Keeper: Context & Decision Persistence

Inspired by `claude-mem`, this skill ensures that project context, user requirements, brand positioning, and technical decisions are never lost between turns or sessions.

## Durable Artifact Locations

1. `docs/architecture.md`: The single source of truth for component boundaries, state flow, and data contracts.
2. `docs/design-tokens.md`: Exact color codes, spacing units, font weights, and animation curves.
3. `docs/pitch-playbook.md`: Cold pitch scripts, value propositions, pricing tiers, and objection handling for live client calls.

## Rules for Memory Updates

- When an architectural decision or brand change occurs, immediately update the relevant document under `docs/`.
- Never rely on ephemeral conversation context for core product invariants.
- Read docs first before executing new refactors or feature expansions.
