const User = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        // Retrieve the data from req body
        const { name, email, password, address } = req.body;

        // Validate required fields
        if (!name || !email || !password || !address) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new user instance
        const newUser = new User({
            name,
            email,
            password,
            address
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Send back a success response
        res.status(201).json({
            message: 'User registered successfully!',
            user: savedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while registering the user.',
            error: error.message
        });
    }
};
