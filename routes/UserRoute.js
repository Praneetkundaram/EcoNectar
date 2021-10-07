const express = require("express");
const { test, LoginControl } = require("../controllers/UserController");
const router = express.Router();
router.post("/login",LoginControl)
router.get("/:id",test)
module.exports = router;
