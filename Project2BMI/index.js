const express= require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/index.html");

});


app.post("/bmiCalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(weight*height);

    res.send("Your BMI is " + bmi);
});


app.listen(3000,function(){
    console.log("server is running on port 3000");
});