# Phases 6 to 8: Build, Verify, Release

## Phase 6: Build

The coding agent implements the approved plan, task by task, against the frozen specs. It does not redesign.

Rules:
- Implement exactly what the cited requirement says. No extra features, even small ones.
- **Spec Query:** if the spec is ambiguous, silent or contradictory, stop that task and raise a query instead of improvising:

```
Spec Query SQ-004
Task: T2.3   Requirement: MECH-07
Gap: The spec does not say whether locked segments can be unlocked after a level restart.
Options: (a) unlock on restart, (b) stay locked until level complete
Recommendation: (a), because it matches pillar "calm tension"
Blocking: yes
```

  The user answers, the answer is recorded in the spec through a Change Control clarification, and the task continues.
- After each milestone, run it and compare against the acceptance lines before moving on.
- Commit or checkpoint at each milestone so a bad change is cheap to undo.

## Phase 7: Verification

Check the build against the spec, not against impressions. Write `30_Verification.md`:

```
Requirement | Acceptance | Result (Pass/Fail) | Evidence
MECH-03 | one tap = 90 degrees after 150 ms | Pass | recorded test, 10 of 10 taps correct
```

Then a short playtest report. Keep it evidence-based:

```
Build:   Tester(s):   Session length:
Observed (what the player actually did or said):
Problems (each tied to a requirement ID or a Vision pillar):
Severity (blocks release / should fix / note):
Recommended action (defect fix, spec clarification, or Change Request):
```

Weak example: "Players found it a bit confusing." Strong example: "3 of 4 testers did not notice locked segments until level 5, tapped them 6 to 9 times each (violates pillar 1, Readable at a glance). Recommend Change Request to add a lock icon, ART-06."

Defects (the build does not match the spec) are fixed directly. Problems where the spec itself is the issue go to Change Control.

**Gate 5:** every Must requirement passes, no release-blocking problems remain, and the user accepts the build.

## Phase 8: Release

Checklist: pinned dependencies and reproducible build, performance budget from the Technical Spec measured and met, hosting or distribution set up, a short README with controls and known issues, and a copy of the frozen specs archived with the release version. Record Should and Could items that were not built as the backlog for a possible next version, which starts again from Phase 1 or Change Control.
