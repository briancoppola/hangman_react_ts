# hangman_react_ts

A lovely web-based version of the classic Hangman game using React and TypeScript.

## Description

This is a fully-funtioning Hangman game designed and coded from scratch using a combination of React, TypeScript, JavaScript, CSS, and HTML. The rules are familiar: Reveal the mystery word by taking turns guessing if a letter is contained in the word. Correct guesses will reveal the location(s) of that letter in the word, and incorrect guesses will draw a section of a hanging stickman. The objective is to reveal the complete word before the stickman is fully revealed.

After the game ends, the play area will turn green (a win) or red (a loss), and a message will appear in the status area with a replay button.

## Features

- Game is fully playable with the keyboard as well as the mouse, and letter guesses can be made with both methods
- Letter buttons will self-disable when chosen and change color based on whether or not it is in the mystery word
- Status bar that displays game result message and replay button
- The game and most elements of the website are responsive (aside from the target word, which may cause horizontal scrolling on mobile devices with larger words)

## Screenshot

![screenshot](https://github.com/briancoppola/hangman_react_ts/assets/58447266/01426a0b-c2f5-498a-9507-9a5a889f8d4b)

## Setup

To run this project, download all files to a new folder and install it locally using npm:

```
$ cd ../[new folder]
$ npm install
$ npm
```

## To do

- Create a win-loss tally for current player
- Create animations for stick man
- Adjust size of target words so they will fit on mobile screens
