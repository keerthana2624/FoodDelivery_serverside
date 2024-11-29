const Menu = require('../models/MenuModel');

// Register a new menu item for a restaurant
exports.registerMenuItem = async (req, res) => {
    try {
        const { restaurantId, itemName, description, price, image } = req.body;

        const newMenuItem = new Menu({
            restaurantId,
            itemName,
            description,
            price,
            image
        });

        await newMenuItem.save();

        res.status(201).json({
            message: 'Menu item registered successfully!',
            menuItem: newMenuItem
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to register menu item', error: error.message });
    }
};

// Get all menu items for a specific restaurant
exports.getMenuByRestaurantId = async (req, res) => {
    try {
        const { restaurantId } = req.params; // Get restaurantId from URL params
        const menuItems = await Menu.find({ restaurantId });

        if (!menuItems.length) {
            return res.status(404).json({ message: 'No menu items found for this restaurant' });
        }

        res.status(200).json({ menuItems });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve menu items', error: error.message });
    }
};
