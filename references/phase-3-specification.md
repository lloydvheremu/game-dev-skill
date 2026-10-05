# Phase 3: Specification and Spec Freeze

Goal: write the complete, approved design so that building is translation, not invention. This is the longest and most important phase. It ends with SPEC FREEZE.

## Step 1: Derive the roles and the spec set

From the Vision and Core Loop Report, decide which responsibilities this game needs. Present a short roster with one line of justification each, and which spec file each owns. Always include Design Review. Do not add a role that has no spec to produce.

Core set for almost every game: `02_Design_Spec.md`, `03_Scope.md`, `06_Technical_Spec.md`.
Add as the game requires: `04_Art_Direction.md` and `05_Asset_Spec.md` (visual games), `07_UI_UX_Spec.md`, `08_Audio_Spec.md`, `09_Level_Spec.md`, `10_Narrative_Spec.md`, `11_Network_Spec.md`.

Skip any file the game does not need and say why in one line. A small puzzle game may need only five files.

## Step 2: Write the specs

Write in this order, because later files depend on earlier ones: Scope, Design Spec, then Art, Level, UI, Audio, Narrative as needed, and Technical Spec last (it must account for everything above).

### Requirement format

Every requirement has an ID, is testable, and is written as observable behavior.

```
MECH-03  Segment rotation
  Behavior: Tapping a segment rotates it 90 degrees clockwise over 150 ms.
  Rules: Locked segments (see MECH-07) ignore taps. Rotation updates power flow immediately on completion.
  Edge cases: Tapping during an active rotation is ignored.
  Priority: Must
  Acceptance: With segment S1 at 0 degrees, one tap results in 90 degrees after 150 ms and no further change.
```

Weak version: "Segments should rotate smoothly when the player interacts with them." Not testable, no numbers, no edge cases, and two programmers would build two different things.

### 03_Scope.md

```
Priority levels: Must (game does not work without) | Should | Could | Experimental | Out of scope

Feature | Priority | Depends on | Cost (S/M/L) | Risk | Core to pillars?
Segment rotation | Must | none | S | Low | Yes (Readable)
Daily puzzle | Could | Level system | M | Medium | No

Explicitly out of scope: level editor, multiplayer, user accounts
```

Only Must items are required for release. Should items are built only after every Must is verified. Could and Experimental are not built unless the user approves a Change Request.

### 06_Technical_Spec.md (minimum contents)

```
Engine / library and exact pinned version:
Target platforms and minimum device:
Performance budget (frame rate, load time, size limit):
Architecture overview (main modules and their responsibilities):
Game state model (what state exists, who owns it):
Input handling:
Data formats (levels, saves, config):
Asset formats and naming:
Third-party dependencies (each with a reason):
Known technical risks:
```

Do not leave the engine version unpinned. Version drift is a major cause of hallucinated or broken API usage. If the user has not chosen a version, research the current stable one and propose it for approval.

## Step 3: Design Review pass

Before asking for freeze, check the full set against itself and the Vision:

- Does every Must feature trace to a pillar or to the core loop?
- Do any two specs contradict each other (speed in Design vs camera in Technical)?
- Does the Technical Spec support every Must requirement within the performance budget?
- Is anything in a spec but not in Scope, or vice versa?
- Is every requirement testable?

List conflicts as `Design Conflict: <what, where, options, recommendation>` and let the user decide. Do not edit around them silently.

## Gate 3: SPEC FREEZE checklist

- All spec files are complete, with IDs, and Design Review found no open conflicts.
- Scope is signed off, with an explicit out-of-scope list.
- Engine and version are pinned.
- Each file header reads `Status: FROZEN <date>, v1.0`.
- The user has explicitly said the specs are approved and frozen.

From here, changes require `references/change-control.md`.

## Quality example: a good role roster (racing game)

```
Gameplay Designer: vehicle handling, race rules, progression -> 02_Design_Spec
Environment/Vehicle Art Director: visual language, asset list -> 04, 05
Level Designer: track layouts and checkpoints -> 09
Technical Designer: architecture, netcode approach, budgets -> 06, 11
UI/UX Designer: HUD, menus, flow -> 07
Design Review: consistency across all of the above
Skipped: Narrative (no story), Audio spec deferred to Should (use placeholder sounds for now)
```
