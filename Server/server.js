const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO user (`Name`, `Email`, `PhoneNo`) VALUES (?)";
  const values = [req.body.name, 
    req.body.email,
     req.body.phone]
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});



app.put("/edit/:id", (req, res) => {
  const sql =
    "UPDATE `user` SET `Name` = ?, `Email` = ?, `PhoneNo` = ? WHERE ID = ?";
  const values = [
    req.body.name, 
    req.body.email, 
    req.body.phone
  ]
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.delete("/user/:id", (req, res) => {
  const sql = "DELETE FROM user WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred while deleting the user." });
    }
    return res.json(data);
  });
});


app.listen(8081, () => {
  console.log("listening");
});
