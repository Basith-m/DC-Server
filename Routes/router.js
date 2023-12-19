const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const router = new express.Router()

//get all Product
router.get('/products/all',productController.getAllProductsController)
// register
router.post('/user/register',userController.registerController)
// login
router.post('/user/login',userController.loginController)
module.exports = router