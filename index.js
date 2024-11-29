

const express = require('express')
const connectToDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/RestaurantRoutes');
const menuRoutes = require('./routes/MenuRoutes');
const app = express()

connectToDB();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes)
app.use('/api/menus', menuRoutes); 

app.get('/', (req, res)=>{
    res.status(200).send({message:'success'})
})

app.listen(5000, () =>{
    console.log('server is running on port - 5000')
})