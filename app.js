const express = require('express');
const bodyParser = require('body-parser');
const con = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

app.post("/signup", function(req, res) {
    const {username, email, password} = req.body;
    const sql = "INSERT INTO users (username, email, password) VALUES ('" + username + "','" + email + "','" + password + "')";
    con.query(sql, (err, result) => {
        if (err) {
            console.log("Error occured.." + err);
        }
        else {
            console.log("Row inserted successfully !");
        }
    });
    if (res.statusCode === 200) {
        res.redirect("/login");
    }
});

app.post("/login", function(req, res) {
    const {email, password} = req.body;
    const sql = "Select * from users where email = ? and password = ?";
    const values = [email, password];
    con.query(sql, values, (err, results) => {
        if(err) {
            console.log("Error fetching user data "+err);
            return;
        }
        if(results.length === 0) {
            res.render("login", {error: "Invalid email or password"});
            console.log("User not found or invalid credentials.");
        }
        else {
            const username = results[0].username;
            res.redirect(`/room1/${username}`);
        }
    });
});

app.get("/room1/:username", function(req, res) {
    const username = req.params.username;
    res.render("room1", {username});
});

app.get("/room2/:username", function(req, res) {
    const username = req.params.username;
    res.render("room2", {username});
});

app.post("/room3/:username", function(req, res) {
    const pass = req.body.pass;
    const username = req.params.username;

    if(pass === '435512') {
        res.redirect(`/room3/${username}`);
    }
    else {
        res.render("room2", {username, error: "Incorrect Pin. Please try again."})
    }
});

app.get("/room3/:username", function(req, res) {
    const username = req.params.username;
    res.render("room3", {username});
});

app.get("/room4", function(req, res) {
    res.render("room4");
});

app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
});