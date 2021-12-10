const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");
const bodyParser = require("body-parser");
const path = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


const static_path = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");


app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));


app.get("/",(req,res)=>{
    res.status(200).render("index")
});

app.get("/work.hbs",(req,res)=>{
    res.status(200).render("work.hbs")
});

app.get("/about.hbs",(req,res)=>{
    res.status(200).render("about.hbs")
});

app.get("/blog.hbs",(req,res)=>{
    res.status(200).render("blog.hbs")
});

app.get("/work01.hbs",(req,res)=>{
    res.status(200).render("work01.hbs")
});

app.get("/blog01.hbs",(req,res)=>{
    res.status(200).render("blog01.hbs")
});

app.get("/contact.hbs",(req,res)=>{
    res.status(200).render("contact.hbs")
});

app.get("/WeatherApi",(req,res)=>{
    res.status(200).render("WeatherApi")
});

app.get("/Quote-Generator",(req,res)=>{
    res.status(200).render("Quote-Generator")
});

app.get("/Calculator",(req,res)=>{
    res.status(200).render("Calculator")
});

app.get("/Dictionary",(req,res)=>{
    res.status(200).render("Dictionary")
});

app.get("/Quiz",(req,res)=>{
    res.status(200).render("Quiz")
});

app.get("/tictac",(req,res)=>{
    res.status(200).render("tictac")
});

app.post("/BackToHome",(req,res)=>{
    res.status(200).render("BackToHome")
});


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});