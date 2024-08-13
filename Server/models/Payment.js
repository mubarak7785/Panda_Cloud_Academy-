const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], required: true },
    transactionId: { type: String, required: true },
    paymentDate: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Payment', PaymentSchema);