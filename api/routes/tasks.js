const express = require('express');
const router = express.Router();

const { assignOrder, markOrderCompleted, getOrders } = require('../controllers/tasks.js');

router.route('/assignOrder').get(getOrders);
router.route('/assignOrder').post(assignOrder);
router.route('/markOrderCompleted').patch(markOrderCompleted);

module.exports = router;
