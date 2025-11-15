const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const words = input.slice(1, N + 1).filter((w) => w.length >= M);

const map = new Map();
for (let w of words) {
  map.set(w, (map.get(w) || 0) + 1);
}

const sorted = [...map].sort(([wordA, countA], [wordB, countB]) => {
  if (countA !== countB) return countB - countA;

  if (wordA.length !== wordB.length) return wordB.length - wordA.length;

  return wordA < wordB ? -1 : 1;
});

console.log(sorted.map(([word]) => word).join("\n"));
