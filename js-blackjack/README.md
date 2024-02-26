# [Javascript Blackjack (click me 🥺👉👈)](https://kr222.github.io/sei-projects/js-blackjack)

## to do:

- [x] variables to hold hand values for player and dealer (lines 1-5)
- [x] variables to check number of aces for player and dealer (lines 7-13)
- [x] hidden dealer card variable to store value without displaying it (lines 15-16)
- [x] array to store deck of cards, and function to shuffle it (lines 31-75)
- [x] boolean variable to allow you to hit <draw another card> (lines 21-22)
- [x] function to start game (lines 77-88)
- [x] function to parse data - card from deck -> split strings -> integers (lines 90-106)
- [x] function to check number of aces held in hand (lines 108-115)
- [x] game initialisation (lines 24-29)
- [x] dealer must draw to 16 (lines 88-100)
- [x] add bank functionality
- [ ] tidy up this readme before wednesday night

## known bugs

- dealer sometimes doesn't draw past 16 if they're holding an ace
- bank amount code breaks if input box is left blank when clicking "top up"
- hands refresh after clicking top up (yes you will lose your amazing hand)

## future improvements/ stretch goals:

- change bet amount using input
- blackjack pays 3 to 2
- end game when busting from hitting cards
- combine multiple decks to draw from (possible to have duplicate cards [no. of duplicates depends on no. of decks]
- play multiple hands
- bet on pair occurring in the first 2 cards dealt (decrease bank if no pair, add bank if pair)
- option to split hand and play them seperately if dealt a pair
- make css nicer
- tidy up js
- event listener for keypresses -> shift for hit, enter for stay (possibly add animations)
- sound effects
- card back selector
- table themes (different colours for the felt table surface, buttons, and fonts)
- use .svg files instead of .png files for cards to reduce filesize
- poker game

## presentation

- 10 mins only
- demo game
- talk about that codes that were interesting, irritating, weird, etc to you

## deliverables

- codes (commit and push before 9:30am, Tuesday 27th Feb)
- readme.md -> due before 10:00pm, Wednesday 28th Feb
- remember to add the link to your deployed game to project tracker and readme

## noteworthy code

- create deck and shuffle deck (lines 75-116)
- function to get card values and ace counter (lines 177-202)
- button functionality code (lines 151-175)
- game "reset" mechanism through a function (lines 45-66)
- css button:hover and button:active can change the cursor, on top of animating the button

## interesting/fun

- using css to make things nice (animations, colours, eventListeners)
- indenting the cards to resemble lines of code
- parseInt() function
- Math.floor(Math.random())
- document.querySelector
- classList.add and classList.remove
- if else, while loop, for loop

## irritations

- coming up with names for variables
- using css after a few hours to make things look passable (i still don't fully understand flexbox)
- aligning things in css
- console.log() -ing every step to see if anything broke
- code doesn't work the way my brain works sometimes

## weird

- how difficult it is to draw a line of text over a curved axis
