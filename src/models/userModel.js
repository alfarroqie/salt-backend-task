const Sequelize = require('sequelize')
const db = require("../config/dbConfig")

const User = db.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    // password: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },s
})

module.exports = User