const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const queue = [];
let head = 0; // 큐의 시작 인덱스
const result = [];

for (let i = 1; i <= N; i++) {
  const cmd = input[i].split(" ");

  switch (cmd[0]) {
    case "push":
      queue.push(Number(cmd[1]));
      break;
    case "pop":
      if (head === queue.length) result.push(-1);
      else result.push(queue[head++]);
      break;
    case "size":
      result.push(queue.length - head);
      break;
    case "empty":
      result.push(head === queue.length ? 1 : 0);
      break;
    case "front":
      result.push(head === queue.length ? -1 : queue[head]);
      break;
    case "back":
      result.push(head === queue.length ? -1 : queue[queue.length - 1]);
      break;
  }
}

console.log(result.join("\n"));