const path = require('path');
const express = require('express');
const app= express();
const port=8000;
const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
//app.use(express.static(staticPath));

app.get("", (req, res)=>{
    res.render("index", {
        channelName: "ananya",
    });
})
//app.get(route, callback)
app.get("/" , (req, res)=>{
    res.send("hello from the express");
    
})

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})