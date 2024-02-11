// const testFunc = (req, res) => {
//   if (req.url === "/") {
//     res.setHeader("content-type", "text/html");
//     res.write("<html>");
//     res.write("<body>");
//     res.write(
//       "<form method='POST' action='/test'><input name='name'> <button type='submit'>Send</button> </form>"
//     );
//     res.write("</body>");
//     res.write("</html>");
//     return res.end();
//   }

//   if (req.url === "/test" && req.method === "POST") {
//     const data = [];

//     req.on("data", (chunk) => {
//       data.push(chunk);
//     });

//     return req.on("end", (error) => {
//       const text = Buffer.concat(data).toString();
//       const userText = text.split("=")[1];
//       fs("test-data.txt", userText, (error) => {
//         res.statusCode = 300;
//         res.write("Redirected to test");
//         return res.end();
//       });
//     });
//   }
// };

// module.exports = testFunc;

const express = require("express");

const router = express.Router();

router.post("/add-products", (req, res) => {
  res.send(
    "<form method='POST' action='/test'><input name='name'> <button type='submit'>Send</button> </form> "
  );
});

router.get("/view-product", (req, res) => {
  res.send("<p>View product page is shown</p> ");
});

module.exports = router;
