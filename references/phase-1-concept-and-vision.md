# Phase 1: Concept and Vision

Goal: turn a rough idea into a short Game Vision that answers "what are we actually making?" before any detail is written. Do not write a full design doc from a one-line idea.

## Step 1: Explore

Work out what is interesting about the idea. Use the questions that apply to this game, skip the rest. Adapt wording to the genre, since a lighthouse story has no "win condition" and a puzzle game has no "vehicle".

- **Player experience:** What should the player feel? What do they do repeatedly, or what do they experience repeatedly?
- **Differentiator:** What makes this different from the nearest existing game?
- **Audience and session:** Who plays it, on what device, for how long at a time?
- **Platform and tech:** Browser, desktop, mobile? Engine or library preference? Solo or multiplayer?
- **Scope reality:** What is the intended size (hours of play, number of levels or locations)? Who is building it and how much time is there?
- **Exclusions:** What should this game deliberately not be?

Decide per question whether to **ask**, **research**, or **recommend**. If the user says "research similar games", return comparable games, mechanics that worked, possible differentiators, technical risks and two or three directions with a recommendation. The user picks the direction.

Ask in one batch of at most five questions, each with your recommended answer, so the user can reply "go with your recommendations" and move on.

## Step 2: Write 00_Game_Vision.md

Keep it to one or two pages. Template:

```
# Game Vision: <working title>
Status: DRAFT | APPROVED <date>

Genre / form:
Player fantasy (one sentence):
Core experience (what the player does or experiences, moment to moment):
Audience and platform:
Session length and total length:
Visual and audio identity (a few concrete words, not a style guide yet):
Design pillars (3 to 5, each with a "this means we..." line):
What makes it distinct:
Scope target (small / medium, rough size):
Non-goals (things we deliberately will not do):
Key risks and assumptions:
Open questions:
```

## Quality example (strong)

```
Genre / form: Single-player logic puzzle, browser, touch and mouse
Player fantasy: You are the engineer keeping a city lit during a crisis.
Core experience: Rotate and connect grid segments to route power to every
  district before a load meter overflows. Each level is solved in 2 to 6 minutes.
Design pillars:
  1. Readable at a glance: state of the grid is understandable in under 3 seconds.
     (we use color and shape, never text, to show load)
  2. One idea per level: each level introduces or twists exactly one rule.
  3. Calm tension: pressure comes from the load meter, never from a real-time timer.
Non-goals: no multiplayer, no level editor, no story cutscenes.
Risks: difficulty curve is hard to tune without playtesting.
```

## Weak example (do not write this)

```
Genre: Puzzle. Core experience: fun and engaging puzzles with great visuals.
Pillars: Fun, Polish, Replayability.
```

Why it fails: nothing is decidable. "Fun" cannot be tested, no scope, no exclusions, and any feature could be justified by it.

## Gate 1 checklist

- A stranger could tell this game apart from its nearest neighbor.
- Pillars are specific enough to reject a feature.
- Non-goals exist and are real.
- Scope target is stated and plausible for the team and time available.
- The user has said the Vision is approved.
