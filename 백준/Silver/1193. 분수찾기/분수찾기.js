const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let X = Number(input);
let line = 1;

while (line < X) {
  X -= line;
  line++;
}

let a = 0;
let b = 0;

if (line % 2 === 0) {
  a = X;
  b = line - X + 1;
} else if (line % 2 === 1) {
  a = line - X + 1;
  b = X;
}

console.log(`${a}/${b}`);
