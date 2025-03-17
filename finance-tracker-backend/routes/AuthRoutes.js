const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");

const router = express.Router();

router.post("/Signup", registerUser);
router.post("/Login", loginUser);

module.exports = router;
