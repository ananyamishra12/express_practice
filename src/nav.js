const express= require('express');

const app= express();

app.get("/", (req, res)=>{
    res.write("Welcome to my home page");
    res.send();
})

app.get("/about" , (req, res)=>{
    res.send("Welcome to my about page");
})

app.get("/temp" , (req, res)=>{
    res.json({
        id: 1,
        name: "ananya"
    });
})

app.listen(3000, ()=>{
    console.log("listening to port 3000");
})