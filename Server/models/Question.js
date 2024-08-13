const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
    options: [{
        text: { type: String, required: true },
        isCorrect: { type: Boolean, required: true }
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Question', QuestionSchema);