const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
const result = [];

for (let i = 1; i <= N; i++) {
  let M = String(i);
  let digit = M.split("").map(Number);
  let sum = 0;
  for (let j = 0; j < digit.length; j++) {
    sum += digit[j];
  }

  sum += Number(M);

  if (sum === N) {
    result.push(M);
  }
}

if (result.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...result));
}
