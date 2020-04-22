// app.param("id",function(req,res,next,id){
//     console.log(id)
//     if(id<0||id>plans.length){
//         res.status(404).json({
//             status : "failed",
//             data: "wrong id"
//         })
//     }
//     next()
// })




// function checkbody(req,res,next){
//     if(Object.keys(req.body).length == 0)
//     {
//         res.status(404).json({
//             status: "client error",
//             data : "empty body"
//         });
//     }
//     next();
// }