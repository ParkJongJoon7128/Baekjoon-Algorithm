const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let result = 0;

function merge_sort(array, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(array, p, q);
    merge_sort(array, q + 1, r);
    merge(array, p, q, r);
  }
}

function merge(array, p, q, r) {
  let temp = [];
  let i = p;
  let j = q + 1;
  let t = 0;

  while (i <= q && j <= r) {
    if (array[i] <= array[j]) {
      temp[t++] = array[i++];
    } else {
      temp[t++] = array[j++];
    }
  }

  while (i <= q) {
    temp[t++] = array[i++];
  }
  while (j <= r) {
    temp[t++] = array[j++];
  }

  i = p;
  t = 0;

  while (i <= r) {
    if (--K === 0) {
      result = temp[t];
    }
    array[i++] = temp[t++];
  }
}

merge_sort(arr, 0, arr.length - 1);

if (K <= 0) {
  console.log(result);
}
if (K > 0) {
  console.log(-1);
}
