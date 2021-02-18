let text = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";

const splittext = text.split(" ");

console.log(splittext);

let count = 0

for (let i = 0; i < splittext.length; i++)
  if (splittext[i] === `Javascript`)
    count++
console.log(`Le mot Javascript est present ${count} fois dans le texte.`)