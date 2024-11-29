const express = require('express');
const restaurantController = require('../controllers/RestaurantController');
const router = express.Router();

// Register a new restaurant
router.post('/register', restaurantController.registerRestaurant);

// Get a restaurant by ID (using URL parameter)
router.get('/:id', restaurantController.getRestaurantById); // GET request for fetching a restaurant by ID

module.exports = router;
