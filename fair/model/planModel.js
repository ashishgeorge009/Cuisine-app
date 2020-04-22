//secrets--config
const secrets = require("../config/secrets")
//mongoose
const mongoose = require("mongoose");
//mogoose +> promise library

mongoose
    .connect(
        secrets.DB_LINK,
        {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    )
    .then(function(db){
        console.log("PlanDB connected");
    })
    .catch(function(err){
        console.log(err);
    });


//scehma
const planSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: [40, "Your plan length is more than 40 characters"],
    },
    duration: { type: Number, required: [true, "You Need to provide duration"] },
    price: {
      type: Number,
      required: true,
    },
    ratingsAverage: {
      type: Number,
    },
    discount: {
      type: Number,
      validate: {
        validator: function () {
          return this.discount < this.price;
        },
        message: "Discount must be less than actual price",
      },
    },
  });

const newplanModel = mongoose.model("newPlanModel", planSchema);

module.exports = newplanModel;
