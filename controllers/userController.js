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


exports.login = async (req, res) => {
    try {
        // Retrieve the email and password from the request body
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // If successful, respond with user details (excluding password)
        res.status(200).json({
            message: 'Login successful!',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                address: user.address
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'An error occurred while logging in.',
            error: error.message
        });
    }
};