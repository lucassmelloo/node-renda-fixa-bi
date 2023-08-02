const express = require('express');
const BrokerController = require('../controllers/BrokersController.js');

const router = express.Router();

router.get('/', BrokerController.list);

router.get('/:id', BrokerController.get);

router.post('/',BrokerController.create);

router.put('/:id',BrokerController.edit);

router.delete('/:id', BrokerController.delete);

module.exports = router;
 