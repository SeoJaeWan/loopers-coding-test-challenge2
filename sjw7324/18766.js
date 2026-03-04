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
    const [_, ...cases] = inputs;

    for (let i = 0; i < cases.length; i += 3) {
      const before = cases[i + 1].split(" ").sort().join("");
      const after = cases[i + 2].split(" ").sort().join("");

      if (before !== after) console.log("CHEATER");
      else console.log("NOT CHEATER");
    }
  });
