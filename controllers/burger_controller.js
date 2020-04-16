const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((burgers) => {
    res.render("index", { burgers });
  });
});

router.post("/api/burgers", (req, res) => {
  const newBurger = {
    burger_name: req.body.burger_name,
    devoured: false
  };

  burger.insertOne(newBurger, (result) => {
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    res.sendStatus(200);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.devoured };

  burger.updateOne(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    res.sendStatus(200);
  });
});

module.exports = router;
