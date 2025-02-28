const http = require('http')

 const server = http.createServer(  (req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'content-type' : 'text/html'})
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="width: 500px; height: 200px; display: flex; align-items: center ; border: 1px solid gray; border-radius: 5px;">
        <div style="height: 100%; width: 30%; display: flex ; align-items: center; justify-content: center; background-color: gray; color: aliceblue;">
            <h3>image</h3>
        </div>
        <div style="width: 70%; padding: 5px;">
            <h3>farhan M</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>last seen 1 hour ago</p>
        </div>
    </div>
</body>
</html>`)
    } 
    // else if (req.url === "/about") {
    //     res.writeHead(200, { 'content-type' : 'text/html'})
    //     res.end("ini halaman about")
    // }
})

server.listen(3000, console.log('http://localhost:3000/'))