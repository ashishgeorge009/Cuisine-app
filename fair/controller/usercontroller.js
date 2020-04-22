const userModel = require("../model/userModel");
const fs = require("fs");

module.exports.getAllUsers = async function getAllUsers(req,res){
    
    const users= await userModel.find().select("+password");
  res.status(200).json({
    status: "all users recieved",
    data: users,
  });
};
module.exports.createUser = function createUser(req,res){
    const user = req.body;
    console.log(user);
    user.lama = users.length +1;
    users.push(user)
    fs.writeFileSync("./data/users.json",JSON.stringify(users));
    res.status(201).json({
        success:"user created successfully"
    });
};
module.exports.getUser = async function getUser(req,res){
    const id = req.params.id|| req.id;
    const user = await userModel.findById(id)
    res.json({
        status: "successful",
        user
    });
    
};

module.exports.updateUser = function updateUser(req,res){

    const id=req.params.id;
    const originalusers = users[id-1];
    const toupdateData = req.body;
    // const keys=[];
    // for(let key in toupdateData){
    //     keys.push(key)
    // }
    keys = Object.keys(toupdateData)
    for(i=0;i<keys.length;i++)
    {
        originalusers[keys[i]] = toupdateData[keys[i]]
    }
    fs.writeFileSync("./data/users.json",JSON.stringify(users));


    res.status(200).json({
        success : "updated",
        data: originalusers
    })
};
module.exports.deleteUser = function deleteUser(req,res){
    const id = req.params.id;
    const userdel = users.splice(id-1,1);
    fs.writeFileSync("./data/users.json",JSON.stringify(users));
    res.status(200).json({
        success : "deleted",
        data: userdel
    })

}
