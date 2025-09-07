const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

if (A + B + C !== 180) {
  console.log("Error");
} else {
  if (A === 60 && B === 60 && C === 60) {
    console.log("Equilateral");
  } else if (A + B + C === 180 && (A === B || B === C || C === A)) {
    console.log("Isosceles");
  } else if (A + B + C === 180 && A !== B && B !== C && C !== A) {
    console.log("Scalene");
  }
}
