// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authenticateStudent } = require('../middleware/auth'); // Assuming you have authentication middleware

// Submit a review for a specific course
router.post('/courses/:courseId/reviews', authenticateStudent, reviewController.createReview);

// Retrieve a list of reviews for a specific course
router.get('/courses/:courseId/reviews', reviewController.getReviewsByCourse);

// Retrieve details of a specific review
router.get('/reviews/:id', reviewController.getReviewById);

// Update a specific review
router.put('/reviews/:id', authenticateStudent, reviewController.updateReview);

// Delete a specific review
router.delete('/reviews/:id', authenticateStudent, reviewController.deleteReview);

module.exports = router;
