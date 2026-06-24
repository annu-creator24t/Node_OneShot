const express = require('express');
const bodyParser =require('body-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("First Dummy MiddleWare", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second Dummy MiddleWare", req.url, req.method);
    next();
});

/* app.use((req,res,next) => {
     console.log("Third MiddleWare",req.url,req.method);
     res.send("<h1>Welcome to complete coding</h1>");
});
*/

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

app.post("/contact-us", (req, res,next) => {
    console.log("First handling", req.url, req.method,req.body);
    next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res) => {
    console.log("Handling /contact-us for POST", req.url, req.method,req.body);
    res.send(`<h1>we will contact you shortly</h1>`);
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});