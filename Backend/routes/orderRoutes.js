const express = require("express");
const { protect } = require("../middleware/auth.Middleware");
const { admin } = require("../middleware/admin.Middleware");
const { createOrder, getOrders, myOrders, updateOrderStatus } = require("../controllers/orderController");

const router = express.Router();

router.route('/').post(product, createOrder).get(protect, admin, getOrders);
router.router('/myOrders').get(product, myOrders);
router.route('/:id/status').put(protect, admin, updateOrderStatus);

module.exports = router;