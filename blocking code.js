// this is why we need async in backend to serve users simultaneously

const port = 80;
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if(req.url === '/about') {
        // Blocking Code!!!
        for(let i=0; i<1000; i++){
            for(j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end("About Page");
    }
    else {
        res.end('error page')
    }
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})