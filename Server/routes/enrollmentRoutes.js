const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const enrollmentController = require('../controllers/enrollmentController');

// POST /api/courses/:courseId/enroll
router.post('/courses/:courseId/enroll', authMiddleware, enrollmentController.enrollInCourse);

// GET /api/users/me/enrollments
router.get('/users/me/enrollments', authMiddleware, enrollmentController.getUserEnrollments);

// GET /api/enrollments/:id
router.get('/enrollments/:id', enrollmentController.getEnrollmentById);

module.exports = router;
