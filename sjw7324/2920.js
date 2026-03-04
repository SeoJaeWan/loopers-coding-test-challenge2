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
    const ascending = "1 2 3 4 5 6 7 8";
    const descending = "8 7 6 5 4 3 2 1";
    const input = inputs[0];

    if (ascending === input) console.log("ascending");
    else if (descending === input) console.log("descending");
    else console.log("mixed");
  });
