# Genre note: Racing

Load this when the central experience is driving or racing vehicles (arcade, sim, or hybrid).

## Adjust the Vision questions
- What is the source of fun: speed, drifting, overtaking, shortcuts, combat, traffic, or something else?
- Arcade or simulation handling? Single-player, local or online multiplayer?
- Track-based, open world, or point to point?

## Roles that usually matter
Gameplay designer (handling model, race rules, progression), vehicle artist, environment artist or track designer, level designer (layouts, checkpoints), technical designer, UI/UX (HUD), and a network programmer if multiplayer. Audio matters more than usual (engine and speed feedback).

## Spec emphasis
- Handling model parameters with concrete values (top speed, acceleration curve, grip, drift threshold) and the intended feel in words.
- Camera behavior at speed, which affects readability and nausea.
- Track readability: how the player knows where the next turn is.
- Race rules, checkpoints, reset behavior, AI opponents if any.
- If multiplayer: the netcode approach, tick rate and latency tolerance, written down before any code.

## Core loop validation focus
One lap on a simple loop track. Ask whether driving feels good with no scenery, and whether the player wants a second lap.

## Common pitfalls
Handling that is realistic but not fun, visual clutter at speed, narrow tracks that fight the camera, and scoping multiplayer as an afterthought. Multiplayer should be a Must or out of scope, rarely "maybe".
