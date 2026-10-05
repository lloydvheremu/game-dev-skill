# Genre note: Puzzle

Load this when the game is built around solving discrete problems (logic, spatial, match, physics or word puzzles).

## Adjust the Vision questions
- What is the one rule or idea the player learns, and how does it get twisted over time?
- How long is a single puzzle, and what happens on failure (retry, undo, penalty)?
- Is there pressure (a meter, limited moves) or is it fully relaxed?

## Roles that usually matter
Puzzle designer (rules and difficulty curve), level designer (the puzzles themselves), UI/UX designer (readability is most of the game). Art, audio and network roles are often small or absent.

## Spec emphasis
- A precise rules spec with every edge case (this is where puzzle bugs live).
- A difficulty curve table: level number, new idea introduced, expected solve time.
- Level data format in the Technical Spec, so levels can be added without code changes.
- Undo, reset and hint behavior.

## Core loop validation focus
One level, solved by hand. Ask whether the player got stuck without knowing why (bad) versus stuck while thinking (good).

## Common pitfalls
Levels that depend on unstated rules, difficulty spikes, and no way to verify that every level is solvable. Specify a solvability check (a solver or a manual verification step) in the Technical Spec.
