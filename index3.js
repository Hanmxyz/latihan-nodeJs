const http = require("http");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/" method="POST">
        <label for="nama">nama</label>
        <input type="name" id="name" name="name">
        <label for="email">email</label>
        <input type="email" id="email" name="email">
        <button type="submit">submit</button>
    </form>
</body>
</html>`);
  } else if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const parsedData = queryString.parse(body);
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>data telah diterima</h1>
    <p>nama : ${parsedData.name}</p>
    <p>email : ${parsedData.email}</p>
</body>
</html>`);
    });
  }
});

server.listen(3000, console.log("http://localhost:3000/"));
