const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

const arr = [];
let divisor = 2;

while (N >= 2) {
  if (N % divisor === 0) {
    arr.push(divisor);
    N /= divisor;
  } else {
    divisor++;
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
