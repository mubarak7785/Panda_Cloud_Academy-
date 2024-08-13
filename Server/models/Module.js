const mongoose = require("mongoose")

const ModuleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    order: { type: Number, required: true },
    videoUrl: { type: String },
    resources: [{ type: String }],
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
},
{
    timestamps: true
});


module.exports = mongoose.model('Module', ModuleSchema);