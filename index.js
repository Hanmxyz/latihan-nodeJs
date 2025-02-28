const http = require('http')

 const server = http.createServer(  (req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'content-type' : 'text/plain'})
        res.end("ini halaman awal")
    } else if (req.url === "/about") {
        res.writeHead(200, { 'content-type' : 'text/plain'})
        res.end("ini halaman about")
    }
})

server.listen(3000, console.log('http://localhost:3000/'))