const Sequelize = require('sequelize')
require('dotenv').config()

//Setting connection to database
const sequelize = new Sequelize(
    `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DBNAME}`
)

module.exports = sequelize