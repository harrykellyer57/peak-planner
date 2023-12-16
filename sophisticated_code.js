/* 
 * File Name: sophisticated_code.js
 * Description: This code demonstrates a complex implementation of a card game called "Blackjack".
 * Author: Jane Doe
 * Date: 2022-10-31
 */

// Define deck suits and ranks
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = [
  "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
  "Ten", "Jack", "Queen", "King"
];

// Initialize an empty deck
let deck = [];

// Create the deck by combining suits and ranks
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    let card = {
      suit: suits[i],
      rank: ranks[j],
      value: j + 1
    };
    deck.push(card);
  }
}

// Function to shuffle the deck
function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
}

// Function to calculate the total value of a hand
function calculateHandValue(hand) {
  let value = 0;
  let hasAce = false;

  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    value += card.value;

    if (card.rank === "Ace") {
      hasAce = true;
    }
  }

  if (hasAce && value <= 11) {
    value += 10;
  }

  return value;
}

// Function to deal a card from the deck
function dealCard() {
  return deck.pop();
}

// Create players and dealer
let player = {
  name: "Player",
  hand: []
};

let dealer = {
  name: "Dealer",
  hand: []
};

// Deal initial cards to players and dealer
player.hand.push(dealCard());
dealer.hand.push(dealCard());
player.hand.push(dealCard());
dealer.hand.push(dealCard());

// Output initial hands
console.log("Player's Hand:");
console.log(player.hand);
console.log("Dealer's Hand:");
console.log(dealer.hand);

// Main game loop
let gameOver = false;

while (!gameOver) {
  let playerHandValue = calculateHandValue(player.hand);
  let dealerHandValue = calculateHandValue(dealer.hand);

  console.log("Player's Hand Value:", playerHandValue);
  console.log("Dealer's Hand Value:", dealerHandValue);

  // Check for player or dealer blackjack
  if (playerHandValue === 21 && dealerHandValue === 21) {
    console.log("Push! Both player and dealer have blackjack.");
    gameOver = true;
  } else if (playerHandValue === 21) {
    console.log("Player wins with blackjack!");
    gameOver = true;
  } else if (dealerHandValue === 21) {
    console.log("Dealer wins with blackjack!");
    gameOver = true;
  }

  // Player's turn
  if (!gameOver) {
    let decision = prompt("Do you want to hit or stand? (h/s)");

    if (decision.toLowerCase() === "h") {
      player.hand.push(dealCard());
      console.log("Player's Hand:");
      console.log(player.hand);
    } else if (decision.toLowerCase() === "s") {
      console.log("Player stands.");
      gameOver = true;
    }
  }

  // Dealer's turn
  if (!gameOver && dealerHandValue < 17) {
    dealer.hand.push(dealCard());
    console.log("Dealer's Hand:");
    console.log(dealer.hand);
  } else if (!gameOver) {
    console.log("Dealer stands.");
    gameOver = true;
  }

  // Check for player or dealer bust
  if (calculateHandValue(player.hand) > 21) {
    console.log("Player busts! Dealer wins.");
    gameOver = true;
  } else if (calculateHandValue(dealer.hand) > 21) {
    console.log("Dealer busts! Player wins.");
    gameOver = true;
  }

  // Check for player or dealer reaching a hand value of 21
  if (calculateHandValue(player.hand) === 21) {
    console.log("Player wins with 21!");
    gameOver = true;
  } else if (calculateHandValue(dealer.hand) === 21) {
    console.log("Dealer wins with 21!");
    gameOver = true;
  }
}

console.log("Game Over.");