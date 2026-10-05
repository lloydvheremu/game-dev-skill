# game-development-lifecycle

A spec-first waterfall workflow for taking a game idea to a shipped game with AI. This Claude Code skill runs a game project as a waterfall: plan completely, get approval at gates, then build — preventing scope creep and rework from code written against vague or shifting designs.

## What it does

The skill guides you through 8 phases from Concept through Release, with gates at Phases 2, 3, 5, and 7 that require human approval before proceeding. Each phase produces an artifact (vision document, core loop report, spec files, implementation plan, verification report) that becomes the source of truth for the next phase. After Spec Freeze (Phase 3), changes go through formal Change Control rather than ad-hoc edits. Phase 2 deliberately includes a small disposable core-loop prototype to validate fun before freezing the design.

## Install

```bash
npx @lloydvheremu/game-development-lifecycle
```

This copies the skill into your current project's `.claude/skills/game-development-lifecycle/` folder.

## Options

- **`--help`** — Print this usage message and exit
- **`--force`** — Overwrite the destination folder if it already exists. Without `--force`, if the destination exists, the command prints a message and exits without changes.

## Where files are installed

The skill is installed to `.claude/skills/game-development-lifecycle/` relative to your current working directory. It copies:

- `SKILL.md` — the full skill documentation and phase references
- `references/` — phase notes, genre notes, and change control guidance

## Phase overview (Phase 1 to 8, with gates)

```
Phase 1  Concept and Vision          -> 00_Game_Vision.md        GATE 1: Vision approved
Phase 2  Core Loop Validation        -> 01_Core_Loop_Report.md   GATE 2: GO / REVISE / KILL
Phase 3  Specification               -> spec files + Scope       GATE 3: SPEC FREEZE
Phase 4  Implementation Research     -> 20_Impl_Research.md      (no gate, reviewed with plan)
Phase 5  Implementation Plan         -> 21_Impl_Plan.md          GATE 4: Plan approved
Phase 6  Build                       -> working game             (Spec Queries only, no redesign)
Phase 7  Verification                -> 30_Verification.md       GATE 5: Acceptance
Phase 8  Release                     -> shipped build            done
```

Change Control applies from Spec Freeze onward.

## How to use it

1. Run `npx @lloydvheremu/game-development-lifecycle` to install the skill.
2. Point your AI agent at the installed skill (it will be at `.claude/skills/game-development-lifecycle/`).
3. Tell the agent you have a game idea.
4. The agent will start at Phase 1 and guide you through the waterfall, producing artifacts at each phase.
5. At each gate, approve (or request revisions / kill) before the agent proceeds to the next phase.
6. The skill maintains traceability via requirement IDs (`MECH-01`, `ART-04`, `TECH-02`, `UI-03`) that link specs to implementation and verification.

## License

MIT. Copyright (c) 2025 Lloyd Blessing Vheremu.

## Contributing

See the project on GitHub at <https://github.com/lloydvheremu/game-dev-skill> for the source. PRs welcome — follow the phase gates and keep changes spec-compatible.