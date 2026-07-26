const express = require("express");
const escapeHtml = require("escape-html");

const app = express();

app.get("/search", (req, res) => {
    const query = escapeHtml(req.query.q);

    res.send("<h1>Search: " + query + "</h1>");
});

app.listen(3000);
