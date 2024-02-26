// variable for bank
let cashMoney = 22;
document.querySelector("#bankAmount").innerText = cashMoney;
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
let lemmeStay = true;

// init on window load - build deck function, shuffle deck function, and start game function (possibly add a button to restart everything)
const initialisation = () => {
  createDeck();
  shuffleDeck();
  startGame();
};

window.onload = initialisation;

// function to top up amount input to bank
const topUpBank = () => {
  cashMoney += parseInt(document.querySelector("#top-up-input").value);
  document.querySelector("#bankAmount").innerText = cashMoney;
  startGame();
  nextHand();
  console.log(
    `bank: ${cashMoney}, input value: ${
      document.querySelector("#top-up-input").value
    }`
  );
};

// function to start next hand by resetting everything
const nextHand = () => {
  document.querySelector("#player-cards").innerHTML = "";
  document.querySelector("#dealer-cards").innerHTML =
    "<img id='dealer-cardback' src='./cards/png/1B.png'>";
  lemmeHit = true;
  lemmeStay = true;
  playerHand = 0;
  playerAces = 0;
  dealerHidden = 0;
  dealerHand = 0;
  dealerAces = 0;
  document.querySelector("#dealer-hand").innerText = "";
  document.querySelector("#player-hand").innerText = "";
  document.querySelector("#results").innerText = "";
  document.querySelector("#next-hand-button").classList.add("hide");
  document.querySelector("#hit-button").classList.remove("hide");
  document.querySelector("#stay-button").classList.remove("hide");
  console.log(`dealer ${dealerHand}, player ${playerHand}`);
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
  }

  // button functionality
  document.querySelector("#hit-button").addEventListener("click", hit);
  document.querySelector("#stay-button").addEventListener("click", stay);
  document
    .querySelector("#next-hand-button")
    .addEventListener("click", nextHand);
  document.querySelector("#top-up-button").addEventListener("click", topUpBank);

  // if bank is lower than a specified value, prevent player from hitting/staying and prompt with a "top up bank" input. once a certain bank amount has been reached, continue game
  if (cashMoney <= 20) {
    lemmeHit = false;
    lemmeStay = false;
    document.querySelector("#top-up-input").classList.remove("hide");
    document.querySelector("#top-up-button").classList.remove("hide");
    document.querySelector("#hit-button").classList.add("hide");
    document.querySelector("#stay-button").classList.add("hide");
  } else {
    lemmeHit = true;
    lemmeStay = true;
    document.querySelector("#top-up-input").classList.add("hide");
    document.querySelector("#top-up-button").classList.add("hide");
    document.querySelector("#hit-button").classList.remove("hide");
    document.querySelector("#stay-button").classList.remove("hide");
  }
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

    if (aceValue(playerHand, playerAces) > 21) {
      lemmeHit = false;
    }
  }
};

// function to calculate hand value based on no. of aces in hand
const aceValue = (hand, aces) => {
  while (hand > 21 && aces > 0) {
    hand -= 10;
    aces -= 1;
  }
  return hand;
};

// function to stay
const stay = () => {
  if (lemmeStay === false) {
    return;
  }
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
    cashMoney -= 5;
  } else if (dealerHand > 21) {
    resultsText = "You win";
    cashMoney += 5;
  } else if (dealerHand === playerHand) {
    resultsText = "It's a tie";
  } else if (dealerHand <= 21 && playerHand < 21 && dealerHand > playerHand) {
    resultsText = "You lose";
    cashMoney -= 5;
  } else if (dealerHand < 21 && playerHand <= 21 && dealerHand < playerHand) {
    resultsText = "You win";
    cashMoney += 5;
  }

  if (lemmeHit === false) {
  }
  document.querySelector("#bankAmount").innerText = cashMoney;
  document.querySelector("#dealer-hand").innerText = dealerHand;
  document.querySelector("#player-hand").innerText = playerHand;
  document.querySelector("#results").innerText = resultsText;
  document.querySelector("#next-hand-button").classList.remove("hide");
  document.querySelector("#hit-button").classList.add("hide");
  document.querySelector("#stay-button").classList.add("hide");
  console.log(
    `${resultsText}... dealer: ${dealerHand}, player: ${playerHand}, ${cashMoney}`
  );
};
