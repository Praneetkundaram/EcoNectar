const mongoose = require("mongoose");

const userDonationSchema = mongoose.Schema(
    {
        user_address:
        {
            type:String,
            require:true
        },
        item_name:
        {
            type:String,
            require:true
        },
        item_description:
        {
            type:String
        },
        item_category:
        {
            type:String,
            require:true
        },
        item_totalnumber:
        {
            type:Number,
            require:true
        },
        item_pricecategory:
        {
            type:String,
            require:true
        },
        item_pricegenerated:
        {
            type:Number,
        },
        item_image:
        {
            type:String,
            require:true
        },
        user_id:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            require:true
        },
        progress:
        {
            type:String,
            default:"registered"
        }
    },
    {
        timestamps: true,
    }
);
const userDonationModel = mongoose.model("UserDonation", userDonationSchema);
module.exports = userDonationModel;