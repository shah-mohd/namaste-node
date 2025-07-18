const http = require("node:http");

const server = http.createServer(function(req, res){

    if(req.url === "/getSecretData"){
        res.end("Opps... there is no secret data!!");
    }
    res.end("Hello World");
});

server.listen(7777);