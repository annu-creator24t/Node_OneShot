// External module
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Came in first middleware", req.url, req.method);
    next();
});

app.use('/submit-details', (req, res) => {
    console.log("Submit Details Middleware", req.url, req.method);
    res.send("<p>Welcome to Submit Details Page</p>");
});

app.use('/', (req, res) => {
    console.log("Root Middleware", req.url, req.method);
    res.send("<p>Welcome to Complete Coding NodeJS Series</p>");
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});