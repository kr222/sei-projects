# Javascript Blackjack

## Screenshots
- Starting the game
![Game Start](https://github.com/kr222/sei-projects/assets/59068114/e7c10538-ea9c-459a-872d-6ab95204eb3e)

- Choosing 'Hit'
![Hit](https://github.com/kr222/sei-projects/assets/59068114/fa3e94a8-81e9-4fac-9dab-0c4e02592537)

- Choosing 'Stay'
![Stay](https://github.com/kr222/sei-projects/assets/59068114/8eb535e6-3721-4cd1-8e3c-95363b178ad2)

- Winning a hand
![Winning](https://github.com/kr222/sei-projects/assets/59068114/55d71688-7b9a-44a5-a12a-664ac2477089)

- Losing a hand
![Losing](https://github.com/kr222/sei-projects/assets/59068114/4a9d074b-630f-4aa3-b27e-45433e6c9b06)

- Bank balance falling below minimum
![Bank below minimum balance](https://github.com/kr222/sei-projects/assets/59068114/0265f926-8536-445b-bbdf-c626a2188814)

## Technologies Used


- HTML
- CSS
- JavaScript

## Getting Started

[Start Game](https://kr222.github.io/sei-projects/js-blackjack)

- The main goal of Blackjack is to get a better hand of cards than the dealer, without exceeding a hand value of 21
  -The player can either hit (draw a card from the deck), or stay (use your current hand's cards against the dealer's)
- An 'Ace' can have a value of either 1 or 11, depending on the cards in hand
- If both dealer and player's hand values are under 21, the one with the higher hand value wins
- If both dealer and player's hand values are over 21, it is considered a loss to the player
- If both dealer and player have the same value, it is considered a tie
- The minimum bank balance for this particular game is 20 credits. Should the bank balance fall below this amount, the player will be required to top up some cash to continue playing.

## Icebox Items

- Change bet amount using an input
- Winning with a Blackjack (21) pays 3 to 2
- End game when busting from hitting cards (going over 21)
- Combine multiple decks to draw from (possible to have duplicate cards [no. of duplicates depends on no. of decks]
- Play multiple hands against the dealer at the same time
- Bet on pair occurring in the first 2 cards dealt (decrease bank if no pair, add bank if pair)
- Option to split hand and play them seperately if dealt a pair
- Make CSS nicer
- Event listener for keypresses -> shift for hit, enter for stay (possibly add animations)
- Sound effects
- Card back selector
- Table themes (different colours for the felt table surface, buttons, and fonts)
- Use .svg files instead of .png files for cards to reduce filesize
- Poker game based on the same deck foundation
