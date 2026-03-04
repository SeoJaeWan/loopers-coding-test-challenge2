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
    const [a, b, c] = inputs[0].split(" ").map((i) => Number(i));
    const totalTime = inputs[1];

    let result = a;
    const extraTime = totalTime - 30;
    if (extraTime > 0) {
      result += Math.ceil(extraTime / b) * c;
    }

    console.log(result);
  });
