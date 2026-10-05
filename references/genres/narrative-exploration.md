# Genre note: Narrative / Exploration

Load this when the experience is driven by story, atmosphere, discovery or walking through spaces, with few or no traditional mechanics.

## Adjust the Vision questions
- What should the player feel by the end, and what do they learn or uncover?
- What does the player actually do (walk, look, interact, choose)? Is there any failure state at all?
- How long is the experience, and is it linear or branching?
- Do not ask about win conditions, balancing or progression unless the user raises them.

## Roles that usually matter
Narrative designer or writer, art director, level or environment designer, audio designer (often central), UI/UX designer (minimal and unobtrusive), and a programmer for interaction and state. Gameplay designer is a light role here.

## Spec emphasis
- A narrative spec: beats in order, what triggers each, what the player can miss.
- Environment spec: spaces, landmarks, how the player is guided without markers.
- Audio and atmosphere spec: this carries a large part of the experience.
- Interaction spec: every interactable object, its trigger and result.
- Pacing: target duration per section.

## Core loop validation focus
A grey-box space with one discoverable thing. Ask whether the player kept exploring after the first discovery and why.

## Common pitfalls
Invisible guidance (players get lost), content gating that frustrates, over-writing relative to scope, and leaving narrative branching undefined until implementation. If branching exists, specify it as a table of states, not prose.
