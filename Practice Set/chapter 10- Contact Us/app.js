const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    console.log("Handling / for GET", req.url, req.method);
    res.send('<h1>Welcome to Complete Coding</h1>');
});

app.get("/contact-us", (req, res) => {
    console.log("Handling /contact-us for GET", req.url, req.method);

    res.send(`
        <h1>Please Give your details here</h1>

        <form action="/contact-us" method="POST">
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
            />

            <br><br>

            <input
                type="email"
                name="email"
                placeholder="Enter your Email"
            />

            <br><br>

            <input type="submit" value="Submit" />
        </form>
    `);
});

app.post("/contact-us", (req, res) => {
    console.log("Handling /contact-us for POST", req.url, req.method);
    console.log(req.body);

    res.send(`<h1>Thanks for your details</h1>`);
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});