const Course = require('../models/Course');
const Module = require('../models/Module');
const User = require('../models/User');

// Create a new course
exports.createCourse = async (req, res) => {
    try {
        const { title, description,courseIcon,price,batchNumber,batchStartDate,modules } = req.body;

        const course = new Course({
            title,
            description,
            courseIcon,
            price,
            batchNumber,
            batchStartDate,
            modules
        });

        await course.save();

        res.status(201).json({
            message: 'Course created successfully',
            course
        });
    } catch (error) {
        res.status(400).json({ message: `Validation error: ${error.message}` });
    }
};

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate("modules")
    
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
      
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a course by ID (Instructor only)
exports.updateCourse = async (req, res) => {
    try {
        const { title, description,courseIcon,price,batchNumber,batchStartDate,modules } = req.body;

        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.title = title || course.title;
        course.description = description || course.description;

        await course.save();

        res.status(200).json({
            message: 'Course updated successfully',
            course
        });
    } catch (error) {
        res.status(400).json({ message: `Validation error: ${error.message}` });
    }
};

// Delete a course by ID (Instructor only)
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

