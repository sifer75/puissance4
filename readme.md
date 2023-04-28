# puissance 4

This is a game project that aims to provide an enjoyable gaming experience. The project focuses on creating an interactive game for players.

## Getting Started

To get started with the game:

1. My Clone repository : https://github.com/sifer75/puissance4.git
2. URL game : https://sifer75.github.io/puissance4/

## Game Description

The game offer a funny gameplay experience with challenge. Players can compete for victory by managing to make a line of 4 tokens of the same color. 

## Features

- Turn-by-turn, Both players can add a pawn to one of the 7 available columns. 
- Each turn, one of the two players will counter the blow of his opponent or try to open his game. They can make a line in vertical, diagonal or horizontal.
- If one of two players manages to make a line of 4; its win. They can restart a game.

## Development Process

- I stated the game the 21/04/2023 and since the week 1 work about the biggest part of the game,
- I wanted to start by the javascript part and finish with CSS.
- I started by drawing on a real board what do i needed like my header, a grid, who many circles...

## Project Management

- I tried to start with a class with a row and a column as a processor. The problem was that in each "div", I had a class line and a class column. It was too hard to access values with the DOM so i change my strategy and i create a for loop who create a div "grille" of 42 ID in a string and implement on each cercle an string of all their position.
- I create a function "afficherJeton" who print a piece and position it in the right place.
- I create a function "finDePartie" who verify each direction of the board to check if each turn, there is a win condition.

## Design Consideration

- when i finished the most of the game, i wanted to create a cartoon design using warm colors and a cartoon image.

## Mistakes

- My biggest mistake was that I had reversed my columns and rows. Since columns are normally 7 boxes and rows 6, I had to take the problem into consideration for each function

## Improvements

- In the future, i ll add a chronometer for each player to make the game more fun and make them play faster