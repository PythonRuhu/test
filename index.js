const bodyParser = require("body-parser");
const express = require("express"); //require express framework
const app = express();
const fs = require("fs");  //require file system object
constbodyParser = require("body-parser");

// //Endpoint to get a list of users
// app.get("/getMembers", function(req,res) {
//     fs.readFile(__dirname + "/" + "members.json", "utf8", function(err, data){
//         console.log(data);
//         res.send(data); //can also use res.send()
//     });
// });

//My Routes
const memberRoutes = require("./routes/member");



//Port
// port = process.env.DATA || 8000;

//Middlewares
app.use(bodyParser.json());

//My Routes
app.use("/api", memberRoutes);

//Create a server to listen at port 8000
 var index = app.listen(8000, function(){
    var host = index.address().address
    var port = index.address().port
    console.log("App is running at http://%s%s", host,port);
 });
// app.listen((port), () => {
//     console.log(`APP is running at ${port}`);
// });
