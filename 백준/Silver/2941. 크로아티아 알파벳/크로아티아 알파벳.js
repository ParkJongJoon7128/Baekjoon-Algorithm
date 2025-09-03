const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let str = input;
const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let i of arr) {
  str = str.replaceAll(i, "*");
}

console.log(str.length);
