const mysql = require("mysql");
const dbConfig = require("../config/config.js");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect(error => {
  if (error) throw error;
  console.log("BD conectada");
});
setInterval(function () {
    connection.query('SELECT 1');
}, 4500);
module.exports = connection;
