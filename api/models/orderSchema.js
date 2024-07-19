const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    dateOfAppointment: { type: Date, required: true },
    timeOfAppointment: { type: String, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
