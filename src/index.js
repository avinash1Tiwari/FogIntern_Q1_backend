const express = require('express')

const {ServerConfig} = require('./config')

const cors = require('cors')

const app = express()


const bodyParser = require('body-parser')

const multiplayerRoutes = require('./routes/playerRoutes')


// middleware
app.use(bodyParser.json())





console.log("api")


app.use('/multiplayer/serverinfo',multiplayerRoutes)


app.listen(ServerConfig.PORT,(req,res) => {
    console.log(`Successfully started the server at : ${ServerConfig.PORT}`)
})
