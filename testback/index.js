const express = require('express');

const app = express();

const port = 8000;

app.get("/", (req, res)=>{
    return res.send("Home Page");
});

const admin= (req, res)=>{
    return res.send("This is admin");
};
const isAdmin = (req, res, next)=>{
    return res.send("Admin Dashboard");
    next();
};

app.get("/admin",isAdmin,admin);


app.get("/login", (req, res)=>{
    return res.send("You are visiting login router");
});

app.get("/signup", (req, res)=>{
    return res.send("This is signup route");
});


app.listen(port, ()=>{
    console.log("Server is running...");
});