const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", cb);
  },

  insertOne: (burgerData, cb) => {
    orm.insertOne("burgers", burgerData, cb);
  },

  updateOne: (burgerData, criteria, cb) => {
    orm.updateOne("burgers", burgerData, criteria, cb);
  }
};

module.exports = burger;
