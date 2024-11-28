

const express = require('express')
const connectToDB = require('./config/db');
connectToDB();

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send({message:'success'})
})

app.listen(5000, () =>{
    console.log('server is running on port - 5000')
})