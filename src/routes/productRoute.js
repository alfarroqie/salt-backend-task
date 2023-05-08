const express = require('express')
const router =  express.Router()

const productController = require("../controllers/productController")
const validator = require('../middleware/validator')

// //create product
router.post('/create',validator.createProduct,productController.createProduct)

// //read product
router.get('/',productController.getAllProduct)
router.get('/:id',validator.getProductById, productController.getProductById)

// //update product
router.put('/update/:id',validator.updateproduct, productController.updateProductById)

// //delete product
router.delete('/delete-all')
router.delete('/delete/:id', validator.deleteProduct, productController.deleteProductById)


module.exports = router