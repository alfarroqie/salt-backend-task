const Product = require("../models/productModel")
const User = require("../models/userModel")

const { validationResult } = require('express-validator')

//Format error message validation in request
const formatValidationResult = validationResult.withDefaults({
    formatter: error => error.msg,
});


exports.createUser = async(req,res,next) => {
    try{
        //validation req
        const error = formatValidationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            })
        }

        let data = req.body
        const checkUsername = await User.findByPk(data.username)

        if(!checkUsername){
            console.log('yap')
            const user = await User.create(data)
            console.log(user)
            if(user){
                res.status(200).json({
                    message: 'Success create user',
                    data:user
                })
            }
        } else {
            res.status(400).json({
                message: 'Username already exist'
            })
        }
    }catch(err){
        next(err)
    }
}

exports.getAllUser = async(req,res,next) => {
    try{
        const user = await User.findAll()
        if(user){
            res.status(200).json({
                message: 'Success retrieve all user',
                data: user
            })
        } else {
            res.status(400).json({
                message: 'Error while retrive user'
            })
        }
    } catch(err){
        next(err)
    }
}

exports.addProductLikes = async(req,res,next) => {
    try{
        //validation req
        const error = formatValidationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            })
        }

        const idProduct = req.body.idProduct
        const username = req.params.username

        const user = await User.findByPk(username)
        const product = await Product.findByPk(idProduct)

        if(user && product){
            user.addLikes(product)
            res.status(200).json({
                message: `Username: ${username} succes like product: ${idProduct}`
            })
        } else {
            res.status(400).json({
                message: 'User or product not found'
            })
        }

    } catch(err){
        next(err)
    }
}

exports.getUserWithProductLikes = async(req,res,next) => {
    try{
        //validation req
        const error = formatValidationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                errors: error.array()
            })
        }
        
        const username = req.params.username
        const userLikes = await User.findByPk(username, {
            include: [
                {
                    model: Product,
                    as: "likes"
                }
            ]
        })

        if(userLikes){
            res.status(200).json({
                message: 'Success retrieve user product likes',
                data: userLikes
            })
        } else {
            res.status(404).json({
                message: 'User not founds'
            })
        }
    } catch(err){
        next(err)
    }
}