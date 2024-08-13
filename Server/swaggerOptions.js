const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // OpenAPI 3.0 specification
        info: {
            title: 'Online Course Platform API',
            version: '1.0.0',
            description: 'API documentation for the Online Course Platform'
        },
        servers: [
            {
                url: 'http://localhost:8080', // Replace with your server URL
                description: 'Local server'
            }
        ]
    },
    // Path to the API specs
    apis: ['./routes/*.js'] // Adjust this path to where your route files are
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;