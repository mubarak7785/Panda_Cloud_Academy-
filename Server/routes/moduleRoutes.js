const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

// Route to get all modules
/**
 * @swagger
 * tags:
 *   name: Modules
 *   description: API endpoints for managing modules
 */

/**
 * @swagger
 * /modules:
 *   get:
 *     tags: [Modules]
 *     summary: Retrieve all modules
 *     responses:
 *       200:
 *         description: List of modules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Module'
 *       500:
 *         description: Server error
 */
router.get('/modules', moduleController.getAllModules);

// Route to get a specific module by ID
/**
 * @swagger
 * /modules/{id}:
 *   get:
 *     tags: [Modules]
 *     summary: Retrieve a module by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Module ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Module details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       404:
 *         description: Module not found
 *       500:
 *         description: Server error
 */
router.get('/modules/:id', moduleController.getModuleById);

// Route to create a new module
/**
 * @swagger
 * /modules:
 *   post:
 *     tags: [Modules]
 *     summary: Create a new module
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       201:
 *         description: Module created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/modules', moduleController.createModule);

// Route to update a module by ID
/**
 * @swagger
 * /modules/{id}:
 *   put:
 *     tags: [Modules]
 *     summary: Update a module by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Module ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       200:
 *         description: Module updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       404:
 *         description: Module not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put('/modules/:id', moduleController.updateModule);

// Route to delete a module by ID
/**
 * @swagger
 * /modules/{id}:
 *   delete:
 *     tags: [Modules]
 *     summary: Delete a module by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Module ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Module deleted successfully
 *       404:
 *         description: Module not found
 *       500:
 *         description: Server error
 */
router.delete('/modules/:id', moduleController.deleteModule);

module.exports = router;