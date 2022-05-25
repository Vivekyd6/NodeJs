const express = require("express");
 
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    // console.log(__dirname);
});

app.post("/",function(req,res){
    res.send("Thanks for posting");
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
});

