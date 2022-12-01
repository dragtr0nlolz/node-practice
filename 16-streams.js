// streams

// default 64kb
// last buffer - remainder
// highWaterMark - control size / buffer size (default 64000)
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const fs = require('fs');

// const stream = fs.createReadStream('./content/big.txt', 'utf-8');    this will give the output in txt, but default output is buffer
const stream = fs.createReadStream('./content/big.txt', {highWaterMark: 90000});  // means 90kb buffer

stream.on('data', (result) => {
    console.log("Result in buffer chunk below: -")
    console.log(result);
})
stream.on('error', (err)=>{
    console.log(err)
})


// My try hehe....
// const stream = (path)=> {
//     return fs.createReadStream(path);
// } 

// stream(__dirname + '/content/big.txt').on('data',(result)=>{
//     console.log("Result in buffer chunks below: -")
//     console.log(result);
// })