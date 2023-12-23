const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')
const router = new express.Router()

//get all Product
router.get('/products/all',productController.getAllProductsController)
// register
router.post('/user/register',userController.registerController)
// login
router.post('/user/login',userController.loginController)
// get a product
router.get('/products/get/:id',productController.getProductController)
// add to wishlist
router.post('/wishlist/add',jwtMiddleware,wishlistController.addToWishlistController)
// get wishlist
router.get('/wishlist/get',jwtMiddleware,wishlistController.getWishlistController)
module.exports = router