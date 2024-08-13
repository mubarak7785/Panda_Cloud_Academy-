const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerOptions'); // Path to your swaggerOptions.js

const router = express.Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;