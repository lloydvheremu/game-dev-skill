# Agentic (Parallel) Execution

Parallel agents change who does the work, never what is allowed. Gates stay human, specs stay frozen, every task cites requirement IDs, and nothing is built without an ID.

## When to use it

Use parallel execution only if BOTH are true:
1. The environment supports subagents, or separate worktrees and sessions.
2. The plan has at least one wave with 4 or more independent tasks.

Otherwise run the same artifacts sequentially. Small games should default to a single agent, because coordination costs more than it saves.

## Where fan-out is allowed

| Phase | Parallel work | Stays single-agent |
|---|---|---|
| 2 Core loop | 2 to 3 disposable prototype variants | Comparing them and the GO / REVISE / KILL recommendation |
| 3 Specification | One spec per role | Design Review pass over the full set |
| 4 Research | One researcher per A/B/C cluster, one spike per E item | Merging entries into 20_Impl_Research.md |
| 5 Plan | Plan-time researchers, per-milestone estimates | Task ordering, dependency graph, waves, ownership |
| 6 Build | Tasks within a wave | Merging, milestone run |
| 7 Verification | One verifier per requirement group | Assembling 30_Verification.md |
| Every gate | Nothing | The human decides. Never delegate a gate. |

## Execution roles

These are responsibilities, not personas. They own no specs.

| Role | Reads | Writes | Must never |
|---|---|---|---|
| Orchestrator | everything | plan, board, merges | pass a gate, edit a frozen spec |
| Researcher | specs, plan, web and docs | research entries, spike folder | decide design, edit specs or game code |
| Builder | specs, contracts, its task | its owned paths only | edit outside owned paths, self-verify, add unspecced features |
| Verifier | specs, tests, the build | verification fragments | fix code, edit specs |
| Design Review | Vision, Scope, specs | review notes, Design Conflicts | self-approve a Change Request |

The orchestrator is the main session. Other roles report back to it. Agent definitions are in `agents/`.

## Researcher brief

Give every researcher exactly this, so results are comparable:

```
Question: <one question>
Requirement ID(s): <IDs>
Pinned versions: <from 06_Technical_Spec>
Time-box: <e.g. 20 minutes or N searches>
Return: one entry in the 20_Impl_Research.md format, plus a size estimate (S/M/L)
        and a feasibility verdict (works / works with caveats / does not work / unknown)
Do not: change specs, pick between design options, write game code outside the spike folder
```

A spike is throwaway code in `game-spec/spikes/<topic>/`. It is never merged into the game.

## Plan-time research loop (Phase 5)

1. List unknowns: E-class items, research entries marked `Verified: partly` or `no`, integrations of known systems, tasks that cannot be sized.
2. Dispatch one researcher per unknown, in parallel.
3. Fold results into the plan. New unknowns trigger a second round. A third round is not allowed: list what remains under "Risks and unknowns".
4. A finding that would change the design is a Spec Query or Design Conflict for the human. Research informs the design, it never silently becomes the design.

## Tasks, ownership and waves

Plan fields for parallel plans:

```
T2.3  Bike physics controller   Satisfies: MECH-02, MECH-03   Research: #4
      Depends on: T1.1, T1.3    Owns: src/vehicle/**    Wave: 2
      Done when: <acceptance from spec>
```

Rules:
- **Exclusive write.** Each path is owned by exactly one task per wave. Everything else is read-only for that task.
- **Wave 0 is sequential:** project skeleton, pinned dependencies, and the module contracts from 06_Technical_Spec. Nothing runs in parallel until wave 0 is merged and builds.
- **Waves follow dependencies.** A task's dependencies must all be in earlier waves.
- **Shared files** (registries, index files, global config, input maps) are owned by the orchestrator. Builders send a registration request in their board file, and the orchestrator applies it at merge.
- **Contracts first.** Builders code against module contracts (interfaces, events, schemas). If a contract is missing or wrong, raise a Spec Query. Do not invent a private contract.

## Engine files that merge badly

Scenes, prefabs, and binary assets (Unity `.unity` and `.prefab`, Godot `.tscn`, Unreal `.uasset`, large binary art) cannot be merged by diff. Give each one a single owner, serialize any edits to it, and prefer building scenes from code or data where the engine allows. Asset agents deliver placeholders first, so code tasks never wait on final art.

## Isolation

- One worktree and branch per builder, named `<wave>/<task>`, for example `w2/T2.3`.
- A builder edits only its owned paths, in its own worktree, and never touches `main`.
- Agents never write to a shared file. All coordination goes through per-task files.

## Coordination files (one file per item, so writes never collide)

`game-spec/board/T2.3.md`
```
Task: T2.3   Status: todo | in-progress | blocked | review | done | invalidated
Agent/branch: w2/T2.3   Satisfies: MECH-02, MECH-03
Blocked by: SQ-004 (or none)
Files touched: <list>
Registration requests: <shared-file changes for the orchestrator>
Evidence: <test output or run notes>
```

`game-spec/queries/SQ-004.md` uses the Spec Query format from the Phase 6 reference, with `Blocks: T2.3, T2.5` added.

`game-spec/verification/<group>.md` holds verifier fragments.

## Merge protocol

1. Builder sets the task to `review` with evidence.
2. A different agent (a verifier) checks the task's `Done when` line. Pass moves the task to `done`. Fail returns it to the builder with the failing line quoted.
3. The orchestrator merges `done` tasks in dependency order, then builds and runs the milestone.
4. On a merge conflict, the later task's builder rebases. Conflicts are never resolved by redesigning.
5. A wave is complete when all its tasks are merged and the milestone runs.

## Spec Queries and Change Control while parallel

- A blocking query pauses only tasks listed under `Blocks`. The rest of the wave continues.
- The orchestrator batches open queries and asks the human once, with a recommendation for each.
- An approved Change Request invalidates every in-flight task that cites an affected ID. See `references/change-control.md`.

## Limits and cost

- Run 3 to 5 agents at once. More mostly adds merge and review work.
- Keep tightly coupled work with one agent: game feel, tuning, camera and input response.
- Parallel runs multiply token usage. State the expected agent count to the human before dispatching a wave.
- If agents cannot be spawned, run each wave's tasks one after another using the same board, branches and checks.

## Anti-patterns

- Two builders owning one path "just this once".
- A builder verifying its own task.
- A researcher's recommendation applied as a design decision without the human.
- Skipping wave 0 contracts to start faster.
- Resolving a conflicting contract inside a builder branch instead of raising a query.
