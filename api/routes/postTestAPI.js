const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const requestData = req.body;
    console.log("Post received", requestData)
    res.json({message: "Data received successfully", data: requestData})
});

module.exports = router;