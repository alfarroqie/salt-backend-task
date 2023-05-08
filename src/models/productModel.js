const Sequelize = require('sequelize')
const db = require("../config/dbConfig")
const uuid = require('uuid')

const Product = db.define('Product', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
        // autoIncrement:true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Product