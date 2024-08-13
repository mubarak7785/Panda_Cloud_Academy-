const mongoose = require("mongoose")

const EnrollmentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    progress: { type: Number, default: 0 },
    completed: { type: Boolean, default: false },
    enrolledAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
    source: { 
        type: String, 
        enum: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Google Search', 'Friend/Referral', 'Other'], 
        required: true 
    },
    paymentStatus: { type: Boolean, default: false }
});


module.exports = mongoose.model('Enrollment', EnrollmentSchema);