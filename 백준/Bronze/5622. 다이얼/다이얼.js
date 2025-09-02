const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const array = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

let time = 0;
let plusTime = 2;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j].includes(input[i])) {
      time += plusTime + j + 1;
    }
  }
}

console.log(time);
