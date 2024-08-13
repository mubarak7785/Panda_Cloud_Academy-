// controllers/quizController.js

const Quiz = require('../models/Quiz');
const Module = require('../models/Module'); // Assuming you have a Module model
const Question = require('../models/Question'); // Assuming you have a Question model

// Create a new quiz
exports.createQuiz = async (req, res) => {
    try {
        const { title, questions } = req.body;
        const moduleId = req.params.moduleId;

        // Check if the module exists
        const module = await Module.findById(moduleId);
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }

        // Create and save the new quiz
        const quiz = new Quiz({
            title,
            module: moduleId,
            questions
        });
        await quiz.save();

        res.status(201).json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Retrieve a list of quizzes for a specific module
exports.getQuizzesByModule = async (req, res) => {
    try {
        const moduleId = req.params.moduleId;
        const quizzes = await Quiz.find({ module: moduleId }).populate('questions');
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Retrieve details of a specific quiz
exports.getQuizById = async (req, res) => {
    try {
        const quizId = req.params.id;
        const quiz = await Quiz.findById(quizId).populate('questions');
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a specific quiz
exports.updateQuiz = async (req, res) => {
    try {
        const quizId = req.params.id;
        const { title, questions } = req.body;

        const quiz = await Quiz.findByIdAndUpdate(quizId, { title, questions, updatedAt: Date.now() }, { new: true });
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a specific quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const quizId = req.params.id;
        const quiz = await Quiz.findByIdAndDelete(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
