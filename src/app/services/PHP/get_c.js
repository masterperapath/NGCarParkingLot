
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "parking_reserve"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = `select * from customer`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("The customers table is shown!!");
  });
});