// /**
//  * @swagger
//  * components:
//  *   securitySchemes:
//  *     BearerAuth:
//  *       type: http
//  *       scheme: bearer
//  *       bearerFormat: JWT
//  *       description: JWT Bearer Token for authentication
//  */

// /**
//  * @swagger
//  * security:
//  *   - BearerAuth: []
//  */



const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',  // Make sure you are using OpenAPI 3.0
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for your application',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Bearer Token',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // Adjust the path to your routes files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {
  swaggerDocs,
  swaggerUi,
};


