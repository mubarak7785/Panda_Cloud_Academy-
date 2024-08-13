const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'admin'], default: "student" },
    data: {
        bio: { type: String },
        avatarUrl: { type: String }
    },
    coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],

},{
    timestamps: true
});


module.exports = mongoose.model('User', UserSchema);
