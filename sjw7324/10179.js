const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [_, ...prices] = input;

    for (const price of prices) {
      const salePrice = parseFloat(price * 0.8).toFixed(2);

      console.log(`$${salePrice}`);
    }
  });
