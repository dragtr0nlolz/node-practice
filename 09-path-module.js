const path = require('path')
// const fs = require('fs')

console.log(path.sep);

const filePath = path.join('./content','/subfolder','/test.text')
console.log(filePath);

// fs.readFileSync(filePath, 'text/html')

const base = path.basename(filePath);
console.log(base);

// console.log(path);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);