const {Router} = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('../swagger.json');
const router = Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
router.get('/terms', function (req, res) { return res.status(200).json('OK')});


module.exports = router;