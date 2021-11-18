const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == "/"){
    res.write("<h1>hello from server<h1>");
    }else{
        res.write("<h1>About server<h1>");
    }
    res.end();
})

server.listen(3000, ()=>{
    console.log("/server is on.../")
})
