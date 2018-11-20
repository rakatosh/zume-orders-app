const express = require('express');
const router = express.Router();

/**
 * @swagger
 *
 * definitions:
 *   NewUser:
 *     type: object
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *   User:
 *     allOf:
 *       - $ref: '#/definitions/NewUser'
 *       - type: object
 *         required:
 *           - id
 *         properties:
 *           id:
 *             type: integer
 *             format: int64
 */

/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 */
router.get('/', function(req, res) {
    res.json([{"id": "1"}]);
});

/**
 * @swagger
 *
 * /users:
 *   post:
 *     description: Creates a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.post('/', function(req, res) {
    res.json({"id": "1"});
});

/**
 * @swagger
 *
 * /users/{userId}:
 *   get:
 *     summary: Get a user by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         required: true
 *         in: path
 *         description: The id of the user to get
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *           schema:
 *           $ref: '#/definitions/User'
 *       404:
 *          description: User with id not exist
 */
router.get('/:userId', function(req, res) {
    res.json({"id": req.param("userId")});
});

/**
 * @swagger
 *
 * /users/{userId}:
 *   delete:
 *     description: Delete user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         required: true
 *         in: path
 *         description: The id of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *          description: Delete user by id
 *       404:
 *          description: User with id not exist
 */
router.delete('/:userId', function(req, res) {
    res.status(204).send();
});

module.exports = router;
