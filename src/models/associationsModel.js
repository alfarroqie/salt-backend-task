const Product = require('./productModel')
const User = require('./userModel')


const setAssociations = () => {
    User.belongsToMany(Product, {
        through: 'LikeProduct',
        as: 'likes',
        foreignKey:'username'
    })
    Product.belongsToMany(User, {
        through: 'LikeProduct',
        as: 'likes',
        foreignKey:'id'
    })
}

module.exports = setAssociations