const stripe = require('stripe')('sk_test_4Cm5QLUvBcPrB19dFbD4PRD400g4ZTYpD4');
const planModel = require("../model/planModel");
const userModel = require("../model/userModel");
async function createSession(req,res){
    try{
        let { id } = req
        let userId = id;
        let planId = req.body.planId; // Plan-Id coming from I'm hungry button->frontend.js(script.js)
        const user = await userModel.findById(userId);
        const plan = await planModel.findById(planId);
        console.log(planId)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: user.email,
            client_refernce_id: req.planId,
            line_items: [{
              name: plan.name,
              description: 'There is no description',
            //   images: ['https://example.com/t-shirt.png'],
              amount: plan.price*100,
              currency: 'usd',
              quantity: 1,
            }],
            success_url: 'http://localhost:3000/profile',
            cancel_url: 'http://localhost:3000',
          })
          res.status(200).json({
              status:"success",
              session
          })
    } catch(err){
        res.status(200).json({
            err : err.message
        })
    }
}

module.exports.createSession = createSession;