const express = require("express");
const router = express.Router();
const fs = require("fs");
const {json} = require("body-parser")
const path = "C:\Users\prince\Documents\Riya Truworth\members.json"

//Endpoint to get a list of users
router.get("/members", function(req,res) {
    fs.readFile(__dirname + "/" + "members.json", "utf8", function(err, data){
        console.log(data);
        res.send(JSON.parse(data)); //can also use res.send()
    });
});



//The addMember endpoint
router.post("/members", function(req,res){
    const{id, firstName, lastName, email, phone} = req.body

    const member = {
        "id": id,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phone": phone
    };

   var members = []

    fs.readFile(path + "/" + "members.json", "utf8", function(err, data){
        
        members = JSON.parse(data);
        console.log("34" , member);
        console.log("35" , members);
        members.push(member)
        const allMembers = JSON.stringify(members)
        console.log(allMembers);
    });
    fs.writeFile(path + "members.json" ,allMembers, (err) =>{
        if(err){
            throw err;
        }
        res.status(200).json(JSON.parse(allMembers));
    });
});
   
//Endpoint to get a single member by id
// rouer.get("/member/:memberId", function(req,res) {
//     fs.readFile(__dirname + "/" + "members.json", "utf8", function(err,data){
//         var members = JSON.parse(data);
//         var member = members["member" + req.params.id]
//         console.log(member);
//         res.send(JSON.stringify(member));
//     });
// });

// //Code to delete a member by id
// var id = 2;
// router.delete("/member/:memberId", function(req,res){
//     fs.readFile(__dirname + "/" + "members.json", "utf8", function(err,data){
//         data = JSON.parse(data);
//         delete data["member" + req.params.id];  //+2
//         console.log(data);
//         res.send(JSON.stringify(data));
//     });
// });

// //Code to update a member by id
// router.put("/members/:membersId", function(req,res){
//     fs.readFile(__dirname + "/" + "members.json", "utf8", function(err, data){
//         var members= JSON.parse(data);
//         var member = members["member" + req.params.id];
//         console.log(member);
//         res.send(JSON.stringify(member));
//     });
// });
module.exports = router;