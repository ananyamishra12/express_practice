const path = require('path');
const express = require('express');
const app= express();

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

//app.get(route, callback)
app.get("/" , (req, res)=>{
    //console.log(req, "hi");
    //console.log(res);
    res.send("hello from the express");
    
})

app.listen(8000, () =>{
    console.log("listening port at 8000");
})