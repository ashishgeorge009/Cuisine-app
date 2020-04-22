const planModel = require("../model/planModel")
function getTrialPage(req,res){
    let name = req.userName;
    console.log("reached")

    res.render("trial.pug",{
        titleofThePage: "Trial Page",name
    })
}
function getHomePage(req,res){
    let name = req.userName;
    res.render("home.pug",{
    title: "Home Page",name})
}

async function getPlansPage(req,res){
    let plans = await planModel.find();
    let name = req.userName;
    res.render("planPage.pug",{
    title: "Plan Page", plans,name})
}

function getLoginPage(req, res) {
    let name = req.userName;
    res.render("login.pug", {
      title: "Login",name
    })
  }

function getSignupPage(req,res){
    let name = req.userName;
    res.render("signup.pug"),{
        title: "Sign Up" , name
    }
}
module.exports.getTrialPage = getTrialPage;
module.exports.getHomePage = getHomePage;
module.exports.getPlansPage= getPlansPage;
module.exports.getLoginPage= getLoginPage;
module.exports.getSignupPage=getSignupPage;