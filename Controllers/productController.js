const products = require('../Models/productsModel')

exports.getAllProductsController = async (req, res) => {
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}