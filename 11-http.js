const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Welcome to our home page");
        res.end();
    }
    if(req.url==="/about"){
        res.write("about page");
        res.end();
    }
    res.end();
});

server.listen(5000);