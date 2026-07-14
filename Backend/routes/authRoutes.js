const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUsers } = require("../controllers/authController.js");
const { protect } = require('../middleware/auth.Middleware.js');
const { admin } = require('../middleware/admin.Middleware.js');



router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", protect, admin, getUsers);
// router.post("verify-email", async (req, res) => {
//     const { email } = req.body;
// })

module.exports = router;