const { body, param } = require('express-validator')

const formatParameterProduct = param('id', 'id harus berformat uuidv4').isUUID(4)

//validator for product
exports.createProduct = [
    body('title', 'title tidak boleh kosong').exists().isString(),
    body('description', 'description tidak boleh kosong').exists().isString(),
    body('price', 'price harus lebih besar dari 0').exists().isInt({gt:0})
]

exports.updateproduct = [
    body('price', 'price harus lebih besar dari 0').isInt({gt:0}),
    formatParameterProduct
]

exports.getProductById = [
    formatParameterProduct
]

exports.deleteProduct = [
    formatParameterProduct
]

//validator for user
exports.createUser = [
    body('username', 'username tidak boleh kosong').exists().isString(),
]
exports.getUserByUsername = [
    param('username', 'username harus berupa string').isString()
]

exports.addProductLike = [
    body('idProduct', 'idProduct tidak boleh kosong').exists().isUUID(4),
    param('username', 'username harus berupa string').isString()
]
