const express = require("express");
const { generateReport } = require("../controllers/reportController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, generateReport);

module.exports = router;
