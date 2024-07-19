const mongoose = require('mongoose');

const phleboSchema = new mongoose.Schema({
    phleboId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    city: { type: String, required: true },
    pinCode: { type: String, required: true },
    collectionArea: { type: String, required: true }
});

const Phlebo = mongoose.model('Phlebo', phleboSchema);

module.exports = Phlebo;
