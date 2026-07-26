const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Example of parameterized query
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";

    console.log(query, [username, password]);

    res.send("Logged In");
});

app.listen(3000);
