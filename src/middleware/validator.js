const { body, param } = require('express-validator')

//validator body request for post product
exports.createProduct = [
    body('title', 'title tidak boleh kosong').exists(),
    body('description', 'description tidak boleh kosong').exists(),
    body('price', 'price harus lebih besar dari 0').isInt({gt:0})
]

//validator body request for update product
exports.updateproduct = [
    body('price', 'price harus lebih besar dari 0').isInt({gt:0})
]

exports.createUser = [
    body('username', 'username tidak boleh kosong').exists(),
]

exports.addProductLike = [
    body('idProduct', 'idProduct tidak boleh kosong').exists(),
]
