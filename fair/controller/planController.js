const planModel = require("../model/planModel");
// const fs = require("fs");


module.exports.getAllPlans = async function getAllPlans(req,res){
    
    res.status(200).json({

        success: "got all plans",
        data: plans
    });
};

module.exports.createPlan = async function createPlan(req,res){
    const recievedPlan = req.body;
    try {
        let createdPlan = await planModel.create(recievedPlan);
        // send success response to client
        res.status(201).json({
          status: "plan created",
          data: createdPlan,
        });
      } catch (err) {
        res.status(501).json({
          err,
          status: "Internal server error",
        });
      }
//     console.log(plan);
//     plan.id = plans.length +1;
//     plans.push(plan)
//     fs.writeFileSync("./data/plans.json",JSON.stringify(plans));
//     res.status(201).json({
//         success:"plan created successfully"
//     });
 };
module.exports.getPlan = async function getPlan(req,res){
    try {
        // recieve id through params
        const { id } = req.params;
        const plan = await planModel.findById(id);
        res.json({
          status: "successfull",
          data: plan,
        });
      } catch (err) {
        res.status(404).json({
          status: "Plan Not found",
          err,
        });
      }
};
module.exports.updatePlan = async function updatePlan(req,res){

    
    try {
    const id=req.params.id;
    // const originalPlans = plans[id-1];
    const toupdateData = req.body;
    const originalPlan = await planModel.findById(id);
    // const keys=[];
    // for(let key in toupdateData){
    //     keys.push(key)
    // }
    const keys = Object.keys(toupdateData)

    for (let i = 0; i < keys.length; i++) {
        originalPlan[keys[i]] = toupdateData[keys[i]];
      }
      // express server=> modified=> mdb
     const updatedPlan= await originalPlan.save();
    
        // validator => update ,validator
        // const updatedPlan = await planModel.findByIdAndUpdate(id,toupdateData, { new: true });
        res.status(200).json({
          status: "update request recieved",
          plan: updatedPlan
        });
      } 
      catch (err) {
        console.log(err);
        res.status(501).json({
          status: "Plan could not be updated",
          err
        });
      }

};
module.exports.deletePlan = async function deletePlan(req,res){
    const id = req.params.id;
    const plandel = plans.splice(id-1,1);
    fs.writeFileSync("./data/plans.json",JSON.stringify(plans));
    res.status(200).json({
        success : "deleted",
        plan: plandel
    })

};