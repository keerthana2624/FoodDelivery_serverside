const express = require('express');
const menuController = require('../controllers/MenuController');
const router = express.Router();

// Register a new menu item for a specific restaurant
router.post('/register', menuController.registerMenuItem);

// Get all menu items for a specific restaurant (using restaurantId)
router.get('/:restaurantId', menuController.getMenuByRestaurantId);

module.exports = router;
