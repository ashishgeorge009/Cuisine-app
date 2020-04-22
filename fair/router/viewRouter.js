const viewRouter = require("express").Router();
const { getTrialPage,getHomePage,getPlansPage, getLoginPage,getSignupPage } = require("../controller/viewController");
const {isUserLoggedIn} = require("../controller/authController")
viewRouter.use(isUserLoggedIn)
viewRouter.get("/", getHomePage);
viewRouter.get("/trial",getTrialPage);
viewRouter.get("/plans",getPlansPage);
viewRouter.get("/login",getLoginPage);
viewRouter.get("/signup",getSignupPage);
module.exports = viewRouter;