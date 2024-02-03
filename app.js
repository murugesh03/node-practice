const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write(
      "<form method='POST' action='/test'><input name='name'> <button type='submit'>Send</button> </form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/test" && req.method === "POST") {
    res.statusCode = 300;
    res.write("Redirected to test");
    return res.end();
  }
});

server.listen(2000);
