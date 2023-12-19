require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')

const dc_Server = express()
dc_Server.use(cors())
dc_Server.use(express.json())
dc_Server.use(routes)
const PORT = 3000 || process.env.PORT

dc_Server.listen(PORT,()=>{
    console.log(`Daily Cart Server started at port ${PORT} an waiting for request...`);
})

dc_Server.get('/',(req,res)=>{
    res.send(`<h2>Daily Cart Server started ... and Waitng for request</h2>`)
})