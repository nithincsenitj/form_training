var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "htmlform.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      email:req.body.email,
      password:req.body.password
   };
   console.log(response);
  // res.end(JSON.stringify(response));
 //res.send("kudos you have done it...:) ");
   if(req.body.email=="demo@demo.com" && req.body.password=="12345"){
       res.send("kudos you have done it...:) ");
     }
   else{
       res.send("mismatch");
     }




})

//app.post('/process_auth', urlencodedParser, function(req,res){
//  if(req.body.email=="demo@demo.com" && req.body.password=="12345"){
//    res.sendFile("kudos you have done it...:) ");
//  }
//  else{
//    res.sendFile("better luck next time...being nithin");
//  }
//})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at 8081", host, port)
})
