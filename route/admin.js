const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send("<p>This is admin add product</p>");
});

module.exports = router;
