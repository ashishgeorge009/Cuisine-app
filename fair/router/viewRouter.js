const viewRouter = require("express").Router();
const { getTrialPage,getHomePage,getPlansPage, getLoginPage,getSignupPage,getProfilePage} = require("../controller/viewController");
const {isUserLoggedIn, logout,protectRoute} = require("../controller/authController")
viewRouter.use(isUserLoggedIn)
viewRouter.get("/", getHomePage);
viewRouter.get("/trial",getTrialPage);
viewRouter.get("/plans",getPlansPage);
viewRouter.get("/login",getLoginPage);
viewRouter.get("/signup",getSignupPage);
viewRouter.get("/logout",logout);
viewRouter.get("/profile",protectRoute,getProfilePage);
module.exports = viewRouter;