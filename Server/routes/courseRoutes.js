const express = require('express');
const courseRouter = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');


/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Manages courses, including creation, updating, and listing courses.
 */

/**
 * @swagger
 * /api/courses:
 *   get:
 *     tags: [Courses]
 *     summary: Retrieves a list of all courses
 *     description: Fetches a list of all available courses. You can optionally filter by category or level.
 *     responses:
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       500:
 *         description: Server error
 */
courseRouter.get('/courses', courseController.getCourses);


/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     tags: [Courses]
 *     summary: Retrieves details of a specific course by ID
 *     description: Fetches the details of a course by its ID, including all associated modules.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The course ID
 *     responses:
 *       200:
 *         description: Course details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseDetails'
 *       404:
 *         description: Course not found
 *       500:
 *         description: Server error
 */
courseRouter.get('/courses/:id', courseController.getCourseById);


// Protected routes

/**
 * @swagger
 * /api/courses:
 *   post:
 *     tags: [Courses]
 *     summary: Creates a new course
 *     description: Instructor-only. Creates a new course with the provided details.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Introduction to AWS"
 *                 description: "Title of the course"
 *               description:
 *                 type: string
 *                 example: "Learn the basics of AWS."
 *                 description: "A brief description of the course content"
 *               courseIcon:
 *                 type: string
 *                 example: "https://example.com/icon.png"
 *                 description: "URL of the course icon image"
 *               price:
 *                 type: number
 *                 example: 99.99
 *                 description: "Price of the course"
 *               batchNumber:
 *                 type: number
 *                 example: 1
 *                 description: "Batch number associated with the course"
 *               batchStartDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-01T00:00:00.000Z"
 *                 description: "Start date of the course batch"
 *               modules:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "60f1f5e2f1e8a3c1f8fbbde1"
 *                 description: "List of module IDs associated with the course"
 *     responses:
 *       201:
 *         description: Course created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Course created successfully"
 *               description: The newly created course details
 *       400:
 *         description: Bad request (e.g., missing required fields)
 *       401:
 *         description: Unauthorized (Instructor only)
 *       500:
 *         description: Server error
 */
courseRouter.post('/courses', authMiddleware, courseController.createCourse); // Instructor only

/**
 * @swagger
 * /api/courses/{id}:
 *   put:
 *     tags: [Courses]
 *     summary: Update a course by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Course ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
courseRouter.put('/courses/:id', authMiddleware, courseController.updateCourse); // Instructor only

/**
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     tags: [Courses]
 *     summary: Delete a course by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Course ID
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Server error
 */
courseRouter.delete('/courses/:id', authMiddleware, courseController.deleteCourse); // Instructor only


module.exports = courseRouter;







