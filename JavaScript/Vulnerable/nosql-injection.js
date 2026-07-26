const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", async (req, res) => {
    const user = await Users.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        res.send("Login Success");
    } else {
        res.send("Invalid Credentials");
    }
});

app.listen(3000);
