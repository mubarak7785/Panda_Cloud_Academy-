const mongoose = require('mongoose');

const PaymentDetailsSchema = new mongoose.Schema({
    
    upiId: { type: String, required: true },
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    ifscCode: { type: String, required: true },
    qrCodeUrl: { type: String, required: true }, // URL to the QR code image
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('PaymentDetails', PaymentDetailsSchema);