const exphbs = require("express-handlebars");
const express = require("express");
const burger_controller = require("./controllers/burger_controller");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", burger_controller);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
