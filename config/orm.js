const connection = require("./connection.js");

const orm = {
  selectAll: (tableName, cb) => {
    const sql = "SELECT * FROM ??";
    connection.query(sql, [tableName], (err, result) => {
      if (err) {
        console.log(err);
      }
      cb(result);
    });
  },

  insertOne: (tableName, newData, cb) => {
    const sql = "INSERT INTO ?? SET ?";
    connection.query(sql, [tableName, newData], (err, result) => {
      if (err) {
        console.log(err);
      }
      cb(result);
    });
  },

  updateOne: (tableName, updateData, condition, cb) => {
    const sql = "UPDATE ?? SET ? WHERE ?";
    connection.query(sql, [tableName, updateData, condition], (err, result) => {
      if (err) {
        console.log(err);
      }
      cb(result);
    });
  },

  delete: (tableName, condition, cb) => {
    const sql = "DELETE FROM ?? WHERE ?";
    connection.query(sql, [tableName, condition], (err, result) => {
      if (err) {
        console.log(err);
      }
      cb(result);
    });
  }
};

module.exports = orm;
