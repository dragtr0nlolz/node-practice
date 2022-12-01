const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `What is up hoess? Results: ${first},${second}`, {flag: 'a'}) 

// flag: 'a' means node will append this
// if the file is not there node will create one using writeFileSynce

console.log('done with this task')
console.log('starting the next one')