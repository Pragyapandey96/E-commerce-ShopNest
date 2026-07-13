const express = require("express");
const { protect } = require('../middleware/auth.Middleware.js');
const { admin } = require('../middleware/admin.Middleware.js');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/productController.js");
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});


const router = express.Router();
// all products
router.route('/').get(getProducts).post(protect, admin, upload.single('image'), createProducts);
// specific product
router.route('/:id').get(getProductById).put(protect, admin, upload.single('image'), updateProduct).delete(protect, admin, deleteProduct);

module.exports = router;