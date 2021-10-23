const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
require("dotenv").config();

const path = require("path");
const { uploadFile } = require('../utils/RemoteFileUpload');
const Donation = require('../models/UserDonationModel');

const LoginControl = async (req, res) => {

    try {
        const { email, name } = req.body    // Extracting Email and name from body (Destructuring)
        if (!email || !name) {
            res.status(400).json({
                msg: "Details are not valid",
                data: []
            })
            return
        }
        const FoundUser = await User.findOne({
            email // this is equal to email:email
        })
        if (FoundUser) {
            const token = jwt.sign(
                {
                    _id: FoundUser._id
                },
                process.env.JWT_SECRET
            )
            res.status(200).json({
                msg: "Login Successfully",
                data: [{
                    token,
                    _id: FoundUser._id,
                    name: FoundUser.name,
                    email: FoundUser.email,
                    totalDonations: FoundUser.totalDonations,
                    totalEarned: FoundUser.totalEarned,
                    createdAt: FoundUser.createdAt,
                    updatedAt: FoundUser.updatedAt
                }]
            })
        }
        else {
            const CreateUser = new User({                // New User will be created here
                name: name,
                email: email
            })
            const InsertUser = await CreateUser.save() // User Values will be store here

            const token = jwt.sign(
                {
                    _id: InsertUser._id
                },
                process.env.JWT_SECRET
            )
            res.status(200).json({
                msg: "Account Created Success",
                data: [{
                    token,
                    _id: InsertUser._id,
                    name: InsertUser.name,
                    email: InsertUser.email,
                    totalDonations: InsertUser.totalDonations,
                    totalEarned: InsertUser.totalEarned,
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
    try {
        const { _id } = req.user;
        const userData = await User.findOne({ _id });
        res.status(200).json(userData)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            msg: "Something Went Wrong",
            data: []
        })
    }
}

const AddDonation = async (req, res) => {
    try {
        console.log(req.files)
        console.log(req.body)
        const {

            _id
        } = req.user
        const {
            user_address,
            item_name,
            item_description,
            item_category,
            item_totalnumber,
            item_pricegenerated,
            item_pricecategory,

        } = req.body

        const destination = `DonatedImages/${req.files.item_image[0].filename}`
        const filePath = path.join(__dirname, `../Localstorage/${req.files.item_image[0].filename}`)
        await uploadFile(filePath, destination)

        const createDonation = new Donation({
            user_address,
            item_name,
            item_description,
            item_category,
            item_totalnumber,
            item_pricegenerated,
            item_pricecategory,
            item_image: destination,
            user_id: _id,


        })
        const insertDonation = await createDonation.save()
        res.status(200).json({ msg: "Donated Succesfully", data: insertDonation })
        // console.log(filePath)
        // res.send("Sahi chal raha hai ")

    } catch (e) {
        console.log(e)
        res.status(500).json({
            msg: "Something Went Wrong"
        })
    }
}


const ConfirmDonation = async (req, res) => {
    try {
        const { id } = req.params;
        const foundDonation = await Donation.findOne({_id:id})
        if(foundDonation){
            foundDonation.progress = "completed"
            const updatedDonation = await foundDonation.save()
            const userId = foundDonation.user_id;
            const foundUser = await User.findOne({_id:userId})
            foundUser.totalDonations = foundUser.totalDonations + 1;
            foundUser.totalEarned = foundUser.totalEarned + foundDonation.item_pricegenerated;
            const updatedUser = await foundUser.save();

            res.status(200).json({
                msg:"Set order completed",
                user:updatedUser,
                donation:updatedDonation
            })
        }
        else{
            res.status(404).json({
                msg:"no donation found with given id"
            })
        }
    }
    catch (e) {
        console.log(e)
        res.status(500).json({
            msg: "Something went wrong"
        })

    }
}

const getUserDonations = async (req, res) => {
    try{
        const {_id} = req.user;
        const foundDonations = await Donation.find({user_id:_id}).sort({_id:-1});
        res.status(200).json({
            msg:"Found donations",
            data:foundDonations
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            msg:"Something went wrong"
        })

    }
}
module.exports = {
    LoginControl,
    GetUserDetails,
    AddDonation,
    ConfirmDonation,
    getUserDonations
}