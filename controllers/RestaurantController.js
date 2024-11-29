const Restaurant = require('../models/restaurantModel');

exports.registerRestaurant = async (req, res) => {
    try {
        const { id, name, address, contactInfo, rating } = req.body;
        const newRestaurant = new Restaurant({ id, name, address, contactInfo, rating });
        await newRestaurant.save();

        res.status(201).json({
            message: 'Restaurant registered successfully!',
            restaurant: newRestaurant
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to register restaurant', error: error.message });
    }
};

exports.getRestaurantById = async (req, res) => {
    try {
        const { id } = req.body;
        const restaurant = await Restaurant.findOne({ id });

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve restaurant', error: error.message });
    }
};
