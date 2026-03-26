//solve this pattern
/**
A
A B
A B C
A B C D

 */

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter your printable numbers again.... and save it"));

for (let i = 1; i <= n; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + "");
    ascii++;
  }
  console.log();
}
