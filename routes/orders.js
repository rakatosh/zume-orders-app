const express = require('express');
const router  = express.Router();

/**
 * @swagger
 *
 * definitions:
 *   NewOrder:
 *     type: object
 *     required:
 *       - date
 *     properties:
 *       date:
 *         type: string
 *   Order:
 *     allOf:
 *       - $ref: '#/definitions/NewOrder'
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
 * /orders:
 *   get:
 *     description: Returns orders
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: orders
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Order'
 */
router.get('/', function(req, res) {
    res.json([{"id": "1"}]);
});

/**
 * @swagger
 *
 * /orders:
 *   post:
 *     description: Creates a order
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: Order object
 *         in:  body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/NewOrder'
 *     responses:
 *       200:
 *         description: order
 *         schema:
 *           $ref: '#/definitions/Order'
 */
router.post('/', function(req, res) {
    res.json({"id": "1"});
});

/**
 * @swagger
 *
 * /orders/{orderId}:
 *   get:
 *     summary: Get a order by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: orderId
 *         required: true
 *         in: path
 *         description: The id of the order to get
 *         type: string
 *     responses:
 *       200:
 *         description: A single order.
 *         schema:
 *           s$ref: '#/definitions/Order'
 *       404:
 *        description: Order with id not exist
 */
router.get('/:orderId', function(req, res) {
    res.json({"id": req.params.orderId});
});

/**
 * @swagger
 *
 * /orders/{orderId}:
 *   delete:
 *     description: Delete order by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: The id of the order to delete
 *         type: string
 *     responses:
 *       204:
 *         description: Delete order by id
 *       404:
 *         description: Order with id not exist
 */

router.delete('/:orderId', function(req, res) {
    res.status(204).send();
});

module.exports = router;
