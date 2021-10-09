const express = require("express");
const { LoginControl, GetUserDetails } = require("../controllers/UserController");
const router = express.Router();


router.post("/login",LoginControl)


router.use(require("../middlewares/AuthUser"));
router.get("/", GetUserDetails);


module.exports = router;
