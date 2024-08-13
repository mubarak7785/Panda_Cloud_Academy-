// controllers/questionController.js

const Question = require('../models/Question');
const Quiz = require('../models/Quiz'); // Assuming you have a Quiz model
const { authenticateInstructor } = require('../middleware/auth'); // Assuming you have authentication middleware

// Create a new question within a specific quiz
exports.createQuestion = async (req, res) => {
    try {
        const { text, options } = req.body;
        const quizId = req.params.quizId;

        // Check if the quiz exists
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // Create and save the new question
        const question = new Question({
            text,
            quiz: quizId,
            options
        });
        await question.save();

        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Retrieve a list of questions for a specific quiz
exports.getQuestionsByQuiz = async (req, res) => {
    try {
        const quizId = req.params.quizId;
        const questions = await Question.find({ quiz: quizId });
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Retrieve details of a specific question
exports.getQuestionById = async (req, res) => {
    try {
        const questionId = req.params.id;
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a specific question
exports.updateQuestion = async (req, res) => {
    try {
        const questionId = req.params.id;
        const { text, options } = req.body;

        // Find the question
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Update the question
        question.text = text;
        question.options = options;
        question.updatedAt = Date.now();
        await question.save();

        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a specific question
exports.deleteQuestion = async (req, res) => {
    try {
        const questionId = req.params.id;

        // Find and delete the question
        const question = await Question.findByIdAndDelete(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
