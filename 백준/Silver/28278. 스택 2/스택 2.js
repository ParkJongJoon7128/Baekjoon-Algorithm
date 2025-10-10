const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const stack = [];
const output = [];

for (let i = 0; i < N; i++) {
  const parts = input[i].split(" ");
  const cmd = Number(parts[0]);

  if (cmd === 1) {
    const val = Number(parts[1]);
    stack.push(val);
  } else if (cmd === 2) {
    output.push(stack.length ? stack.pop() : -1);
  } else if (cmd === 3) {
    output.push(stack.length);
  } else if (cmd === 4) {
    output.push(stack.length ? 0 : 1);
  } else if (cmd === 5) {
    output.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(output.join("\n"));
