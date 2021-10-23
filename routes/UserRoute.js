const express = require("express");
const { LoginControl, GetUserDetails, AddDonation, ConfirmDonation, getUserDonations } = require("../controllers/UserController");
const router = express.Router();
const {upload} = require("../utils/Multer")

router.post("/login",LoginControl)


router.put("/confirm/:id", ConfirmDonation)


router.use(require("../middlewares/AuthUser"));
router.get("/", GetUserDetails);
router.get("/donations", getUserDonations)
router.post("/add_donation", upload.fields([{ name: "item_image" , maxCount: 10}]),AddDonation )

module.exports = router;
