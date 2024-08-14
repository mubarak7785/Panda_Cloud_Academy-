const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const { authenticateInstructor } = require('../middleware/auth'); // Assuming you have authentication middleware

// Create a new question within a specific quiz
router.post('/quizzes/:quizId/questions', authenticateInstructor, questionController.createQuestion);

// Retrieve a list of questions for a specific quiz
router.get('/quizzes/:quizId/questions', questionController.getQuestionsByQuiz);

// Retrieve details of a specific question
router.get('/questions/:id', questionController.getQuestionById);

// Update a specific question
router.put('/questions/:id', authenticateInstructor, questionController.updateQuestion);

// Delete a specific question
router.delete('/questions/:id', authenticateInstructor, questionController.deleteQuestion);

module.exports = router;
