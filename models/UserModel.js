const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        totalDonations:{
            type:Number,
            default:0
        },
        totalEarned:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true,
    }
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;