const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", cb);
  },

  insertOne: (burgerData, cb) => {
    orm.insertOne("burgers", burgerData, cb);
  },

  updateOne: (burgerData, condition, cb) => {
    orm.updateOne("burgers", burgerData, condition, cb);
  },

  delete: (condition, cb) => {
    orm.delete("burgers", condition, cb);
  }
};

module.exports = burger;
