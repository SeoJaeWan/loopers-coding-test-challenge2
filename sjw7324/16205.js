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
    const [currentType, str] = inputs[0].split(" ");

    console.log(str.split(/[A-Z|\_]/));
  });
