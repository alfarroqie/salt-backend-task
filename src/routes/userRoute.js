const express = require('express')
const router =  express.Router()

const userController = require("../controllers/userController.js")
const validator = require('../middleware/validator')

// create user
router.post('/create',validator.createUser, userController.createUser)

// add product likes for user
router.post('/:username/add-product-likes',validator.addProductLike, userController.addProductLikes)

// get user's product likes
router.get('/', userController.getAllUser)
router.get('/:username', validator.getUserByUsername,userController.getUserWithProductLikes)

module.exports = router



