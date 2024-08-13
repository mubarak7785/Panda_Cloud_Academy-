const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const User = require('../models/User');

// POST /api/courses/:courseId/enroll
exports.enrollInCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.user._id; // Assumes user ID is available via auth middleware

        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        const existingEnrollment = await Enrollment.findOne({ user: userId, course: courseId });
        if (existingEnrollment) return res.status(400).json({ message: 'Already enrolled in this course' });

        const enrollment = new Enrollment({ user: userId, course: courseId });
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /api/users/me/enrollments
exports.getUserEnrollments = async (req, res) => {
    try {
        const userId = req.user._id; // Assumes user ID is available via auth middleware

        const enrollments = await Enrollment.find({ user: userId }).populate('course');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /api/enrollments/:id
exports.getEnrollmentById = async (req, res) => {
    try {
        const enrollmentId = req.params.id;

        const enrollment = await Enrollment.findById(enrollmentId).populate('course');
        if (!enrollment) return res.status(404).json({ message: 'Enrollment not found' });

        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
