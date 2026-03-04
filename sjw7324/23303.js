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
    inputs.shift();

    const parsed = inputs.map((s) => {
      const [name, value] = s.split(" ");
      return [name, Number(value)];
    });

    parsed.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    console.log(parsed[0][0]);
  });
