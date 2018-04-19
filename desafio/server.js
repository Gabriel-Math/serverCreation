var http  = require('http');
var fs = require("fs");

var server = http.createServer(function(request, response){
    if(request.url=="/") {
        fs.readFile(__dirname + "/artigo.html", function(err, html){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(html);
        });
    } else if(request.url == "/contatos") {
        fs.readFile(__dirname + "/contato.html", function(err, html){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(html);
        });
    } else {
        fs.readFile(__dirname + "/erro.html", function(err, html){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(html);
        });
    }

 
});

server.listen(8000, function() {
    console.log("Servidor Rodando");
});