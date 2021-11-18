const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const users = [{name:'username', firstName:'userFirstname'}, {name:'username1', firstName:'userFirstname1'}]
function getLength(){

}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'got get';
    res.setHeader('Content-Type', 'text/html');
    res.end(JSON.stringify(users.length));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
