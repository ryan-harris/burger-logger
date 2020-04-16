const orm = require("../config/orm");

const burger = {
  getBurgers: (cb) => {
    orm.selectAll("burgers", cb);
  }
};

module.exports = burger;
