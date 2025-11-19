const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = "";

function cantor(number) {
  let divided = Math.floor(number / 3);
  if (divided === 0) {
    return "-";
  }
  let space = "";
  for (let i = divided; i < divided * 2; i++) {
    space += " ";
  }

  return `${cantor(divided)}${space}${cantor(divided)}`;
}

for (let n of input) {
  let number = Math.pow(3, n);
  result += `${cantor(number)}\n`;
}

console.log(result);
