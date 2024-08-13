/**
 * @swagger
 * components:
 *   schemas:
 *     Module:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the module
 *         title:
 *           type: string
 *           description: Title of the module
 *         content:
 *           type: string
 *           description: Content of the module
 *         course:
 *           type: string
 *           description: ID of the associated course
 *         order:
 *           type: integer
 *           description: Order of the module in the course
 *         videoUrl:
 *           type: string
 *           description: URL of the video associated with the module
 *         resources:
 *           type: array
 *           items:
 *             type: string
 *           description: List of resource URLs
 *         quizzes:
 *           type: array
 *           items:
 *             type: string
 *           description: List of quiz IDs associated with the module
 *       required:
 *         - title
 *         - content
 *         - course
 *         - order
 */