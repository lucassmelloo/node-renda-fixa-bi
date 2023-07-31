import express from  'express';
import brokerRoutes from './brokerRoutes.js'

const router = express.Router();

router.use('/brokers', brokerRoutes);

export default router;