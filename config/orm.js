const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    connection.query("SELECT * FROM ??", [table], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: () => {},

  updateOne: () => {}
};

module.exports = orm;
