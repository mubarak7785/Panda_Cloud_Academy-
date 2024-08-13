/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the course
 *         title:
 *           type: string
 *           description: The title of the course
 *         description:
 *           type: string
 *           description: The description of the course
 *         courseIcon:
 *           type: string
 *           description: URL of the course icon
 *         modules:
 *           type: array
 *           items:
 *             type: string
 *           description: List of module IDs
 *         price:
 *           type: number
 *           description: Price of the course
 *         batchNumber:
 *           type: integer
 *           description: Batch number of the course
 *         batchStartDate:
 *           type: string
 *           format: date
 *           description: Start date of the batch
 *       required:
 *         - title
 *         - description
 *         - price
 *         - batchNumber
 *         - batchStartDate
 */