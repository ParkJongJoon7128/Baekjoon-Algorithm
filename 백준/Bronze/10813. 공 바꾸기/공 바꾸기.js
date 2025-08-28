const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const basket = [];

for (let i = 0; i < N; i++) {
  basket.push(i + 1);
}

for (let j = 0; j < M; j++) {
  const [a, b] = input[j + 1].split(" ").map(Number);

  let temp = basket[a - 1];
  basket[a - 1] = basket[b - 1];
  basket[b - 1] = temp;
}

console.log(basket.join(" "));
