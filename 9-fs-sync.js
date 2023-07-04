const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/firstText.txt', 'utf8');
const second = readFileSync('./content/subfolder/secondText.txt','utf-8');

console.log(first);
console.log(second);

writeFileSync('./content/resultText.txt', `Hello World`, {flag: 'a'});