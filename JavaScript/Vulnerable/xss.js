const express = require("express");
const app = express();

app.get("/search", (req, res) => {
    const query = req.query.q;

    // Vulnerable: Reflecting user input without escaping
    res.send("<h1>Search: " + query + "</h1>");
});

app.listen(3000);
