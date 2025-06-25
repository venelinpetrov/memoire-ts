# Mémoire

Mémoire is a single-player puzzle game where the goal is to find all matching pairs of cards on a grid by flipping them two at a time. The challenge lies in remembering the position of each card.

## Description

**Setup**

- The game starts with a grid of cards placed face down.
- Each card has a matching pair somewhere on the grid.

**Player turn**

- The player selects and flips two cards face up.
- If the cards match, they are removed (or left face up).
- If the cards do not match, they are flipped face down again after a short delay.

**Goal**

- The game ends when all cards have been matched and removed.
- The objective is to finish the game using the fewest number of moves (a "move" is one pair of cards flipped).

## Features

- Board with cards
- Score (move count)
- Difficulty levels (more cards)
- Win condition
- Reset / Start over

## Implementation (plan)

1. Objects

- Card
- Board
- Score
- Minimal UI for e.g. New game / start over etc. (TBD)

2. Event handling

- Click on each card
- Start over

3. State

- Card state (face up / face down)
- Board state (opened / remaining cards)
- Score
- Level

4. Animations

- Card flip
- Card disappear
- Draw cards to the board (maybe)

