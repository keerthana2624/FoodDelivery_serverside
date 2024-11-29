const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    restaurantId: { type: String, required: true },  // Reference to restaurant
    itemName: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },  // Optional: URL for an image of the item
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
