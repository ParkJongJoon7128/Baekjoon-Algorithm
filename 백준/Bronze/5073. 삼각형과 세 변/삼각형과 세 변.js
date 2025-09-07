const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let line of input) {
  const [a, b, c] = line.split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  const arr = [a, b, c];
  const max = Math.max(...arr);
  const others = arr.reduce((a, c) => a + c, 0) - max;

  if (max >= others) {
    console.log("Invalid");
  } else {
    if (a === b && b === c) {
      console.log("Equilateral");
    } else if (a === b || b === c || c === a) {
      console.log("Isosceles");
    } else if (a !== b && b !== c && c !== a) {
      console.log("Scalene");
    }
  }
}
