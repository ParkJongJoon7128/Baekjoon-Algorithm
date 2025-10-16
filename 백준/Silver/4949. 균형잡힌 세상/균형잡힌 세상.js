const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];
const result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") {
    break;
  }

  arr.push(input[i]);
}

for (let a of arr) {
  const stack = [];
  let balanced = true;

  for (let char of a) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        balanced = false;
        break;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        balanced = false;
        break;
      }
    }
  }

  if (balanced && stack.length === 0) {
    result.push("yes");
  } else {
    result.push("no");
  }
}

console.log(result.join("\n"));
