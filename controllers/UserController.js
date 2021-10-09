const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
require("dotenv").config();


const LoginControl = async (req, res) => {

    try {
        const {email, name}=req.body    // Extracting Email and name from body (Destructuring)
        if(!email || !name){
            res.status(400).json({
                msg: "Details are not valid",
                data : []
            })
            return 
        }
        const FoundUser = await User.findOne({
            email // this is equal to email:email
        })
        if (FoundUser){
            const token = jwt.sign(
                {
                    _id: FoundUser._id
                },
                process.env.JWT_SECRET
            )
            res.status(200).json({
                msg:"Login Successfully",
                data: [{
                    token,
                    _id: FoundUser._id,
                    name: FoundUser.name,
                    email: FoundUser.email,
                    totalDonations:FoundUser.totalDonations,
                    totalEarned:FoundUser.totalEarned,
                    createdAt: FoundUser.createdAt,
                    updatedAt: FoundUser.updatedAt
                }]
            })
        }
        else{
            const CreateUser= new User({                // New User will be created here
                name:name,
                email:email
            })
            const InsertUser = await CreateUser.save() // User Values will be store here
            
            const token = jwt.sign(
                {
                    _id: InsertUser._id
                },
                process.env.JWT_SECRET
            )
            res.status(200).json({
                msg:"Account Created Success",
                data: [{
                    token,
                    _id: InsertUser._id,
                    name: InsertUser.name,
                    email: InsertUser.email,
                    totalDonations:InsertUser.totalDonations,
                    totalEarned:InsertUser.totalEarned,
                    createdAt: InsertUser.createdAt,
                    updatedAt: InsertUser.updatedAt
                }]
            })
        }
        
        

    } catch (e) {
        console.log(e)
        res.status(500).json({
            msg: "Something Went Wrong",
            data: []
        })
    }
}


const GetUserDetails = async (req, res) => {
    try{
        const {_id} = req.user;
        const userData = await User.findOne({_id});
        res.status(200).json(userData)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            msg: "Something Went Wrong",
            data: []
        })
    }
}


module.exports = {
    LoginControl,
    GetUserDetails
}