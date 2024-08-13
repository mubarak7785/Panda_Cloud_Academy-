const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    courseIcon:{ type: String, required: true },
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
    price: { type: Number},
    batchNumber: { type: Number ,required: true  },
    batchStartDate:{ type: Date , required: true }
},{
    timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);
