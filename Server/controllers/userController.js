const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


// Register a new user
exports.register = async (req, res) => {
    try {
        const { fullname , username, email,  phone, password } = req.body;

        const hashPass = await bcrypt.hash(password,10)

        const user = new User({ fullname ,username, email, phone, password: hashPass });

        await user.save();

        res.status(201).json({message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: `Validation error: ${error.message}` });
    }
};

// Login user
exports.login = async (req, res) => { 
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id , role: user.role , username: user.username}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({
            message: 'Login successful',token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get the authenticated user's profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json({
            id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
            role: user.role,
            data: user.data,
            coursesEnrolled: user.coursesEnrolled,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update the authenticated user's profile
// exports.updateProfile = async (req, res) => {
//     try {
//         const { fullName, bio, avatarUrl } = req.body;

//         const user = await User.findByIdAndUpdate(
//             req.user.id,
//             {
//                 'data.fullName': fullName,
//                 'data.bio': bio,
//                 'data.avatarUrl': avatarUrl,
//                 updatedAt: Date.now()
//             },
//             { new: true }
//         );

//         res.status(200).json({
//             message: 'Profile updated successfully',
//             user: {
//                 id: user._id,
//                 username: user.username,
//                 email: user.email,
//                 role: user.role,
//                 data: user.data,
//             }
//         });
//     } catch (error) {
//         res.status(400).json({ message: `Validation error: ${error.message}` });
//     }
// };

// Get another user's profile by ID
// exports.getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id)
//             .populate('coursesCreated', 'title');

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json({
//             id: user._id,
//             username: user.username,
//             email: user.email,
//             role: user.role,
//             data: user.data,
//             coursesEnrolled: user.coursesEnrolled,
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


