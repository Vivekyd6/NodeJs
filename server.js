// need to import the express module 
const express = require("express");

// need to define it 
const app = express();

//use a method of express Js to use it  and use the callback function to show in terminal whether server service is started or not.
app.listen(2000,function(){
    console.log("Server is running on port 2000");
});