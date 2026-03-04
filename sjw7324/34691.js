const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

const answer = {
  animal: "Panthera tigris",
  flower: "Forsythia koreana",
  tree: "Pinus densiflora",
};

readline
  .on("line", function (line) {
    inputs.push(line.trim());
  })
  .on("close", function () {
    for (const input of inputs) {
      if (input === "end") {
        break;
      }

      console.log(answer[input]);
    }
  });
