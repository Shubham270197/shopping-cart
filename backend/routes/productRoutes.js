const express = require('express');
const router = express.Router();

const { getAllProductById, getAllProducts} = require('../controller/productController')

//@desc GET all products from database
//@route GET /api/products
//@access Public

router.get('/', getAllProducts);

//@desc GET a products by id from database
//@route GET /api/products
//@access Public

router.get('/:id', getAllProductById);

module.exports = router;