const Product = require("../models/productModel.js")
const { validationResult } = require('express-validator')

//Format error message validation in request
const formatValidationResult = validationResult.withDefaults({
    formatter: error => error.msg,
});

//controller to get all product
exports.getAllProduct = async(req,res,next) => {
    try{
        const products = await Product.findAll()
        if(products){
            res.status(200).json({
                message: 'Success retrieve all product',
                data: products
            })
        }
    } catch(err){
        next(err)
    }
}

//controller to get a product by id
exports.getProductById = async(req,res,next) => {
    try{
        //validation req
        const error = formatValidationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            })
        }

        const id = req.params.id
        const product = await Product.findByPk(id)

        if(product){
            res.status(200).json({
                message: 'Success retrieve product',
                data: product
            })
        } else{
            res.status(404).json({
                message: `Product not found`
            })
        }
    }catch(err){
        next(err)
    }
}

//controller post product
exports.createProduct = async (req,res,next) => {
    try{
        //validation body request
        const error = formatValidationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            })
        }

        const data = req.body
        const product = await Product.create(data)

        if(product){
            res.status(200).json({
                message: 'Product success created',
                data: product
            })
        } else{
            res.status(500).json({
                message: 'Error while created product'
            })
        }
    }catch(err){
        next(err)
    }
}

//controller put product
exports.updateProductById = async(req,res,next) => {
    try{
        //validation body request when update product
        const error = formatValidationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            })
        }

        const product = await Product.findByPk(req.params.id)
        const data = req.body

        if(product){
            product.title = data.title || product.title,
            product.description = data.description || product.description,
            product.price = data.price || product.price

            const result = await product.save()
            if(result){
                res.status(200).json({
                    message: 'Product updated',
                    data: result
                })
            } else{
                res.status(500).json({
                    message: 'Internal error'
                })
            }
        } else{
            res.status(404).json({
                message: 'Product not found. Update product failed'
            })
        }
    } catch(err){
        next(err)
    }
}

//controller delete a product based on Id
exports.deleteProductById = async(req,res,next) => {
    try{
        //validation
        const error = formatValidationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            })
        }

        const product = await Product.findByPk(req.params.id)

        if(product){
            await product.destroy()
            res.status(200).json({
                message: 'Product deleted',
            })
        } else{
            res.status(404).json({
                message: 'Product not found. Delete product failed'
            })
        }
    } catch(err) {
        next(err)
    }
}

//controller to delete all product
exports.deleteAllProduct = async(req,res,next) => {
    try{
        await Product.destroy()
        res.status(200).json({
            message: 'All product deleted'
        })
    } catch(err) {
        next(err)
    }
}