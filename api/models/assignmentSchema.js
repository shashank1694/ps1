const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    phleboId: { type: String, required: true },
    orderId: { type: String, required: true },
    collectionAssignedStatus: { type: String, enum: ['Pending', 'Done'], default: 'Pending' },
    collectionRealStatus: { type: String, enum: ['Pending', 'Done'], default: 'Pending' },
    collectionDate: { type: Date }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
