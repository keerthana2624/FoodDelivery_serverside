const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    contactInfo: { type: String },
    rating: { type: Number, default: 0 },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema); // Model name 'Restaurant' for consistency
module.exports = Restaurant;
