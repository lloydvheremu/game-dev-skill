# Phase 4: Implementation Research

Goal: before any code is written, find out how established functionality is already done, so effort goes into what is unique to this game. This also catches invented or outdated APIs.

Principle: retrieve before reinventing. Research is a tool, not a ritual. Do not research trivial code.

## Step 1: Classify each technical requirement

- **A. Standard functionality** (known engine or library problem): research first.
- **B. Standard with customization:** research the underlying mechanism, then adapt.
- **C. Integration of known systems:** research each system, then reason about the integration.
- **D. Game-specific logic:** use the specs and your own reasoning. No research needed.
- **E. Genuinely novel mechanic:** design from first principles, and flag it as higher risk.

Skip research entirely for A-level items so simple that no meaningful alternative exists (a vector length, a basic loop).

## Step 2: Research with a source hierarchy

1. Official documentation for the pinned version.
2. Official examples and repositories.
3. Well-maintained open-source implementations.
4. Community sources (forums, Q and A, blogs), mainly for obscure problems.
5. Your own knowledge, when retrieval is unavailable or unnecessary. Say so when you rely on it.

Verify that every API you plan to use exists in the pinned version. If you cannot verify, mark it unverified.

## Parallel research (optional)

If the environment supports subagents, dispatch one researcher per cluster of A, B and C items, and one time-boxed spike per E item. D items need no researcher. Each researcher returns entries in the format below and recommends, never decides. Anything that would change the design becomes a Spec Query or Design Conflict for the human. Details: `references/agentic-execution.md`.

## Step 3: Write 20_Impl_Research.md

```
Requirement ID(s):
Classification (A to E):
Recommended approach:
Why this over alternatives:
Source(s) and version:
Adaptation needed for this project:
Known limitations or gotchas:
Do not do:
Verified: yes | partly | no (and what remains unverified)
```

## Quality example (strong)

```
Requirement ID(s): ART-02, TECH-05
Classification: B (standard with customization)
Recommended approach: Animate the spritesheet by changing texture offset on a
  fixed interval, driven by the game loop delta time, not setInterval.
Why: matches the documented approach and stays in sync with frame pacing.
Source(s) and version: official library docs and example for the pinned version in TECH-01.
Adaptation: 12 FPS animation that pauses when the character stops (MECH-09).
Gotchas: texture filtering must be set to nearest for pixel art (ART-01).
Do not do: clone textures per frame, it leaks memory.
Verified: yes
```

## Weak example

```
Use some animation library, should be fine.
```

Why it fails: no source, no version, no gotchas, and the programmer will improvise.
