const Review = require('../models/Review');
const Course = require('../models/Course'); // Assuming you have a Course model
const User = require('../models/User'); // Assuming you have a User model

// Submit a review for a specific course
exports.createReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const courseId = req.params.courseId;
        const studentId = req.user._id; // Assuming req.user contains the logged-in user's information

        // Check if the course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Create and save the new review
        const review = new Review({
            student: studentId,
            course: courseId,
            rating,
            comment
        });
        await review.save();

        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Retrieve a list of reviews for a specific course
exports.getReviewsByCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const reviews = await Review.find({ course: courseId }).populate('student');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Retrieve details of a specific review
exports.getReviewById = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const review = await Review.findById(reviewId).populate('student');
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a specific review
exports.updateReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const { rating, comment } = req.body;
        const studentId = req.user._id; // Assuming req.user contains the logged-in user's information

        // Find the review and check if the student is the author
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        if (!review.student.equals(studentId)) {
            return res.status(403).json({ message: 'Not authorized to update this review' });
        }

        // Update the review
        review.rating = rating;
        review.comment = comment;
        review.createdAt = Date.now();
        await review.save();

        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a specific review
exports.deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const studentId = req.user._id; // Assuming req.user contains the logged-in user's information

        // Find the review and check if the student is the author
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        if (!review.student.equals(studentId)) {
            return res.status(403).json({ message: 'Not authorized to delete this review' });
        }

        // Delete the review
        await review.remove();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
