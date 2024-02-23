// variable for dealer hand total value
let dealerHand = 0;

// variable for player hand total value
let playerHand = 0;

// respective hand ace counter -
// in blackjack, an ace can be either a 1 or an 11
// this variable keeps track of the number of aces in hand
// and manipulates the total hand value accordingly
// (i.e. if current hand <= 10, an ace is counted as 11, else as a 1)
let dealerAces = 0;
let playerAces = 0;

// dealer hidden card value (card not shown to player but still holds a value)
let dealerHidden;

// variable for deck
let deck;

// variable for allowing you to hit - true as long as your hand value is < 21
let lemmeHit = true;

// init on window load - build deck function, shuffle deck function, and start game function (possibly add a button to restart everything)
window.onload = () => {
  createDeck();
  shuffleDeck();
  startGame();
};

// function to build deck arrays (for loop in a for loop)
const createDeck = () => {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let suits = ["S", "H", "C", "D"];
  deck = [];

  // this for loop creates a sequential(unshuffled) deck by pushing to the deck array:
  // S(pades), H(earts), C(lubs), (D)iamonds for every:
  // value (A to K), resulting in [A-S, A-H, A-C, A-D...] and so on
  for (const value of values) {
    for (const suit of suits) {
      deck.push(value + "-" + suit);
    }
  }
  // check if deck array exists with 52 cards in sequential order
  // console.log(deck);
};

// function to shuffle deck
const shuffleDeck = () => {
  for (let i = 0; i < deck.length; i++) {
    // randomly generates a number between 0 and 51
    let j = Math.floor(Math.random() * deck.length);
    // swaps 2 cards based on the random numbers generated
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  // check if deck has been shuffled
  console.log(deck);
};

// start game function
const startGame = () => {
  // assigns a card from the deck to the dealer's hidden card
  dealerHidden = deck.pop();
  // runs a function to check the numerical value of the hidden card for the total value counter
  dealerHand += getValue(dealerHidden);
  dealerAces += checkAces(dealerHidden);
  // check if dealer's hidden card and their hand value has been assigned correctly
  // console.log(
  //   `Dealer's hidden card: ${dealerHidden}, Dealer's hand value: ${dealerHand}`
  // );

  // dealer must draw to 16
  while (dealerHand < 17) {
    let cardAsset = document.createElement("img");
    let card = deck.pop();
    cardAsset.src = "./cards/png/" + card + ".png";
    dealerHand += getValue(card);
    dealerAces += checkAces(card);
    document.querySelector("#dealer-cards").append(cardAsset);
    // check if dealer's total hand value tallies up correctly
    console.log(
      `Dealer's hidden card: ${dealerHidden}, Dealer's hand value: ${dealerHand}, Dealer's Ace count: ${dealerAces}`
    );
  }

  // player's initial 2 cards dealt
  for (let i = 0; i < 2; i++) {
    let cardAsset = document.createElement("img");
    let card = deck.pop();
    cardAsset.src = "./cards/png/" + card + ".png";
    playerHand += getValue(card);
    playerAces += checkAces(card);
    document.querySelector("#player-cards").append(cardAsset);
    // -[x] check if player's total hand value tallies up correctly
    console.log(
      `Player's hand value: ${playerHand}, Player's Ace count: ${playerAces}`
    );
  }

  document.querySelector("#hit-button").addEventListener("click", hit);
  document.querySelector("#stay-button").addEventListener("click", stay);
};

// function to check card values (i.e. JQK = 10, A = 11 or 1 etc.)
const getValue = (card) => {
  let cardData = card.split("-");
  let cardValue = cardData[0];

  // check if card's value is not a number (i.e. is A,J,Q,K instead of 2,3,4,5,6,7,8,9)
  // since "A" can be 1 or 11, return 11. the other picture cards have a value of 10
  // the function and logic to make the "A" equal to 1 will be further down
  if (isNaN(cardValue)) {
    if (cardValue === "A") {
      return 11;
    } else {
      return 10;
    }
  }
  return parseInt(cardValue);
};

// function to check aces
const checkAces = (card) => {
  if (card[0] === "A") {
    return 1;
  } else {
    return 0;
  }
};

// function for player to hit
const hit = () => {
  if (lemmeHit === false) {
    return;
  } else {
    let cardAsset = document.createElement("img");
    let card = deck.pop();
    cardAsset.src = "./cards/png/" + card + ".png";
    playerHand += getValue(card);
    playerAces += checkAces(card);
    document.querySelector("#player-cards").append(cardAsset);
    // -[x] check if player's total hand value tallies up correctly
    console.log(
      `Player's hand value: ${playerHand}, Player's Ace count: ${playerAces}, Deck size: ${deck.length}`
    );

    if (aceValue(playerHand, playerAces) > 21) {
      lemmeHit = false;
    }
  }
};

const aceValue = (hand, aces) => {
  while (hand > 21 && aces > 0) {
    hand -= 10;
    aces -= 1;
  }
  return hand;
};

const stay = () => {
  dealerHand = aceValue(dealerHand, dealerAces);
  playerHand = aceValue(playerHand, playerAces);
  // prevent player from hitting after clicking stay
  lemmeHit = false;
  // reveal dealer's hidden card
  document.querySelector("#dealer-cardback").src =
    "./cards/png/" + dealerHidden + ".png";

  let resultsText = "";
  if (playerHand > 21) {
    resultsText = "You lose";
  } else if (dealerHand > 21) {
    resultsText = "You win";
  } else if (dealerHand === playerHand) {
    resultsText = "It's a tie";
  } else if (dealerHand < 21 && playerHand < 21 && dealerHand > playerHand) {
    resultsText = "You lose";
  } else if (dealerHand < 21 && playerHand < 21 && dealerHand < playerHand) {
    resultsText = "You win";
  }

  console.log(`${resultsText}... dealer: ${dealerHand}, player: ${playerHand}`);
};

// to do:
// - [x] variables to hold hand values for player and dealer (lines 1-5)
// - [x] variables to check number of aces for player and dealer (lines 7-13)
// - [x] hidden dealer card variable to store value without displaying it (lines 15-16)
// - [x] array to store deck of cards, and function to shuffle it (lines 31-75)
// - [x] boolean variable to allow you to hit <draw another card> (lines 21-22)
// - [x] function to start game (lines 77-88)
// - [x] function to parse data - card from deck -> split strings -> integers (lines 90-106)
// - [x] function to check number of aces held in hand (lines 108-115)
// - [x] game initialisation (lines 24-29)
// - [x] dealer must draw to 16 (lines 88-100)
// - [] blackjack pays 3 to 2
// - [] event listener for keypresses -> shift for hit, enter for stay (possibly add animations)

// future improvements/ stretch goals:
// -combine multiple decks to draw from (possible to have duplicate cards [no. of duplicates depends on no. of decks]
// -play multiple hands
// -bet on pair occurring in the first 2 cards dealt (decrease bank if no pair, add bank if pair)
// -option to split hand and play them seperately if dealt a pair
// -sound effects
// -card back selector
// -table themes (different colours for the felt table surface, buttons, and fonts)
// -poker game
