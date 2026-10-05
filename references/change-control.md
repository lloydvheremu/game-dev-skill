# Change Control (after Spec Freeze)

Frozen specs are changed only through a recorded Change Request (CR). This keeps fast AI building from turning into drift, because every change is deliberate, costed, and approved by the human.

## What counts as what

- **Defect:** the build does not match the frozen spec. Fix it, no CR needed.
- **Clarification:** the spec was ambiguous and the answer does not change intent. Record the answer in the spec as a new minor version (v1.0 to v1.1) and note the Spec Query that caused it.
- **Change:** it alters, adds or removes behavior, scope, art direction or technical constraints. Needs a CR.

## Change Request template

```
CR-002   Requested by: <user | AI | playtest>   Date:
Change: Add a lock icon on locked segments.
Reason: 3 of 4 testers could not tell which segments were locked (30_Verification, run 2).
Affected specs and IDs: ART-06 (new), UI-02, MECH-07 (unchanged)
Impact:
  Vision / pillars: supports pillar 1
  Scope: adds 1 small Should feature
  Art: 1 icon, 2 states
  Technical: negligible
  Other requirements: none contradicted
  Cost: S    Risk: Low
Recommendation: Approve
Decision: Approved | Needs revision | Rejected (out of scope) | Deferred to backlog
Decided by / date:
```

## Procedure

1. Run the Design Review checks (Vision fit, pillar fit, conflicts, scope, art, technical, cost) and fill in the impact.
2. Present the CR with a recommendation. If it conflicts with the Vision or Scope, say so plainly and name the trade-off.
3. The human decides. Never self-approve.
4. If approved, update the affected spec files with new IDs or revised text, bump their version, add the CR number to a change log at the bottom of each, and update the Implementation Plan.
5. Then build.

## Quality example: a rejection

```
CR-005  Change: Add online leaderboards.
Impact: Scope: new Could feature, requires accounts and backend (both out of scope in 03_Scope).
  Conflicts with non-goal "no user accounts". Cost: L. Risk: High.
Recommendation: Defer to backlog. If wanted, treat as v2 and restart from Phase 1.
Decision: Deferred.
```

## Anti-pattern

"Since we're already editing this file, I also added X." This is unspecced work. Remove it or raise a CR.
