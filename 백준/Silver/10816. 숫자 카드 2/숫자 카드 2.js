const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const queries = input[3].split(" ").map(Number);

const cardMap = new Map();

for (let card of cards) {
  if (cardMap.has(card)) {
    cardMap.set(card, cardMap.get(card) + 1);
  } else {
    cardMap.set(card, 1);
  }
}

let result = [];
for (let q of queries) {
  result.push(cardMap.get(q) || 0);
}

console.log(result.join(" "));
