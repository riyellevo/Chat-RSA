var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rsa"
});
var biji="aaaa";
con.connect(function(err) {
    
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO chat_room (public_key_1, public_key_2) VALUES (' "+biji+"', 'asdad')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });


