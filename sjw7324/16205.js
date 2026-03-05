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
    const [typeStr, str] = inputs[0].split(" ");
    const type = Number(typeStr);

    const toWords = (type, s) => {
      if (type === 2) {
        return s.split("_");
      }
      return s
        .replace(/([A-Z])/g, " $1")
        .trim()
        .split(" ")
        .map((w) => w.toLowerCase());
    };

    const capitalize = (w) => w[0].toUpperCase() + w.slice(1);

    const words = toWords(type, str);

    const camel = words[0] + words.slice(1).map(capitalize).join("");
    const snake = words.join("_");
    const pascal = words.map(capitalize).join("");

    console.log(camel);
    console.log(snake);
    console.log(pascal);
  });
