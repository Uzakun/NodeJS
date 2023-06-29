const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var Num1 = Number(req.body.Num1);
    var Num2 = Number(req.body.Num2);
    var result = Num1 * Num2;
   
    res.send("The result of your multiplication is " + result + ".");
});

app.listen(3000, function(){
    console.log("Server started working on port 3000.");
});