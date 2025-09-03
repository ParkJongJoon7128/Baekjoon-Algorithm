// 전공 평점 = (학점 x 과목평점)의 합 / 학점의 총합
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const grade = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];
const score = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0];

let gradeXscore = 0;
let total_score = 0;
let avg = 0;

for (let i = 0; i < 20; i++) {
  const [n, s, g] = input[i].split(" ");

  if (g !== "P") {
    gradeXscore += Number(s) * score[grade.indexOf(g)];
    total_score += Number(s);
  }
}

avg = (gradeXscore / total_score).toFixed(6);

console.log(avg);
