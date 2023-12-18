const express = require('express')
const productController = require('../Controllers/productController')

const router = new express.Router()

//get all Product
router.get('/products/all',productController.getAllProductsController)

module.exports = router