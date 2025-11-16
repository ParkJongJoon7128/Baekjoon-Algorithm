const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const arr = [];
let count = 0;

function recursion(str, l, r) {
  count += 1;

  if (l >= r) {
    return 1;
  } else if (str[l] !== str[r]) {
    return 0;
  } else {
    return recursion(str, l + 1, r - 1);
  }
}

function isPalindrome(str) {
  return recursion(str, 0, str.length - 1);
}

for (let i = 1; i <= T; i++) {
  count = 0;
  console.log(isPalindrome(input[i]), count);
}
