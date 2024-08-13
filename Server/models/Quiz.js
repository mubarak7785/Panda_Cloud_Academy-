const mongoose = require('mongoose');


const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Quiz', QuizSchema);