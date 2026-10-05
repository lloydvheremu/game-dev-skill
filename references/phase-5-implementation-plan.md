# Phase 5: Implementation Plan

Goal: convert the frozen specs and research into an ordered list of build tasks, so the coding agent never decides what to build next. Gate 4 is the user approving this plan.

## Rules

- Order tasks by dependency, and group them into **milestones that are each playable or demonstrable**. Avoid milestones like "all the data models", which prove nothing.
- Every task cites the requirement IDs it satisfies. A task with no ID is unspecced work and is not allowed. If it is needed, raise a Spec Query or Change Request.
- Build Must features first. Should features start only after every Must is verified.
- Each task has a definition of done taken from the requirement's acceptance line.

## Plan-time research

Planning exposes unknowns that Phase 4 did not. Before ordering tasks, list them: every E-class item, every research entry marked `Verified: partly` or `no`, every integration of known systems, and every task you cannot size. Resolve them with research entries in the `20_Impl_Research.md` format.

With subagents available, dispatch one researcher per unknown in parallel (brief, time-box and output format are in `references/agentic-execution.md`). Researchers return findings and options. They never change the plan or the specs. Run at most two research rounds. Anything still unresolved goes into "Risks and unknowns" and is shown at Gate 4.

The ordering of tasks, the dependency graph and the wave assignment are done by one agent (the orchestrator), because they need the whole picture.

## Template for 21_Impl_Plan.md

```
Milestone 1: <playable outcome>
  T1.1  <task>   Satisfies: MECH-01, TECH-02   Research: see 20_Impl_Research #1
        Done when: <acceptance from spec>
        (parallel plans only) Depends on: <task IDs>   Owns: <paths, exclusive write>   Wave: <n>
  T1.2  ...
Milestone 2: ...

Risks and unknowns (E-class items first):
Estimated order of effort: S / M / L per milestone
```

## Quality example (strong)

```
Milestone 1: One playable level with rotation and power flow (greybox)
  T1.1  Grid data model and level loader        Satisfies: TECH-04, LVL-01
        Done when: level file LVL-01 loads and the grid renders as colored squares.
  T1.2  Segment rotation                          Satisfies: MECH-03
        Done when: tapping rotates 90 degrees clockwise in 150 ms, ignored while rotating.
  T1.3  Power flow propagation                    Satisfies: MECH-04, MECH-05
        Done when: all connected segments highlight within one frame of a rotation completing.
Milestone 2: Win and fail states ...
```

## Weak example

```
1. Set up project  2. Make the game  3. Add polish  4. Test
```

Why it fails: no traceability, no definition of done, nothing the agent can execute without making design decisions.

## Gate 4 checklist

- Every Must requirement appears in at least one task.
- No task lacks an ID.
- Each milestone produces something the user can play or inspect.
- Every E-class item has a spike result, or is listed as an accepted risk.
- For parallel plans: no two tasks in the same wave own the same path, and every dependency points to an earlier wave.
- The user has approved the plan.
