const express = require('express');
const brokerRoutes =  require('./brokerRoutes.js');
const swaggerRoutes =  require('./swaggerRoutes.js');

const router = express.Router();

router.use('/swagger', swaggerRoutes)
router.use('/brokers', brokerRoutes);

module.exports = router;