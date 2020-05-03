const reviewModel = require("../model/reviewModel")

async function createReview(req,res){
    try{
        const review = awat.reviewModel.create(req.body);
        res.status(200).json({
            reviews
        })
    }catch(err){
        res.status(200).json({
            err: err.message
        })
}
}

async function getAllReviews(req,res){
    try{
        const reviews = await reviewModel.find().populate({
            path :"user",
            select :"name profileImage"
        }).populate("plan");
        res.status(200).json({
            reviews
        })
    }catch(err){
        res.status(200).json({
            err: err.message
        })
    }
}
module.exports.createReview = createReview;
module.exports.getAllReviews = getAllReviews;