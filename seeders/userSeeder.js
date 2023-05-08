'use strict'

const { Op } = require("sequelize");

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Users', [
            {username: 'chofief', createdAt: new Date(), updatedAt: new Date()},
            {username: 'al', createdAt: new Date(), updatedAt: new Date()},
            {username: 'farroqie', createdAt: new Date(), updatedAt: new Date()},
            {username: 'ariestotles', createdAt: new Date(), updatedAt: new Date()},
            {username: 'endamara', createdAt: new Date(), updatedAt: new Date()},
        ])
    },
    down: async(queryInterface) => {
        await queryInterface.bulkDelete('Users', {
            username: {[Op.in]: [
                'chofief',
                'al',
                'farroqie',
                'ariestotles',
                'endamara'
            ]}
        }, {})
    }
  };