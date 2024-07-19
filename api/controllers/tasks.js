const mongoose = require('mongoose');
const Order = require('../models/orderSchema');
const assignmentSchema = require('../models/assignmentSchema');
const phleboSchema = require('../models/phleboSchema');
const Assignment = require('../models/assignmentSchema');

const assignOrder = async (req, res) => {
    const { orderId, phleboId } = req.body;
    try {
        const order = await Order.findOne({orderId: orderId});

        if(order){
            const phlebo = await phleboSchema.findOne({phleboId: phleboId});
            if(phlebo){
                const assignment = new assignmentSchema({
                    orderId: orderId,
                    phleboId: phleboId,
                    collectionAssignedStatus : "Done"
                });
                await assignment.save();
                res.status(200).send("Order assigned successfully");
            }
            else{
                res.status(400).send("Phlebo not found");
            }
        }
    }
    catch (error) {
        console.error("Error assigning order:", error);
        res.status(500).send("Error assigning order");
    }
}

const markOrderCompleted = async (req, res) => {
    const { orderId } = req.body;
    const collectionDate = new Date();

    try {
        const order = await Assignment.findOneAndUpdate(
            { orderId: orderId },
            { collectionRealStatus: "Done", collectionDate: collectionDate },
            { new: true, runValidators: true }
        );

        if (!order) {
            return res.status(404).send("Order not found");
        }

        res.status(200).send("Order marked completed successfully");
    } catch (error) {
        console.error("Error marking order completed:", error);
        res.status(500).send("Error marking order completed");
    }
};



const getOrders = async (req,res) => {
    try{
        const orders = await Order.find({});
        res.status(200).send(orders);
    }
    catch{
        console.error("Error getting orders:", error);
    }
}


module.exports = { assignOrder, markOrderCompleted, getOrders };