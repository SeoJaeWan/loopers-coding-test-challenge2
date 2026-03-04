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
    const [_, sequence] = input;
    const sequenceArray = sequence.split(" ");
    let result = 1;

    const cache = new Map();

    const loop = (index, array) => {
      if (index >= sequenceArray.length) {
        if (result < array.length) result = array.length;
        return;
      }

      for (let j = index + 1; j <= sequenceArray.length; j++) {
        const nextNum = sequenceArray[j];

        console.log(j, cache.get(j));
        if (cache.get(j) >= array.length) return;
        cache.set(j, array.length);

        if (array[array.length - 1] > parseInt(nextNum)) {
          loop(j, [...array, parseInt(nextNum)]);
        } else loop(j, array);
      }
    };

    for (let i = 0; i < sequenceArray.length; i++) {
      loop(i, [parseInt(sequenceArray[i])]);
    }

    console.log(result);
  });
