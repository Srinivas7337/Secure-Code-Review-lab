const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    let query =
    "SELECT * FROM users WHERE username='"
    + username +
    "' AND password='"
    + password +
    "'";

    console.log(query);

    res.send("Logged In");

});

app.listen(3000);
