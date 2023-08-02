const express = require('express');
const brokerRoutes =  require('./BrokerRoutes.js');

const router = express.Router();

router.use('/brokers', brokerRoutes);

module.exports = router;