const express = require("express");
const userRouter = express.Router();
const { signup, login, protectRoute, isAuthorized, forgetPassword, resetPassword} = require("../controller/authController");

const {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require("../controller/usercontroller");

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.patch("/forgetPassword",forgetPassword)
userRouter.patch("/resetPassword/:token",resetPassword)
// profile page 


userRouter.use(protectRoute)

userRouter.post("/userProfile",getUser)

// admin
userRouter.use(isAuthorized(["admin"]))
userRouter
   .route("")
   .get(getAllUsers)
//    .post(createUser)


userRouter
    .route("/:id")
    .patch(updateUser)
    .delete(deleteUser)


module.exports = userRouter;