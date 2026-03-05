const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

readline
  .on("line", function (line) {
    inputs.push(line.trim());
  })
  .on("close", function () {
    const [a, m] = inputs[0].split(" ").map((str) => Number(str));
    let answer = 1;

    do {
      if ((a * answer) % m === 1) {
        console.log(answer);
        break;
      }
      answer++;
    } while (true);
  });
