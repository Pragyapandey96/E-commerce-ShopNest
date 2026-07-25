const express = require("express");
const paymentController = require("../controllers/paymentController");
const router = express.Router();
const { createOrder, verifyPayment } = paymentController;


router.post("/order", paymentController.createOrder);
router.post("/verify", paymentController.verifyPayment);

module.exports = router;