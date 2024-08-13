// routes/quizRoutes.js

const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const { authenticateInstructor } = require('../middleware/auth'); // Assuming you have an authentication middleware

// Create a new quiz
router.post('/modules/:moduleId/quizzes', authenticateInstructor, quizController.createQuiz);

// Retrieve a list of quizzes for a specific module
router.get('/modules/:moduleId/quizzes', quizController.getQuizzesByModule);

// Retrieve details of a specific quiz
router.get('/quizzes/:id', quizController.getQuizById);

// Update a specific quiz
router.put('/quizzes/:id', authenticateInstructor, quizController.updateQuiz);

// Delete a specific quiz
router.delete('/quizzes/:id', authenticateInstructor, quizController.deleteQuiz);

module.exports = router;
