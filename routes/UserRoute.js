const express = require("express");
const { LoginControl, GetUserDetails, AddDonation } = require("../controllers/UserController");
const router = express.Router();
const {upload} = require("../utils/Multer")

router.post("/login",LoginControl)


router.use(require("../middlewares/AuthUser"));
router.get("/", GetUserDetails);

router.post("/add_donation", upload.fields([{ name: "item_image" , maxCount: 10}]),AddDonation )

module.exports = router;
