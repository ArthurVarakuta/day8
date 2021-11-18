const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end("<h1>Hello<h1>")
    }
    if (req.url == "/users") {
        res.writeHead(200, {
            'Content-type': 'text/json'
        })

        const users = [
            {
                name: 'Masha',
                age: 19,
            },
            {
                name: 'Alex',
                age: 18,
            },
        ]
        res.end(json.stringify(users));
    }
})

server.listen(3000, () => {
    console.log("/server is on.../")
})
