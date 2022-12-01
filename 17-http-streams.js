const http = require('http')
const fs = require('fs')


http
    .createServer((req, res) => {
        const text = fs.readFileSync('./content/big.txt', 'utf-8')
        res.end(text);
    })
    .listen(80);


// this serves 1.71 mb data at once, we can see in the network tab in developers option in browser
// which is not optimal 

// so we are gonna use readFileStream to provide data in chunks


http
    .createServer((req, res) => {
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
        fileStream.on('open', () => {
            fileStream.pipe(res);
        })
        fileStream.on('error', (err) => {
            res.end(err);
        })
        fileStream.on('end', () => {
            res.end('\n Done')
        })
    })
    .listen(5000);


// using the createReadStream method from fs. Basically, it will create a readable stream object

// Node.js is event-driven. 
// It means that you can know when something is done "Let me know when it's ready" 
// In this case, you're listening to the event 'open' so whenever ReadStream open the file (in your case new1.txt) it will let you know. 
// The 'open' event doesn't mean that you need to open the file manually.
