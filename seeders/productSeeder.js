'use strict'

var Sequelize = require('sequelize');
const { Op } = require("sequelize");

const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Products', [
            {
                id: uuidv4(),
                title:"iPhone 9",
                description:"An apple mobile which is nothing like apple",
                price: Math.floor(Math.random() * 1000) + 1,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                id: uuidv4(),
                title:"iPhone X",
                description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                price: Math.floor(Math.random() * 1000) + 1,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                id: uuidv4(),
                title:"Samsung Universe 9",
                description:"Samsung's new variant which goes beyond Galaxy to the Universe",
                price: Math.floor(Math.random() * 1000) + 1,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                id: uuidv4(),
                title:"Huawei P30",
                description:"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK",
                price: Math.floor(Math.random() * 1000) + 1,
                createdAt: new Date(), updatedAt: new Date()
            },
            {
                id: uuidv4(),
                title:"OPPOF19",
                description:"OPPO F19 is officially announced on April 2021",
                price: Math.floor(Math.random() * 1000) + 1,
                createdAt: new Date(), updatedAt: new Date()
            },
        ])
    },
    down: async(queryInterface) => {
        await queryInterface.bulkDelete('Products', {
            title: {[Op.in]: [
                'iPhone 9',
                'iPhone X',
                'Samsung Universe 9',
                'Huawei P30',
                'OPPOF19'
            ]}
        }, {})
    }
  };