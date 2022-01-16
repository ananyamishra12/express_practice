const path = require('path');
const express = require('express');
const app= express();
const port=8000;
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

//app.get(route, callback)
app.get("/" , (req, res)=>{
    res.send("hello from the express");
    
})

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})