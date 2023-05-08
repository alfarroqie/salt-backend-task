const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const dbConfig = require("./src/config/dbConfig")
const Product = require("./src/models/productModel")
const Associations = require("./src/models/associationsModel")

const productRoute = require("./src/routes/productRoute")
const userRoute = require("./src/routes/userRoute")
const rateLimiter = require("./src/middleware/rateLimiter")

// const PORT = 5000
const app = express()

//setting about cors
const corstOptionDelegate = (req , callback ) => {
    callback(null , {
        origin : req.header('Origin'),
        credentials : true
    })
}
app.use(cors(corstOptionDelegate))

app.use(bodyParser.json());

//set default Endpoint
app.get('/', (req, res) => {
    res.send('Test')
})

//Route API Endpoint product
app.use('/product', rateLimiter, productRoute)
app.use('/user', rateLimiter, userRoute)

//set Associations in models
Associations()

//Setting connection db and server listen
dbConfig.authenticate()
    .then(() => {
        dbConfig.sync()
        console.log('Database onnection has been established successfully')
        app.listen(process.env.SERVER_PORT, () => 
            console.log(`Server listen on port ${process.env.SERVER_PORT}`)
        )
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    })
