const express = require("express");
const { protect } = require("../middleware/auth.Middleware");
const { admin } = require("../middleware/admin.Middleware");
const { getAdminStats } = require("../controllers/analyticsController");

const router = express.Router();

router.get("/", protect, admin, getAdminStats);

module.exports = router;
