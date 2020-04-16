const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  burger.getBurgers((burgers) => {
    res.render("index", { burgers });
  });
});

module.exports = router;
