const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "htmlform.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   credentials = {
      email:req.body.email,
      password:req.body.password
   };
   console.log(credentials);
  // res.end(JSON.stringify(response));

   if(req.body.email=="demo@demo.com" && req.body.password=="12345"){

       res.redirect("/home");
      // res.send("kudos you have done it...:) ");
}
   else{
       res.redirect("/authfailed");

     }
})


app.get('/home', function(req,res){
  res.sendFile( __dirname + "/" + "home.png" );
})



app.get('/authfailed', function(req,res){
  res.sendFile( __dirname + "/" + "tryagain.png" );
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
