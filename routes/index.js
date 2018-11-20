const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        info: {
            title: 'Zume orders app', // Title (required)
            version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./routes/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerDocument = swaggerJSDoc(options);


/**
 * @swagger
 *
 * /:
 *   get:
 *     description: Welcome page
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *          description: Welcome message
 */
router.get('/', function(req, res) {
    console.log(process.env);
    res.send(`Welcome! This is home page. Host name ${process.env.HOSTNAME}`);
});

router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use('/api-docs', swaggerUi.serve);

module.exports = router;
