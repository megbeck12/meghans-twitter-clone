const express = require("express");
const router = express.Router();
const data = require("./data");

router.get("/name/:name", function (req, res) {
  const name = req.params.name;
  if (!name) {
    res.status(404)
    return;
  }
  const assignedItem = data.find((item) => {
    return item.name.toLowerCase() === name.toLowerCase();
  });

  //   const greeting = `API is working properly. Hello, ${name}`;
  //   res.send(greeting);
  res.json(assignedItem);
});

module.exports = router;
