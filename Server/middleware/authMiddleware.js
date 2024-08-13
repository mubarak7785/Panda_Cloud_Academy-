const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();


// middleware/authMiddleware.js

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader)

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      req.user = user;
      next(); // Proceed to the next middleware or route handler
    });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;
