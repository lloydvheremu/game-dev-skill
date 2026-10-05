# Phase 2: Core Loop Validation

Goal: find out whether the central moment-to-moment experience works before freezing a large design around it. This is the only phase where code is written before Spec Freeze, and that code is disposable.

"Core loop" means the repeated central experience. In a racing game it is driving a lap. In a puzzle game it is solving one puzzle. In a narrative exploration game it is the act of moving through a space and discovering something. Define it for this game from the Vision, do not force a mechanics loop onto a game that has none.

## Rules

- Build the smallest thing that lets the user experience the core loop: placeholder shapes, no art, no menus, no persistence, one level or one scene.
- Time-box it. If it takes more than a small fraction of the total project, it is too big.
- Do not reuse this code by default. Say so up front. The user may choose to keep parts, but the default is to discard and rebuild from the frozen spec.
- Write the playtest questions before building, so the test cannot be bent to fit the result.

## Step 1: Write the test plan

```
Core loop under test:
Hypothesis (what must be true for this to be worth building):
Prototype contents (and what is deliberately missing):
Playtest questions (answered by the user after playing):
  1.
  2.
Pass criteria:
```

## Step 2: Build and hand over

Build a single runnable file where possible (for a browser game, one HTML file). Give the user the run instructions and the question list.

### Parallel variants (optional)

If the core loop has two or three plausible forms, subagents can each build one disposable variant in its own folder, under the same test plan. The human plays them and the report compares them. All variants stay throwaway code. See `references/agentic-execution.md`.

## Step 3: Write 01_Core_Loop_Report.md

```
Result: GO | REVISE | KILL
What the user observed (their words, not your interpretation):
What worked / what did not:
Changes to the Vision or direction (if REVISE):
Decisions that are now locked in:
```

- **GO:** proceed to Phase 3.
- **REVISE:** update the Vision, then re-test only if the change touches the core loop.
- **KILL:** stop, or return to Phase 1 with a different idea. This is a good outcome, it was cheap.

## Quality example (strong)

```
Core loop under test: rotate grid segments to route power before the load meter fills.
Hypothesis: a single level with 12 segments is satisfying to solve in under 3 minutes
  and the user wants to try a second level.
Missing on purpose: art, sound, level select, scoring.
Questions:
  1. Did you ever feel stuck without knowing why?
  2. Did the load meter create tension or just annoyance?
  3. After finishing, did you want another level? Why or why not?
Pass criteria: yes to 3, no to the "stuck without knowing why" half of 1.
```

For a narrative exploration game the same structure applies with different content: the prototype is a grey-box room with one discoverable object and the question is whether the user wants to keep exploring after the first discovery.

## Weak example

```
Build a prototype and see if it feels good.
```

Why it fails: no hypothesis, no questions, no pass criteria, so it cannot produce a decision.
