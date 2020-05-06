
const express = require("express");
const path = require("path")
const cookieParser = require('cookie-parser');
const app = express();
const planRouter = require("./router/planRouter");
const userRouter = require("./router/userRouter");
const viewRouter = require("./router/viewRouter");
const reviewRouter = require("./router/reviewRouter");
const bookingRouter = require("./router/bookingRouter");

//-------express.json-------
app.use(express.json());
app.use(cookieParser())

app.use(express.static("public"))
// ---------------rendering/templating engine
app.set("view engine","pug");    
app.set("views", path.join(__dirname,"view"));


app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);
app.use("/", viewRouter)
app.use("/api/reviews",reviewRouter);
app.use("/api/bookings",bookingRouter);


app.listen(3000, function(){
    console.log("Server started at port 3000");
})

