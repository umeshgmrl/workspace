require("http")
  .createServer(function(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    let time = new Date().toString();
    console.log(time);
    res.end('{"Time": "' + time + '"}');
  })
  .listen(3000);
