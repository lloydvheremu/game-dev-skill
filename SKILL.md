---
name: "game-development-lifecycle"
description: A waterfall-style, spec-first workflow for taking a rough game idea all the way to a shipped game, with AI doing the design, planning and coding. Use this whenever the user mentions making a game, a game idea, game concept, game design document, GDD, game vision, game scope, game spec, prototype, vertical slice, or wants an AI coding agent to build a game in any engine or genre (three.js, Unity, Godot, Unreal, Phaser and others), even if they only say "I have an idea for a game" or "let's vibecode a game". Also use it to check a new feature against an existing design, to write a change request, or to continue a game project that already has a spec folder.
---

# Game Development Lifecycle

This skill runs a game project as a waterfall: plan completely, get the plan approved, freeze it, then build. It exists because AI can write code very quickly, which makes the plan the scarce thing. Code written against a vague or shifting design gets rewritten. Code written against a precise, approved spec is mostly translation.

The human is the creative authority. The AI explores, recommends, drafts and builds. The human approves at gates. Never pass a gate on the user's behalf.

## Principles (and why they matter)

1. **No code before Spec Freeze.** The only exception is the throwaway core-loop prototype in Phase 2. Building while still designing is how features drift and scope balloons.
2. **Artifacts are the source of truth.** Decisions live in files in the project's spec folder, not in chat history. Any later session, or any other agent, should be able to rebuild full context from the folder alone.
3. **Ask, research, or decide, and say which.** Ask the human for creative decisions. Research when the answer exists in the world (comparable games, engine docs). Decide yourself only for small, reversible details, and list those decisions so the human can veto them. Research informs the design, it never silently becomes the design.
4. **Genre-agnostic by default.** Do not assume a core loop, win condition, or multiplayer. Derive the needed specs and roles from the game itself. Load a genre note from `references/genres/` only if one fits.
5. **Scope is a design object.** Every feature has a priority and a cost. Anything not in the frozen scope does not get built, even if it is "easy while we're here".
6. **Retrieve before reinventing.** For established engine or library functionality, find the documented approach before generating one from memory. This also prevents invented APIs.
7. **Flag conflicts, never silently resolve them.** If new work contradicts the Vision, Scope, or another spec, stop and raise a Design Conflict for the human to decide.

## The lifecycle

```
Phase 1  Concept and Vision          -> 00_Game_Vision.md        GATE 1: Vision approved
Phase 2  Core Loop Validation        -> 01_Core_Loop_Report.md   GATE 2: GO / REVISE / KILL
Phase 3  Specification               -> spec files + Scope       GATE 3: SPEC FREEZE
Phase 4  Implementation Research     -> 20_Impl_Research.md      (no gate, reviewed with plan)
Phase 5  Implementation Plan         -> 21_Impl_Plan.md          GATE 4: Plan approved
Phase 6  Build                       -> working game             (Spec Queries only, no redesign)
Phase 7  Verification                -> 30_Verification.md       GATE 5: Acceptance
Phase 8  Release                     -> shipped build            done
         Change Control applies from Spec Freeze onward
```

Phase 2 is the one deliberate deviation from pure waterfall. Whether a core loop is fun can only be learned by playing it, so a small disposable prototype is played and judged before the design is frozen. After Gate 3, changes go through Change Control, not through ad hoc edits. If the user explicitly wants no Phase 2, skip it and record that decision in the Vision file as a stated risk.

## How to run it

1. **Find the current phase.** Look for the spec folder (default `game-spec/`, ask the user where to keep it if unclear). If it has files, read the Vision and Scope first, then resume at the first phase whose gate is not recorded as passed. If there is no folder, start at Phase 1.
2. **Read the reference for that phase** from the table below. Do not read all references up front.
3. **Produce the phase artifact** using its template, then show the gate checklist and stop for approval. Record approval in the artifact's header (`Status: APPROVED, <date>`).
4. **Keep each response decisive.** Lead with the artifact or the recommendation. Put open questions in one short numbered list, ask only what you cannot responsibly decide or research, and offer a recommended answer for each.

If the environment has no filesystem, produce each artifact in the chat, one per phase, and ask the user to save them.

| Phase | Read |
|---|---|
| 1 Concept and Vision | `references/phase-1-concept-and-vision.md` |
| 2 Core Loop Validation | `references/phase-2-core-loop-validation.md` |
| 3 Specification | `references/phase-3-specification.md` |
| 3 Assets (all types) | `references/phase-3-assets.md` |
| 4 Implementation Research | `references/phase-4-implementation-research.md` |
| 5 Implementation Plan | `references/phase-5-implementation-plan.md` |
| 6 to 8 Build, Verify, Release | `references/phase-6-to-8-build-verify-release.md` |
| After freeze, any change | `references/change-control.md` |
| Genre adjustments | `references/genres/` (puzzle, racing, narrative-exploration) |

## Requirement IDs and traceability

Every approved requirement gets a stable ID (`MECH-01`, `ART-04`, `TECH-02`, `UI-03`). Implementation tasks cite the IDs they satisfy, and verification tests cite the IDs they check. Nothing gets built without an ID, and nothing with an ID goes unverified. This is what makes "coding is seamless": the agent never has to guess what is wanted.

## Roles

Do not hard-code a team. In Phase 3, derive the needed specialist responsibilities from the game (a puzzle game may need only puzzle design and UX, a racing game adds vehicle, track and network work). Each role is a responsibility that reads the frozen specs and produces a spec or asset, not a persona. Always include a **Design Review** responsibility: it checks every proposed addition against the Vision and Scope. If real subagents are available, roles can be subagents. Otherwise run them as sequential passes with distinct headings.

## Quality bar for every artifact

A spec is good when a competent programmer or artist who has never talked to the user could act on it without asking questions, and a tester could tell whether it was satisfied. Prefer concrete numbers, states and examples to adjectives. Each phase reference includes a strong and a weak example, so match the strong one.
