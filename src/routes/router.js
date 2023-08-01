import express from  'express';
import BrokerRoutes from './BrokerRoutes.js'

const router = express.Router();

router.use('/brokers', BrokerRoutes);

export default router;