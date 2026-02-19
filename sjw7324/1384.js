const input = [
  "5",
  "Ann P N P P",
  "Bob P P P P",
  "Clive P P P P",
  "Debby P N P P",
  "Eunice P P P P",
  "6",
  "Zheng P P P P P",
  "Yeng P P P P P",
  "Xiao P P P P P",
  "Will P P P P P",
  "Veronica P P P P P",
  "Utah P P P P P",
  "0",
];

let count = 0;
let index = -1;
const groups = input.reduce((acc, cur) => {
  if (cur === "0") {
    return acc;
  }
  if (count === 0) {
    acc.push({});
    count = parseInt(cur);
    index++;
  } else {
    const splitCur = cur.split(" ");
    const name = splitCur.shift();
    const message = splitCur.reduce((acc, cur, i) => {
      if (cur === "N") {
        acc.push(i + 1);
      }

      return acc;
    }, []);

    acc[index][name] = message;
    count--;
  }

  return acc;
}, []);

for (const group of groups) {
  const GroupNumber = Object.keys(group).length;
  console.log(`Group ${GroupNumber}`);
  let isNasty = false;
  const info = Object.entries(group);
  for (let i = 0; i < info.length; i++) {
    const [name, messages] = info[i];
    if (messages.length !== 0) {
      isNasty = true;
      for (const count of messages) {
        console.log(
          `${info[(i + GroupNumber - count) % GroupNumber][0]} was nasty about ${name}`,
        );
      }
    }
  }

  if (!isNasty) {
    console.log("Nobody was nasty");
  }
}

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// readline
//   .on("line", function (line) {
//     input.push(line.trim());
//   })
//   .on("close", function () {
//     let count = 0;
//     let index = -1;
//     const names = input.reduce((acc, cur) => {
//       if (count === 0) {
//         acc.push({});
//         count = parseInt(cur);
//         index++;
//       } else {
//         const splitCur = cur.split(" ");
//         const name = splitCur.unshift();
//         const message = splitCur.reduce((acc, cur, i) => {
//           if (cur === "N") {
//             acc.push(i);
//           }

//           return acc;
//         }, []);

//         acc[index][name] = message;
//       }

//       return acc;
//     }, []);

//     console.log(names);
//   });
